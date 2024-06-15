package com.absalao.controller;

import org.springframework.web.bind.annotation.RestController;

import com.absalao.model.Processo;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
@RequestMapping("/api/processos")
public class ProcessoController {
    
    @GetMapping
    public List<Processo> List(){
        return null;
    }
}
