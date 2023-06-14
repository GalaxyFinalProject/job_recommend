package com.galaxy.jobRecommend.repository;

import com.galaxy.jobRecommend.entity.UserLikeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserLikeRepository extends JpaRepository<UserLikeEntity,Long> {
    public UserLikeEntity findBySocialIdAndPlatfomType(String socialId, String platfomType);
}
