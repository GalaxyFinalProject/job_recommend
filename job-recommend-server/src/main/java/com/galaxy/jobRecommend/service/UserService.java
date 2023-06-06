package com.galaxy.jobRecommend.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.galaxy.jobRecommend.dto.UserDTO;
import com.galaxy.jobRecommend.entity.UserEntity;
import com.galaxy.jobRecommend.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service //스프링이 관리해주는 객체 == 스프링 빈
@RequiredArgsConstructor //controller와 같이. final 멤버변수 생성자 만드는 역할 
public class UserService {
	
	private final UserRepository userRepository;

    public void save(UserDTO userDTO) {
        // repsitory의 save 메서드 호출
        UserEntity userEntity = UserEntity.toUserEntity(userDTO);
        userRepository.save(userEntity);
        //Repository의 save메서드 호출 (조건. entity객체를 넘겨줘야 함)

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
