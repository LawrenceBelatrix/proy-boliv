import {Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import headerImag from '../assets/img/header-img1.svg';
import headerImag1 from '../assets/img/header-img2.svg';
import headerImag2 from '../assets/img/header-img3.svg';
import headerImag3 from '../assets/img/header-img5.svg';
import headerImag4 from '../assets/img/header-img6.svg';
import headerImag5 from '../assets/img/header-img7.svg';

import { ArrowRightCircle } from "react-bootstrap-icons";
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

export const Componente2 = () =>{
    const [loopnum, setloopnum] = useState(0);
    const [isDeleting, setDeleting] =useState(false);
    const toRotate = [" ZONA ANDINA: LA PAZ - ORURO - POTOSI.", " ZONA SUBANDINA: COCHABAMBA - CHUQUISACA - TARIJA.", " ZONA LLANOS ORIENTALES: PANDO - BENI - SANTA CRUZ",
                    "GASTRONOMIA  CULTURAL BOLIVIANA", "PLATOS TIPICOS BOLIVIANOS", "COMO TE QUIERO, MI QUERIDA BOLIVIA!!!"];
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
        <section id="home">
            <Container>
                <Row className="algin-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Bienvenido a mi Web</span>
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
                        <h2>GASTRONOMIA DE BOLIVIA</h2><br></br>
                        <p>La gastronomía de Bolivia es conocida por su gran variedad de platillos y bebidas, que son diferentes según las zonas y las comunidades que las consumen. En los últimos años también se ha hecho popular en Bolivia la cocina fusión, un concepto gastronómico que hace referencia a la mezcla de prácticas y estilos culinarios de diferentes culturas, y se ha producido una renovación como resultado del surgimiento de diversas iniciativas gastronómicas relacionadas con la soberanía alimentaria, los valores nutricionales de la comida local, sustentabilidad y conceptos gourmet.Como territorio que alberga 34 naciones originarias, existe una gran variedad de prácticas asociadas a la gastronomía de estas naciones, así como diferentes niveles de adopción de los mismos en las áreas urbanas más pobladas. El consumo callejero de bebidas y comidas es una práctica muy extendida.La gastronomía de Bolivia es famosa por su variedad, se basa en productos típicos de las zonas como por ejemplo las frutas y verduras, carnes, trigo y maíz, entre otros, con los que se elaboran suculentos platos. Su cocina varía dependiendo de la zona geográfica de este país, es decir cada región tiene su sabor característico.</p>
                        <br></br>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <br/><br/><br/>
                        <img src={headerImag1} alt="Header"/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} xl={4}>
                        <img src={headerImag} alt="Header"/>
                    </Col>
                    <Col>
                        <h2>HISTORIA</h2><br></br>
                        <h3>- EPOCA PRECOLOMBINA</h3>
                        <p>Bolivia tuvo muchas sociedades precolombinas, pero lastimosamente no existen muchos registros de los hábitos gastronómicos de dichos grupos. El territorio boliviano está habitado desde hace aproximadamente 20 mil años, pero la información escrita al respecto es escasa. Entre algunas prácticas gastronómicas que persisten se encuentran las relacionadas con las especies de flora y fauna endémicas de la región, así como la entomofagia.</p><br></br>
                        <h3>- EPOCA TIWANAKOTA</h3>
                        <p>La civilización tiwanakota, que se asentó a las orillas del lago Titicaca, tuvo técnicas agrícolas avanzadas que permitieron el desarrollo de un sistema agroalimentario sostenible. Entre los productos que consumían estaban la papa, el chuño, la tunta, el maíz y la quinua, entre otros. Según la investigadora boliviana Beatriz Rossells, la cocina andina era básicamente gramínea y vegetariana, dándole más importancia al valor nutricional que a la sofisticación de la forma.</p><br></br>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <br></br>
                        <h3>- EPOCA DEL VIRREINATO</h3>
                        <p>Con la llegada de los conquistadores llegaron nuevos ingredientes, los cuales fueron importantes en la futura alimentación. Entre los principales productos que trajeron consigo los españoles se puede contar la carne de gallina, cerdo, oveja, vaca y caballo, animales que hasta entonces no existían en este territorio. Asimismo, llegaron las uvas, los mangos, las manzanas y los cítricos, entre otros frutos. Llegaron también el trigo y las especias. Cabe recordar, que en el proceso también llegaron a América diferentes grupos como gitanos, árabes, judíos y africanos.Los ingredientes recién llegados se mezclaron con los ingredientes nativos, como, por ejemplo, la carne de camélidos o los peces del lago Titicaca. Fue así como surgieron los platos más típicos de Bolivia. En verdad, la gastronomía boliviana tiene unas profundas raíces étnicas aimaras, quechuas, chiquitanas, mojeñas y europeas, mediadas por el mestizaje y los diferentes momentos históricos que el país experimentó y sigue experimentando.
                        Respecto a la tradición escrita de la gastronomía boliviana, el primer documento del que se tiene noticia es el Libro de cocina de doña Josepha de Escurrechea, un recetario de 1776 que contiene más de un centenar de recetas que dan cuenta de la historia gastronómica del país. Del siglo xviii datan las mezclas de sabores, dulce con salado. Comenzó a combinarse la carne con la fruta y, desde entonces, se crearon o adaptaron recetas que mezclaban ambos sabores y, además, varias especias.</p><br></br>
                        <h3>- EPOCA REPUBLICANA</h3>
                        <p>Ya en el siglo xix, la renovación gastronómica boliviana estuvo de la mano con el deseo independentista. En esta época comenzaron a gestarse los platos nacionales, alejándose de las recetas y sabores más puramente españoles. Sin embargo, los ingredientes y costumbres culinarias europeas habían calado en la cocina boliviana. Por ejemplo, en 1935, año en que la fábrica Ferrari Ghezzi comenzó sus operaciones en Oruro, ya se fabricaban pastas italianas para ser consumidas en el país.</p><br></br>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>LA COCINA BOLIVIANA DEL SIGLO XXI</h2>
                        <br/>
                        <p>La cocina boliviana está, además, mediada por la globalización y su consecuente importación de nuevos ingredientes, nuevas recetas y nuevas costumbres gastronómicas. De hecho, mucha comida rápida se consume en el país. Según datos de 2015, en la ciudad de La Paz había más de mil lugares de venta de comida rápida y, según el Gobierno Autónomo Municipal de dicha ciudad, al menos la mitad eran ilegales. De hecho, la cantidad de tales negocios se habría triplicado en los últimos 20 años.</p>
                        <p>Sin embargo, con la alza en el consumo de comida rápida, también se han abierto espacios críticos o de vanguardia. Por ejemplo, en 2005 un grupo de cocineros elaboró un "manifiesto" de la nueva cocina boliviana el cual, entre sus puntos más importantes, afirma que: "la comida del boliviano respeta los ciclos naturales de cultivo y las regiones que lo producen", que "es diversa como lo son las culturas que habitan esta tierra" y que "se enorgullece de haber aportado al mundo alimentos troncales para la dieta humana". Dentro de esta nueva ola pueden contarse los nombres de cocineros como el de Marco Quelca. El Ministerio de Culturas y Turismo incentiva los encuentros internacionales para enriquecer el conocimiento, aprender nuevas habilidades y realizar creaciones dentro de este rubro.23​ La cocina boliviana es promovida por el Ministerio de Culturas y Turismo con la elección de los platos bandera de cada región.</p>
                    </Col>
                    <Col>
                        <img src={headerImag2} alt="Header"/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <br/>
                        <h2>PRINCIPALES INGREDIENTES</h2>
                        <br/>
                        <h3>- TUBERCULOS</h3>
                        <p>La cocina boliviana se caracteriza por la presencia constante de papa y maíz en muchos de sus platillos. En el país existen 33 variedades de papa registradas y se cultivan 200 mil hectáreas cada año. Se dice que cada boliviano consume entre 90 y 100 kilos de este tubérculo al año. Puede decirse que los tubérculos como la papa, la oca, la papalisa, la yuca, el maní y el camote fueron domesticados hace miles de años y desde entonces forman parte de la base alimenticia de los bolivianos. La papa se consume más en el lado occidental del país y la yuca en el lado oriental,​ pero también en el trópico y en los valles, donde prácticamente cualquier plato se acompaña con estos ingredientes. Otros tubérculos menos conocidos internacionalmente que hacen a la gastronomía boliviana son el yacón (Smallanthus sonchifolius), la racacha (Arracacia xanthorriza), la achira (Canna eduli), la ajipa (Pachirhyzus ahipa) y la papa walusa (Xanthosoma saggitifolium).</p>
                        <h3>- MAIZ</h3>
                        <p>En Bolivia también se consume mucho maíz, el cual se produce prácticamente en todo el territorio nacional. Existen 70 variedades bolivianas registradas de maíz, llamado choclo localmente, y se usa de muchas maneras, ya sea en comidas o en bebidas (huminta o chicha, por ejemplo).​ Solo en 2017, en el departamento de Santa Cruz se produjeron 350 mil hectáreas de este alimento.</p>
                        <br/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>ACOMPAÑAMIENTOS</h2>
                        <br/>
                        <h3>- BEBIDAS</h3>
                        <p>Entre las bebidas, la gastronomía boliviana se puede dividir en bebidas alcohólicas, mates o infusiones y otras bebidas. Entre las bebidas alcohólicas se pueden citar la chicha, la garapiña, el guarapo, el sucumbé, el yungueñito y el chuflay.​ También se consumen cerveza, vino y otras bebidas. De hecho, según datos de 2021 en Bolivia se consumen más de 50 mil botellas de cerveza al día,​ siendo la cerveza la bebida alcohólica más consumida por los bolivianos, seguida del singani y el vino.​ El mocochinchi, el refresco de somó, el refresco de linaza, el refresco de cañahua, el tujuré, el refresco de copoazú, el refresco de achachairú, y el refresco de tamarindo son algunos de las bebidas no alcohólicas más consumidas del país.</p>
                        <p>También se pueden mencionar aquí el api​ y el tojorí y el chocolate que se consumen calientes.En Bolivia también se beben infusiones, varias de las cuales se preparan con hierbas nativas, como por ejemplo el mate de coca.40​ Destaca también la sultana, hecha con la cáscara del café</p>
                        <h3>- PANES</h3>
                        <p>Entre los panes bolivianos destacan la marraqueta, la sarna, la colisa, la cauca, el pan de maíz, el pan de arroz, el pan dulce de Oruro, el pan vallegrandino​, el pan de Toco, el pan de Arani y el pan de Laja.</p>
                    </Col>
                    <Col>
                        <br/><br/><br/>
                        <h3>- POSTRES Y BOCADILLOS</h3>
                        <p>La gastronomía boliviana cuenta con una gran cantidad de postres y bocadillos, muchos de los cuales se consumen en todo el país. La salteña, por ejemplo, se come en todo el territorio nacional y es uno de los bocadillos más apreciados en el país.​ Sucede lo mismo con las tucumanas, las llauchas y los rellenos de papa, por mencionar solo algunos ejemplos. También se consumen en muchos lugares de expendio callejero pequeñas porciones de comida, como por ejemplo el anticucho, las tripitas y los riñoncitos.</p>
                        <p>Entre los postres o "masitas" más tradicionales se pueden citar los rosquetes (típicos de Punata), los cuñapés, los horneados cruceños como el pastel de yuca, empanadas de arroz, las humintas, la gelatina de pata y las empanadas blanqueadas.</p>
                        <br/><br/>
                        <h3>- SALSAS</h3>
                        <p><div>
                                <ul>
                                    <li>Llajua</li>
                                    <li>Llajua de Mani</li>
                                    <li>Jallpa waik'a</li>
                                </ul>
                            </div>
                        </p><br/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>CULTURA GASTRONOMICA BOLIVIANA</h2>
                        <br/>
                        <p>La gastronomía de Bolivia se caracteriza por ser una mezcla de las raíces indígenas, europeas y árabes, con influencia de la cocina argentina; por lo que sus platillos resaltan por su aroma de especies, sabor y colores que evoca a su tradición. Así mismo, la gastronomía de este país varía de una región a otra, pues sus zonas geográficas cuentan con distintos orígenes culturales.</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>A continuación, los principales productos en común que se utilizan en la comida boliviana:</p>
                        <p><div>
                                <ul>
                                    <li>Carne.</li>
                                    <li>Papa.</li>
                                    <li>Maíz.</li>
                                    <li>Aji.</li> 
                                </ul>
                            </div>
                        </p>
                        <p>En el siglo XVI con la llegada de los españoles se importo y agregó a la dieta boliviana:</p>
                        <p><div>
                                <ul>
                                    <li>Papa.</li>
                                    <li>Chocolate.</li>
                                    <li>Tomate.</li>
                                    <li>Hortalizas.</li>
                                    <li>Trigo..</li>
                                </ul>
                            </div>
                        </p>
                        <p>También integraron algunas frutas como: Uva, Manzana, Mango, Naranja y Limones</p>
                        <p>Así como la importación de tabaco y el implemento del uso de la carne de res, pollo, cerdo y cordero.</p>
                        <br/>
                    </Col>
                    <Col>
                        <p>Los productos que se consumían antes de la llegada de otras culturas eran: Los productos que se consumían antes de la llegada de otras culturas eran:</p>
                        <p><div>
                                <ul>
                                    <li>Quinua.</li>
                                    <li>Charque.</li>
                                    <li>Pescado y Moluscos.</li>
                                    <li>Leguminosas.</li>
                                    <li>Maíz.</li>
                                </ul>
                            </div>
                        </p>
                        <p> Además, disponían de frutas como el tumbo, piña, guayaba, lúcuma, chirimoya y palta. También usaban aceite de maíz, coco y maní, hierbas y condimentos como el ají.</p>
                        <p>En el siglo XIX Bolivia se encontró con un deseo independentista, evento que renovó su gastronomía, alejándose de las recetas y sabores más españoles, aunque la influencia europea se encuentra incluso en la actualidad bastante presente en sus platos. Por último, se ha hecho bastante popular la cocina fusión en la actualidad, haciendo referencia a la mezcla de prácticas y estilos culinarios de diferentes culturas, en conjunto al concepto gourmet.</p>
                        <br/>
                    </Col>
                </Row>
                <Row>
                    <h2>BEBIDAS TIPICAS BOLIVIANAS</h2>
                    <Col xs={12} md={6} xl={4}>
                        <br/>
                        <p><div>
                                <ul>
                                    <li><h3>Singani.</h3></li>
                                </ul>
                            </div>
                        </p>
                        <p>Aguardiente de uvas moscatel de Alejandría, pero también existen varios tipos de singani. Se suele utilizar para hacer cócteles como el yungueñito (mezclado con jugo de naranja) y el chuflay (mezclado con Ginger Ale).</p>
                        <img src={headerImag3} alt="Header"/>
                    </Col>
                    <Col xs={12} md={6} xl={4}>
                        <br/>
                        <p><div>
                                <ul>
                                    <li><h3>Mocochinchi.</h3></li>
                                </ul>
                            </div>
                        </p>
                        <p>A base de durazno deshidratado o seco con jarabe dulce a punto de caramelo. La fruta se hierve en agua caliente y se le agregan clavos de olor, canela y cardamomo; después se añade almíbar a punto de caramelo y se mezcla hasta que queda todo disuelto. Se sirve fría.</p>
                        <img src={headerImag4} alt="Header"/>
                    </Col>
                    <Col xs={12} md={6} xl={4}>
                        <br/>
                        <p><div>
                                <ul>
                                    <li><h3>Cerveza Paceña.</h3></li>
                                </ul>
                            </div>
                        </p>
                        <p>Paceña es la cerveza que representa el orgullo nacional y el genuino gusto cervecero de Bolivia, con más de 130 años de tradición.A base de durazno deshidratado o seco con jarabe dulce a punto de caramelo. La fruta se hierve en agua caliente y se le agregan clavos de olor, canela y cardamomo; después se añade almíbar a punto de caramelo y se mezcla hasta que queda todo disuelto. Se sirve fría.</p>
                        <img src={headerImag5} alt="Header"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}