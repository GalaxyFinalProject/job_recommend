package com.galaxy.jobRecommend.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.galaxy.jobRecommend.dto.RecruitDTO;
import com.galaxy.jobRecommend.entity.RecruitEntity;
import com.galaxy.jobRecommend.repository.RecruitRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class RecruitService {
	private final RecruitRepository recruitRepository;
	
	public void save(RecruitDTO recruitDTO) {
		RecruitEntity recruitEntity = RecruitEntity.toRecruitEntity(recruitDTO);
		recruitRepository.save(recruitEntity);
	}
	
	public List<RecruitDTO> findAll(){
        List<RecruitEntity> recruitEntityList = recruitRepository.findAll();
        List<RecruitDTO> recruitDTOList = new ArrayList<>();
        for(RecruitEntity recruitEntity : recruitEntityList){
        	recruitDTOList.add(RecruitDTO.toRecruitDTO(recruitEntity));
        }
        return recruitDTOList;
    }
	
	public List<RecruitDTO> searchPosts(String recruit_name){
		
		List<RecruitEntity> recruitEntityList = recruitRepository.findByrecruitNameContains(recruit_name);
		List<RecruitDTO> recruitDTOList = new ArrayList<>();
		System.out.println(recruitEntityList);
		if(recruitEntityList.isEmpty()) return recruitDTOList;
		
		for(RecruitEntity recruitEntity : recruitEntityList){
        	recruitDTOList.add(RecruitDTO.toRecruitDTO(recruitEntity));
        }
		return recruitDTOList;
	}

}
