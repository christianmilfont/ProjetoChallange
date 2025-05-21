package com.example.projeto.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.projeto.model.Fiscal;

public interface FiscalRepository extends JpaRepository<Fiscal, Long> {

}