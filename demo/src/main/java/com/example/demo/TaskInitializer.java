package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class TaskInitializer implements CommandLineRunner {

    @Autowired
    private TaskJdbcRepository taskJdbcRepository;

    @Override
    public void run(String... args) throws Exception {

        Task task = new Task();
        task.setTaskString("Sample text");

        taskJdbcRepository.save(task);
    }
}
