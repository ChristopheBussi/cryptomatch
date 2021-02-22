<?php


namespace App\Classes;


use App\Entity\Crypto;
use App\Entity\Portfolio;
use App\Entity\User;

class CheckOrder
{
    private $PairName;
    private $Quantity;
    private $OrderType;
    private $Quotation;
    private $Em;
    private $TotalPrice;
    private $User;

    public function __construct($Em, $Quantity, $OrderType, $Quotation, $User, $PairName)
    {
        $this->Em = $Em;
        $this->PairName = $PairName;
        $this->OrderType = $OrderType;
        $this->Quantity = $Quantity;
        $this->Quotation = $Quotation;
        $this->User = $User;

        //Total de l'opération, le prix de la crypto multiplié par la quantité qu'il a acheté..
        $this->TotalPrice = $this->Quotation * $this->Quantity;

    }

    //Return false if order is not valid.. true if order is valid..
    public function OrderIsValid()
    {
        $Response = array(
        'value' => true,
            'message' => "L'ordre à bien été enregistré."
        );


        //Check if Quotation is Double..
        //if(!is_double($this->Quotation) )
        //{
           // $Response = array(
                //'value' => false,
               // 'message' => 'Invalid Order'
            //);
        //}

        switch($this->OrderType)
        {
            //If it's purchase, we check if he has enough money to buy
            case 'Buy' :
            {
                $RepUser = $this->Em->getRepository(User::class);
                $User = $RepUser->findOneBy( ['username' => $this->User->getUsername() ] );

                if($this->TotalPrice > $User->getUSDAmount())
                {
                    $Response = array(
                        'value' => false,
                        'message' => 'Fonds insuffisants'
                    );
                }

            }break;

            case 'Sell' :
            {
                $RepPortfolio = $this->Em->getRepository(Portfolio::class);
                $Port = $RepPortfolio->findOneBy(['user' => $this->User, 'cryptoname' => $this->PairName]);

                if(!$Port)//Si il souhaite vendre alors qu'il ne possède aucune quantité..
                {
                    $Response = array(
                        'value' => false,
                        'message' => 'Vous ne pouvez pas vendre cette cryptomonnaie.'
                    );
                }
                //Si la quantité qu'il vend est supérieure à la quantité qu'il possède
                else if($this->Quantity > $Port->getActualQuantity())

                {
                    $Response = array(
                        'value' => false,
                        'message' => 'Vous ne détenez pas assez de quantité de cette cryptomonnaie.'
                    );
                }

            }break;
        }

        return $Response;
    }

}