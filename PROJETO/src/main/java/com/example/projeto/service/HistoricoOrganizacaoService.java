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
        modelo.setName("Informações");
        modelo.setDescricao("Modelo gerado para comprovar as verificações e salvar as posições que as motos ficaram!");
        modelo.setPosicoes(posicoes);
        return historicoRepository.save(modelo);
    }
}
