package com.galaxy.jobRecommend.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.galaxy.jobRecommend.dto.UserDTO;
import com.galaxy.jobRecommend.entity.UserEntity;
import com.galaxy.jobRecommend.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service //�������� �������ִ� ��ü == ������ ��
@RequiredArgsConstructor //controller�� ����. final ������� ������ ����� ���� 
public class UserService {
	
	private final UserRepository userRepository;

    public void save(UserDTO userDTO) {
        // repsitory�� save �޼��� ȣ��
        UserEntity userEntity = UserEntity.toUserEntity(userDTO);
        userRepository.save(userEntity);
        //Repository�� save�޼��� ȣ�� (����. entity��ü�� �Ѱ���� ��)

    }
    
    public UserEntity saveIdCheck(UserDTO userDTO){
    	UserEntity userEntity = UserEntity.toUserEntity(userDTO);
    	UserEntity userEntityCheck= UserEntity.toUserEntity(userDTO);
    	userEntityCheck = userRepository.findBySocialIdAndPlatfomType(userEntity.getSocialId(), userEntity.getPlatfomType());
    	return userEntityCheck;
    }

	public void save(UserEntity user) {
		// TODO Auto-generated method stub
		userRepository.save(user);
	}
}
