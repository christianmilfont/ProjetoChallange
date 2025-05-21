package com.example.projeto.model;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class HistoricooOrganizacao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String descricao;

    @OneToOne(cascade = CascadeType.ALL)
    private Moto idDaMoto;

    @OneToOne(cascade = CascadeType.ALL)
    private Fiscal nomefiscal;

    @OneToMany(cascade = CascadeType.ALL)
    private List<PosicaoMoto> posicoes;

    public List<PosicaoMoto> getPosicoes() {
        return posicoes;
    }

    public void setPosicoes(List<PosicaoMoto> posicoes) {
        this.posicoes = posicoes;
    }

}
