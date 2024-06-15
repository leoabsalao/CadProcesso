package com.absalao.model;

import java.io.Serializable;
import java.util.Calendar;

import org.springframework.format.annotation.DateTimeFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;


@Entity
@Table(name = "tb_processo")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of="id")
public class Processo implements Serializable {
	private static final long serialVersionUID = 1L;
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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
