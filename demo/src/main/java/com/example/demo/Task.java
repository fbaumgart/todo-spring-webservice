package com.example.demo;

import javax.persistence.*;

@Entity
@Table(name = "items")
public class Task {

    @Id
    @GeneratedValue
    private Long id;

    @Column(nullable = false)
    private String taskString;

    public Task() {
        super();
    }

    public Task(String taskString) {
        super();
        this.taskString = taskString;
    }

    public String getTaskString(){
        return taskString;
    }

    public void setTaskString(String taskString){
        this.taskString = taskString;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "Item{" +
                "id=" + id +
                ", taskString=" + taskString +
                "}";
    }
}