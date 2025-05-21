package com.example.projeto;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.projeto.model.Moto;
import com.example.projeto.repository.MotoRepository;

@RestController
@RequestMapping("/motos")
public class MotoController {

    @Autowired
    private MotoRepository motoRepository;

    // Listar todas as motos
    @GetMapping
    public List<Moto> getMotos() {
        return motoRepository.findAll();
    }

    // Buscar uma moto por ID
    @GetMapping("/{id}")
    public ResponseEntity<Moto> getMotoById(@PathVariable Long id) {
        Optional<Moto> moto = motoRepository.findById(id);
        return moto.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Criar nova moto
    @PostMapping("/criar")
    public ResponseEntity<Moto> criarMoto(@RequestBody Moto novaMoto) {
        Moto motoSalva = motoRepository.save(novaMoto);
        return ResponseEntity.status(HttpStatus.CREATED).body(motoSalva);
    }

    // Atualizar uma moto existente
    @PutMapping("/{id}")
    public ResponseEntity<Moto> atualizarMoto(@PathVariable Long id, @RequestBody Moto motoAtualizada) {
        return motoRepository.findById(id)
                .map(moto -> {
                    moto.setNome(motoAtualizada.getNome());
                    moto.setDescricao(motoAtualizada.getDescricao());
                    moto.setProntaParaUso(motoAtualizada.isProntaParaUso());
                    moto.setSemPlaca(motoAtualizada.isSemPlaca());
                    moto.setChassi(motoAtualizada.getChassi());
                    moto.setMotor(motoAtualizada.getMotor());
                    Moto motoSalva = motoRepository.save(moto);
                    return ResponseEntity.ok(motoSalva);
                })
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Deletar uma moto por ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarMoto(@PathVariable Long id) {
        if (motoRepository.existsById(id)) {
            motoRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
