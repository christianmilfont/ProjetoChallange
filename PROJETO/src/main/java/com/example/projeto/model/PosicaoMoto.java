package com.example.projeto.model;

import jakarta.persistence.*;

@Entity
public class PosicaoMoto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int inicialX;
    private int inicialY;
    private int finalX;
    private int finalY;
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public int getInicialX() {
        return inicialX;
    }
    public void setInicialX(int inicialX) {
        this.inicialX = inicialX;
    }
    public int getInicialY() {
        return inicialY;
    }
    public void setInicialY(int inicialY) {
        this.inicialY = inicialY;
    }
    public int getFinalX() {
        return finalX;
    }
    public void setFinalX(int finalX) {
        this.finalX = finalX;
    }
    public int getFinalY() {
        return finalY;
    }
    public void setFinalY(int finalY) {
        this.finalY = finalY;
    }


    
   

}
 