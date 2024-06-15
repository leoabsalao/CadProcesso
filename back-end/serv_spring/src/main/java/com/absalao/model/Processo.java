package com.absalao.model;

import java.util.Calendar;

import org.springframework.format.annotation.DateTimeFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "tb_processo")
public class Processo {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "npu", length = 20, unique = true, nullable = false)
    private Long npu;

    @Column(length = 20, nullable = false)
    @DateTimeFormat(pattern="dd/MM/yyyy HH:mm:ss") 
    private Calendar datCadastro;

    @Column(length = 20, nullable = false)
    @DateTimeFormat(pattern="dd/MM/yyyy HH:mm:ss") 
    private Calendar datVisualizado;
    
    @Column(length = 70, nullable = false)
    private String municipio;

    @Column(length = 2, nullable = false)
    private String uf;

    @Column(length = 200, nullable = false)
    private String uploadArq;
    
    @Column(nullable = false)
    private Boolean visualizado;

    
    
}
