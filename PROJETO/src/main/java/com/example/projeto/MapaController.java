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
@RequestMapping("/api")
public class MapaController {

    @PostMapping("/atualizar")
    public ResponseEntity<?> atualizarPosicao(@RequestBody Ponto ponto) {
        System.out.println("Posição recebida:");
        System.out.println("Inicial -> x=" + ponto.getInicialX() + ", y=" + ponto.getInicialY());
        System.out.println("Final   -> x=" + ponto.getFinalX() + ", y=" + ponto.getFinalY());
    
        Map<String, Object> response = new HashMap<>();
        response.put("mensagem", "Posição salva com sucesso");
        return ResponseEntity.ok(response);
    }
    

}
