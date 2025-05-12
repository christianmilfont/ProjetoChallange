package com.example.projeto.model;

import jakarta.persistence.*;
import java.util.List;

@Entity
public class ModeloOrganizacao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String descricao;

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @OneToMany(cascade = CascadeType.ALL)
    private List<PosicaoMoto> posicoes;

    public List<PosicaoMoto> getPosicoes() {
        return posicoes;
    }

    public void setPosicoes(List<PosicaoMoto> posicoes) {
        this.posicoes = posicoes;
    }

}
