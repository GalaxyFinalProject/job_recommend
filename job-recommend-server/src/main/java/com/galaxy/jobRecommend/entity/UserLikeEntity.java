package com.galaxy.jobRecommend.entity;

import com.galaxy.jobRecommend.dto.UserLikeDTO;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.DynamicInsert;

@Entity
@Getter
@Setter
@Data
@DynamicInsert
@Table(name ="liketable")
public class UserLikeEntity {

    @Id
    @Column(name = "company_code")
    private Long id;

    @Column(name = "platfom_type")
    private String platfomType;

    @Column(name = "social_id")
    private String socialId;


    public static UserLikeEntity toUserLikeEntity(UserLikeDTO userLikeDTO) {
        UserLikeEntity userLikeEntity = new UserLikeEntity();
        userLikeEntity.setId(userLikeDTO.getCompanyCode()); // companyCode 값을 id로 설정합니다.
        userLikeEntity.setPlatfomType(userLikeDTO.getPlatfomType());
        userLikeEntity.setSocialId(userLikeDTO.getSocialId());

        return userLikeEntity;
    }
}
