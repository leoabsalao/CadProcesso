package com.absalao.dtos;

import java.util.Calendar;

public record ProcessoDTO(Long id, Long npu, Calendar datCadastro,Calendar datVisualizado, String municipio, String uf, String uploadArq, Boolean visualizado) {
    
}
