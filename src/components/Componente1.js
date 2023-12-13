//nadvar inicio del componente
import { Navbar,Container,Nav } from "react-bootstrap";
import { useState,useEffect } from "react";
import logo from '../assets/img/logo3.svg';
import navIcon1 from '../assets/img/nav-icon3.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon1.svg';

export const Componente1 = () =>{

    const[scrolled, setScrolled] = useState(false);
    const[activeLink, setActiveLink] = useState('home');

    
    useEffect(()=>{
        const onScroll = () =>{
            if(window.scrollY >50){
                setScrolled(true);
            }else{
                setScrolled(true)
            }
        }
        window.addEventListener("scroll", onScroll)
        return()=>window.removeEventListener("scroll",onScroll);
    },[])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    
    return(
        <Navbar expand="lg" className={scrolled ? "scrolled":""}>
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} alt="Logo"></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Inicio</Nav.Link>
                    <Nav.Link href="#casual" className={activeLink === 'casual' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('casual')}>Zona Andina</Nav.Link>
                    <Nav.Link href="#skills"className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('skills')}>Zona Sub Andina</Nav.Link>
                    <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('projects')}>Zona LLanos Orientales</Nav.Link>
                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        <a href="#"><img src={navIcon1} alt=""/></a>
                        <a href="#"><img src={navIcon2} alt=""/></a>
                        <a href="#"><img src={navIcon3} alt=""/></a>
                    </div>
                    <button className="vvd" onClick={()=>console.log('Conectado')}><span>Inicio de Sesion</span></button>
                </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}