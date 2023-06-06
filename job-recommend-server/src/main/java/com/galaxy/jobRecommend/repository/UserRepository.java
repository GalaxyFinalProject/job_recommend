package com.galaxy.jobRecommend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.galaxy.jobRecommend.entity.UserEntity;

@Repository 
public interface UserRepository extends JpaRepository<UserEntity, Long> {
	public UserEntity findBySocialIdAndPlatfomType(String socialId, String platfomType);
	public UserEntity findBySocialId(String socialId);
}
