package com.galaxy.jobRecommend.service;

import com.galaxy.jobRecommend.dto.UserLikeDTO;
import com.galaxy.jobRecommend.entity.UserLikeEntity;
import com.galaxy.jobRecommend.repository.UserLikeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service //�������� �������ִ� ��ü == ������ ��
@RequiredArgsConstructor //controller�� ����. final ������� ������ ����� ����
public class UserLikeService {
    private final UserLikeRepository userLikeRepository;
    public void save(UserLikeDTO userLikeDTO) {
        // repsitory�� save �޼��� ȣ��
        UserLikeEntity userLikeEntity = UserLikeEntity.toUserLikeEntity(userLikeDTO);
        userLikeRepository.save(userLikeEntity);

    }
    public void deleteLike(UserLikeDTO userLikeDTO) {
        // repsitory�� save �޼��� ȣ��
        UserLikeEntity userLikeEntity = UserLikeEntity.toUserLikeEntity(userLikeDTO);
        userLikeRepository.deleteById(userLikeEntity.getId());

    }
    public UserLikeDTO saveIdCheck(UserLikeDTO userLikeDTO){
        UserLikeEntity userLikeEntity = UserLikeEntity.toUserLikeEntity(userLikeDTO);
        Optional<UserLikeEntity> optionalUserLikeEntity = userLikeRepository.findById(userLikeEntity.getId());
        if (optionalUserLikeEntity.isPresent()){
            return UserLikeDTO.toUserLikeDTO(optionalUserLikeEntity.get()); // optional�� ���ܳ��� entity -> dto ��ȯ
        }else {
            return null;
        }

    }
}
