package com.mathologic.projects.locolink.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import java.io.Serializable;

@Document(collection = "users")
@JsonIgnoreProperties(ignoreUnknown = true)
public class User implements Serializable {



    @Indexed
    @Id
    private String id;
    @Field
    private String username;

    @Field
    private String password;

    public User(String username, String password) {
        this.username = username;
        this.password = password;
    }



    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }


}
