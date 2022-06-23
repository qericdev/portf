import Head from 'next/head'
import Link from 'next/link'
import Sphere from './../pages/components/sphere'
import styles from '../styles/Spanish.module.css'
import emailjs from '@emailjs/browser'
import {useEffect, useRef, useState} from 'react'


export default function Spanish() {

  const form = useRef();
  const [tabs, setTabs] = useState([true,false,false]);
  const [submit, setSubmit] = useState(false);
  const [nameValue, setNameValue] = useState();
  const [emailValue, setEmailValue] = useState();
  const [subjectValue, setSubjectValue] = useState();
  const [messageValue, setMessageValue] = useState();
  const [showNavBurger, setShowNavBurger] = useState(false);
  const [counterNav, setCounterNav] = useState(0);
  useEffect(() => {
    function getDimensions() {
    
    }
    window.addEventListener('resize', getDimensions)
    return () => window.removeEventListener('resize', getDimensions);
  },[])


  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, form.current, process.env.PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          setSubmit(prevSubmit => !prevSubmit);
          setNameValue(() => "");
          setEmailValue(() => "");
          setSubjectValue(() => "");
          setMessageValue(() => "");
      }, (error) => {
          console.log(error.text);
      });
    }

  return (
    <div className={styles.container}>
      <Head>
        <title>Portafolio | Erick Rojas</title>
        <meta name="description" content="Front End Developer" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <section id="top" className={styles.hero}>

        <nav className={styles.nav}>
          <a className={styles.navAbout} href="#about">Acerca de Mi</a>
          <a className={styles.navSkills} href="#skills">Conocimientos</a>
          <a href="#portfolio">Portafolio</a>
          <a href="#contact" className={styles.contactMe}>Contáctame</a>
        </nav>

        <nav className={styles.navBurger}>
          <img className={!showNavBurger ? styles.imgBurg : styles.hidden} onClick={()=>{setShowNavBurger(true); setCounterNav(prevCounterNav => prevCounterNav + 1)}}src="./../images/Burger.svg"/>
          <img onClick = {()=>setShowNavBurger(false)} className={showNavBurger ? styles.imgBurg : styles.hidden} src="./../images/Close.svg"/>
          <div className={showNavBurger? styles.navBurgerDiv : counterNav > 0 ? styles.hiddenBurger : styles.hidden}>
            <div><a href="#about">Acerca de Mi</a></div>
            <div><a href="#skills">Conocimientos</a></div>
            <div><a href="#portfolio">Portafolio</a></div>
            <div className={styles.navBurgerContact}><a href="#contact">Contáctame</a></div>
          </div>
        </nav>

        <div className={styles.heroLeftAndRight}>
          <div className={styles.heroLeft}>
            <img src="./../images/Logo.svg"/>
            <h3>Hola, mi nombre es</h3>
            <h1>Erick Rojas</h1>
            <h5>Front End Developer / Web3 Developer</h5>
            <div>
              <a href="#contact"><img src="./../images/Email.svg"/></a>
              <a href="https://www.linkedin.com/in/erickrojasm/" target="_blank"><img src="./../images/Linkedin.svg"/></a>
              <a href="https://twitter.com/qericr" target="_blank"><img src="./../images/Twitter.svg"/></a>
            </div>
          </div>

          <div className={styles.heroRight}>
            <Sphere />
          </div>
        </div>

      </section>

      <section className={styles.description}>

        <div>
          <h2>Mi filosofía</h2>
          <p>A lo largo de mi vida he ido recopilando muchas experiencias que han logrado moldear lo que soy ahora.</p>
          <p>Los siguientes principios forman parte de mi filosofía de vida:</p>
          <ol>
            <li><span>Enfoque</span> : Todo comienza a funcionar si pones todo tu esfuerzo en una cosa a la vez.</li>
            <li><span>Encuentra tu vocación</span> : Pruebe muchas actividades hasta que encuentre algo que le guste hacer. No tomes decisiones basadas en el dinero. Encuéntra eso que te apasiona y apégate a ello.</li>
            <li><span>Actitud</span> : Desempeña un papel muy importante en el logro de los objetivos. Incluso mucho más que la aptitud.</li>
            <li><span>Practica la Incomodidad </span> : La única forma de seguir creciendo es hacer cosas que te hagan sentir incómodo.</li>
            <li><span>Nunca Rendirse</span> : Si algo sale bien la primera vez, ¡bien! Si no, sigue intentándolo, nuestras acciones tienen un propósito superior, que son nuestros sueños.</li>
            
          </ol>
          <map className={styles.descriptionImg}>
            <img src="./../images/Philosophy.svg"/>
          </map>
        </div>
       
      </section>

      <section id="about" className={styles.about}>
        <button>Acerca de Mi</button>
        <p>Ingeniero Industrial de profesión y programador por vocación.</p>
        <div className={styles.aboutExplore}>Explora</div>
        <img src="./../images/Separator.svg"/>
        <div className={styles.aboutTopics}>
          <div>
            <h3 className={styles.design}>Diseño</h3>
            <p>Puedo diseñar el sitio web en base a sus necesidades y sugerencias. También puedo diseñar el sitio desde cero usando CSS, SASS, Bootstrap y Figma para la parte visual.</p>
          </div>
          <div>
            <h3 className={styles.development}>Desarrollo</h3>
            <p>Puedo desarrollar el sitio web en base a sus necesidades y sugerencias. También puedo desarrollar el sitio desde cero usando Javascript, React Js, Next Js para el frontend e integraciones con API, nodejs o mysql para el backend.</p>
          </div>
          <div>
            <h3 className={styles.maintenance}>Mejora</h3>
            <p>Puedo mejorar el sitio web usando nuevas tecnologías. Capacidad de adaptación para usar nuevos frameworks o librerías tanto en Web 2.0 como en Web 3.0.</p>
          </div>
        </div>
  
        <img src="./../images/Separator.svg"/>
        <button id="skills">Conocimientos</button>
        <h2>Usando Actualmente</h2>

        <div className={styles.skills}>

          <div>
            <img src="./../images/Html5.svg"/>
            <p>HTML5</p>
          </div>
          <div>
            <img src="./../images/Css.svg"/>
            <p>CSS3</p>
          </div>
          <div>
            <img src="./../images/Javascript.svg"/>
            <p>Javascript</p>
          </div>
          <div>
            <img src="./../images/React.svg"/>
            <p>React</p>
          </div>
          <div>
            <img src="./../images/Next.svg"/>
            <p>Next Js</p>
          </div>
          <div>
            <img src="./../images/Bootstrap.svg"/>
            <p>Bootstrap</p>
          </div>
          <div>
          <img src="./../images/Git.svg"/>
            <p>GIT</p>
          </div>
          <div>
          <img src="./../images/Figma.svg"/>
            <p>Figma</p>
          </div>
          
        </div>
        <h2>Aprendiendo</h2>
        <div className={styles.skills}>
          <div>
            <img src="./../images/Mongo.svg"/>
            <p>Mongo Db</p>
          </div>
          <div>
            <img src="./../images/Node.svg"/>
            <p>Node Js</p>
          </div>
          <div>
            <img src="./../images/Mysql.svg"/>
            <p>Mysql</p>
          </div>
          <div>
            <img src="./../images/Typescript.svg"/>
            <p>Typescript</p>
          </div>
          <div>
            <img src="./../images/Solidity.svg"/>
            <p>Solidity</p>
          </div>
          <div>
          <img src="./../images/Ethers.svg"/>
            <p>Ethers</p>
          </div>
        </div>
        <h2>Otros</h2>
        <div className={styles.skills}>
          <div>
            <img src="./../images/English.svg"/>
            <p>Inglés Conversacional </p>
          </div>
          <div>
            <img src="./../images/Spanish.svg"/>
            <p>Español Nativo</p>
          </div>
        </div>
      </section>

      <section id="portfolio" className={styles.portfolio}>
        <div className={styles.portfolioBackground}>
          <button>Portafolio</button>
        </div>

        <div>
          <div>
            <div className={tabs[0] ? styles.tabOn : styles.tabOff} onClick={() => {let tempTab = [true, false, false]; setTabs(tempTab)}}>Todos</div>
            <div className={tabs[1] ? styles.tabOn : styles.tabOff} onClick={() => {let tempTab = [false, true, false]; setTabs(tempTab)}}>Web 3.0</div>
            <div  className={tabs[2] ? styles.tabOn : styles.tabOff} onClick={() => {let tempTab = [false, false, true]; setTabs(tempTab)}}>Web 2.0</div>
          </div>
        </div>
        <div className={tabs[0] ? styles.projects : styles.hidden}>
          <div>
            <img src="./../images/projects/Moviefinder.png"/>
            <div className={styles.projectDetails}>
              <h3>Buscador de Películas</h3>
              <p>Encuentra y guarda tu película favorita <br/> (Javascript y API de películas)</p>
              <button>Demo</button>
            </div>
          </div>
          <div>
            <img src="./../images/projects/Wordlecrypto.png"/>
            <div className={styles.projectDetails}>
              <h3>Juego Wordle</h3>
              <p>El juego Wordle recreado<br/>(React, API diccionario)</p>
              <button>Demo</button>
            </div>
          </div>
          <div>
            <img src="./../images/projects/Onehundred.png"/>
            <div className={styles.projectDetails}>
              <h3>Reto de 100 Días</h3>
              <p> Seguidor de hábitos con almacenamiento local <br/>(React, Next)</p>
              <button>Demo</button>
            </div>
          </div>
          <div>
              <img src="./../images/projects/Memory.png"/>
              <div className={styles.projectDetails}>
                <h3>Juego de Memoria</h3>
                <p>Minijuego y evento de Airdrop <br/>(Javascript, React, Next, Solidity, Hardhat, Ethers)</p>
                <button>Demo</button>
              </div>
          </div>
          <div>
              <img src="./../images/projects/Ico.png"/>
              <div className={styles.projectDetails}>
                <h3>Evento ICO</h3>
                <p>Puedes mintear tokens para un proyecto web3 <br/>(Javascript, React, Next, Solidity, Hardhat, Ethers)</p>
                <button>Demo</button>
              </div>
          </div>
          <div>
              <img src="./../images/projects/Slot.png"/>
              <div className={styles.projectDetails}>
                <h3>Tragamonedas y whitelist</h3>
                <p>Juego de tragamonedas con Whitelist <br/>(Javascript, React, Next, Solidity, Hardhat, Ethers)</p>
                <button>Demo</button>
              </div>
          </div>
          <div>
            <img src="./../images/projects/Drummachine.png"/>
            <div className={styles.projectDetails}>
              <h3>Máquina de Música</h3>
              <p>Toca música usando el mouse o teclado <br/>(React, Javascript)</p>
              <button>Demo</button>
            </div>
          </div>
          <div>
            <img src="./../images/projects/Clock.png"/>
            <div className={styles.projectDetails}>
              <h3>Reloj 25 + 5</h3>
              <p>Reloj Pomodoro personalizable <br/>(React, Javascript)</p>
              <button>Demo</button>
            </div>
          </div>
          <div>
            <img src="./../images/projects/Passwordgen.png"/>
            <div className={styles.projectDetails}>
              <h3>Generador de Contraseñas</h3>
              <p>Genera una contraseña segura <br/>(Javascript)</p>
              <button>Demo</button>
            </div>
          </div>
          <div>
            <img src="./../images/projects/Randomquote.png"/>
            <div className={styles.projectDetails}>
              <h3>Frases aleatorias</h3>
              <p>Inspírate con estas frases aleatorias <br/>(Javascript)</p>
              <button>Demo</button>
            </div>
          </div>
        </div>
        <div className={tabs[1] ? styles.projects : styles.hidden}>
          <div>
              <img src="./../images/projects/Slot.png"/>
              <div className={styles.projectDetails}>
                <h3>Tragamonedas y whitelist</h3>
                <p>Juego de tragamonedas con Whitelist <br/>(Javascript, React, Next, Solidity, Hardhat, Ethers)</p>
                <button>Demo</button>
              </div>
          </div>
          <div>
              <img src="./../images/projects/Memory.png"/>
              <div className={styles.projectDetails}>
                <h3>Juego de Memoria</h3>
                <p>Minijuego y evento de Airdrop <br/>(Javascript, React, Next, Solidity, Hardhat, Ethers)</p>
                <button>Demo</button>
              </div>
          </div>
          <div>
              <img src="./../images/projects/Ico.png"/>
              <div className={styles.projectDetails}>
                <h3>Evento ICO</h3>
                <p>Puedes mintear tokens para un proyecto web3 <br/>(Javascript, React, Next, Solidity, Hardhat, Ethers)</p>
                <button>Demo</button>
              </div>
          </div>
        </div>
        <div className={tabs[2] ? styles.projects : styles.hidden}>
        <div>
            <img src="./../images/projects/Moviefinder.png"/>
            <div className={styles.projectDetails}>
              <h3>Buscador de Películas</h3>
              <p>Encuentra y guarda tu película favorita <br/> (Javascript y API de películas)</p>
              <button>Demo</button>
            </div>
          </div>
          <div>
            <img src="./../images/projects/Wordlecrypto.png"/>
            <div className={styles.projectDetails}>
              <h3>Juego Wordle</h3>
              <p>El juego Wordle recreado<br/>(React, API diccionario)</p>
              <button>Demo</button>
            </div>
          </div>
          <div>
            <img src="./../images/projects/Onehundred.png"/>
            <div className={styles.projectDetails}>
              <h3>Reto de 100 Días</h3>
              <p> Seguidor de hábitos con almacenamiento local <br/>(React, Next)</p>
              <button>Demo</button>
            </div>
          </div>
          <div>
            <img src="./../images/projects/Drummachine.png"/>
            <div className={styles.projectDetails}>
              <h3>Máquina de Música</h3>
              <p>Toca música usando el mouse o teclado <br/>(React, Javascript)</p>
              <button>Demo</button>
            </div>
          </div>
          <div>
            <img src="./../images/projects/Clock.png"/>
            <div className={styles.projectDetails}>
              <h3>Reloj 25 + 5</h3>
              <p>Reloj Pomodoro personalizable <br/>(React, Javascript)</p>
              <button>Demo</button>
            </div>
          </div>
          <div>
            <img src="./../images/projects/Passwordgen.png"/>
            <div className={styles.projectDetails}>
              <h3>Generador de Contraseñas</h3>
              <p>Genera una contraseña segura <br/>(Javascript)</p>
              <button>Demo</button>
            </div>
          </div>
          <div>
            <img src="./../images/projects/Randomquote.png"/>
            <div className={styles.projectDetails}>
              <h3>Frases aleatorias</h3>
              <p>Inspírate con estas frases aleatorias <br/>(Javascript)</p>
              <button>Demo</button>
            </div>
          </div>
        </div>
        <div className={styles.moreProjectsComming}>
          <p>¡Más proyectos por venir!</p>
        </div>
        
      </section>

      <section id="contact" className={styles.contact}>
        <button>Contáctame</button>
        <p>Si deseas puedes contactarme completando el siguiente formulario. O también puedes enviarme un mensaje directo a <span style={{fontWeight: 700}}>qericdev@gmail.com</span></p>
        <img src="./../images/Separator.svg"/>
        <div className={submit ? styles.hidden : styles.emptyForm}>
          <form ref={form} onSubmit={sendEmail}>
            <input className={styles.inputs} type="text" placeholder="INGRESA TU NOMBRE*" name="user_name" value={nameValue} required></input>
            <input className={styles.inputs} type="email" placeholder="INGRESA TU CORREO*" name="user_email" value={emailValue} required></input>
            <input className={styles.inputs} type="text" placeholder="ASUNTO*" name="user_subject" value={subjectValue} required></input>
            <textarea placeholder="TU MENSAJE*" value={messageValue} name="message" required></textarea>
            <input className={styles.submit} type="submit" value="ENVIAR"/>
          </form>
        </div>
        <div className={submit ? styles.submittedForm : styles.hidden}>
          <h3>¡Gracias!</h3>
          <p>He recibido tu mensaje y estaré respondiendo dentro de las próximas 24 horas.</p>
          <button onClick={() => {setSubmit(prevSubmit => !prevSubmit)}}>Ok, Cerrar</button>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.toTheTop}>
          <a href="#top"><img src="./../images/Arrow.svg" /></a>
          <a href="#top">Ir Arriba</a>
        </div>
        <div>
          <Link href="/"><a><img src="./../images/English.svg"/></a></Link>
          <Link href="/spanish"><a><img src="./../images/Spanish.svg"/></a></Link>
        </div>
        <div>
          <a href="#contact"><img src="./../images/Emailfooter.svg"/></a>
          <a href="https://www.linkedin.com/in/erickrojasm/" target="_blank"><img src="./../images/Linkedinfooter.svg"/></a>
          <a href="https://twitter.com/qericr" target="_blank"><img src="./../images/Twitterfooter.svg"/></a>
        </div>
        <p>@2022 Erick Rojas -  Todos los derechos reservados</p>

      </footer>
    </div>
  )
}
