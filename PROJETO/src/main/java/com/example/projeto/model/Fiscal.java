package com.example.projeto.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Fiscal {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // ou outro strategy que preferir
    private Long id;
    private String nome;
    private String cpf;
    private String email;


}
