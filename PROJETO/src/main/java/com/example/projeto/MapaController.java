package com.example.projeto;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.projeto.model.Ponto;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/mapa")
public class MapaController {

    @PostMapping("/atualizar")
    public ResponseEntity<?> atualizarPosicao(@RequestBody Ponto ponto) {
        // Aqui você poderia salvar a posição no banco de dados
        System.out.println("Posição recebida: x=" + ponto.getX() + ", y=" + ponto.getY());
        Map<String, Object> response = new HashMap<>();
        response.put("mensagem", "Posição salva com sucesso");
        return ResponseEntity.ok(response);    }
}
