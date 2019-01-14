package com.sasika.auth.service;

import java.util.List;

import org.springframework.security.core.userdetails.UserDetailsService;

import com.sasika.auth.entity.User;

public interface UserService extends UserDetailsService {

    User save(User user);
    List<User> findAll();
    void delete(long id);
}
