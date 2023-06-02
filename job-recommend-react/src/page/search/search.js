import axios from "axios";
import { useEffect, useState } from "react";
import { Dropdown, DropdownButton, Table, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

function SearchPage() {
    const [FE_value, setFE_value] = useState([]);
    const [BE_value, setBE_value] = useState([]);
    const [devOps_value, setdevOps_value] = useState([]);
    const [ML_value, setML_value] = useState([]);
    const [SelectList, setSelectList] = useState([]);

    let [FrontSkill, setFrontSkill] = useState(false);
    let [BackSkill, setBackSkill] = useState(false);
    let [DevOpsSkill, setDevOpsSkill] = useState(false);
    let [MLSkill, setMLSkill] = useState(false);
    let [listShow, setListShow] = useState(false);

    let result = [];
    const FE_handleChange = (val) => {
        setFE_value(val);
    };

    const BE_handleChange = (val) => {
        setBE_value(val);
    };

    const devOps_handleChange = (val) => {
        setdevOps_value(val);
    };

    const ML_handleChange = (val) => {
        setML_value(val);
    };
    return (
        <div>
            <h4>Select your stack</h4>
            <DropdownButton id="recruit_skill" title="직무 선택 ">
                <Dropdown.Item onClick={() => {
                    setFrontSkill(true);
                    setBackSkill(false);
                    setDevOpsSkill(false);
                    setMLSkill(false);
                    //React, Vue.js, JavaScript, TypeScript, Node.Js, Svelte, HTML, CSS, Angular,jQuery
                }}>프론트엔드 개발자</Dropdown.Item>
                <Dropdown.Item onClick={() => {
                    setFrontSkill(false);
                    setBackSkill(true);
                    setDevOpsSkill(false);
                    setMLSkill(false);

                }}>서버/백엔드 개발자</Dropdown.Item>
                <Dropdown.Item onClick={() => {
                    setFrontSkill(false);
                    setBackSkill(false);
                    setDevOpsSkill(true);
                    setMLSkill(false);

                }}>devops/시스템 개발자</Dropdown.Item>
                <Dropdown.Item onClick={() => {
                    setFrontSkill(false);
                    setBackSkill(false);
                    setDevOpsSkill(false);
                    setMLSkill(true);
                }}>인공지능/머신러닝</Dropdown.Item>
            </DropdownButton>
            <div >
                {
                    FrontSkill == true ? <ToggleButtonGroup type="checkbox" className="mb-2" value={FE_value} onChange={FE_handleChange}>
                        <ToggleButton id="FE-1" value={'ReactJS'}>
                            ReactJS
                        </ToggleButton>
                        <ToggleButton id="FE-2" value={'Vue.js'}>
                            Vue.js
                        </ToggleButton>
                        <ToggleButton id="FE-3" value={'JavaScript'}>
                            JavaScript
                        </ToggleButton>
                        <ToggleButton id="FE-4" value={'TypeScript'}>
                            TypeScript
                        </ToggleButton>
                        <ToggleButton id="FE-5" value={'Node.js'}>
                            Node.js
                        </ToggleButton>
                        <ToggleButton id="FE-6" value={'Svelte'}>
                            Svelte
                        </ToggleButton>
                        <ToggleButton id="FE-7" value={'HTML'}>
                            HTML
                        </ToggleButton>
                        <ToggleButton id="FE-8" value={'CSS'}>
                            CSS
                        </ToggleButton>
                        <ToggleButton id="FE-9" value={'Angular'}>
                            Angular
                        </ToggleButton>
                        <ToggleButton id="FE-10" value={'jQuery'}>
                            jQuery
                        </ToggleButton>
                    </ToggleButtonGroup> : null
                }
            </div>

            <div>
                {
                    BackSkill == true ? <ToggleButtonGroup type="checkbox" className="mb-2" value={BE_value} onChange={BE_handleChange}>
                        <ToggleButton id="BE-1" value={'Java'}>
                            Java
                        </ToggleButton>
                        <ToggleButton id="BE-2" value={'Spring Boot'}>
                            Spring Boot
                        </ToggleButton>
                        <ToggleButton id="BE-3" value={'Node.js'}>
                            Node.js
                        </ToggleButton>
                        <ToggleButton id="BE-4" value={'Python'}>
                            Python
                        </ToggleButton>
                        <ToggleButton id="BE-5" value={'Djanngo'}>
                            Djanngo
                        </ToggleButton>
                        <ToggleButton id="BE-6" value={'PHP'}>
                            PHP
                        </ToggleButton>
                        <ToggleButton id="BE-7" value={'C++'}>
                            C++
                        </ToggleButton>
                        <ToggleButton id="BE-8" value={'C#'}>
                            C#
                        </ToggleButton>
                        <ToggleButton id="BE-9" value={'AWS'}>
                            AWS
                        </ToggleButton>
                        <ToggleButton id="BE-10" value={'MySQL'}>
                            MySQL
                        </ToggleButton>
                        <ToggleButton id="BE-11" value={'Oracle'}>
                            Oracle
                        </ToggleButton>
                    </ToggleButtonGroup> : null
                }
            </div>

            <div>
                {
                    DevOpsSkill == true ? <ToggleButtonGroup type="checkbox" className="mb-2" value={devOps_value} onChange={devOps_handleChange}>
                        <ToggleButton id="devOps-1" value={'AWS'}>
                            AWS
                        </ToggleButton>
                        <ToggleButton id="devOps-2" value={'Linux'}>
                            Linux
                        </ToggleButton>
                        <ToggleButton id="devOps-3" value={'Python'}>
                            Python
                        </ToggleButton>
                        <ToggleButton id="devOps-4" value={'Kubernetes'}>
                            Kubernetes
                        </ToggleButton>
                        <ToggleButton id="devOps-5" value={'Network'}>
                            Network
                        </ToggleButton>
                        <ToggleButton id="devOps-6" value={'GCP'}>
                            GCP
                        </ToggleButton>
                        <ToggleButton id="devOps-7" value={'Windows'}>
                            Windows
                        </ToggleButton>
                        <ToggleButton id="devOps-8" value={'AZURE'}>
                            AZURE
                        </ToggleButton>
                        <ToggleButton id="devOps-9" value={'Terraform'}>
                            Terraform
                        </ToggleButton>
                        <ToggleButton id="devOps-10" value={'jQuery'}>
                            jQuery
                        </ToggleButton>
                    </ToggleButtonGroup> : null
                }
            </div>

            <div>
                {
                    MLSkill == true ? <ToggleButtonGroup type="checkbox" className="mb-2" value={ML_value} onChange={ML_handleChange}>
                        <ToggleButton id="ML-1" value={'Python'}>
                            Python
                        </ToggleButton>
                        <ToggleButton id="ML-2" value={'TensorFlow'}>
                            TensorFlow
                        </ToggleButton>
                        <ToggleButton id="ML-3" value={'PyTorch'}>
                            PyTorch
                        </ToggleButton>
                        <ToggleButton id="ML-4" value={'C++'}>
                            C++
                        </ToggleButton>
                        <ToggleButton id="ML-5" value={'C'}>
                            C
                        </ToggleButton>
                        <ToggleButton id="ML-6" value={'OpenCV'}>
                            OpenCV
                        </ToggleButton>
                        <ToggleButton id="ML-7" value={'Java'}>
                            Java
                        </ToggleButton>
                    </ToggleButtonGroup> : null
                }
            </div>
            <button onClick={async () => {
                result = result.concat(FE_value, BE_value, devOps_value, ML_value);
                result = [...new Set(result)];
                skill_list(JSON.stringify(result));
                await axios.get("/api/list").then((response) => {
                    let total = [];
                    for (let i = 0; i < (response.data).length; i++) {
                        total.push((response.data)[i]);
                    }
                    setSelectList(total);
                }).catch((e) => {
                    console.log(e);
                })
                setListShow(true);
            }}>
                OK
            </button>
            {
                listShow == true ? <div><Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>공고명</th>
                            <th>마감일</th>
                            <th>링크</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            SelectList.map((a, i) => {
                                return (
                                    <tr>
                                        <td>{i}</td>
                                        <td>{SelectList[i].recruit_name}</td>
                                        <td>{SelectList[i].recruit_date}</td>
                                        <td>{SelectList[i].recruit_link}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table></div> : null
            }
        </div>
    )
}
async function skill_list(data) {
    await axios.post("/api/skill", { data }).then((response) => {
        console.log(response.data);
    }).catch((e) => {
        console.log(e);
    })
}

export default SearchPage;