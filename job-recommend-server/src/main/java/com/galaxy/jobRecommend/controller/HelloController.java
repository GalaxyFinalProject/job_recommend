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
import org.springframework.ui.Model;
import com.galaxy.jobRecommend.dto.RecruitDTO;
import com.galaxy.jobRecommend.entity.RecruitEntity;
import com.galaxy.jobRecommend.service.RecruitService;

import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
public class HelloController {
	private final RecruitService recruitService;
	ArrayList<String> skillList = new ArrayList<>();
	@GetMapping(value = "/api/hello")
	public String hello() {
		return "안녕";
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
        		JSONParser parser = new JSONParser(recruitDTO.getRecruit_skill());
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
    @GetMapping(value ="/api/aaa")
    public void findById() throws ParseException {
    	Long id = (long) 1;
        RecruitDTO recruitDTO = recruitService.findById(id);
        // 어떠한 html로 가져갈 데이터가 있다면 model 사용
        System.out.println(recruitDTO.getRecruit_skill());
        
        JSONParser parser = new JSONParser(recruitDTO.getRecruit_skill());
        Object obj = parser.parse();
        
        System.out.println(obj.getClass().getName());
        System.out.println(obj);
            
        ArrayList<String> arrList = (ArrayList<String>) obj;

    }
    
}
