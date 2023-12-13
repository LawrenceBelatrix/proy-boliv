import {Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import headerImag from '../assets/img/header-imglogo.svg';
import { ArrowRightCircle } from "react-bootstrap-icons";
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

export const Componente6 = () =>{
    const [loopnum, setloopnum] = useState(0);
    const [isDeleting, setDeleting] =useState(false);
    const toRotate = ["GRACIAS POR VISITAR MI PAGINA", "ARRIBA INFORMATICA!", "TIGRE CAMPEON-2023"];
    const [text, setText] = useState("");
    const tiempo = 3000;
    const [delta, setDelta] =useState(300 - Math.random() * 100);

    useEffect(()=>{
        let ticker = setInterval(() => {
            tick();   
        },delta)
        return()=>{clearInterval(ticker)};
    },[text])

    const tick = () =>{
        let i = loopnum % toRotate.length;
        let fulltext = toRotate[i];
        let updateText = isDeleting ? fulltext.substring(0,text.length-1) : fulltext.substring(0,fulltext.length+1);

        setText(updateText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta/2);
        }
        if(!isDeleting &&  updateText === fulltext){
            setDeleting(true);
            setDelta(tiempo);  
        }else{
            if(isDeleting && updateText === ''){
                setDeleting(false)
                setloopnum(loopnum+1);
                setDelta(500);  
            }
        }
    }

    return(
        <section id="casual">
            <Container>
                <Row className="algin-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">GRACIAS, VIVA INFORMATICA - 2023!!</span>
                        {/* //TEXTO DEL TITULO// */}
                            <h1>{''}</h1>   
                        {/* //TEXTO DEL PARRAFO// */}
                        <br/><br/><br/><br/><br/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1><span className="wrap">{text}</span></h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <br/>
                        <h2>CREDITOS</h2><br></br>
                        <h1>PAGINA ELABORADA POR: JOAN JEREMY GONZALES ACARAPI.</h1>
                        <p><div>
                                <ul>
                                    <li>CI: 9903***</li>
                                    <li>DOCTORA: MARISOL TELLEZ</li>
                                    <li>FACULTAD: CIENCIAS PURAS Y NATURALES</li>
                                    <li>CARRERA: INFORMATICA</li>
                                    <li>MATERIA: PROGRAMACION-WEB INF-122</li>
                                    <li>BOLIVIA - LA PAZ</li>
                                </ul>
                            </div>
                        </p>
                        <h2>PROYECTO PLATOS TIPICAS DE BOLIVIA</h2>
                    </Col>
                    <Col xs={12} md={6} xl={3}>
                        <br/><br/><br/><br/>
                        <img src={headerImag} alt="Header"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}