package com.galaxy.jobRecommend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.galaxy.jobRecommend.entity.RecruitEntity;

@Repository 
public interface RecruitRepository extends JpaRepository<RecruitEntity,Long> {

	public List<RecruitEntity> findByrecruitNameContains(String recruitName);
	@Query(value = "SELECT recruit.*, liketable.company_code AS like_company_code FROM recruit JOIN liketable ON liketable.company_code = recruit.company_code where liketable.social_id = :socialId and liketable.platfom_type = :platformType ",nativeQuery = true)
	List<RecruitEntity> findRecruitsBySocialIdAndPlatformType(@Param(value = "socialId") String socialId, @Param(value = "platformType") String platformType);
}
