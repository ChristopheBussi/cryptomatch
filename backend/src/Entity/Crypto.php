<?php

namespace App\Entity;

use App\Repository\CryptoRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=CryptoRepository::class)
 */
class Crypto
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $pairName;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $imageUrl;

    /**
     * @ORM\ManyToMany(targetEntity=Portfolio::class, mappedBy="pairName")
     */
    private $portfolios;

    /**
     * @ORM\OneToMany(targetEntity=Order::class, mappedBy="crypto")
     */
    private $orders;

    public function __construct()
    {
        $this->portfolios = new ArrayCollection();
        $this->orders = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPairName(): ?string
    {
        return $this->pairName;
    }

    public function setPairName(string $pairName): self
    {
        $this->pairName = $pairName;

        return $this;
    }

    public function getImageUrl(): ?string
    {
        return $this->imageUrl;
    }

    public function setImageUrl(?string $imageUrl): self
    {
        $this->imageUrl = $imageUrl;

        return $this;
    }

    /**
     * @return Collection|Portfolio[]
     */
    public function getPortfolios(): Collection
    {
        return $this->portfolios;
    }

    public function addPortfolio(Portfolio $portfolio): self
    {
        if (!$this->portfolios->contains($portfolio)) {
            $this->portfolios[] = $portfolio;
            $portfolio->addPairName($this);
        }

        return $this;
    }

    public function removePortfolio(Portfolio $portfolio): self
    {
        if ($this->portfolios->removeElement($portfolio)) {
            $portfolio->removePairName($this);
        }

        return $this;
    }

    /**
     * @return Collection|Order[]
     */
    public function getOrders(): Collection
    {
        return $this->orders;
    }

    public function addOrder(Order $order): self
    {
        if (!$this->orders->contains($order)) {
            $this->orders[] = $order;
            $order->setCrypto($this);
        }

        return $this;
    }

    public function removeOrder(Order $order): self
    {
        if ($this->orders->removeElement($order)) {
            // set the owning side to null (unless already changed)
            if ($order->getCrypto() === $this) {
                $order->setCrypto(null);
            }
        }

        return $this;
    }
}
