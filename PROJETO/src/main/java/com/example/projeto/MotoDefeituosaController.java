package com.example.projeto;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.projeto.model.MotoDefeituosa;
import com.example.projeto.model.TipoDefeito;
import com.example.projeto.repository.MotoDefeituosaRepository;

@RestController
@RequestMapping("/motos-defeituosas")
@CrossOrigin(origins = "*")
public class MotoDefeituosaController {
    @Autowired
    private MotoDefeituosaRepository motoDefeitoRepository;

    @GetMapping("/tipos-defeito")
    public List<TipoDefeito> getTiposDefeito() {
        return Arrays.asList(TipoDefeito.values());
    }
    @GetMapping("/todasAsMotos")
    public List<MotoDefeituosa> getAllMotos() {
        return motoDefeitoRepository.findAll();
    }

    @GetMapping("/{id}")
    public MotoDefeituosa getMotoDefeitoById(@PathVariable Long id) {
        return motoDefeitoRepository.findById(id).orElse(null);
    }

    @PostMapping
    public ResponseEntity<MotoDefeituosa> criarMotoDefeituosa(@RequestBody MotoDefeituosa novaMotoDefeituosa) {
        MotoDefeituosa motoDefeituosaSalva = motoDefeitoRepository.save(novaMotoDefeituosa);
        return ResponseEntity.status(HttpStatus.CREATED).body(motoDefeituosaSalva);
    }

}
