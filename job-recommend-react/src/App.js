import './App.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import MainPage from './page/main/main';
import SocialLogin from './page/login/SocialLogin';
import { useEffect, useState } from 'react';
import MyLoginPage from './page/myLogin/myLogin';

function App() {
  let [loginModalView, setLoginModalView] = useState(false);
  let [loginCheck, setLoginCheck] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      console.log('login');
      setLoginCheck(true);
    }
  }, []);
  return (
    <>
      {
        loginModalView == true ? <SocialLogin setLoginModalView={setLoginModalView} loginModalView={loginModalView} loginCheck={loginCheck} setLoginCheck={setLoginCheck}>
        </SocialLogin> : null
      }
      <div className='main'>
        <Navbar bg="white" expand="lg" className='nav-size'>
          <Container>
            <Navbar.Brand className='right-sort' as={Link} to="/"><img src='/logo.png' style={{ width: '256px' }} /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
              <Nav className="left-sort">
                {
                  loginCheck == true ?
                    <Nav.Link as={Link} to="/mypage">My Page</Nav.Link> : null
                }
                {
                  loginCheck == true ?
                    <Nav.Link onClick={() => {
                      localStorage.removeItem('user');
                      setLoginCheck(false);
                      navigate('/');
                    }}>Logout</Nav.Link> :
                    <Nav.Link onClick={() => {
                      if (loginModalView == false) setLoginModalView(true);
                      else setLoginModalView(false);
                    }}>Login</Nav.Link>
                }
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<MainPage></MainPage>}></Route>
          <Route path="/mypage" element={<MyLoginPage></MyLoginPage>}></Route>
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
