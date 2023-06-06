package com.galaxy.jobRecommend.entity;

import com.galaxy.jobRecommend.dto.UserDTO;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;


@Entity
@Getter
@Setter
@Data
@Table(name ="user")
public class UserEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_id")
	private Long userId;
	
	@Column(name = "platfom_type")
	private String platfomType;
	
	@Column(name = "social_id")
	private String socialId;
	
	@Column(name = "user_like_address")
	private String userLikeAddress;
	
	@Column(name = "user_like_skill")
	private String userLikeSkill;
	
	@Column(name = "user_like_job")
	private String userLikeJob;
	
	
	public static UserEntity toUserEntity(UserDTO userDTO) {
		UserEntity userEntity = new UserEntity();

		userEntity.setUserId(userDTO.getUserId());
		userEntity.setPlatfomType(userDTO.getPlatfomType());
		userEntity.setSocialId(userDTO.getSocialId());
		userEntity.setUserLikeAddress(userDTO.getUserLikeAddress());
		userEntity.setUserLikeSkill(userDTO.getUserLikeSkill());
		userEntity.setUserLikeJob(userDTO.getUserLikeJob());

		return userEntity;

	}
}
