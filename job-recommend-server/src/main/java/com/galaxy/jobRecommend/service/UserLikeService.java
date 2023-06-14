package com.galaxy.jobRecommend.service;

import com.galaxy.jobRecommend.dto.UserLikeDTO;
import com.galaxy.jobRecommend.entity.UserLikeEntity;
import com.galaxy.jobRecommend.repository.UserLikeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service //스프링이 관리해주는 객체 == 스프링 빈
@RequiredArgsConstructor //controller와 같이. final 멤버변수 생성자 만드는 역할
public class UserLikeService {
    private final UserLikeRepository userLikeRepository;
    public void save(UserLikeDTO userLikeDTO) {
        // repsitory의 save 메서드 호출
        UserLikeEntity userLikeEntity = UserLikeEntity.toUserLikeEntity(userLikeDTO);
        userLikeRepository.save(userLikeEntity);

    }
    public void deleteLike(UserLikeDTO userLikeDTO) {
        // repsitory의 save 메서드 호출
        UserLikeEntity userLikeEntity = UserLikeEntity.toUserLikeEntity(userLikeDTO);
        userLikeRepository.deleteById(userLikeEntity.getId());

    }
    public UserLikeDTO saveIdCheck(UserLikeDTO userLikeDTO){
        UserLikeEntity userLikeEntity = UserLikeEntity.toUserLikeEntity(userLikeDTO);
        Optional<UserLikeEntity> optionalUserLikeEntity = userLikeRepository.findById(userLikeEntity.getId());
        if (optionalUserLikeEntity.isPresent()){
            return UserLikeDTO.toUserLikeDTO(optionalUserLikeEntity.get()); // optional을 벗겨내서 entity -> dto 변환
        }else {
            return null;
        }

    }
}
