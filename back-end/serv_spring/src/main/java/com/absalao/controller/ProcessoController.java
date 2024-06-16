package com.absalao.controller;

import org.springframework.web.bind.annotation.RestController;

import com.absalao.model.Processo;
import com.absalao.service.ProcessoService;

import lombok.AllArgsConstructor;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


@RestController
@RequestMapping("/api/processos")
@AllArgsConstructor
public class ProcessoController {

    @Autowired
    private ProcessoService serviceProcesso;
    
    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/{id}",method=RequestMethod.GET)
	public ResponseEntity<?> findProcesso(@PathVariable Long id) throws Exception {
	  Processo obj = serviceProcesso.findByProcesso(id);
	  return ResponseEntity.ok().body(obj);		
	}    

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping
    public @ResponseBody List<Processo> buscaProcessosTodos(){
        return serviceProcesso.findProcessoTodos();
    }

     
}
