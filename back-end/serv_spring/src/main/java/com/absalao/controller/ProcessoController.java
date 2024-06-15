package com.absalao.controller;

import org.springframework.web.bind.annotation.RestController;

import com.absalao.model.Processo;
import com.absalao.repository.ProcessoRepository;

import lombok.AllArgsConstructor;

import org.springframework.web.bind.annotation.RequestMapping;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
@RequestMapping("/api/processos")
@AllArgsConstructor
public class ProcessoController {

    private final ProcessoRepository processoRepository;
    
    @GetMapping
    public List<Processo> listarProcessos(){
        return processoRepository.findAll();
    }
}
