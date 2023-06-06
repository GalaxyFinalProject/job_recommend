package com.galaxy.jobRecommend.dto;

import com.galaxy.jobRecommend.entity.UserEntity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class UserDTO {
	private Long userId;
	private String platfomType;
	private String socialId;
	private String userLikeAddress;
	private String userLikeSkill;
	private String userLikeJob;
	
	public static UserDTO toUserDTO(UserEntity userEntity){
		UserDTO userDTO = new UserDTO();
		userDTO.setUserId(userEntity.getUserId());
		userDTO.setPlatfomType(userEntity.getPlatfomType());
		userDTO.setSocialId(userEntity.getSocialId());
		userDTO.setUserLikeAddress(userEntity.getUserLikeAddress());
		userDTO.setUserLikeSkill(userEntity.getUserLikeSkill());
        userDTO.setUserLikeJob(userEntity.getUserLikeJob());

        return userDTO;
    }
}
