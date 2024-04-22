package com.example.loginauthapi.infra.security;

import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneOffset;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.example.loginauthapi.domain.user.User;


//Classe para gerar e validar o token dos usuários
@Service
public class TokenService {
	
	@Value("${api.security.token.secret}")
	private String secret; //Variável para pegar a chave secreta utilizada no algoritmo que gera o token
	
	//Método para criar token
	public String generateToken(User user) {
		try {
			
			Algorithm algorithm = Algorithm.HMAC256(this.secret);
			
			String token = JWT.create()
					.withIssuer("login-auth-api") //quem está gerando o token. Se fosse em microsserviços, poderia ser o nome do MS que está gerando o token
					.withSubject(user.getEmail()) //Quem está recebendo o token
					.withExpiresAt(this.generateExpirationDate())
					.sign(algorithm);
			
			return token;
		} catch (JWTCreationException e) {
			throw new RuntimeException("Error while authenticating");
		}
	}
	
	private Instant generateExpirationDate() {
		return LocalDateTime.now().plusHours(2).toInstant(ZoneOffset.of("-03:00"));
	}
	
	
	public String validateToken(String token) {
		try {
			Algorithm algorithm = Algorithm.HMAC256(this.secret);
			return JWT.require(algorithm)
					.withIssuer("login-auth-api")
					.build()
					.verify(token)
					.getSubject(); //Retorna o usuário daquele token
			
		} catch (JWTVerificationException e) {
			return null;
		}
	}

}
