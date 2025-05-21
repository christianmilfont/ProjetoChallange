package com.example.projeto.model;


import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MotoDefeituosa {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Nome da marca é obrigatório")
    private String nomeMarca;

    @NotBlank(message = "Nome da moto é obrigatório")
    private String nomeMoto;

    @NotBlank(message = "Placa é obrigatório")
    private String placa;

    private String descricao;
    
    @Enumerated(EnumType.STRING)
    private TipoDefeito tipoDefeito;

    @ManyToOne
    private HistoricooOrganizacao historico;
}
