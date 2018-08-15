package com.sasika.auth.repository;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

import com.sasika.auth.entity.User;

import reactor.core.publisher.Mono;

public interface UserRepository extends ReactiveMongoRepository<User, String> {

	Mono<User> findByUsername(String username);
}
