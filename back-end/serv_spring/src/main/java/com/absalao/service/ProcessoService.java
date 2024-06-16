package com.absalao.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.absalao.model.Processo;
import com.absalao.repository.ProcessoRepository;
import com.absalao.service.exception.ObjectNotFoundException;

@Service
public class ProcessoService {
    
    @Autowired
    private ProcessoRepository repProcesso;


    public Processo findByProcesso(Long id) throws Exception {        
        Optional<Processo> obj = repProcesso.findById(id);
    	return obj.orElseThrow(() -> new ObjectNotFoundException(
    			"Processo não encontrado! Id: "+id+", NPU:"+Processo.class.getName(), null));
    }        
    
    public List<Processo> findProcessoTodos(){
        return this.repProcesso.findAll();
    }

    public void SalvarProcesso(Processo processo){
        this.repProcesso.save(processo);
    }


}
