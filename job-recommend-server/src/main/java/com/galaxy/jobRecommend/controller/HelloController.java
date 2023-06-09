package com.galaxy.jobRecommend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.*;

import org.apache.tomcat.util.json.JSONParser;
import org.apache.tomcat.util.json.ParseException;
import org.springframework.stereotype.Controller;
import com.galaxy.jobRecommend.dto.RecruitDTO;
import com.galaxy.jobRecommend.dto.UserDTO;
import com.galaxy.jobRecommend.entity.UserEntity;
import com.galaxy.jobRecommend.service.RecruitService;
import com.galaxy.jobRecommend.service.UserService;

import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
public class HelloController {
	private final RecruitService recruitService;
	private final UserService userService;
	ArrayList<String> skillList = new ArrayList<>();
    UserEntity NowUser;
	@ResponseBody
	@PostMapping("/user/save")    // name값을 requestparam에 담아온다
    public UserEntity save(@RequestBody UserDTO userDTO) throws ParseException {
//        if(userService.saveIdCheck(userDTO)==null)
//        {
//    		System.out.println("MemberController.save");
//            System.out.println("memberDTO = " + userDTO);
//        	userService.save(userDTO);
//        }
//        else {
//        	UserEntity user = userService.saveIdCheck(userDTO);
//        	System.out.println("check = " + user.getUserLikeSkill());
//        	if(user.getUserLikeSkill() != null) {
//        		JSONParser parser = new JSONParser(user.getUserLikeSkill());
//                Object obj = parser.parse();
//
//                ArrayList<String> arrList = (ArrayList<String>) obj;
//                skillList = arrList;
//                return skillList; // 클라이언트에게 응답 데이터 반환
//        	}
//        	else return null;
//        }
//        return null;
		
		if(userService.saveIdCheck(userDTO)==null)
        {
    		System.out.println("MemberController.save");
            System.out.println("memberDTO = " + userDTO);
            NowUser = UserEntity.toUserEntity(userDTO);
        	userService.save(userDTO);

        }
        else {
        	UserEntity user = userService.saveIdCheck(userDTO);
            NowUser = user;
        	return user;
        }
        return null;
    }
	
	@ResponseBody
	@PostMapping("/user/save/list")    // name값을 requestparam에 담아온다
    public String Listsave(@RequestBody UserDTO userDTO) {
		System.out.println("memberDTO = " + userDTO);
		System.out.println(userService.saveIdCheck(userDTO));
        if(userService.saveIdCheck(userDTO)!=null)
        {
        	UserEntity user = userService.saveIdCheck(userDTO);
        	
        	user.setUserLikeAddress(userDTO.getUserLikeAddress());
        	user.setUserLikeSkill(userDTO.getUserLikeSkill());
        	user.setUserLikeJob(userDTO.getUserLikeJob());
        	System.out.println("save user = " + user);
        	userService.save(user);
            NowUser = user;
        }
        else{
            NowUser = UserEntity.toUserEntity(userDTO);
        }
        return "Success"; // 클라이언트에게 응답 데이터 반환
    }
	
	@SuppressWarnings("unchecked")
	@ResponseBody
	@PostMapping("/api/skill")
	public String handleRequest(@RequestBody RequestData requestData) throws ParseException {
        String receivedValue = requestData.getData();
        // 받은 값을 처리하는 로직 작성
        JSONParser parser = new JSONParser(receivedValue);
        Object obj = parser.parse();
        
        System.out.println(obj.getClass().getName());
        System.out.println(obj);
            
        ArrayList<String> arrList = (ArrayList<String>) obj;
        skillList = arrList;
        return "Success"; // 클라이언트에게 응답 데이터 반환
    }

    @ResponseBody
    @PostMapping("/api/logout")
    public String logout()  {
        NowUser = null;
        return "Success"; // 클라이언트에게 응답 데이터 반환
    }

    public static class RequestData {
        private String data;

        public String getData() {
            return data;
        }

