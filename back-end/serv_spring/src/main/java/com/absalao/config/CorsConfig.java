package com.absalao.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**") // Permite todos os caminhos
                        .allowedOrigins("http://localhost:4200") // Permite apenas este domínio
                        .allowedMethods("GET", "POST", "PUT", "DELETE") // Permite apenas esses métodos HTTP
                        .allowedHeaders("*"); // Permite todos os headers
            }
        };
    }
}

