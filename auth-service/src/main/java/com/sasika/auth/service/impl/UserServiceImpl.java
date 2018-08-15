package com.sasika.auth.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.sasika.auth.entity.User;
import com.sasika.auth.repository.UserRepository;
import com.sasika.auth.service.UserService;

import reactor.core.publisher.Mono;

@Service
public class UserServiceImpl implements UserService{

	@Autowired
	private UserRepository userRepository;
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Override
	public Mono<User> saveUser(User user) {
		String encrptedPassword = passwordEncoder.encode(user.getPassword());
		user.setPassword(encrptedPassword);
		return userRepository.insert(user);
	}

}
