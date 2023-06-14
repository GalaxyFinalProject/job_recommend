import './App.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import MainPage from './page/main/main';
import SocialLogin from './page/login/SocialLogin';
import { useEffect, useState } from 'react';
import MyLoginPage from './page/myLogin/myLogin';
import TopButton from './component/TopButton';
import axios from 'axios';
import MyLikePage from './page/myLike/myLike';
import { useDispatch, useSelector } from 'react-redux';
import { clearUser } from './store/store';

function App() {
  let dispatch = useDispatch();
  let userShow = useSelector(state => state.LoginUser);
  let [loginModalView, setLoginModalView] = useState(false);
  let [loginCheck, setLoginCheck] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {
        loginModalView == true ? <SocialLogin setLoginModalView={setLoginModalView} loginModalView={loginModalView} loginCheck={loginCheck} setLoginCheck={setLoginCheck}>
        </SocialLogin> : null
      }
      <div className='main'>
        <Navbar bg="white" expand="lg" className='nav-size'>
          <Container>
            <Navbar.Brand className='right-sort' as={Link} to="/"><img src='./logo2.png' /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
              <Nav className="left-sort">
                {
                  loginCheck === true ?
                    <Nav.Link as={Link} to="/mylike" className='navList' >My Like</Nav.Link> : null
                }
                {
                  loginCheck === true ?
                    <Nav.Link as={Link} to="/mypage" className='navList'>My Page</Nav.Link> : null
                }
                {
                  loginCheck === true ?
                    <Nav.Link className='navList' onClick={async () => {
                      if (window.confirm("로그아웃 하시겠습니까?")) {
                        await axios.post("/api/logout")
                          .then((response) => {
                            dispatch(clearUser());
                            setLoginCheck(false);
                            navigate('/');
                          }).catch((e) => {
                            console.log(e);
                          })

                      }
                    }}>Logout</Nav.Link> :
                    <Nav.Link className='navList' onClick={() => {
                      if (loginModalView == false) setLoginModalView(true);
                      else setLoginModalView(false);
                    }}>Login</Nav.Link>
                }
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <TopButton></TopButton>
        <Routes>
          <Route path="/" element={<MainPage></MainPage>}></Route>
          <Route path="/mypage" element={<MyLoginPage></MyLoginPage>} ></Route>
          <Route path="/mylike" element={<MyLikePage></MyLikePage>}></Route>

        </Routes>
        <div className='footer'>
          <div style={{ display: 'flex', paddingLeft: '50px', paddingRight: '50px', paddingBottom: '10px' }}>
            <div className='item'>Rocket Career</div>
            <div className='item'>이용약관</div>
            <div className='item'>개인정보처리방침</div>
            <div className='item'>서비스 소개</div>
            <div className='item'>팀소개</div>
          </div>
          <div style={{ textAlign: 'center', marginLeft: '200px' }}>Copyright Galaxy. All rights reserved</div>
        </div>
      </div >
    </>
  )
}

export default App;
