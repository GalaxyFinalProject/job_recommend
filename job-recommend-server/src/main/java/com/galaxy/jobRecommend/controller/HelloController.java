package com.galaxy.jobRecommend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.ArrayList;
import java.util.List;

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
        	userService.save(userDTO);
        }
        else {
        	UserEntity user = userService.saveIdCheck(userDTO);
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
        for(RecruitDTO recruitDTO : recruitDTOList){
        	for(int i=0;i<skillList.size();i++) {
        		JSONParser parser = new JSONParser(recruitDTO.getRecruitSkill());
                Object obj = parser.parse();
                ArrayList<String> arrList = (ArrayList<String>) obj;
                for(int j=0;j<arrList.size();j++) {
                	if(skillList.get(i).equals(arrList.get(j))) {
                		if (!recruitDTOSelect.contains(recruitDTO)) {
                			recruitDTOSelect.add(recruitDTO);
                		}
                	}
                }
            }
      	}
        System.out.println(recruitDTOSelect);
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
