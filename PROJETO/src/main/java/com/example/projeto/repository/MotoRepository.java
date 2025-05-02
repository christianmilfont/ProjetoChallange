package com.example.projeto.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.projeto.model.Moto;

public interface MotoRepository extends JpaRepository<Moto, Long> {
    // Aqui podem ser adicionados métodos customizados de busca, caso necessário
}
