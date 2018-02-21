package com.mathologic.projects.locolink.controllers;

import com.mathologic.projects.locolink.models.Role;
import com.mathologic.projects.locolink.repositories.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.Serializable;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

@RestController
@RequestMapping("/api/v1/user")
public class UserController implements Serializable {


    @Autowired
    RoleRepository roleRepo;

    @GetMapping(value = "/getAllParams")
    public Page<Role> getAllParams() {


        String nameToFind = "customer";
       Page<Role> articleByAuthorName = roleRepo.findByName(nameToFind, new PageRequest(0, 10));
       return articleByAuthorName;

    }

    //    @GetMapping(value = "/getCurrentDateTime", consumes = "application/json", produces = "application/json")
    @GetMapping(value = "/getCurrentDateTime")
    public String getCurrentDateTime() {
        String[] roleName = {"admin", "guest", "super", "user", "customer", "manager", "worker"};
        List<Role> al = new ArrayList<Role>();
        for (int n = 0; n < roleName.length; n++) {
            Role r = new Role();
            r.setName(roleName[n]);
            al.add(r);
        }
        //  roleRepo.save(al);
        return new SimpleDateFormat("yyyy-MM-dd").format(Calendar.getInstance().getTime());
    }


}
