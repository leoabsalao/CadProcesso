package com.absalao;

import java.sql.Date;
import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.absalao.model.Processo;
import com.absalao.repository.ProcessoRepository;

@SpringBootApplication
public class ServSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(ServSpringApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatabase(ProcessoRepository repProcesso) {
	  return args -> {
		repProcesso.deleteAll();

		Processo p = new Processo();

		p.setNpu("66666666786786843868");
		p.setDatCadastro(LocalDateTime.now());
		p.setDatVisualizado(LocalDateTime.now());
		p.setMunicipio("Barra de Jangada");
		p.setUf("UF");
		p.setUploadArq("caminho do upload do aqrquivo");
		p.setVisualizado(true);

		repProcesso.save(p);
	  };	
	}

}
