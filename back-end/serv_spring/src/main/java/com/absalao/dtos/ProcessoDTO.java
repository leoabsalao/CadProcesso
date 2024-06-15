package com.absalao.dtos;

import java.util.Calendar;
import lombok.Data;

@Data
public class ProcessoDTO{

    private Long _id;
    private Long npu;
    private Calendar datCadastro;
    private Calendar datVisualizado;
    private String municipio;    
    private String uf;
    private String uploadArq;    
    private Boolean visualizado;
    
}
