<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=UserRepository::class)
 */
class User
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
    private $username;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $email;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $password;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="float")
     */
    private $USDAmount;

    /**
     * @ORM\Column(type="float")
     */
    private $rankValorisationAmount;

    /**
     * @ORM\OneToMany(targetEntity=Portfolio::class, mappedBy="user")
     */
    private $idPortfolio;

    /**
     * @ORM\OneToMany(targetEntity=Order::class, mappedBy="user")
     */
    private $orders;

    public function __construct()
    {
        $this->idPortfolio = new ArrayCollection();
        $this->orders = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUsername(): ?string
    {
        return $this->username;
    }

    public function setUsername(string $username): self
    {
        $this->username = $username;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUSDAmount(): ?float
    {
        return $this->USDAmount;
    }

    public function setUSDAmount(float $USDAmount): self
    {
        $this->USDAmount = $USDAmount;

        return $this;
    }

    public function getRankValorisationAmount(): ?float
    {
        return $this->rankValorisationAmount;
    }

    public function setRankValorisationAmount(float $rankValorisationAmount): self
    {
        $this->rankValorisationAmount = $rankValorisationAmount;

        return $this;
    }

    /**
     * @return Collection|Portfolio[]
     */
    public function getIdPortfolio(): Collection
    {
        return $this->idPortfolio;
    }

    public function addIdPortfolio(Portfolio $idPortfolio): self
    {
        if (!$this->idPortfolio->contains($idPortfolio)) {
            $this->idPortfolio[] = $idPortfolio;
            $idPortfolio->setUser($this);
        }

        return $this;
    }

    public function removeIdPortfolio(Portfolio $idPortfolio): self
    {
        if ($this->idPortfolio->removeElement($idPortfolio)) {
            // set the owning side to null (unless already changed)
            if ($idPortfolio->getUser() === $this) {
                $idPortfolio->setUser(null);
            }
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
            $order->setUser($this);
        }

        return $this;
    }

    public function removeOrder(Order $order): self
    {
        if ($this->orders->removeElement($order)) {
            // set the owning side to null (unless already changed)
            if ($order->getUser() === $this) {
                $order->setUser(null);
            }
        }

        return $this;
    }
}
