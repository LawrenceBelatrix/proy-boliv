import {Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import headerImag from '../assets/img/header-imgpt1.svg';
import headerImag1 from '../assets/img/header-imgpt2.svg';
import headerImag2 from '../assets/img/header-imgpt3.svg';
import headerImag3 from '../assets/img/header-imgpt4.svg';
import headerImag4 from '../assets/img/header-imgpt5.svg';
import headerImag5 from '../assets/img/header-imgpt6.svg';
import { ArrowRightCircle } from "react-bootstrap-icons";
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

export const Componente4 = () =>{
    const [loopnum, setloopnum] = useState(0);
    const [isDeleting, setDeleting] =useState(false);
    const toRotate = ["PLATOS ESTRELLAS DE LA ZONA  SUB ANDINA", "VIVA MI PATRIA BOLIVIA!!!!", "LA POESIA DE LOS SABORES EN UN PLATO DE COMIDA"];
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
                        <span className="tagline">Zona  Sub Andina</span>
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
                        <h2>PLATOS TIPICOS DE LA ZONA  SUB ANDINA: COCHABAMBA - CHUQUISACA - TARIJA</h2><br></br>
                        <h2>PLATO TIPICO DEL DEPARTAMENTO DE COCHABAMBA</h2><br></br>
                        <h4>PLATO PIQUE MACHO.</h4>
                        <p><div>
                                <ul>
                                    <li>TIEMPO DE PREPARACION: APROX. 1 HORA.</li>
                                    <li>TIEMPO DE COCCION: APROX. 1 HORA Y 10 MINUTOS.</li>
                                    <li>DIFICULTAD: INTEREMEDIA A DIFICIL.</li>
                                    <li>PORCIONES: 8 PERSONAS.</li>
                                </ul>
                            </div>
                        </p>
                        <h4>RECETA  DEL PIQUE MACHO.</h4>
                        <h5>INGREDIENTES DEL PIQUE MACHO:</h5>
                        <p><div>
                                <ul>
                                    <li>2 Lomos de Ternera (añojo).</li>
                                    <li>1 Paquete de Salchichas estilo viena.</li>
                                    <li>1/2 Cebolla morada.</li>
                                    <li>1 Pimiento locoto verde.</li>
                                    <li>1 Huevo duro.</li>
                                    <li>2 Patatas medianas.</li>
                                    <li>1 Tomate.</li>
                                    <li>200 ml. de cerveza.</li>
                                    <li>1 Cucharada de salsa de soja.</li>
                                    <li>Pimienta negra (al gusto).</li>
                                    <li>Aceite de oliva para freir.</li>
                                </ul>
                            </div>
                        </p>
                    </Col>
                    <Col xs={12} md={6} xl={6}>
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                        <img src={headerImag} alt="Header"/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4>COMO SE HACE EL PIQUE MACHO</h4>
                        <p><div>
                                <ul>
                                    <li>1.- En primer lugar, pelamos las patatas y las cortamos en gajos. Las ponemos a freír en una sartén con abundante aceite de oliva. Si no tenemos el huevo duro, es el momento de ponerlo a cocer también.</li>
                                    <li>2.- Cortamos la cebolla en tiras, picamos la ternera en trozos y las salchichas en ruedas.</li>
                                    <li>3.- Mientras se fríen las patatas, en una cazuela ponemos 3 cucharadas de aceite de oliva y salteamos la carne de ternera junto a la cebolla cortada en tiras.</li>
                                    <li>4.- Tapamos la sartén para que la carne suelte jugos y dejamos que se haga durante unos 2 minutos, removiendo un par de veces durante este tiempo.</li>
                                    <li>5.- Sazonamos ahora la carne con pimienta negra al gusto y regamos con la salsa de soja y la cerveza. Dejamos cocinar 5 minutos ahora sin tapar e incorporamos las salchichas. Cocinamos otros 5 minutos removiendo de vez en cuando. Durante este tiempo hay que vigilar las patatas. Cuando estén doradas, las sacamos a una fuente con papel de cocina para que escurra el aceite sobrante.</li>
                                    <li>6.- En un plato grande o fuente montamos el pique a lo macho. En primer lugar, ponemos las patatas fritas, a continuación el picado de carne con sus jugos. Después el tomate y el pimiento cortados en rodajas y por último, el huevo duro cortado en dos o cuatro trozos.</li>
                                </ul>
                            </div>
                        </p>
                        <br></br>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} xl={6}>
                        <img src={headerImag1} alt="Header"/>
                    </Col>
                    <Col>
                        <h2>PLATO ESTRELLA DEL DEPARTAMENTO DE COCHABAMBA</h2><br></br>
                        <h4>SILPANCHO COCHABAMBINO.</h4>
                        <p><div>
                                <ul>
                                    <li>TIEMPO DE PREPARACION: APROX. 45 MINUTOS.</li>
                                    <li>TIEMPO DE COCCION: APROX. 30 MINUTOS.</li>
                                    <li>DIFICULTAD: FACIL.</li>
                                    <li>PORCIONES: 4 PERSONAS.</li>
                                </ul>
                            </div>
                        </p>
                        <h4>RECETA DEL SILPANCHO COCHABAMBINO.</h4>
                        <h5>INGREDIENTES SILPANCHO COCHABAMBINO:</h5>
                        <p><div>
                                <ul>
                                    <li>700 Gramos de carne molida o filete de ternera.</li>
                                    <li>300 Gramaos de pan rallado.</li>
                                    <li>4 Papas medianas.</li>
                                    <li>2 Tomates.</li>
                                    <li>1 Pimiento rocoto o habanero.</li>
                                    <li>1 Cebolla morada mediana.</li>
                                    <li>1 Pimiento verde.</li>
                                    <li>200 Gramos de arroz (opcional).</li>
                                    <li>4 Huevos.</li>
                                    <li>1 Chorro de aceite para freir.</li>
                                    <li>1 Chorro de vinagre.</li>
                                    <li>1 Pizca de sal.</li>
                                    <li>1 Pizca de comino.</li>
                                </ul>
                            </div>   
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col><br></br>
                        <h4>COMO SE HACE EL SILPANCHO COCHABAMBINO</h4>
                        <p><div>
                                <ul>
                                    <li>1.- Hierve las papas lavadas en una olla con abundante agua y un puñado de sal. No es necesario retirar la piel.</li>
                                    <li>2.- Pica finamente los pimientos, la cebolla y los tomates frescos, que formarán parte de la ensalada que acompañará el silpancho cochabambino.</li>
                                    <li>3.- Condimenta la carne molida con sal, pimienta y comino al gusto. Mezcla bien y reserva. Recuerda que aunque nosotros estemos haciendo silpancho con carne molida, también se puede hacer con filete.</li>
                                    <li>4.- Haz un bola con la carne molida y colócala sobre el pan rallado, que estará en un plato plano.</li>
                                    <li>5.- Con la ayuda de una lámina de papel film puesta encima, aplana la carne dándole pequeños golpes para que el pan rallado se vaya adhiriendo a ella.</li>
                                    <li>6.- Dale la vuelta la carne y repite el paso anterior. Tiene que quedar como si de un filete se tratara, de medio centímetro de grosor aproximadamente y con las dos caras rebozadas (empanizadas).</li>
                                    <li>7.- Aparte, mezcla los vegetales cortados y agrega vinagre, aceite y sal al gusto para condimentarlos y potenciar su sabor.</li>
                                    <li>8.- Por otro lado, en una sartén con aceite caliente, fríe el silpancho por uno de los lados.</li>
                                    <li>9.- Cuando esté dorado del primer lado, dale la vuelta y cocínalo por el otro lado.</li>
                                    <li>10.- Escurre las papas ya cocinadas, córtalas en rodajas de medio cm de grosor y fríelas en otra sartén con aceite caliente. Truco: Puedes usar la misma sartén que has utilizado para hacer el silpancho cochabambino, así las papas absorberán los sabores de la cocción de la carne. </li>
                                    <li>11.- Retira las papas cuando estén listas y en la misma sartén fríe un huevo. Como la sartén estará ya muy caliente, no tienes que añadir más aceite si no quieres, ya que el huevo se cocinará igualmente con la cantidad que queda.</li>
                                    <li>12.- Solo queda emplatar el silpancho. Para ello, coloca las papas y la ensalada de verduras en la base, encima sitúa la carne y sobre ella el huevo. De forma opcional, puedes añadir a la receta arroz blanco hervido en agua, aunque hemos de decir que este ingrediente no constaba en la receta original de silpancho boliviano. Esta es una de esas elaboraciones fáciles de hacer, completas e ideales para cuando nos apetece un plato contundente y lleno de sabor. De postre, ¿qué te parece una torta de yuca?</li>
                                </ul>
                            </div>
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <br></br>
                        <h2>PLATO TIPICO DEL DEPARTAMENTO DE CHUQUISACA</h2><br></br>
                        <h4>FRITANGA CHUQUISAQUEÑA.</h4>
                        <p><div>
                                <ul>
                                    <li>TIEMPO DE PREPARACION: APROX. 1 HORA Y 10 MINUTOS.</li>
                                    <li>TIEMPO DE COCCION: APROX. 1 HORA Y MEDIA.</li>
                                    <li>DIFICULTAD: MEDIA.</li>
                                    <li>PORCIONES: 6 PERSONAS.</li>
                                </ul>
                            </div>
                        </p>
                        <h4>RECETA FRITANGA CHUQUISAQUEÑA.</h4>
                        <h5>INGREDIENTES DE LA FRITANGA CHUQUISAQUEÑA:</h5>
                        <p><div>
                                <ul>
                                    <li>3 kilogramos de Carne de cerdo.</li>
                                    <li>1/2 Libra de Chuño.</li>
                                    <li>1 Libra de Patasca.</li>
                                    <li>1 Libra de Papas.</li>
                                    <li>1/2S Libra de Ají colorado molido.</li>
                                    <li>2 Cucharillas de Pimienta.</li>
                                    <li>1 Cucharilla de Comino.</li>
                                    <li>1 Cabeza de ajo</li>
                                </ul>
                            </div>
                        </p>
                    </Col><br></br>
                    <Col xs={12} md={6} xl={5}>
                        <br/><br/><br/><br/>
                        <img src={headerImag2} alt="Header"/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4>COMO SE HACE LA FRITANGA CHUQUISAQUEÑA</h4>
                        <p><div>
                                <ul>
                                    <li>1.- Troceé la carne de cerdo y cocine en agua con pimienta, comino, ajos molidos y sal. Cuando la carne esté suave, escurra y fría.</li>
                                    <li>2.- Aparte mezcle 2 tazas de caldo donde coció el cerdo con ají colorado, prepare una salsa e incorpore el cerdo frito.</li>
                                    <li>3.- Deje cocer hasta que espese.</li>
                                    <li>4.- Pele, cocine las papas.</li>
                                    <li>5.- En agua hirviendo con sal a gusto ponga a cocer el chuño.</li>
                                    <li>6.- Sirva la fritanga con atasca, papas y chuño.</li>
                                </ul>
                            </div>
                        </p>
                        <br></br>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} xl={8}>
                        <br/><br/><br/><br/><br/><br/><br/>
                        <img src={headerImag3} alt="Header"/>
                    </Col>
                    <Col>
                        <h2>PLATO ESTRELLA DEL DEPARTAMENTO DE ORURO</h2><br/>
                        <h4>CHORIZO CHUQUISAQUEÑO.</h4>
                        <p><div>
                                <ul>
                                    <li>TIEMPO DE PREPARACION: APROX. 45 MINUTOS.</li>
                                    <li>TIEMPO DE COCCION: APROX. 40 MINUTOS.</li>
                                    <li>DIFICULTAD: MEDIA.</li>
                                    <li>PORCIONES: 5 PERSONAS.</li>
                                </ul>
                            </div>
                        </p>
                        <h4>RECETA DEL CHORIZO CHUQUISAQUEÑO.</h4>
                        <h5>INGREDIENTES DEL CHORIZO CHUQUISAQUEÑO:</h5>
                        <p><div>
                                <ul>
                                    <li>1 kilogramo de Carne de cerdo molido.</li>
                                    <li>1 kilogramo de Tripa gorda de res.</li>
                                    <li>8 Papas blancas.</li>
                                    <li>2 Cabezas de lechuga.</li>
                                    <li>4 Panes enteros.</li>
                                    <li>1 cuchara de Perejil finamente picado.</li>
                                    <li>1 cucharilla de Orégano desmenuzado.</li>
                                    <li>2 cucharillas de Hierba buena picada.</li>
                                    <li>2 tazas de Cola de la cebolla.</li>
                                    <li>Hilo de cáñamo.</li>
                                    <li>1 pizca de Azúcar.</li>
                                    <li>1 pizca de Cáscara de naranja raspada.</li>
                                    <li>1/2 cucharilla de Clavo de olor molida.</li>
                                    <li>1 Pizca de Canela molida.</li>
                                    <li>1 cuchara de Ají colorado molido.</li>
                                    <li>1 cucharilla de Pimienta molida.</li>
                                    <li>1 cucharilla de Comino molido.</li>
                                    <li>4 Dientes de ajo.</li>
                                    <li>1 Cebolla en corte pluma.</li>
                                    <li>1 Tomate picado fino.</li>
                                    <li>1 pizca de Sal.</li>
                                    <li>1 Chorrito de aceite.</li>
                                </ul>
                            </div>
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4>COMO SE HACE EL CHORIZO CHUQUISAQUEÑO</h4>
                        <p><div>
                                <ul>
                                    <li>1.- Preparar la tripa, lavándola bien, quitar asperezas, hasta que presente una apariencia transparente.</li>
                                    <li>2.- Atar un extremo de las puntas de la tripa con fuerza, usando el hilo de cáñamo.</li>
                                    <li>3.- Mezclar la carne con los  condimentos (clavo de olor, azúcar, perejil, cáscara de naranja, hierba buena, cebolla verde, canela, sal al gusto y finalmente, el ají colorado previamente molido).</li>
                                    <li>4.- Introducir la preparación anterior en la tripa, Cuando la  masa quede compacta, de aproximadamente 10 cm., torcer la tripa dos veces. Volver a embutir con espacio de un centímetro, y repetir el proceso, hasta terminar la masa. Cerrar la tripa con el hilo de cáñamo.</li>
                                    <li>5.- Cocinar las papas, enteras y previemente peladas, en agua con sal.</li>
                                    <li>6.- Deshojar la lechuga y lavarla cuidadosamente, hoja por hoja, y dejar reposar en un litro de agua agregando 10 gotas de yodo durante 10 minutos. Picar la cebolla.</li>
                                    <li>7.- Preparar la salsa, lavando los ingredientes, picarlos y finalmente mezclarlos con sal y aceite.</li>
                                    <li>8.- Freír en aceite caliente los chorizos hasta que estén dorados y bien cocidos. Luego sacarlos a un recipiente.</li>
                                    <li>9.- Partir los panes por la mitad, y dorarlos en el mismo aceite empleado para los chorizos.</li>
                                    <li>10.- Servir el plato de chorizo acompañado del pan frito, junto con las papas enteras y los demás ingredientes.</li>
                                </ul>
                            </div>
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <br/>
                        <h2>PLATO TIPICO DEL DEPARTAMENTO DE TARIJA</h2><br></br>
                        <h4>PLATO SAICE CHAPACO</h4>
                        <p><div>
                                <ul>
                                    <li>TIEMPO DE PREPARACION: APROX. 45 MINUTOS.</li>
                                    <li>TIEMPO DE COCCION: APROX. 1 HORA Y 15 MINUTOS.</li>
                                    <li>DIFICULTAD: FACIL.</li>
                                    <li>PORCIONES: 6 PERSONAS.</li>
                                </ul>
                            </div>
                        </p>
                        <h4>RECETA DEL SAICE CHAPACO.</h4>
                        <h5>INGREDIENTES DEL SAICE CHAPACO:</h5>
                        <p><div>
                                <ul>
                                    <li>1 kilogramo de Carne molida.</li>
                                    <li>2 kilogramos de Papa.</li>
                                    <li>1 taza de Aceite.</li>
                                    <li>2 cucharas de Ají colorado molido.</li>
                                    <li>1 pizca de Orégano.</li>
                                    <li>1 pizca de Comino.</li>
                                    <li>1 pizca de Pimienta.</li>
                                    <li>1 pizca de Sal</li>
                                    <li>1 taza de Arvejas peladas.</li>
                                    <li>2 cucharas de Perejil picado.</li>
                                    <li>1 Cebolla.</li>
                                    <li>2 tazas de Chicha.</li>
                                    <li>Arroz.</li>
                                    <li>Sarza.</li>
                                </ul>
                            </div>
                        </p>
                    </Col>
                    <Col xs={12} md={6} xl={9}>
                        <br/><br/><br/><br/><br/><br/><br/><br/>
                        <img src={headerImag4} alt="Header"/>
                    </Col>
                <Row>
                    <Col>
                        <h4>COMO SE HACE EL SAICE CHAPACO</h4>
                        <p><div>
                                <ul>
                                    <li>1.- Picar la cebolla y tostarla en una sartén con aceite.</li>
                                    <li>2.- Sazonar y dejar cocinar durante 5 minutos.</li>
                                    <li>3.- Agregarle el ají, el orégano, el comino, la pimienta y sal. Remover y añadir la carne molida, un cuarto de taza de agua y dejar cocinar.</li>
                                    <li>4.- Luego de diez minutos añadir la papa y las arvejas previamente cocidas.</li>
                                    <li>5.- Mezclar y servir acompañado de arroz y sarza.</li>
                                </ul>
                            </div>
                        </p>
                        <br></br>
                    </Col>
                </Row>
                </Row>
                <Row>
                    <Col xs={12} md={6} xl={6}>
                        <img src={headerImag5} alt="Header"/>
                    </Col>
                    <Col>
                    <h2>PLATO ESTRELLA DEL DEPARTAMENTO DE TARIJA</h2><br/>
                    <h4>ARVEJADA.</h4>
                        <p><div>
                                <ul>
                                    <li>TIEMPO DE PREPARACION: APROX. 40 MINUTOS.</li>
                                    <li>TIEMPO DE COCCION: APROX. 50 MINUTOS.</li>
                                    <li>DIFICULTAD: MEDIO.</li>
                                    <li>PORCIONES: 4 PERSONAS.</li>
                                </ul>
                            </div>
                        </p>
                        <h4>RECETA DE LA ALBERJADA.</h4>
                        <h5>INGREDIENTES DE LA SOPA DE MANI:</h5>
                        <p><div>
                                <ul>
                                    <li>1 kilogramo de arvejas peladas.</li>
                                    <li>1 cebolla blanca cubitos pequeños.</li>
                                    <li>1 tomate cubitos pequeños.</li>
                                    <li>3 papas peladas en bastones.</li>
                                    <li>2 huevos.</li>
                                    <li>1 queso criollo rallado.</li>
                                    <li>1 taza de arroz.</li>
                                    <li>1 pizca de oregano.</li>
                                    <li>1 cucharilla de sal.</li>
                                    <li>1 pizca de pimienta.</li>
                                    <li>1/2 cucharilla de palillo.</li>
                                    <li>1 cuchara de perejil picado.</li>
                                    <li>1/2 litro de aceite.</li>
                                    <li>agua lo necesario.</li>
                                    <li>1/4 taza de Aceite.</li>
                                </ul>
                            </div>
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col><br/>
                        <h4>COMO SE HACE LA ARVEJADA</h4>
                        <p><div>
                                <ul>
                                    <li>1.- En una olla con agua hirviendo y sal, cocer las arvejas, reservar el agua.</li>
                                    <li>2.- En otra olla colocar 2 cucharas de aceite y retostar la cebolla y el tomate en cubitos, cuando este bien dorado añadir los condimentos, sal, oregano, pimienta y palillo y remover.</li>
                                    <li>3.- Agregar las arvejas cocidas y 1/2 taza del agua donde cocieron, el queso rallado y los huevos, tapar la olla y dejar cocer a fuego lento, remover y mezclar bien los ingredientes. (agregar un poco mas de agua si fuera necesario para que no se pegue a la olla).</li>
                                    <li>4.- En otra olla colocar 1 cuchara de aceite y el arroz, granearlo a fuego bajo hasta que este dorado añadir 2 tazas de agua hirviendo, 1 cucharilla de sal, tapar y dejar cocer a fuego lento.</li>
                                    <li>5.- En un sarten calentar bastante aceite y freir las papas cortadas en bastones, luego sacarlas sobre papel absorvente y agregarlas a la preparación de las arvejas.</li>
                                    <li>6.- Finalmente servir en un plato una porción de la arvejada acompañada de arroz graneado y decorada con un poco de perejil picado.</li>
                                </ul>
                            </div>
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}