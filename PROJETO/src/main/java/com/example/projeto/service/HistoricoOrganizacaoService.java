package com.example.projeto.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.projeto.model.HistoricooOrganizacao;
import com.example.projeto.model.PosicaoMoto;
import com.example.projeto.repository.HistoricoOrganizacaoRepository;

@Service
public class HistoricoOrganizacaoService {

    @Autowired
    private HistoricoOrganizacaoRepository historicoRepository;

     public HistoricooOrganizacao salvarModeloManual(HistoricooOrganizacao modelo) {
        return historicoRepository.save(modelo);
    }
    public HistoricooOrganizacao criarModeloOrganizacao(List<PosicaoMoto> posicoes) {
        HistoricooOrganizacao modelo = new HistoricooOrganizacao();
        modelo.setName("Modelo gerado automaticamente");
        modelo.setDescricao("Modelo gerado a partir da atualização de posições");

        // Aqui você precisa adaptar conforme a estrutura do seu ModeloOrganizacao:
        // Ex: setar lista de posições, mapear campos, etc.
        modelo.setPosicoes(posicoes); // Exemplo: precisa existir um campo assim

        return historicoRepository.save(modelo);
    }
}
