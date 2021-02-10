<?php

namespace App\Entity;

use App\Repository\PortfolioRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=PortfolioRepository::class)
 */
class Portfolio
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToMany(targetEntity=Crypto::class, inversedBy="portfolios")
     */
    private $pairName;

    /**
     * @ORM\Column(type="float")
     */
    private $actualQuantity;

    /**
     * @ORM\Column(type="float")
     */
    private $averagePrice;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="idPortfolio")
     * @ORM\JoinColumn(nullable=false)
     */
    private $user;

    public function __construct()
    {
        $this->pairName = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return Collection|Crypto[]
     */
    public function getPairName(): Collection
    {
        return $this->pairName;
    }

    public function addPairName(Crypto $pairName): self
    {
        if (!$this->pairName->contains($pairName)) {
            $this->pairName[] = $pairName;
        }

        return $this;
    }

    public function removePairName(Crypto $pairName): self
    {
        $this->pairName->removeElement($pairName);

        return $this;
    }

    public function getActualQuantity(): ?float
    {
        return $this->actualQuantity;
    }

    public function setActualQuantity(float $actualQuantity): self
    {
        $this->actualQuantity = $actualQuantity;

        return $this;
    }

    public function getAveragePrice(): ?float
    {
        return $this->averagePrice;
    }

    public function setAveragePrice(float $averagePrice): self
    {
        $this->averagePrice = $averagePrice;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }
}
