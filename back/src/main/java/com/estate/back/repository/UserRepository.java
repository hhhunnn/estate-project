package com.estate.back.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.estate.back.entity.UserEntity;

// Estate 데이터베이스의 User 테이블의 작업을 위한 리포지토리 
@Repository
public interface UserRepository extends JpaRepository<UserEntity, String> {

    boolean existByUserId(String userId);

    // 단일형태로 (예상되는 레코드 개수 0 또는 1개)
    UserEntity findfindByUserId(String userId);
}
