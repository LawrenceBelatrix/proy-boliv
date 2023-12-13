import {Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import headerImag from '../assets/img/header-imgptu1.svg';
import headerImag1 from '../assets/img/header-imgptu2.svg';
import headerImag2 from '../assets/img/header-imgptu3.svg';
import headerImag3 from '../assets/img/header-imgptu4.svg';
import headerImag4 from '../assets/img/header-imgptu5.svg';
import headerImag5 from '../assets/img/header-imgptu6.svg';
import { ArrowRightCircle } from "react-bootstrap-icons";
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

export const Componente5 = () =>{
    const [loopnum, setloopnum] = useState(0);
    const [isDeleting, setDeleting] =useState(false);
    const toRotate = ["PLATOS ESTRELLAS DE LA ZONA LLANOS ORIENTALES", "VIVA MI PATRIA BOLIVIA!!!!", "EL PLACER DE LA CULTURA GASTRONOMICA"];
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
                        <span className="tagline">Zona Llanos Orientales</span>
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
                        <h2>PLATOS TIPICOS DE LA ZONA LLANOS ORIENTALES: BENI - PANDO - SANTA CRUZ</h2><br></br>
                        <h2>PLATO TIPICO DEL DEPARTAMENTO DE BENI</h2><br></br>
                        <h4>PLATO KEPERI BOLIVIANO.</h4>
                        <p><div>
                                <ul>
                                    <li>TIEMPO DE PREPARACION: APROX. 40 MINUTOS </li>
                                    <li>TIEMPO DE COCCION: APROX. 45 MINUTOS.</li>
                                    <li>DIFICULTAD: FACIL.</li>
                                    <li>PORCIONES: 4 PERSONAS.</li>
                                </ul>
                            </div>
                        </p>
                        <h4>RECETA  DEL KEPERI BOLIVIANO.</h4>
                        <h5>INGREDIENTES DEL KEPERI BOLIVIANO:</h5>
                        <p><div>
                                <ul>
                                    <li>2 kilogramos de Keperi tierno.</li>
                                    <li>3/4 taza de Jugo de limón.</li>
                                    <li>1 litro de Agua.</li>
                                    <li>1 pizca de Sal.</li>
                                    <li>1 pizca de Pimienta.</li>
                                </ul>
                            </div>
                        </p>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                        <img src={headerImag} alt="Header"/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4>COMO SE HACE EL KEPERI BOLIVIANO</h4>
                        <p><div>
                                <ul>
                                    <li>1.- Preparar un marinado con el jugo de limón, sal, comino y pimienta.</li>
                                    <li>2.- Colocar la pieza de keperi en una fuente y bañarlo con el marinado. Tapar y dejar en reposo unas tres horas.</li>
                                    <li>3.- Transcurrido el tiempo, colocar el agua en la fuente y taparla con papel de aluminio.</li>
                                    <li>4.- Hornear a fuego bajo por unas tres horas, voltee la pieza y cocinar por 45 a 60 minutos más. Retire el papel y deje que la pieza se dore por ambos lados durante unos 20 minutos aproximadamente.</li>
                                    <li>5.- Servir acompañado de arroz, yuca frita, ensalada de vegetales y llajuas de su preferencia.</li>
                                </ul>
                            </div>
                        </p>
                        <br></br>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} xl={6}>
                        <br/><br/><br/>
                        <img src={headerImag1} alt="Header"/>
                    </Col>
                    <Col>
                        <h2>PLATO ESTRELLA DEL DEPARTAMENTO DE BENI</h2><br></br>
                        <h4>SOPA DE ALBONDIGAS DE MAIZ.</h4>
                        <p><div>
                                <ul>
                                    <li>TIEMPO DE PREPARACION: APROX. 50 MINUTOS.</li>
                                    <li>TIEMPO DE COCCION: APROX. 50 MINUTOS.</li>
                                    <li>DIFICULTAD: INTERMEDIO.</li>
                                    <li>PORCIONES: 6 PERSONAS.</li>
                                </ul>
                            </div>
                        </p>
                        <h4>RECETA DE SOPA DE ALBONDIGAS DE MAIZ.</h4>
                        <h5>INGREDIENTES DE LA SOPA DE ALBONDIGAS DE MAIZ:</h5>
                        <p><div>
                                <ul>
                                    <li>250 gramos de Carne molida.</li>
                                    <li>250 gramos de Costilla de res.</li>
                                    <li>2 Cebollas.</li>
                                    <li>4 Dientes de ajo.</li>
                                    <li>1 Apio.</li>
                                    <li>1 Manojo de perejil.</li>
                                    <li>1 Manojo de cilantro.</li>
                                    <li>1 taza de Harina de maíz.</li>
                                    <li>2 Papas peladas y cortadas en trozos.</li>
                                    <li>100 gramos de Queso fresco.</li>
                                    <li>1 Cubo de caldo de carne.</li>
                                    <li>1 pizca de Sal.</li>
                                    <li>1 pizca de Pimienta.</li>
                                </ul>
                            </div>   
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col><br></br>
                        <h4>COMO SE HACE LA SOPA DE ALBONDIGAS DE MAIZ</h4>
                        <p><div>
                                <ul>
                                    <li>1.- Para hacer las albóndigas, debe mezclar la carne molida, huevo, harina, sal, comino y pimienta. Formar las albóndigas, cuidando de colocar queso dentro y llevar al refrigerador por unos 30 minutos.</li>
                                    <li>2.- En una olla, poner a cocinar las costillas con las cebollas y el apio picaditos, Luego añadirle el cubo de caldo de carne, ajo triturado, perejil y cilantro. Condimentar con sal y pimienta al gusto y dejar cocinar por unos 40 minuto aproximadamente.</li>
                                    <li>3.- Luego debe incorporar las albóndigas y las papas y cocine por unos 15 minutos.</li>
                                    <li>4.- Rectifique el sabor.</li>
                                    <li>5.- Sirva bien caliente acompañada de yuca sancochada.</li>
                                </ul>
                            </div>
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <br></br>
                        <h2>PLATO TIPICO DEL DEPARTAMENTO DE PANDO</h2><br></br>
                        <h4>SUDADO DE SURUBI.</h4>
                        <p><div>
                                <ul>
                                    <li>TIEMPO DE PREPARACION: APROX. 40 MINUTOS.</li>
                                    <li>TIEMPO DE COCCION: APROX. 1 HORA.</li>
                                    <li>DIFICULTAD: INTEREMEDIA.</li>
                                    <li>PORCIONES: 4 PERSONAS.</li>
                                </ul>
                            </div>
                        </p>
                        <h4>RECETA DEL SUDADO DE SURUBI.</h4>
                        <h5>INGREDIENTES DEL SUDADO DE SURUBI:</h5>
                        <p><div>
                                <ul>
                                    <li>4 Medallones de surubí.</li>
                                    <li>1 Cebolla.</li>
                                    <li>1 Tomate.</li>
                                    <li>1 Zanahoria.</li>
                                    <li>1 Pimiento morrón.</li>
                                    <li>4 Dientes de ajo.</li>
                                    <li>1/2 taza de Harina.</li>
                                    <li>1 taza de Vino blanco</li>
                                    <li>Jugo de limón.</li>
                                    <li>2 cucharas de Aceite de oliva.</li>
                                    <li>1 pizca de Sal.</li>
                                    <li>1 pizca de Pimienta.</li>
                                </ul>
                            </div>
                        </p>
                    </Col><br></br>
                    <Col xs={12} md={6} xl={7}>
                        <br/><br/><br/><br/><br/><br/><br/>
                        <img src={headerImag2} alt="Header"/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4>COMO SE HACE EL SUDADO DE SURUBI</h4>
                        <p><div>
                                <ul>
                                    <li>1.- Condimentar los medallones con sal y pimienta. Pasarlos por harina.</li>
                                    <li>2.- olocar una sartén al fuego con aceite de oliva, y proceda a sellar los medallones.</li>
                                    <li>3.- Retire el pescado y saltee la cebolla, el pimiento, el ajo y las zanahorias.</li>
                                    <li>4.- Añada el vino blanco, un toque de sal, pimienta y jugo de limón. Deje cocinar unos 2 minutos para que evapore el alcohol. Luego coloque los medallones y encima el tomate cortado en rodajas.</li>
                                    <li>5.- Tape el sartén y deje cocinar a fuego bajo por unos 5 minutos.</li>
                                    <li>6.- Sirva acompañado de papas y arroz.</li>
                                </ul>
                            </div>
                        </p>
                        <br></br>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} xl={8}>
                        <img src={headerImag3} alt="Header"/>
                    </Col>
                    <Col>
                        <h2>PLATO ESTRELLA DEL DEPARTAMENTO DE PANDO</h2><br/>
                        <h4>FAROFA CON CHARQUE.</h4>
                        <p><div>
                                <ul>
                                    <li>TIEMPO DE PREPARACION: APROX. 1 HORA Y 20 MINUTOS.</li>
                                    <li>TIEMPO DE COCCION: APROX. 1 HORA Y 30 MINUTOS.</li>
                                    <li>DIFICULTAD: INTERMEDIA A COMPLICADA.</li>
                                    <li>PORCIONES: 7 PERSONAS.</li>
                                </ul>
                            </div>
                        </p>
                        <h4>RECETA DE LA FAROFA CON CHARQUE.</h4>
                        <h5>INGREDIENTES DE LA FAROFA CON CHARQUE:</h5>
                        <p><div>
                                <ul>
                                    <li>1 cebolla cortada en julianas.</li>
                                    <li>150 grs de charque, desalado cocido y desilachado.</li>
                                    <li>2 cucharadas de sopa de mantequilla.</li>
                                    <li>3 tazas de harina de yuca.</li>
                                    <li>1 hoja de laurel seca.</li>
                                    <li>1/2 taza de agua.</li>
                                    <li>1/2 taza de leche.</li>
                                    <li>1 taza de cebollin verde picado a gusto.</li>
                                </ul>
                            </div>
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col><br/>
                        <h4>COMO SE HACE LA FAROFA CON CHARQUE</h4>
                        <p><div>
                                <ul>
                                    <li>1.- En una olla baja gruesa que sea fácil mover rehogar La cebolla en La mantequilla , añada La hoja de laurel y el charque,  cuando lãs cebollas esten doradas añada  lós demas ingredientes.</li>
                                    <li>2.- Mescle bien y sirva caliente..</li>
                                </ul>
                            </div>
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <br/>
                        <h2>PLATO TIPICO DEL DEPARTAMENTO DE SANTA CRUZ</h2><br></br>
                        <h4>PLATO SONSO DE YUCA</h4>
                        <p><div>
                                <ul>
                                    <li>TIEMPO DE PREPARACION: APROX. 40 MINUTOS.</li>
                                    <li>TIEMPO DE COCCION: APROX. 45 MINUTOS.</li>
                                    <li>DIFICULTAD: FACIL-MODERADA.</li>
                                    <li>PORCIONES: 6 PERSONAS.</li>
                                </ul>
                            </div>
                        </p>
                        <h4>RECETA DEL SONSO DE YUCA.</h4>
                        <h5>INGREDIENTES DEL SONSO DE YUCA:</h5>
                        <p><div>
                                <ul>
                                    <li>1 kilogramo de Queso.</li>
                                    <li>1/2 taza de Leche.</li>
                                    <li>1 cuchara de sal (al gusto).</li>
                                    <li>2 Huevos.</li>
                                    <li>1 cucharada de mantequilla o aceite.</li>
                                    <li>1 kilogramo de yuca.</li>
                                </ul>
                            </div>
                        </p>
                    </Col>
                    <Col xs={12} md={6} xl={6}>
                        <br/><br/><br/><br/><br/>
                        <img src={headerImag4} alt="Header"/>
                    </Col>
                <Row>
                    <Col>
                        <h4>COMO SE HACE EL SONSO DE YUCA</h4>
                        <p><div>
                                <ul>
                                    <li>1.- Pon a cocer la yuca en agua con una pizca de sal, mientras ralla el queso para tenerlo listo.</li>
                                    <li>2.- Una vez cocida la yuca, aplástala con un tenedor hasta hacerla puré y sácale la raíz. Mezcla la yuca con el queso rallado y añade el aceite o la mantequilla.</li>
                                    <li>3.- Agrega la leche y los huevos, mezclando muy bien. Pon la masa en un recipiente para el horno previamente engrasado.</li>
                                    <li>4.- Lleva la preparación al horno por 20 minutos, aproximadamente, a 120 °C. La idea del horneado es darle un dorado superficial de la masa.</li>
                                    <li>5.- Finalmente, retira el sonso del horno y déjalo enfriar un poco para servirlo como si se tratase de una tarta.</li>
                                </ul>
                            </div>
                        </p>
                        <br></br>
                    </Col>
                </Row>
                </Row>
                <Row>
                    <Col xs={12} md={6} xl={7}>
                        <br/><br/><br/><br/>
                        <img src={headerImag5} alt="Header"/>
                    </Col>
                    <Col>
                    <h2>PLATO ESTRELLA DEL DEPARTAMENTO DE SANTA CRUZ</h2><br/>
                    <h4>MAJADITO CRUCEÑO.</h4>
                        <p><div>
                                <ul>
                                    <li>TIEMPO DE PREPARACION: APROX. 50 MINUTOS.</li>
                                    <li>TIEMPO DE COCCION: APROX. 45 MINUTOS.</li>
                                    <li>DIFICULTAD: MEDIO - FACIL.</li>
                                    <li>PORCIONES: 8 PERSONAS.</li>
                                </ul>
                            </div>
                        </p>
                        <h4>RECETA DEL MAJADITO CRUCEÑO.</h4>
                        <h5>INGREDIENTES DEL MAJADITO CRUCEÑO:</h5>
                        <p><div>
                                <ul>
                                    <li>1/4 Libra de chorizo para freir.</li>
                                    <li>1 cebolla blanca cubitos pequeños.</li>
                                    <li>2 platanos maduros.</li>
                                    <li>1 1/2 taza de arroz.</li>
                                    <li>1/2 pimenton.</li>
                                    <li>4 huevos.</li>
                                    <li>1 diente de ajo.</li>
                                    <li>1 libra de charque.</li>
                                    <li>1 1/2 cucharadas de azafran.</li>
                                    <li>1 aceite (lo necesario).</li>
                                    <li>1/2 cucharilla de sal (al gusto).</li>
                                    <li>1 cebolla.</li>
                                </ul>
                            </div>
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col><br/>
                        <h4>COMO SE HACE el MAJADITO CRUCEÑO</h4>
                        <p><div>
                                <ul>
                                    <li>1.- Remoja el charque en agua tibia durante quince minutos, pare quitarle la sal, luego mortaja cada lonja hasta que pueda ser desmenuzado con los dedos. Tuéstalo en un poco aceite y retira cuando estén crocantes.</li>
                                    <li>2.- Lava el arroz y en una sartén grande, póngalo a cocinar sin agua removiendo constantemente hasta que seque el arroz, añade un diente de ajo finamente picado, y sigue removiendo hasta que se encuentre dorado.</li>
                                    <li>3.- Luego, añade la cabeza de cebolla, el tomate y el pimentón finamente picados, agrega el azafrán y el charque removiendo por unos minutos más.</li>
                                    <li>4.- En una olla agrega el arroz, vierte tres tazas de agua caliente, añade poca sal y cocina a fuego alto. Cuando el agua se vaya consumiendo, disminuye el fuego a bajo.</li>
                                    <li>5.- Aparte, pon a cocer la yuca pelada en agua caliente con sal. En una sartén, fríe en bastante aceite caliente, los plátanos cortados en tajadas, y los chorizos cortados en rodajas. Mezcla los chorizos con el arroz.</li>
                                    <li>6.- Sirve el majao, en cada plato pon varias tajadas de plátano, y un huevo frito encima del arroz. En una fuente colocar las yucas.</li>
                                </ul>
                            </div>
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}