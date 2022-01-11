package com.blacktiger.todo.service;

import com.blacktiger.todo.model.UserEntitiy;
import com.blacktiger.todo.persistence.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public UserEntitiy create(final UserEntitiy userEntitiy){
        if(userEntitiy == null || userEntitiy.getEmail() == null){
            throw new RuntimeException("Invalid arguments");
        }

        final String email = userEntitiy.getEmail();
        if(userRepository.existsByEmail(email)){
            log.warn("Email already exists {}", email);
            throw new RuntimeException("Email already exists");
        }

        return userRepository.save(userEntitiy);
    }

    public UserEntitiy getByCredentials(final String email, final String password){
        return userRepository.findByEmailAndPassword(email, password);
    }

}
