package com.absalao.model;

import java.io.Serializable;
import java.time.LocalDateTime;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;


@Entity
@Table(name = "tb_processo")
@Data
public class Processo implements Serializable {
	private static final long serialVersionUID = 1L;
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonProperty("_id")
    private Long id;

    @Column(length = 20, unique = true, nullable = false)
    private String npu;
    //@DateTimeFormat(pattern="dd/MM/yyyy HH:mm:ss") 
    //@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    //@DateTimeFormat(pattern = "yyyy-MM-dd")
    @Column(length = 20, nullable = false)
    private String datCadastro;
    //@DateTimeFormat(pattern="dd/MM/yyyy HH:mm:ss") 
    //@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    //@DateTimeFormat(pattern = "yyyy-MM-dd")    
    @Column(length = 20, nullable = false)        
    private String datVisualizado;
    
    @Column(length = 70, nullable = false)
    private String municipio;

    @Column(length = 2, nullable = false)
    private String uf;

    @Column(length = 200, nullable = true)
    private String uploadArq;
    
    @Column(nullable = false)
    private Boolean visualizado;    
    
}
