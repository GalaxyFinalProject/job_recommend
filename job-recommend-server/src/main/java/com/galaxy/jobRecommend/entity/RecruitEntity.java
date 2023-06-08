package com.galaxy.jobRecommend.entity;

import com.galaxy.jobRecommend.dto.RecruitDTO;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name ="recruit")
public class RecruitEntity {
	
	@Id
	@Column(name = "company_code")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long companyCode;
	
	@Column(name = "company_name")
	private String companyName;
	
	@Column(name = "recruit_name")
	private String recruitName;
	
	@Column(name = "recruit_skill")
	private String recruitSkill;
	
	@Column(name = "recruit_link")
	private String recruitLink;
	
	@Column(name = "recruit_rank")
	private float recruitRank;
	
	@Column(name = "recruit_date")
	private String recruitDate; 
	
	@Column(name = "recruit_address")
	private String recruitAddress; 
	
	@Column(name = "recruit_job")
	private String recruitJob;

	@Column(name = "recruit_score")
	private float recruitScore;


	public static RecruitEntity toRecruitEntity(RecruitDTO recruitDTO) {
		RecruitEntity recruitEntity = new RecruitEntity();
		recruitEntity.setCompanyCode(recruitDTO.getCompanyCode());
		recruitEntity.setCompanyName(recruitDTO.getCompanyName());
		recruitEntity.setRecruitName(recruitDTO.getRecruitName());
		recruitEntity.setRecruitSkill(recruitDTO.getRecruitSkill());
		recruitEntity.setRecruitLink(recruitDTO.getRecruitLink());
		recruitEntity.setRecruitRank(recruitDTO.getRecruitRank());
		recruitEntity.setRecruitDate(recruitDTO.getRecruitDate());
		recruitEntity.setRecruitAddress(recruitDTO.getRecruitAddress());
		recruitEntity.setRecruitJob(recruitDTO.getRecruitJob());
		recruitEntity.setRecruitScore(recruitDTO.getRecruitScore());
		return recruitEntity;

	}

}
