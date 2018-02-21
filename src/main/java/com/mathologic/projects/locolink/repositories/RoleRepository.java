package com.mathologic.projects.locolink.repositories;

import com.mathologic.projects.locolink.models.Role;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends MongoRepository<Role,String> {
    Page<Role> findByName(String name, Pageable pageable);
}
