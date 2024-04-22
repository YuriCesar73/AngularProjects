package com.example.loginauthapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.loginauthapi.domain.user.User;

public interface UserRepository extends JpaRepository<User, String> {

}
