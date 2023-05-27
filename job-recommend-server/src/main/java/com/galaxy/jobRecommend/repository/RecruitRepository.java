package com.galaxy.jobRecommend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.galaxy.jobRecommend.entity.RecruitEntity;

@Repository 
public interface RecruitRepository extends JpaRepository<RecruitEntity,Long> {

}
