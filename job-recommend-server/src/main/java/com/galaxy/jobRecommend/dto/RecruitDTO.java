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
	private Long companyCode;
	private String companyName;
	private String recruitName;
	private String recruitSkill;
	private String recruitLink;
	private String recruitRank;
	private String recruitDate;
	private String recruitJob;
	private String recruitAddress;
	
	public static RecruitDTO toRecruitDTO(RecruitEntity recruitEntity){
		RecruitDTO recruitDTO = new RecruitDTO();
		recruitDTO.setCompanyCode(recruitEntity.getCompanyCode());
		recruitDTO.setCompanyName(recruitEntity.getCompanyName());
		recruitDTO.setRecruitName(recruitEntity.getRecruitName());
		recruitDTO.setRecruitSkill(recruitEntity.getRecruitSkill());
		recruitDTO.setRecruitLink(recruitEntity.getRecruitLink());
		recruitDTO.setRecruitRank(recruitEntity.getRecruitRank());
		recruitDTO.setRecruitDate(recruitEntity.getRecruitDate());
		recruitDTO.setRecruitJob(recruitEntity.getRecruitJob());
		recruitDTO.setRecruitAddress(recruitEntity.getRecruitAddress());

        return recruitDTO;
    }

}
