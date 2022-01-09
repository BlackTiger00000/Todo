package com.blacktiger.todo.service;

import com.blacktiger.todo.model.TodoEntity;
import com.blacktiger.todo.persistence.TodoRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
public class TodoService {

    @Autowired
    private TodoRepository repository;

    public List<TodoEntity> create(final TodoEntity entitiy){
        // Validations
        validate(entitiy);
        repository.save(entitiy);

        log.info("Entity Id : {} is saved.", entitiy.getId());

        return repository.findByUserId(entitiy.getUserId());
    }

    private void validate(final TodoEntity entitiy) {
        if(entitiy == null){
            log.warn("Entity cannot be null");
            throw new RuntimeException("Entity cannot be null");
        }

        if(entitiy.getUserId() == null){
            log.warn("Unknown user.");
            throw new RuntimeException("Unknown user.");
        }
    }

}
