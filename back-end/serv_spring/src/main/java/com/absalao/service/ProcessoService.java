package com.absalao.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.absalao.dtos.ProcessoDTO;
import com.absalao.model.Processo;
import com.absalao.repository.ProcessoRepository;
import com.absalao.service.exception.ObjectNotFoundException;

@Service
public class ProcessoService {
    
    @Autowired
    private ProcessoRepository repProcesso;

    @Autowired 
    private RestTemplate restTemplate;


    public Processo findByProcesso(Long id) throws Exception {
        
        Optional<Processo> obj = repProcesso.findById(id);

    	return obj.orElseThrow(() -> new ObjectNotFoundException(
    			"Objeto não encontrado! Id: "+id+", NPU:"+Processo.class.getName(), null));
    }        
    

    public void SalvarProcesso(Processo processo){
        this.repProcesso.save(processo);
    }


}
