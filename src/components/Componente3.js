import {Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import headerImag from '../assets/img/header-imgp1.svg';
import headerImag1 from '../assets/img/header-imgp2.svg';
import headerImag2 from '../assets/img/header-imgp3.svg';
import headerImag3 from '../assets/img/header-imgp4.svg';
import headerImag4 from '../assets/img/header-imgp5.svg';
import headerImag5 from '../assets/img/header-imgp6.svg';
import { ArrowRightCircle } from "react-bootstrap-icons";
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

export const Componente3 = () =>{
    const [loopnum, setloopnum] = useState(0);
    const [isDeleting, setDeleting] =useState(false);
    const toRotate = ["PLATOS ESTRELLAS DE LA ZONA ANDINA", "VIVA MI PATRIA BOLIVIA!!!!", "EL AMOR EN UN SOLO PLATO"];
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
                        <span className="tagline">Zona Andina</span>
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
                        <h2>PLATOS TIPICOS DE LA ZONA ANDINA: LA PAZ - ORURO - POTOSI</h2><br></br>
                        <h2>PLATO TIPICO DEL DEPARTAMENTO DE LA PAZ</h2><br></br>
                        <h4>PLATO PACEÑO.</h4>
                        <p><div>
                                <ul>
                                    <li>TIEMPO DE PREPARACION: APROX. 30 MINUTOS.</li>
                                    <li>TIEMPO DE COCCION: APROX. 1 HORA Y 30 MINUTOS.</li>
                                    <li>DIFICULTAD: MEDIA.</li>
                                    <li>PORCIONES: 6 PERSONAS.</li>
                                </ul>
                            </div>
                        </p>
                        <h4>RECETA PLATO PACEÑO.</h4>
                        <h5>INGREDIENTES DEL PLATO PACEÑO:</h5>
                        <p><div>
                                <ul>
                                    <li>6 Mazorcas grandes de maiz.</li>
                                    <li>12 Papas medianas.</li>
                                    <li>1 Queso Grande.</li>
                                    <li>1 Cucharada y media de Azucar.</li>
                                    <li>1 Cucharada y media de Anis.</li>
                                    <li>Sal a gusto.</li>
                                    <li>Aceite para freir.</li>
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
                        <h4>COMO SE HACE EL PLATO PACEÑO</h4>
                        <p><div>
                                <ul>
                                    <li>1.- Cocinar las Mazorcas: En una olla grande, hervir agua con 1 cucharada y media de azúcar y 1 cucharadita y media de anís. Añadir las mazorcas de maíz y cocinar a fuego alto durante 25 a 30 minutos.</li>
                                    <li>2.- Cocinar las Papas: En otra olla, cocer las papas en agua con sal al gusto, hasta que estén blandas.</li>
                                    <li>3.- Preparar el Queso: Cortar el queso en rodajas finas. Hornearlas hasta que estén doradas y crujientes, o freírlas en aceite caliente hasta obtener un color dorado.</li>
                                    <li>4.- Servir: En cada plato, colocar una mazorca de maíz, una rodaja de queso frito, una papa y, opcionalmente, una cucharada de llajwa (salsa picante tradicional).</li>
                                    <li>5.- Opción con Carne: Si se desea, agregar un bistec de res a cada plato. La carne deberá ser preparada previamente al gusto.</li>
                                </ul>
                            </div>
                        </p>
                        <br></br>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} xl={8}>
                        <br/>
                        <img src={headerImag1} alt="Header"/>
                    </Col>
                    <Col>
                        <h2>PLATO ESTRELLA DEL DEPARTAMENTO DE LA PAZ</h2><br></br>
                        <h4>FRICASE DE CERDO.</h4>
                        <p><div>
                                <ul>
                                    <li>TIEMPO DE PREPARACION: APROX. 30 MINUTOS.</li>
                                    <li>TIEMPO DE COCCION: APROX. 60 MINUTOS.</li>
                                    <li>DIFICULTAD: MEDIA.</li>
                                    <li>PORCIONES: 6 PERSONAS.</li>
                                </ul>
                            </div>
                        </p>
                        <h4>RECETA DEL FRICASE PACEÑO.</h4>
                        <h5>INGREDIENTES DEL FRICASE PACEÑO:</h5>
                        <p><div>
                                <ul>
                                    <li>800 gramos de carne de cerdo.</li>
                                    <li>2 1/2 tazas de chuño remojado y pelado.</li>
                                    <li>800 gramos de maíz cocido.</li>
                                    <li>3/4 cucharadita de pimienta y ajo en polvo.</li>
                                    <li>3/4 cucharada de sal molida.</li>
                                    <li>2 1/2 ajíes amarillos en vaina.</li>
                                    <li>1 1/2 cucharadas de pan molido.</li>
                                    <li>2 dientes de ajo picados finamente.</li>
                                    <li>3/4 cucharada de comino molido.</li>
                                    <li>800 ml de agua</li>

                                </ul>
                            </div>   
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col><br></br>
                        <h4>COMO SE HACE EL FRICASE PACEÑO</h4>
                        <p><div>
                                <ul>
                                    <li>1.- Preparar el Ají: Quitar las semillas de los ajíes en vaina. Licuar las vainas con suficiente agua y 2 dientes de ajo picados.</li>
                                    <li>2.- Cortar la Carne: Trocear la carne de cerdo en pedazos medianos, pensando en una porción por plato.</li>
                                    <li>3.- Cocinar la Carne: Colocar la carne en una olla con agua y la ramita de hierbabuena. Condimentar con comino, pimienta, ajo en polvo y una pizca de sal. Cocinar por 15 a 20 minutos.</li>
                                    <li>4.- Agregar Maíz y Chuño: Añadir el maíz y el chuño pelado a la olla. Continuar la cocción.</li>
                                    <li>5.- Ajustar el Caldo: Si es necesario, añadir más agua caliente para mantener el nivel del caldo. Si hay exceso de caldo, espesar con 1 1/2 cucharadas de pan molido y afrecho.</li>
                                    <li>6.- Finalizar la Cocción: Cocinar hasta que la carne y los ingredientes estén bien cocidos y la preparación tenga una consistencia espesa. Si es necesario, agregar más pan molido para espesar.</li>
                                    <li>7.- Servir: Presentar en platos hondos, preferiblemente de barro, adornado con rodajas de locoto y acompañado de un trozo de pan.</li>
                                </ul>
                            </div>
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <br></br>
                        <h2>PLATO TIPICO DEL DEPARTAMENTO DE ORURO</h2><br></br>
                        <h4>CHARQUEKAN ORUREÑO.</h4>
                        <p><div>
                                <ul>
                                    <li>TIEMPO DE PREPARACION: APROX. 45 MINUTOS.</li>
                                    <li>TIEMPO DE COCCION: APROX. 1 HORA.</li>
                                    <li>DIFICULTAD: MEDIA.</li>
                                    <li>PORCIONES: 4 PERSONAS.</li>
                                </ul>
                            </div>
                        </p>
                        <h4>RECETA CHARQUEKAN ORUREÑO.</h4>
                        <h5>INGREDIENTES DEL CHARQUEKAN PACEÑO:</h5>
                        <p><div>
                                <ul>
                                    <li>1 kilo de carne deshidratada de llama o res charque.</li>
                                    <li>1/2 kilo de maiz blanco.</li>
                                    <li>2 papas medianas.</li>
                                    <li>12 huevos.</li>
                                    <li>6 quesos.</li>
                                    <li>limón opcional.</li>
                                </ul>
                            </div>
                        </p>
                    </Col><br></br>
                    <Col xs={12} md={6} xl={6}>
                        <br/><br/><br/><br/><br/>
                        <img src={headerImag2} alt="Header"/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4>COMO SE HACE EL CHARQUEKAN ORUREÑO</h4>
                        <p><div>
                                <ul>
                                    <li>1.- Primero preparar el maíz, hacer remojar noche antes y hacer cocer con abundante agua y sal, luego reservar..</li>
                                    <li>2.- Lavar las papas y hacerlas cocer juntos con los huevos.</li>
                                    <li>3.- Hacer cocer en agua la carne deshidratada, para que se le salga toda la sal que contiene por el proceso de secado, luego de que haya cocido unos 20 minutos retirarla del fuego, escurrir y deshilar.</li>
                                    <li>4.- En una sartén poner aceite y poner a retostar los hilos de carne hasta que esten crujientes.</li>
                                    <li>5.- Servir sobre una cama de mote (maíz cocido), papas, huevos y adornar con queso.</li>
                                </ul>
                            </div>
                        </p>
                        <br></br>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} xl={7}>
                        <br/><br/><br/><br/><br/>
                        <img src={headerImag3} alt="Header"/>
                    </Col>
                    <Col>
                        <h2>PLATO ESTRELLA DEL DEPARTAMENTO DE ORURO</h2><br/>
                        <h4>CAZUELA DE POLLO.</h4>
                        <p><div>
                                <ul>
                                    <li>TIEMPO DE PREPARACION: APROX. 35 MINUTOS.</li>
                                    <li>TIEMPO DE COCCION: APROX. 30 MINUTOS.</li>
                                    <li>DIFICULTAD: FACIL.</li>
                                    <li>PORCIONES: 4 PERSONAS.</li>
                                </ul>
                            </div>
                        </p>
                        <h4>RECETA DE LA CAZUELA ORUREÑA.</h4>
                        <h5>INGREDIENTES DE LA CAZUELA ORUREÑA:</h5>
                        <p><div>
                                <ul>
                                    <li>1 pollo despresado.</li>
                                    <li>2 cebollas picadas.</li>
                                    <li>1 zanahoria picada.</li>
                                    <li>1 pizca de orégano.</li>
                                    <li>1/2 taza de arveja.</li>
                                    <li>1/2 taza de haba.</li>
                                    <li>4 litros de agua.</li>
                                    <li>1 tomate picado.</li>
                                    <li>1 nabo raspado.</li>
                                    <li>1 ramita de apio.</li>
                                    <li>Ramitas de apio</li>
                                    <li>1/2 taza de arroz</li>
                                    <li>Sal y Perejil a gusto</li>

                                </ul>
                            </div>
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4>COMO SE HACE  LA CAZUELA ORUREÑA</h4>
                        <p><div>
                                <ul>
                                    <li>1.- Ponga en una olla el agua, una vez que este tibio coloque el pollo, agregue el nabo, zanahoria, apio, cebolla, tomate, todo picado y añada tambien sal.</li>
                                    <li>2.- Llevar al fuego y dejar cocer por al menos media hora.</li>
                                    <li>3.- Luego agregar el arroz, una vez el arroz haya reventado agregar las papas partidas, arveja y haba.</li>
                                    <li>4.- Una vez cocido servir caliente, si desea espolvoree con orégano.</li>
                                </ul>
                            </div>
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <br/>
                        <h2>PLATO TIPICO DEL DEPARTAMENTO DE POTOSI</h2><br></br>
                        <h4>PLATO CH'AJCHU POTOSINO</h4>
                        <p><div>
                                <ul>
                                    <li>TIEMPO DE PREPARACION: APROX. 50 MINUTOS.</li>
                                    <li>TIEMPO DE COCCION: APROX. 1 HORA Y 30 MINUTOS.</li>
                                    <li>DIFICULTAD: MEDIA.</li>
                                    <li>PORCIONES: 5 PERSONAS.</li>
                                </ul>
                            </div>
                        </p>
                        <h4>RECETA CH'AJCHU POTOSINO.</h4>
                        <h5>INGREDIENTES DEL CH'AJCHU POTOSINO:</h5>
                        <p><div>
                                <ul>
                                    <li>1 kilogramo de Carne de res.</li>
                                    <li>8 Papas.</li>
                                    <li>300 gramos de Chuño remojado.</li>
                                    <li>100 gramos de Habas peladas.</li>
                                    <li>4 Huevos.</li>
                                    <li>2 Quesillos.</li>
                                    <li>1 Cebolla.</li>
                                    <li>2 Cebollas verdes.</li>
                                    <li>1 Tomate.</li>
                                    <li>1 Locoto (ají o chile redondeado).</li>
                                    <li>1 Ramita de quirquiña, 250 gramos de Ají rojo, cocido.</li>
                                    <li>1 pizca de Sal.</li>
                                    <li>1 pizca de Pimienta.</li>
                                </ul>
                            </div>
                        </p>
                    </Col>
                    <Col xs={12} md={6} xl={6}>
                        <br/><br/><br/><br/><br/><br/>
                        <img src={headerImag4} alt="Header"/>
                    </Col>
                <Row>
                    <Col>
                        <h4>COMO SE HACE EL CH'AJCHU POTOSINO</h4>
                        <p><div>
                                <ul>
                                    <li>1.- Cocinar en uno y medio litros de agua a fuego medio, junto con la carne fileteada, la cebolla y sal, para darle sabor y aroma a la carne de res. Esta cocción toma aproximadamente una hora.</li>
                                    <li>2.- Cuando el agua se haya evaporado en parte y la carne esté cocida, retirar del fuego para reservarla y filtrar esta sopa para eliminar los restos de cebolla.</li>
                                    <li>3.- Machucar la carne, sin despedazarla. Una vez que tenga el fondo limpio, ponerla a cocer nuevamente, agregando  el resto de los ingredientes, . empezando por la papa entera previamente pelada, luego el chuño, y finalmente las habas, minutos antes de retirar el preparado del fuego.</li>
                                    <li>4.- Una vez que la papa esté cocida, agregar la cebolla verde, picada en trozos delgados de 5 cm., y darle un hervor rápido para ablandarla. Retirar toda la preparación del fuego. (salsa picante tradicional).</li>
                                    <li>5.- Si áun quedan residuos sólidos de los ingredientes, filtrar este caldo y reservarlo.</li>
                                    <li>6.- Preparar el ají, calentando en aceite a fuego medio el ají, algo del caldo de res y sal. Mezclar y cocinar hasta que se reduzca el volumen de agua y quede una salsa algo espesa.</li>
                                    <li>7.- Mientras se realiza la preparación anterior, hacer la ensalada con la cebolla blanca, tomate, el locoto y la quirquiña.</li>
                                    <li>8.- Servir la comida utilizando platos de cerámica. Comenzar vertiendo  la papa, chuño y las habas. La cebolla verde debe quedar encima para ornamentar el plato. Posteriormente, colocar encima las carnes machucadas y echarles la salsa de ají rojo, al gusto. Continuar esta ornamentación de cada plato con tajadas de quesillo fresco y huevos duros, cortados en rodajas, alternando una tajada de cada uno. Por último, colocar la ensalada arriba.</li>
                                </ul>
                            </div>
                        </p>
                        <br></br>
                    </Col>
                </Row>
                </Row>
                <Row>
                    <Col xs={12} md={6} xl={5}>
                        <br/><br/><br/>
                        <img src={headerImag5} alt="Header"/>
                    </Col>
                    <Col>
                    <h2>PLATO ESTRELLA DEL DEPARTAMENTO DE POTOSI</h2><br/>
                    <h4>SOPA DE MANI CON FIDEO.</h4>
                        <p><div>
                                <ul>
                                    <li>TIEMPO DE PREPARACION: APROX. 45 MINUTOS.</li>
                                    <li>TIEMPO DE COCCION: APROX. 50 MINUTOS.</li>
                                    <li>DIFICULTAD: FACIL.</li>
                                    <li>PORCIONES: 7 PERSONAS.</li>
                                </ul>
                            </div>
                        </p>
                        <h4>RECETA DE LA SOPA DE MANI.</h4>
                        <h5>INGREDIENTES DE LA SOPA DE MANI:</h5>
                        <p><div>
                                <ul>
                                    <li>6 Nudos de carne de cordero o costilla de vaca.</li>
                                    <li>1 cuchara de Sal molida.</li>
                                    <li>6 Papas.</li>
                                    <li>1/2 taza de Arvejas.</li>
                                    <li>1/2  taza de Habas verdes.</li>
                                    <li>1 taza de Maní molido.</li>
                                    <li>3 litros de Agua para cocer la carne.</li>
                                    <li>1 taza de Cebolla.</li>
                                    <li>1/2 taza de Tomate.</li>
                                    <li>1 cucharilla de Comino.</li>
                                    <li>2 Dientes de ajo.</li>
                                    <li>1 cuchara de Orégano.</li>
                                    <li>1 cuchara de Perejil.</li>
                                    <li>1 1/2 cuchara de Ají amarillo molido.</li>
                                    <li>1/4 taza de Aceite.</li>

                                </ul>
                            </div>
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col><br/>
                        <h4>COMO SE HACE LA SOPA DE MANI DE FIDEO</h4>
                        <p><div>
                                <ul>
                                    <li>1.- Parta las papas peladas en cuatro, pele las arvejas, pique la cebolla menuda y el tomate pelado. Fría la cebolla en el aceite.</li>
                                    <li>2.- En una olla ponga al fuego los 3 litros de agua. Antes que empiece a hervir, agréguele la carne.</li>
                                    <li>3.- Deje dar un hervor y ponga la sal, el tomate, la cebolla, el comino, el orégano, el ají y el ajo retostados en aceite. Luego agregue el maní molido.</li>
                                    <li>4.- Agregar Maíz y Chuño: Añadir el maíz y el chuño pelado a la olla. Continuar la cocción.</li>
                                    <li>5.- Deje cocer hasta que la carne quede blanda y cocida. Agregue las habas, las arvejas y las papas. Cocine hasta que estén suaves.</li>
                                    <li>6.- Sirva en plato hondo, con un pedazo de carne y adorne con el perejil.</li>
                                </ul>
                            </div>
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}