package com.example.projeto;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.projeto.model.Moto;
import com.example.projeto.repository.MotoRepository;

@RestController
@RequestMapping("/motos") // agrupa todos os endpoints
public class MotoController {

    @Autowired
    private MotoRepository motoRepository;

    @GetMapping
    public List<Moto> getMotos() {
        return motoRepository.findAll();
    }

    @GetMapping("/{id}")
    public Moto getMotoById(@PathVariable Long id) {
        return motoRepository.findById(id).orElse(null);
    }

    @PostMapping
    public ResponseEntity<Moto> criarMoto(@RequestBody Moto novaMoto) {
        Moto motoSalva = motoRepository.save(novaMoto);
        return ResponseEntity.status(HttpStatus.CREATED).body(motoSalva);
    }
}
