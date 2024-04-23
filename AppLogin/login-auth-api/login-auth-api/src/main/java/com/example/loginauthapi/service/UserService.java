package com.example.loginauthapi.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.loginauthapi.domain.user.User;
import com.example.loginauthapi.dto.LoginRequestDTO;
import com.example.loginauthapi.dto.ResponseDTO;
import com.example.loginauthapi.dto.RegisterRequestDTO;
import com.example.loginauthapi.infra.security.TokenService;
import com.example.loginauthapi.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository repository;
	
	@Autowired
	private PasswordEncoder passwordEconder;
	
	@Autowired
	private TokenService tokenService;
	

	public ResponseDTO login(LoginRequestDTO login) {
		User user = this.repository.findByEmail(login.email()).orElseThrow(() -> new RuntimeException("User not found"));
		
		if(this.passwordEconder.matches(user.getPassword(), login.password())) {
			String token = this.tokenService.generateToken(user);
			return new ResponseDTO(user.getName(), token);
		}
		
		return null;
	
	}


	public ResponseDTO register(RegisterRequestDTO register) {
		User user = new User(register);
		
		user.setPassword(this.passwordEconder.encode(register.password()));
		this.repository.save(user);
		
		String token = this.tokenService.generateToken(user);
		
		return new ResponseDTO(user.getName(), token);
		
		
	}


}
