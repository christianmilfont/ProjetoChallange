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

import com.example.projeto.model.ModeloOrganizacao;
import com.example.projeto.repository.ModeloOrganizacaoRepository;
import com.example.projeto.service.ModeloOrganizacaoService;

@RestController
@RequestMapping("/modelos")
@CrossOrigin(origins = "*")
public class ModeloOrganizacaoController {

    @Autowired
    private ModeloOrganizacaoRepository modeloRepository;
    @Autowired
    private ModeloOrganizacaoService modeloService;

   @PostMapping
    public ResponseEntity<ModeloOrganizacao> salvarModelo(@RequestBody ModeloOrganizacao modelo) {
        return ResponseEntity.ok(modeloService.salvarModeloManual(modelo));
    }
    
    @GetMapping
    public List<ModeloOrganizacao> listarModelos() {
        return modeloRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ModeloOrganizacao> getModelo(@PathVariable Long id) {
        return modeloRepository.findById(id).map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
