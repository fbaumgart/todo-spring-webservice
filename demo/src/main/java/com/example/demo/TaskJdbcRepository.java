package com.example.demo;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskJdbcRepository extends JpaRepository<Task, Long> {

}
