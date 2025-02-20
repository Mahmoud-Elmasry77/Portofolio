// import logo from './logo.svg';
import {useState, useEffect, useDeferredValue, useRef } from 'react';
import './App.css';
import './input.css'
import './output.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark,faBarsStaggered, faPaperPlane, faDownload, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGithub, faLinkedin, faLinkedinIn, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import image from './img/home-img1.jpg'
import html from './img/cards/HTML5_logo_and_wordmark.svg.png';
import css from './img/cards/CSS3_logo_and_wordmark.svg.png';
import js from './img/cards/JavaScript-Symbol.png';
import bootstrap from './img/cards/Bootstrap_logo.svg.png';
import tailiwind from './img/cards/Tailwind_CSS_Logo.svg.png';
import react from './img/cards/React-icon.svg.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ecommerce from './img/slider/ecommerce3-1.jpg';
import calc from './img/slider/calcluter.jpg';
import cruds from './img/slider/cruds.jpg';
import XO from './img/slider/XO.jpg';
import '../src/style.css';
function App() {
  const [isopen, setIopen] = useState(true);
  const openAsied = () => {
    setIopen(!isopen)
  }


  const Enter=(e)=>{
   
      let card = e.currentTarget;
      const goalElement = card.querySelector('.goal')
      const circleProgress = card.querySelector('.circle-progress')
      if(goalElement){
        setTimeout(()=>{

            let targetValue = parseInt(goalElement.dataset.myvalue)
            let currentValue = 0;
            let circleNum = targetValue * 365 / 100;
            circleProgress.style.strokeDashoffset = circleNum
            const interval = setInterval(() => {
            currentValue++;
            
              goalElement.textContent = currentValue + "%";
              if (currentValue === targetValue) {
                clearInterval(interval);
              }
          }, 25);

        },1500)
      }
  }

  
  const rest = (e) => {
    const card = e.currentTarget;
    const goalElement = card.querySelector('.goal');
    const circleProgress = card.querySelector('.circle-progress')
    if (goalElement) {
      setTimeout(()=>{
        goalElement.textContent = "0%";
        
        circleProgress.style.strokeDashoffset = 0;
      },25)
    }
  };
  // useEffect(() => {
  //   const cards = document.querySelectorAll(".skills .card");
  
  //   const handleMouseEnter = (event) => {
  //     const percentageElement = event.currentTarget.querySelector(".goal.percentage");
  //     const circle = document.querySelector(".circle-progress")
  //     if (percentageElement) {
  //       count(percentageElement);
  //       // circle.style.strokeDashoffset = 0;
  //     }
  //   };
   
  //     cards.forEach((card) => {
  //       card.addEventListener("mouseenter", handleMouseEnter);
  //     });
    
  //   return () => {
  //     cards.forEach((card) => {
  //       card.removeEventListener("mouseenter", handleMouseEnter);
  //     });
  //   };
  // },[]);

  // useEffect(() => {
  //   
  //   setCirclePercentage(percentage);
  //   console.log(percentage)
  // }, [percentage]);

  //
  // const setCirclePercentage = (percentage) => {
  //   const circle = document.querySelector('.circle-bg')
  //   const circlepro = document.querySelector('.circle-progress');
  //   const radius = circlepro.r.baseVal.value;
  //   const circumference = 2 * Math.PI * radius;
  //   // const offset = percentage * circumference / 100
  //   circlepro.style.strokeDashoffset = percentage;
    
  //   console.log(circumference, radius, percentage)
  //   circle.style.strokeDasharray = circumference;
  // };
  return (
    <div className='text-center font-Roboto'>
      {/* start Nav Bar */}
      <nav className='w-full h-16 overflow-hidden background fixed z-50'>
        <div className='container m-auto md:grid grid-cols-2 justify-center items-center'>
          <span className='text-text leading-extra-loose  text-center text-[25px] md:text-left md:text-4xl md:ml-16 font-Roboto '>Portofolio</span>
          <ul className='md:flex md:justify-center hidden md:mr-40 lg:mr-5'>
            <li className='link'>Home</li>
            <li className='link'>About</li>
            <li className='link'>Skills</li>
            <li className='link'>Projects</li>
            <li className='link'>Contact</li>
          </ul>
          <FontAwesomeIcon onClick={openAsied} icon={faBarsStaggered} size='xl' className={`text-text cursor-pointer absolute left-3  top-5  md:hidden transition-all ease-linear duration-300 ${isopen ? 'opacity-100' : "opacity-0"}`} />
          
          <FontAwesomeIcon onClick={openAsied} icon={ faXmark} size='xl' className={`text-text cursor-pointer absolute left-3  top-5  md:hidden transition-all ease-linear duration-300 ${isopen ? 'opacity-0' : "opacity-100"}`} />
          
        </div>

        {/* aside nav */}
        <aside className={`fixed md:hidden top-0 right-0 h-lvh bg-bgScound shadow-md transition-all ease-linear duration-500 ${isopen ? `w-0`: `w-1/2`}` }>
          <ul className=''>
            <li className='asid-link'>Home</li>
            <li className='asid-link'>About</li>
            <li className='asid-link'>Skills</li>
            <li className='asid-link'>Projects</li>
            <li className='asid-link'>Contact</li>
          </ul>
        </aside>
      </nav>
      {/* End Nav Bar */}
      {/*start About */}
         <section className="bg-[url('./img/home-img1.jpg')] w-full h-[500px] bg-no-repeat bg-cover bg-fixed">
         <div className='bg-[#1b1b1ba2] w-full h-full pt-[100px]'>
          <div className= 'w-[0px] h-[70px] mx-auto md:animate-div animate-divsm'>
          <h1 className='text-text m-auto w-full  text-nowrap overflow-hidden text-[40px] md:text-[50px] mt-[100px] animate-h1 border-r-[2px] border-[#fff]'>HI! I'M <span className='text-textS font-extrabold'>Mahmoud</span></h1>
          </div>
          <p className='text-text text-[15px] lg:text-[25px] leading-2 m-auto mt-[30px] px-[50px] uppercase'> A Front-End Developer With Expertise in building fast. </p>
          <button className='background w-[150px] h-[50px] m-auto mt-[30px]  text-text'> <FontAwesomeIcon icon={faPaperPlane} className='mr-[15px]'></FontAwesomeIcon>Here Me</button>
          </div>
        </section>
        <div className=' bg-bgScound pb-[100px]'>
              <div className='container mx-auto pt-[100px]  md:grid grid-cols-4'>
                <div className='col-auto lg:ml-[100px]'>
                    <img src={image} className=' w-[150px] h-[130px] border-stone-50 border-8 mb-[20px] mx-auto'/>
              </div>
                <div className='col-span-3 w-full px-[30px]'>
                  <h2 className='text-textS  text-left font-bold text-[25px] md:text-[30px]'>About Me</h2>
                  <p className='text-left my-[30px]'>I'm a USA based UX/UI Designer creating awesome and effective visual identities for companies of all sizes around the globe.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here</p>
                  <div className='md:grid grid-cols-2 items-center'>
                      <div>
                         <h2 className='text-textS text-left font-bold text-[25px] md:text-[30px]'>Personal Information</h2>
                         <span className='span-about'>Name : Mahmoud Elmasry</span>
                         <span className='span-about'>Age : 29</span>
                         <span className='span-about'>Phone : +02 1203733277</span>
                         <span className='span-about'>E-mail : m.elmasry617@gmail.com</span>
                         <span className='span-about'>Address : Egypt</span> 
                      </div>
                      <button className='background w-[250px] h-[50px] text-text font-[40px] mt-5 uppercase'> <FontAwesomeIcon icon={faDownload} size='xl' className='mr-[20px]'></FontAwesomeIcon>download C.V</button>
                  </div>
                </div>
              </div>
          </div>
      {/*End About */}
      {/* Start Skills */}
      <div className="container mx-auto mt-[100px] pb-[100px] border-b-slate-950">
        <h2 className='text-textS text-[25px] md:text-[50px] font-medium text-left ml-5'>Skills</h2>
        
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 md:gap-5 lg:gap-11 mt-[50px]  skills'>
          
          <div className='border-2 m-auto shadow-lg  md:m-2 mb-5  sm:w-[auto] relative w-[300px] h-[250px] md:h-[400px] rounded-lg card' onMouseLeave={rest} onMouseEnter={Enter}>
            <div className='absolute w-full h-full p-5 card-front rounded-lg background z-20 '>
              <img src={html} className=' w-[150px] h-[150px] md:w-[200px] md:h-[200px]  mx-auto md:mt-20'></img>
              <h2 className='uppercase text-[25px] mt-5 text-text'>html</h2>
            </div>
            <div className='absolute w-full h-full p-5 card-back  bg-[#eee] z-10 circle-container'>
              <svg className="circle" width="150" height="150">
                  <circle className="circle-bg" cx="70" cy="70" r="57.3" stroke="#ba68c8" strokeWidth="15" fill="none" />
                  <circle className="circle-progress" cx="70" cy="70" r="57.3" stroke="#7f3a8b" strokeWidth="15" fill="none" />
              </svg>
              <div  className='goal percentage' data-myvalue="90">0%</div>
               {/* <div className="percentage">{percentage}%</div> */}
            </div>
          </div>

          <div className='border-2 m-auto shadow-lg  md:m-2 mb-5  sm:w-[auto] relative w-[300px] h-[250px] md:h-[400px]  rounded-lg card' onMouseLeave={rest} onMouseEnter={Enter}>
            <div className='absolute w-full h-full p-5 card-front rounded-lg background z-20 '>
              <img src={css} className=' w-[150px] h-[150px]  md:h-[200px]  mx-auto md:mt-20'></img>
              <h2 className='uppercase text-[25px] mt-5 text-text'>css</h2>
            </div>
            <div className='absolute w-full h-full p-5 card-back  bg-[#eee] z-10 circle-container'>
              <svg className="circle" width="150" height="150">
                  <circle className="circle-bg" cx="70" cy="70" r="57.3" stroke="#ba68c8" strokeWidth="15" fill="none" />
                  <circle className="circle-progress" cx="70" cy="70" r="57.3" stroke="#7f3a8b" strokeWidth="15" fill="none" />
              </svg>
              <div  className='goal percentage' data-myvalue="85">0%</div>
               {/* <div className="percentage">{percentage}%</div> */}
            </div>
          </div>

          <div className='border-2 m-auto shadow-lg  md:m-2 mb-5  sm:w-[auto] relative w-[300px] h-[250px] md:h-[400px] rounded-lg card' onMouseLeave={rest} onMouseEnter={Enter}>
            <div className='absolute w-full h-full p-5 card-front rounded-lg background z-20 '>
              <img src={js} className='card-img'></img>
              <h2 className='uppercase text-[25px] mt-5 text-text'>js</h2>
            </div>
            <div className='absolute w-full h-full p-5 card-back  bg-[#eee] z-10 circle-container'>
              <svg className="circle" width="150" height="150">
                  <circle className="circle-bg" cx="70" cy="70" r="57.3" stroke="#ba68c8" strokeWidth="15" fill="none" />
                  <circle className="circle-progress" cx="70" cy="70" r="57.3" stroke="#7f3a8b" strokeWidth="15" fill="none" />
              </svg>
              <div  className='goal percentage' data-myvalue="70">0%</div>
               {/* <div className="percentage">{percentage}%</div> */}
            </div>
          </div>

          <div className='border-2 m-auto shadow-lg  md:m-2 mb-5  sm:w-[auto] relative w-[300px] h-[250px] md:h-[400px] rounded-lg card' onMouseLeave={rest} onMouseEnter={Enter}>
            <div className='absolute w-full h-full p-5 card-front rounded-lg background z-20 '>
              <img src={bootstrap} className=' w-[150px] h-[150px] md:w-[200px] md:h-[200px]  mx-auto md:mt-20'></img>
              <h2 className='uppercase text-[25px] mt-5 text-text'>bootstrap</h2>
            </div>
            <div className='absolute w-full h-full p-5 card-back  bg-[#eee] z-10 circle-container'>
              <svg className="circle" width="150" height="150">
                  <circle className="circle-bg" cx="70" cy="70" r="57.3" stroke="#ba68c8" strokeWidth="15" fill="none" />
                  <circle className="circle-progress" cx="70" cy="70" r="57.3" stroke="#7f3a8b" strokeWidth="15" fill="none" />
              </svg>
              <div  className='goal percentage' data-myvalue="82">0%</div>
               {/* <div className="percentage">{percentage}%</div> */}
            </div>
          </div>

          <div className='border-2 m-auto shadow-lg  md:m-2 mb-5  sm:w-[auto] relative w-[300px] h-[250px] md:h-[400px] rounded-lg card' onMouseLeave={rest} onMouseEnter={Enter}>
            <div className='absolute w-full h-full p-5 card-front rounded-lg background z-20 '>
              <img src={tailiwind} className=' w-[150px] h-[150px] md:w-[200px] md:h-[200px]  mx-auto md:mt-20'></img>
              <h2 className='uppercase text-[25px] mt-5 text-text'>tailiwind</h2>
            </div>
            <div className='absolute w-full h-full p-5 card-back  bg-[#eee] z-10 circle-container'>
              <svg className="circle" width="150" height="150">
                  <circle className="circle-bg" cx="70" cy="70" r="57.3" stroke="#ba68c8" strokeWidth="15" fill="none" />
                  <circle className="circle-progress" cx="70" cy="70" r="57.3" stroke="#7f3a8b" strokeWidth="15" fill="none" />
              </svg>
              <div  className='goal percentage' data-myvalue="80">80</div>
               {/* <div className="percentage">{percentage}%</div> */}
            </div>
          </div>

          <div className='border-2 m-auto shadow-lg  md:m-2 mb-5  sm:w-[auto] relative w-[300px] h-[250px] md:h-[400px] rounded-lg card' onMouseLeave={rest} onMouseEnter={Enter}>
            <div className='absolute w-full h-full p-5 card-front rounded-lg background z-20 '>
              <img src={react} className=' w-[150px] h-[150px] md:w-[200px] md:h-[200px]  mx-auto md:mt-20'></img>
              <h2 className='uppercase text-[25px] mt-5 text-text'>react</h2>
            </div>
            <div className='absolute w-full h-full p-5 card-back  bg-[#eee] z-10 circle-container'>
              <svg className="circle" width="150" height="150">
                  <circle className="circle-bg" cx="70" cy="70" r="57.3" stroke="#ba68c8" strokeWidth="15" fill="none" />
                  <circle className="circle-progress" cx="70" cy="70" r="57.3" stroke="#7f3a8b" strokeWidth="15" fill="none" />
              </svg>
              <div  className='goal percentage' data-myvalue="75">0%</div>
               {/* <div className="percentage">{percentage}%</div> */}
            </div>
          </div>

          </div>
      </div>
      {/* End Skills */}
      {/* ٍStart Projects */}
      <div className=' mx-auto pb-[200px] background text-text pt-[100px]'>
        <div className='lg:container mx-auto px-[30px]'>
      <h1 className='text-[25px] md:text-[40px] font-normal  text-left ml-5 mb-10'>Projects</h1>
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        centeredSlides = {true}
          spaceBetween={10}
        slidesPerView={3}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
            breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 10,
              },
        640: {
             slidesPerView: 1,
            spaceBetween: 0,
              },
          768: {
            slidesPerView: 2,
            spaceBetween:10,
          },
          
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween:10
          }
          
        }}
        className='swiper-container'
      >
        <SwiperSlide className=''>
        <a href='https://mahmoud-elmasry77.github.io/e-commerce/' target='_blank'> <img src={ecommerce} className='img-slid'/></a>
        </SwiperSlide>
        <SwiperSlide className=''>
        <a href='https://mahmoud-elmasry77.github.io/cruds/' target='_blank'> <img src={cruds} className='img-slid'/></a>
        </SwiperSlide>
        <SwiperSlide className=''>
        <a href='https://mahmoud-elmasry77.github.io/calcurator/' target='_blank'> <img src={calc} className='img-slid'/></a>
        </SwiperSlide>
        <SwiperSlide className=''>
        <a href='https://mahmoud-elmasry77.github.io/Game-X-O/' target='_blank'> <img src={XO} className='img-slid'/></a>
        </SwiperSlide>
        
      </Swiper>
    </div>
    </div>
      {/* ٍEnd Projects */}
      {/* Start Contact */}
        <section className='bg-[#fff] h-[50px]'>
            <ul className='flex justify-center items-center h-full '>
              <li className='inline-block p-5 text-center'><a href='https://www.facebook.com/profile.php?id=100078086883857' target='_blank'><FontAwesomeIcon icon={faFacebookF} className=' hover:text-textS transition-all duration-500 ease-in-out ' /></a></li>
              <li className='inline-block p-5 '><a href='https://github.com/Mahmoud-Elmasry77' target='_blank'><FontAwesomeIcon icon={faGithub} className=' hover:text-textS transition-all duration-500 ease-in-out '/></a></li>
              <li className='inline-block p-5 '><a href='https://www.linkedin.com/in/mahmoud-elmasry-a727161ab/' target='_blank'><FontAwesomeIcon icon={faLinkedinIn} className=' hover:text-textS transition-all duration-500 ease-in-out '/></a></li>
              <li className='inline-block p-5 '><a href='https://x.com/mahmoud06655690' target='_blank'><FontAwesomeIcon icon={faTwitter} className=' hover:text-textS transition-all duration-500 ease-in-out '/></a></li>
              <li className='inline-block p-5 '><a href='mailto:m.elmasry617@gmail.com' target='_blank'><FontAwesomeIcon icon={faEnvelope} className=' hover:text-textS transition-all duration-500 ease-in-out '/></a></li>
              <li className='inline-block p-5 '><a href='https://wa.me/21203733277' target='_blank'><FontAwesomeIcon icon={faWhatsapp} className=' hover:text-textS transition-all duration-500 ease-in-out '/></a></li>
            </ul>
        </section>
      {/* End Contact */}
      {/* Start Footer */}
        <footer className='h-[40px] background '>
          <p className='text-center text-text text-[15px] md:text-[20px] leading-loose pt-1 sm:pt-0'>Copyright &copy; Mahmoud {new Date().getFullYear()}</p>
        </footer>
      {/* End Footer */}
    </div> 
  );
}
 
export default App;
