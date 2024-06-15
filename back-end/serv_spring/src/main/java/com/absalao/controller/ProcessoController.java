package com.absalao.controller;

import org.springframework.web.bind.annotation.RestController;

import com.absalao.dtos.ProcessoDTO;
import com.absalao.model.Processo;
import com.absalao.repository.ProcessoRepository;
import com.absalao.service.ProcessoService;

import lombok.AllArgsConstructor;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


@RestController
@RequestMapping("/api/processos")
@AllArgsConstructor
public class ProcessoController {

    @Autowired
    private ProcessoService serviceProcesso;
    
    @RequestMapping(value = "/{id}",method=RequestMethod.GET)
	public ResponseEntity<?> find(@PathVariable Long id) throws Exception {
	  Processo obj = serviceProcesso.findByProcesso(id);
	  return ResponseEntity.ok().body(obj);		
	}    

     
}
