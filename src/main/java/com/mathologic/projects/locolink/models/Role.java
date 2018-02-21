package com.mathologic.projects.locolink.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import java.io.Serializable;


@Document(collection = "roles")
@JsonIgnoreProperties(ignoreUnknown = true)
public class Role implements Serializable {

    @Indexed
    @Id
    private String id;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Field
    private String name;

}
