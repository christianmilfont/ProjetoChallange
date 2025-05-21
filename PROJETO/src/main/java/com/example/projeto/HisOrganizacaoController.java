package com.example.projeto;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.projeto.model.HistoricooOrganizacao;
import com.example.projeto.repository.HistoricoOrganizacaoRepository;
import com.example.projeto.service.HistoricoOrganizacaoService;

@RestController
@RequestMapping("/historico")
@CrossOrigin(origins = "*")
public class HisOrganizacaoController {

    @Autowired
    private HistoricoOrganizacaoRepository modeloRepository;
    @Autowired
    private HistoricoOrganizacaoService modeloService;

   @PostMapping
    public ResponseEntity<HistoricooOrganizacao> salvarModelo(@RequestBody HistoricooOrganizacao modelo) {
        return ResponseEntity.ok(modeloService.salvarModeloManual(modelo));
    }
    
    @GetMapping
    public List<HistoricooOrganizacao> listarModelos() {
        return modeloRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<HistoricooOrganizacao> getModelo(@PathVariable Long id) {
        return modeloRepository.findById(id).map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
