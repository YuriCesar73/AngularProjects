package com.example.loginauthapi.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.loginauthapi.dto.LoginRequestDTO;
import com.example.loginauthapi.dto.RegisterRequestDTO;
import com.example.loginauthapi.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

	private final UserService service;
	
	@PostMapping("/login")
	public ResponseEntity login(@RequestBody LoginRequestDTO login) {		
		return ResponseEntity.ok(this.service.login(login));
	}
	
	@PostMapping("/register")
	public ResponseEntity register(@RequestBody RegisterRequestDTO register) {		
		return ResponseEntity.ok(this.service.register(register));
	}
	
}
