package com.mathologic.projects.locolink.repositories;

import com.mathologic.projects.locolink.models.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<User,String> {
}
