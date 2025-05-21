package com.example.projeto;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    public ResponseEntity<MotoDefeituosa> getMotoDefeitoById(@PathVariable Long id) {
        Optional<MotoDefeituosa> moto = motoDefeitoRepository.findById(id);
        return moto.map(ResponseEntity::ok)
                   .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<MotoDefeituosa> criarMotoDefeituosa(@RequestBody MotoDefeituosa novaMotoDefeituosa) {
        MotoDefeituosa motoDefeituosaSalva = motoDefeitoRepository.save(novaMotoDefeituosa);
        return ResponseEntity.status(HttpStatus.CREATED).body(motoDefeituosaSalva);
    }

    @PutMapping("/{id}")
    public ResponseEntity<MotoDefeituosa> atualizarMotoDefeituosa(@PathVariable Long id, @RequestBody MotoDefeituosa motoAtualizada) {
        return motoDefeitoRepository.findById(id)
            .map(moto -> {
                moto.setNomeMarca(motoAtualizada.getNomeMarca());
                moto.setNomeMoto(motoAtualizada.getNomeMoto());
                moto.setPlaca(motoAtualizada.getPlaca());
                moto.setDescricao(motoAtualizada.getDescricao());
                moto.setTipoDefeito(motoAtualizada.getTipoDefeito());
                MotoDefeituosa motoSalva = motoDefeitoRepository.save(moto);
                return ResponseEntity.ok(motoSalva);
            })
            .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarMotoDefeituosa(@PathVariable Long id) {
        if (motoDefeitoRepository.existsById(id)) {
            motoDefeitoRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
