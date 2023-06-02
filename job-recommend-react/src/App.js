import './App.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';
import SearchPage from './page/search/search';
import MainPage from './page/main/main';
import SocialLogin from './page/login/SocialLogin';
function App() {

  return (
    <div className='main'>
      <Navbar bg="white" expand="lg" className='nav-size'>
        <Container>
          <Navbar.Brand className='right-sort' href="/"><img src='/logo.png' style={{ width: '256px' }} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="left-sort">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/Login">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<MainPage></MainPage>}></Route>
        <Route path="/search" element={<SearchPage></SearchPage>}></Route>
        <Route path="/mypage" element={<myPage></myPage>}></Route>
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
    </div>
  )
}

export default App;
