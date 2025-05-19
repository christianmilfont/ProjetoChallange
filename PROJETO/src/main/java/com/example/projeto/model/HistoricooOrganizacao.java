package com.example.projeto.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

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
    @JoinColumn(name = "moto_id")
    private Moto idDaMoto;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "fiscal_id")
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
