package com.absalao.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.absalao.model.Processo;

public interface ProcessoRepository extends JpaRepository<Processo, Long>{
}
