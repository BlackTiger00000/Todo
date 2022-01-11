package com.blacktiger.todo.persistence;

import com.blacktiger.todo.model.UserEntitiy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserEntitiy, String> {
    UserEntitiy findByEmail(String email);
    Boolean existsByEmail(String email);
    UserEntitiy findByEmailAndPassword(String email, String password);
}
