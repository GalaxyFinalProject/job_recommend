package com.galaxy.jobRecommend.dto;


import com.galaxy.jobRecommend.entity.RecruitEntity;
import com.galaxy.jobRecommend.entity.UserEntity;
import com.galaxy.jobRecommend.entity.UserLikeEntity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class UserLikeDTO {

    private Long companyCode;
    private String socialId;
    private String platfomType;

    public static UserLikeDTO toUserLikeDTO(UserLikeEntity userLikeEntity){
        UserLikeDTO userLikeDTO = new UserLikeDTO();

        userLikeDTO.setCompanyCode(userLikeEntity.getId());
        userLikeDTO.setPlatfomType(userLikeEntity.getPlatfomType());
        userLikeDTO.setSocialId(userLikeEntity.getSocialId());

        return userLikeDTO;
    }

}