        public void setData(String data) {
            this.data = data;
        }
    }
    @ResponseBody
    @GetMapping(value ="/api/list")
    public List<RecruitDTO> findAll() throws ParseException {

        List<RecruitDTO> recruitDTOList = recruitService.findAll();
        List<RecruitDTO> recruitDTOSelect = new ArrayList<>();
        System.out.println(NowUser);

        for(RecruitDTO recruitDTO : recruitDTOList){
        	for(int i=0;i<skillList.size();i++) {
        		JSONParser parser = new JSONParser(recruitDTO.getRecruitSkill());
                Object obj = parser.parse();
                ArrayList<String> arrList = (ArrayList<String>) obj;
                for(int j=0;j<arrList.size();j++) {
                	if(skillList.get(i).equals(arrList.get(j)))
                    {
                        if (!recruitDTOSelect.contains(recruitDTO))
                        {
                            recruitDTO.setRecruitScore(((float)0.3 * (float)(1.0 / skillList.size())) + (float)(0.04 * recruitDTO.getRecruitRank()));
                            recruitDTOSelect.add(recruitDTO);
                        }
                        else {
                            recruitDTO.setRecruitScore(recruitDTO.getRecruitScore() + (float)0.3 * (float)(1.0 / skillList.size()));
                        }
                    }
                }
            }
            if(NowUser !=null){
                if(NowUser.getUserLikeJob()!=null)
                {
                    JSONParser parserJob = new JSONParser(NowUser.getUserLikeJob());
                    Object objUserJob = parserJob.parse();
                    ArrayList<String> UserJobList = (ArrayList<String>) objUserJob;

                    JSONParser parserRecruitJob = new JSONParser(recruitDTO.getRecruitJob());
                    Object objRecruitJob = parserRecruitJob.parse();
                    ArrayList<String> recruitJobList = (ArrayList<String>) objRecruitJob;

                    for(int i=0;i<UserJobList.size();i++){
                        if(UserJobList.get(i).equals(recruitJobList.get(i))){
                            recruitDTO.setRecruitScore(recruitDTO.getRecruitScore() + (float)0.3 * (float)(1.0 / UserJobList.size()));
                        }
                    }
                }
                if(NowUser.getUserLikeJob()!=null){
                    JSONParser parserUserAddress = new JSONParser(NowUser.getUserLikeAddress());
                    Object objUserAddress = parserUserAddress.parse();
                    ArrayList<String> UserAddressList = (ArrayList<String>) objUserAddress;

                    for(int i=0;i<UserAddressList.size();i++){
                        if(recruitDTO.getRecruitAddress().contains(UserAddressList.get(i))){
                            recruitDTO.setRecruitScore(recruitDTO.getRecruitScore() + (float)0.2 * (float)(1.0 / UserAddressList.size()));
                        }
                    }
                }
            }
      	}
        recruitDTOSelect.sort((r1, r2) -> Float.compare(r2.getRecruitScore(), r1.getRecruitScore()));
        for(RecruitDTO recruitDTO : recruitDTOSelect){
            recruitDTO.setRecruitScore(0);
        }
        return recruitDTOSelect;
    }
    @ResponseBody
    @GetMapping("/all")
    public List<RecruitDTO> ALLlist(){
    	List<RecruitDTO> recruitDTOList = recruitService.findAll();
    	List<RecruitDTO> recruitDTOAll = new ArrayList<>();
    	for(RecruitDTO recruitDTO : recruitDTOList){
    		recruitDTOAll.add(recruitDTO);
      	}
        return recruitDTOAll;
    }
    
    @ResponseBody
    @PostMapping("/search")
    public List<RecruitDTO> search(@RequestBody RequestData requestData){
    	System.out.println(requestData.getData());
    	List<RecruitDTO> recruitDTOList = recruitService.searchPosts(requestData.getData());
    	System.out.println(recruitDTOList);
    	return recruitDTOList;
    }
}
