package com.galaxy.jobRecommend.dto;

import com.galaxy.jobRecommend.entity.RecruitEntity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import lombok.NoArgsConstructor;


@Getter
@Setter
@NoArgsConstructor
@ToString
public class RecruitDTO {
	private Long company_code;
	private String recruit_name;
	private String recruit_skill;
	private String recruit_link;
	private Integer recruit_rank;
	private String recruit_date;
	
	public static RecruitDTO toRecruitDTO(RecruitEntity recruitEntity){
		RecruitDTO recruitDTO = new RecruitDTO();
		recruitDTO.setCompany_code(recruitEntity.getCompany_code());
		recruitDTO.setRecruit_name(recruitEntity.getRecruit_name());
		recruitDTO.setRecruit_skill(recruitEntity.getRecruit_skill());
		recruitDTO.setRecruit_link(recruitEntity.getRecruit_link());
		recruitDTO.setRecruit_rank(recruitEntity.getRecruit_rank());
		recruitDTO.setRecruit_date(recruitEntity.getRecruit_date());

        return recruitDTO;
    }

}
