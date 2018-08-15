package com.sasika.auth.service;

import com.sasika.auth.entity.User;

import reactor.core.publisher.Mono;

public interface UserService {

	Mono<User> saveUser(User user);
}
