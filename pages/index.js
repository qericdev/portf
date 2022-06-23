import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import emailjs from '@emailjs/browser'
import Sphere from './../pages/components/sphere'
import {useEffect, useRef, useState} from 'react'

export default function Home() {

  const form = useRef();
  const [tabs, setTabs] = useState([true,false,false]);
  const [submit, setSubmit] = useState(false);
  const [nameValue, setNameValue] = useState();
  const [emailValue, setEmailValue] = useState();
  const [subjectValue, setSubjectValue] = useState();
  const [messageValue, setMessageValue] = useState();
  const [showNavBurger, setShowNavBurger] = useState(false);
  const [counterNav, setCounterNav] = useState(0);

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
        <title>Portfolio | Erick Rojas</title>
        <meta name="description" content="Front End Developer" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <section id="top" className={styles.hero}>

        <nav className={styles.nav}>
          <a className={styles.navAbout} href="#about">About Me</a>
          <a className={styles.navSkills} href="#skills">Skills</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact" className={styles.contactMe}>Contact Me</a>
        </nav>

        <nav className={styles.navBurger}>
          <img className={!showNavBurger ? styles.imgBurg : styles.hidden} onClick={()=>{setShowNavBurger(true); setCounterNav(prevCounterNav => prevCounterNav + 1)}}src="./../images/Burger.svg"/>
          <img onClick = {()=>setShowNavBurger(false)} className={showNavBurger ? styles.imgBurg : styles.hidden} src="./../images/Close.svg"/>
          <div className={showNavBurger? styles.navBurgerDiv : counterNav > 0 ? styles.hiddenBurger : styles.hidden}>
            <div><a href="#about">About Me</a></div>
            <div><a href="#skills">Skills</a></div>
            <div><a href="#portfolio">Portfolio</a></div>
            <div className={styles.navBurgerContact}><a href="#contact">Contact Me</a></div>
          </div>
        </nav>

        <div className={styles.heroLeftAndRight}>
          <div className={styles.heroLeft}>
            <img src="./../images/Logo.svg"/>
            <h3>Hi, I am</h3>
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
          <h2>My philosophy</h2>
          <p>Throughout my life I have been collecting many experiences that have managed to shape what I am now.</p>
          <p>The following principles are part of my philosophy of life:</p>
          <ol>
            <li><span>Focus</span> : Everything starts to work if you put all your effort into one thing at a time.</li>
            <li><span>Chase your passion</span> : Try many activities until you find something you enjoy doing. Don't make decisions based on money. Find it and stick to it.</li>
            <li><span>Attitude</span> : It plays a very important role in achieving goals. Much more than Aptitude.</li>
            <li><span>Discomfort </span> : The only way to keep growing is to do things that make you feel uncomfortable.</li>
            <li><span>Never give up</span> : If something works out the first time, good! If not, keep trying, actions have a higher purpose, our dreams.</li>
            
          </ol>
          <map className={styles.descriptionImg}>
            <img src="./../images/Philosophy.svg"/>
          </map>
        </div>
       
      </section>

      <section id="about" className={styles.about}>
        <button>About Me</button>
        <p>Industrial Engineer by profession and programmer by vocation.</p>
        <div className={styles.aboutExplore}>Explore</div>
        <img src="./../images/Separator.svg"/>
        <div className={styles.aboutTopics}>
          <div>
            <h3 className={styles.design}>Design</h3>
            <p>I can design the website based on your needs and suggestions. I can also design the site from scratch using CSS, SASS, Bootstrap and Figma for the visual part.</p>
          </div>
          <div>
            <h3 className={styles.development}>Development</h3>
            <p>I can develop the website based on your needs and suggestions. I can also develop the site from scratch using Javascript, React Js, Next Js for the frontend and integrations with APIs, nodejs or mysql for the backend.</p>
          </div>
          <div>
            <h3 className={styles.maintenance}>Upgrade</h3>
            <p>I can improve the website using new technologies. Ability to adapt to use new frameworks or libraries in both Web 2.0 and Web 3.0.</p>
          </div>
        </div>
  
        <img src="./../images/Separator.svg"/>
        <button id="skills">Skills</button>
        <h2>Using Now</h2>

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
        <h2>Learning</h2>
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
        <h2>Other Skills</h2>
        <div className={styles.skills}>
          <div>
            <img src="./../images/English.svg"/>
            <p>Conversational English </p>
          </div>
          <div>
            <img src="./../images/Spanish.svg"/>
            <p>Native Spanish</p>
          </div>
        </div>
      </section>

      <section id="portfolio" className={styles.portfolio}>
        <div className={styles.portfolioBackground}>
          <button>Portfolio</button>
        </div>

        <div>
          <div>
            <div className={tabs[0] ? styles.tabOn : styles.tabOff} onClick={() => {let tempTab = [true, false, false]; setTabs(tempTab)}}>All</div>
            <div className={tabs[1] ? styles.tabOn : styles.tabOff} onClick={() => {let tempTab = [false, true, false]; setTabs(tempTab)}}>Web 3.0</div>
            <div  className={tabs[2] ? styles.tabOn : styles.tabOff} onClick={() => {let tempTab = [false, false, true]; setTabs(tempTab)}}>Web 2.0</div>
          </div>
        </div>
        <div className={tabs[0] ? styles.projects : styles.hidden}>
          <div>
            <img src="./../images/projects/Moviefinder.png"/>
            <div className={styles.projectDetails}>
              <h3>Movie Finder</h3>
              <p>Find and save your favorite movie <br/> (Javascript and a movie API)</p>
              <a href="https://movie-watch-three.vercel.app/" target="_blank"><button>Demo</button></a>
            </div>
          </div>
          <div>
            <img src="./../images/projects/Wordlecrypto.png"/>
            <div className={styles.projectDetails}>
              <h3>Wordle Game</h3>
              <p>The wordle game recreated<br/>(React, Dictionary API)</p>
              <a href="https://wordle-game-teal.vercel.app/" target="_blank"><button>Demo</button></a>
            </div>
          </div>
          <div>
            <img src="./../images/projects/Onehundred.png"/>
            <div className={styles.projectDetails}>
              <h3>One Hundred Challenge</h3>
              <p> Habit Tracker with a local storage <br/>(React, Next)</p>
              <a href="https://100days-zeta.vercel.app/" target="_blank"><button>Demo</button></a>
            </div>
          </div>
          <div>
              <img src="./../images/projects/Memory.png"/>
              <div className={styles.projectDetails}>
                <h3>Memory Game</h3>
                <p>Aidrop Event and minigame <br/>(Javascript, React, Next, Solidity, Hardhat, Ethers)</p>
                <a href="https://web3projects-qericdev.vercel.app/airdrop" target="_blank"><button>Demo</button></a>
              </div>
          </div>
          <div>
              <img src="./../images/projects/Ico.png"/>
              <div className={styles.projectDetails}>
                <h3>ICO Event</h3>
                <p>Mint Tokens for a project <br/>(Javascript, React, Next, Solidity, Hardhat, Ethers)</p>
                <a href="https://web3projects-qericdev.vercel.app/ico" target="_blank"><button>Demo</button></a>
              </div>
          </div>
          <div>
              <img src="./../images/projects/Slot.png"/>
              <div className={styles.projectDetails}>
                <h3>Slot Machine and Whitelist</h3>
                <p>Whitelist Game <br/>(Javascript, React, Next, Solidity, Hardhat, Ethers)</p>
                <a href="https://web3projects-qericdev.vercel.app/premiumslot9357" target="_blank"><button>Demo</button></a>
              </div>
          </div>
          <div>
            <img src="./../images/projects/Drummachine.png"/>
            <div className={styles.projectDetails}>
              <h3>Drum Machine</h3>
              <p>Play a drum machine using mouse or keyboard <br/>(React)</p>
              <a href="https://drum-machine-woad-seven.vercel.app/" target="_blank"><button>Demo</button></a>
            </div>
          </div>
          <div>
            <img src="./../images/projects/Clock.png"/>
            <div className={styles.projectDetails}>
              <h3>25 + 5 Clock</h3>
              <p> Customizable Pomodoro clock <br/>(React)</p>
              <a href="https://25clock-qericdev.vercel.app/" target="_blank"><button>Demo</button></a>
            </div>
          </div>
          <div>
            <img src="./../images/projects/Passwordgen.png"/>
            <div className={styles.projectDetails}>
              <h3>Password Generator</h3>
              <p>Generate a secure password <br/>(Javascript)</p>
              <a href="https://password-generator-qericdev.vercel.app/" target="_blank"><button>Demo</button></a>
            </div>
          </div>
  
        </div>
        <div className={tabs[1] ? styles.projects : styles.hidden}>
          <div>
              <img src="./../images/projects/Slot.png"/>
              <div className={styles.projectDetails}>
                <h3>Slot Machine and Whitelist</h3>
                <p>Whitelist Game <br/>(Javascript, React, Next, Solidity, Hardhat, Ethers)</p>
                <a href="https://web3projects-qericdev.vercel.app/premiumslot9357" target="_blank"><button>Demo</button></a>
              </div>
          </div>
          <div>
              <img src="./../images/projects/Memory.png"/>
              <div className={styles.projectDetails}>
                <h3>Memory Game</h3>
                <p>Aidrop Event and minigame <br/>(Javascript, React, Next, Solidity, Hardhat, Ethers)</p>
                <a href="https://web3projects-qericdev.vercel.app/airdrop" target="_blank"><button>Demo</button></a>
              </div>
          </div>
          <div>
              <img src="./../images/projects/Ico.png"/>
              <div className={styles.projectDetails}>
                <h3>ICO Event</h3>
                <p>Mint Tokens for a project <br/>(Javascript, React, Next, Solidity, Hardhat, Ethers)</p>
                <a href="https://web3projects-qericdev.vercel.app/ico" target="_blank"><button>Demo</button></a>
              </div>
          </div>
        </div>
        <div className={tabs[2] ? styles.projects : styles.hidden}>
        <div>
            <img src="./../images/projects/Moviefinder.png"/>
            <div className={styles.projectDetails}>
              <h3>Movie Finder</h3>
              <p>Find and save your favorite movie <br/> (Javascript and a movie API)</p>
              <a href="https://movie-watch-three.vercel.app/" target="_blank"><button>Demo</button></a>
            </div>
          </div>
          <div>
            <img src="./../images/projects/Wordlecrypto.png"/>
            <div className={styles.projectDetails}>
              <h3>Wordle Game</h3>
              <p>The wordle game recreated<br/>(React, Dictionary API)</p>
              <a href="https://wordle-game-teal.vercel.app/" target="_blank"><button>Demo</button></a>
            </div>
          </div>
          <div>
            <img src="./../images/projects/Onehundred.png"/>
            <div className={styles.projectDetails}>
              <h3>One Hundred Challenge</h3>
              <p> Habit Tracker with a local storage <br/>(React, Next)</p>
              <a href="https://100days-zeta.vercel.app/" target="_blank"><button>Demo</button></a>
            </div>
          </div>
          <div>
            <img src="./../images/projects/Drummachine.png"/>
            <div className={styles.projectDetails}>
              <h3>Drum Machine</h3>
              <p>Play a drum machine using mouse or keyboard <br/>(React)</p>
              <a href="https://drum-machine-woad-seven.vercel.app/" target="_blank"><button>Demo</button></a>
            </div>
          </div>
          <div>
            <img src="./../images/projects/Clock.png"/>
            <div className={styles.projectDetails}>
              <h3>25 + 5 Clock</h3>
              <p> Customizable Pomodoro clock <br/>(React)</p>
              <a href="https://25clock-qericdev.vercel.app/" target="_blank"><button>Demo</button></a>
            </div>
          </div>
          <div>
            <img src="./../images/projects/Passwordgen.png"/>
            <div className={styles.projectDetails}>
              <h3>Password Generator</h3>
              <p>Generate a secure password <br/>(Javascript)</p>
              <a href="https://password-generator-qericdev.vercel.app/" target="_blank"><button>Demo</button></a>
            </div>
          </div>
        </div>
        <div className={styles.moreProjectsComming}>
          <p>More projects to come!</p>
        </div>
        
      </section>

      <section id="contact" className={styles.contact}>
        <button>Contact</button>
        <p>If you wish to contact me, please complete the following form. Or you can send me a message to <span style={{fontWeight: 700}}>qericdev@gmail.com</span></p>
        <img src="./../images/Separator.svg"/>
        <div className={submit ? styles.hidden : styles.emptyForm}>
          <form ref={form} onSubmit={sendEmail}>
            <input className={styles.inputs} type="text" placeholder="ENTER YOUR NAME*" name="user_name" value={nameValue} required></input>
            <input className={styles.inputs} type="email" placeholder="ENTER YOUR EMAIL*" name="user_email" value={emailValue} required></input>
            <input className={styles.inputs} type="text" placeholder="SUBJECT*" name="user_subject" value={subjectValue} required></input>
            <textarea placeholder="YOUR MESSAGE*" value={messageValue} name="message" required></textarea>
            <input className={styles.submit} type="submit" value="SUBMIT"/>
          </form>
        </div>
        <div className={submit ? styles.submittedForm : styles.hidden}>
          <h3>Thank You!</h3>
          <p>I've received your message and will get back to you within 24 hours.</p>
          <button onClick={() => {setSubmit(prevSubmit => !prevSubmit)}}>Ok, Close</button>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.toTheTop}>
          <a href="#top"><img src="./../images/Arrow.svg" /></a>
          <a href="#top">Back to Top</a>
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
        <p>@2022 Erick Rojas -  All Rights Reserved</p>

      </footer>
    </div>
  )
}
