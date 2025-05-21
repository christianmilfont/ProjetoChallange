package com.example.projeto.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.projeto.model.MotoDefeituosa;

public interface MotoDefeituosaRepository extends JpaRepository<MotoDefeituosa, Long> {
    
}
