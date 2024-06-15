package com.absalao.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.absalao.model.Processo;

@Repository
public interface ProcessoRepository extends JpaRepository<Long, Processo>{
}
