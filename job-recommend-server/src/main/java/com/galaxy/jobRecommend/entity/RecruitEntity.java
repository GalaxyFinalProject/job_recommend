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
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long company_code;
	
	@Column
	private String recruit_name;
	
	@Column
	private String recruit_skill;
	
	@Column
	private String recruit_link;
	
	@Column
	private Integer recruit_rank;
	
	@Column
	private String recruit_date; 
	
	public static RecruitEntity toRecruitEntity(RecruitDTO recruitDTO) {
		RecruitEntity recruitEntity = new RecruitEntity();
		recruitEntity.setCompany_code(recruitDTO.getCompany_code());
		recruitEntity.setRecruit_name(recruitDTO.getRecruit_name());
		recruitEntity.setRecruit_skill(recruitDTO.getRecruit_skill());
		recruitEntity.setRecruit_link(recruitDTO.getRecruit_link());
		recruitEntity.setRecruit_rank(recruitDTO.getRecruit_rank());
		recruitEntity.setRecruit_date(recruitDTO.getRecruit_date());
		
		return recruitEntity;

	}

}
