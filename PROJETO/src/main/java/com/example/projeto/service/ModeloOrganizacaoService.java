package com.example.projeto.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.projeto.model.ModeloOrganizacao;
import com.example.projeto.model.PosicaoMoto;
import com.example.projeto.repository.ModeloOrganizacaoRepository;

@Service
public class ModeloOrganizacaoService {

    @Autowired
    private ModeloOrganizacaoRepository modeloRepository;

     public ModeloOrganizacao salvarModeloManual(ModeloOrganizacao modelo) {
        return modeloRepository.save(modelo);
    }
    public ModeloOrganizacao criarModeloOrganizacao(List<PosicaoMoto> posicoes) {
        ModeloOrganizacao modelo = new ModeloOrganizacao();
        modelo.setName("Modelo gerado automaticamente");
        modelo.setDescricao("Modelo gerado a partir da atualização de posições");

        // Aqui você precisa adaptar conforme a estrutura do seu ModeloOrganizacao:
        // Ex: setar lista de posições, mapear campos, etc.
        modelo.setPosicoes(posicoes); // Exemplo: precisa existir um campo assim

        return modeloRepository.save(modelo);
    }
}
