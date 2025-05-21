package com.example.projeto;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.projeto.model.PosicaoMoto;
import com.example.projeto.service.HistoricoOrganizacaoService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class MapaController {

    @Autowired
    private HistoricoOrganizacaoService historicoService;

    @PostMapping("/atualizar")
    public ResponseEntity<?> atualizarPosicoes(@RequestBody List<PosicaoMoto> motos) {
        for (PosicaoMoto moto : motos) {
            System.out.println(" -> X: " + moto.getInicialX() + " | Y: " + moto.getInicialY());
        }

        historicoService.criarModeloOrganizacao(motos);

        Map<String, Object> response = new HashMap<>();
        response.put("mensagem", "Organização salva com sucesso");
        return ResponseEntity.ok(response);
    }
}
