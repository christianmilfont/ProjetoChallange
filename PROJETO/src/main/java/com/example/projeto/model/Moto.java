package com.example.projeto.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Moto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "O nome é obrigatório")
    private String nome;

    @NotBlank(message = "A descrição é obrigatória")
    @Pattern(regexp = "^[A-Z].*", message = "Deve começar com letra maiúscula")
    private String descricao;

    private boolean prontaParaUso;
    private boolean semPlaca;
    private String chassi;
    private String motor;

}
