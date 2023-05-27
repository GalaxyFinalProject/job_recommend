package com.galaxy.jobRecommend.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

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
	
	public RecruitDTO findById(Long company_code) {
        // �ϳ� ��ȸ�Ҷ� optional�� ������
        Optional<RecruitEntity> optionalRecruitEntity = recruitRepository.findById(company_code);
        if (optionalRecruitEntity.isPresent()){
            return RecruitDTO.toRecruitDTO(optionalRecruitEntity.get()); // optional�� ���ܳ��� entity -> dto ��ȯ
        }else {
            return null;
        }


    }

}
