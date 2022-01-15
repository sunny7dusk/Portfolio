/* eslint-disable no-lone-blocks */
/* eslint-disable max-len */
import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Bounce, Tada } from 'react-reveal';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import bg from './Assets/dark7storm_assets_0004_room.webp';
import city from './Assets/dark7storm_assets_0005_cityscape.webp';
import sun from './Assets/dark7storm_assets_0003_window-ray.webp';
import me from './Assets/dark7storm_assets_0001_char.webp';
import bokeh from './Assets/dark7storm_assets_0000_bokeh.webp';
import meCartoon from './Assets/me2.png';
import html from './Assets/html-5.webp';
import css from './Assets/css.webp';
import c from './Assets/icons8-c-programming-96.webp';
import flutter from './Assets/icons8-flutter-96.webp';
import python from './Assets/icons8-python-96.webp';
import firebase from './Assets/icons8-google-firebase-console-96.webp';
import java from './Assets/icons8-java-96.webp';
import js from './Assets/js-format.webp';
import react from './Assets/icons8-react-native-96.webp';
import nodejs from './Assets/icons8-nodejs-96.webp';
import td from './Assets/td.webp';
import ig from './Assets/instagram.webp';
import linkedin from './Assets/linkedin.webp';
import tailwind from './Assets/tailwindcss-mark.cb8046c163f77190406dfbf4dec89848.svg';
import bootstrap from './Assets/bootstrap-logo.svg';
import github from './Assets/github.webp';
import spotify from './Assets/New Project.webp';
import './fonts/Disket-Mono-Bold.ttf';
import './fonts/Disket-Mono-Regular.ttf';
import table from './Assets/table.webp';
import vue from './Assets/vue.png';
import githubGame from './Assets/githubGame.png';
import rocketry from './Assets/rocketry.png';
import codeQuiz2 from './Assets/codeQuiz2.png';

function App() {
  const fadeIn = useSpring({ to: { opacity: '1' }, from: { opacity: '0' }, config: { duration: 1000 } });
  const fadeIn2 = useSpring({
    to: { opacity: '1' }, from: { opacity: '0' }, config: { duration: 1000 }, delay: 1000,
  });

  return (
    <>
      <Router>
        <Route path="/" />
      </Router>
      <Helmet>
        <title>Nathaniel Chai Zhuo En</title>
        <meta
          name="description"
          content="Nathaniel Chai Zhuo En | Computer Science senior at Virginia Tech. Welcome to my portfolio! This is build with React."
        />
        <link rel="canonical" href="/Portfolio" />
      </Helmet>
      <h1 className="hidden">Portfolio | Nathaniel Chai Zhuo En 👨‍💻</h1>
      <div className="box-content  w-full  h-full overflow-hidden text-color5 m-0 p-0 fixed text-center">
        {/* sm:space-y-20 h-auto */}
        {/* min-h-screen */}
        <div className="overflow-y-scroll overflow-x-hidden bg-fixed  relative bg-center bg-cover bg-no-repeat w-full flex flex-col  h-full pb-20 m-0 pt-40 sm:pt-0" style={{ backgroundImage: `url(${sun}), url(${bg}), url(${city})` }}>
          <div className="flex relative w-full bg-heroMobilePos bg-heroMobileSize  bg-no-repeat sm:bg-contain justify-center justify-items-center content-center items-center h-full sm:pt-0" style={{ backgroundImage: `url(${bokeh}),url(${me}),url(${table})` }}>
            <div className=" flex-1 w-screen h-screen relative text-4xl text-left text-color5 mx-10 py-44 sm:mx-20 lg:mx-36 xl:mx-60 lg:text-5xl lg:py-64 2xl:text-7xl 2xl:py-90">
              <animated.div style={fadeIn}>
                <p className="gradientText w-6/6 sm:w-3/6">
                  Full Stack
                  Developer
                </p>
              </animated.div>
              <animated.div style={fadeIn2}>
                <p className="text-3xl mt-4 mb-1 fadeIn2">Nate</p>
                <p className="text-sm">Computer Science</p>
                <p className="text-sm">Virginia Tech</p>
              </animated.div>
            </div>
          </div>
          <div className="w-screen h-auto mt-20 p-0 flex flex-col ext-center justify-center justify-items-center content-center items-center">
            <Bounce top>
              <div className="flex-1 w-9/12 rounded-3xl backdrop-blur-2xl  py-6 px-8 relative lg:max-w-4xl justify-center justify-items-center content-center items-center  bg-no-repeat sm:bg-contain" style={{ boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2)' }}>
                {/* <div className="flex-1  container w-9/12 rounded-3xl backdrop-blur-2xl mix-blend-overlay py-6 px-8 relative cardGlass" style={{ background: 'rgba(255, 255, 255, 0.25)', boxShadow: 'rgba(0, 0, 0, 0.25)' }}> */}
                <div className="flex flex-col relative items-center content-center  justify-center justify-items-center ">
                  <img width="600" height="600" src={meCartoon} id="meSize" alt="me" title="me" loading="lazy" className="rounded-2xl w-6/12 flex-1 mb-2 sm:w-3/12 lg:w-2/12 " style={{ isolation: 'isolate' }} />
                  <p className="text-2xl flex-1 lg:text-5xl ">Nathaniel Chai Zhuo En</p>
                  <p className="text-xl flex-1 lg:text-4xl">蔡卓恩</p>
                </div>
              </div>
            </Bounce>
            <Bounce right>
              <div className="flex-1   relative w-9/12 rounded-3xl backdrop-blur-2xl  py-6 px-8 my-16 lg:max-w-4xl" style={{ background: 'inherit', boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2)' }}>
                <div className="flex flex-col items-center content-center">
                  <p className="text-base flex-1 lg:text-2xl">
                    Growing up in 🇲🇾, I have always been fascinated by the
                    technological side of the world. Driven by the desire to learn,
                    I constantly immerse myself in new and upcoming programming technologies.
                    This is what led me here today, as a programmer studying Computer Science at
                    Virginia Tech.
                  </p>
                </div>
              </div>
            </Bounce>
            <Bounce left>
              <div className="flex-1  relative w-9/12 rounded-3xl backdrop-blur-2xl  py-6 px-8 my-16 lg:max-w-4xl" style={{ background: 'inherit', boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2)' }}>
                <div className="flex flex-col items-center content-center">
                  <p className="text-base flex-1 mb-4 lg:text-2xl">
                    The list of programming technologies I have under my belt is always expending 👨🏻‍💻
                  </p>
                  <div className="grid grid-cols-5 grid-row-3 lg:px-5 items-center content-center justify-items-center gap-y-2">
                    <img width="512" height="512" src={html} alt="" className="w-9/12 lg:w-6/12" title="html5" loading="lazy" />
                    <img width="512" height="512" src={css} alt="" className="w-9/12 lg:w-6/12" title="css" loading="lazy" />
                    <img width="96" height="96" src={firebase} alt="" className="w-9/12 lg:w-6/12" title="firebase" loading="lazy" />
                    <img width="96" height="96" src={flutter} alt="" className="w-9/12 lg:w-6/12" title="flutter" loading="lazy" />
                    <img width="96" height="96" src={python} alt="" className="w-9/12 lg:w-6/12" title="python" loading="lazy" />
                    <img width="96" height="96" src={java} alt="" className="w-9/12 lg:w-6/12" title="java" loading="lazy" />
                    <img width="512" height="512" src={js} alt="" className="w-9/12 lg:w-6/12" title="js" loading="lazy" />
                    <img width="96" height="96" src={c} alt="" className="w-9/12 lg:w-6/12" title="c" loading="lazy" />
                    <img width="96" height="96" src={nodejs} alt="" className="w-9/12 lg:w-6/12" title="nodejs" loading="lazy" />
                    <img width="96" height="96" src={react} alt="" className="w-9/12 lg:w-6/12" title="react" loading="lazy" />
                    <img width="512" height="512" src={bootstrap} alt="" className="w-9/12 lg:w-6/12" title="bootstrap" loading="lazy" />
                    <img width="512" height="408" src={tailwind} alt="" className="w-9/12 lg:w-6/12" title="tailwind" loading="lazy" />
                    <img width="593" height="512" src={vue} alt="" className="w-9/12 lg:w-6/12" title="vue" loading="lazy" />
                  </div>
                </div>
              </div>
            </Bounce>
            <Bounce right>
              <div className="flex-1 relative w-9/12 rounded-3xl backdrop-blur-2xl  py-6 px-8 my-16 lg:max-w-4xl" style={{ background: 'inherit', boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2)' }}>
                <div className="flex flex-col items-center content-center">
                  <p className="text-base flex-1 mb-4 lg:text-2xl">
                    Here are some of my works 👇🏻
                  </p>
                  <div className="flex flex-col items-center content-center justify-items-center gap-y-6">
                    <a href="https://sites.google.com/vt.edu/dscvt" role="button" aria-label="Tech Daddy"><img width="1920" height="1080" src={td} alt="tech daddy" className="w-full  flex-1 rounded-3xl" title="tech daddy" loading="lazy" /></a>
                    <a href="https://sunny7dusk.github.io/React-Spotify-Player/" role="button" aria-label="Tech Daddy"><img width="1920" height="1080" src={spotify} title="react spotify player" loading="lazy" alt="react spotify player" className="w-full  flex-1 rounded-3xl" /></a>
                    <a href="https://github.com/gdscvt/github-game" role="button" aria-label="Tech Daddy"><img width="1920" height="1080" src={githubGame} title="github game" loading="lazy" alt="github game" className="w-full  flex-1 rounded-3xl" /></a>
                    <a href="https://github.com/sunny7dusk/rocketry-site" role="button" aria-label="Tech Daddy"><img width="1327" height="576" src={rocketry} title="rocketry" loading="lazy" alt="rocketry" className="w-full  flex-1 rounded-3xl" /></a>
                    <img width="1920" height="1080" src={codeQuiz2} alt="code quiz" title="code quiz" loading="lazy" className="w-1/2  flex-1 rounded-3xl" />
                  </div>
                </div>
              </div>
            </Bounce>
            <div className="flex-1 relative w-9/12 rounded-3xl backdrop-blur-2xl  py-6 px-8 my-16 lg:max-w-4xl" style={{ background: 'inherit', boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2)' }}>
              <div className="flex flex-col items-center content-center">
                <p className="text-sm flex-1 mb-4 lg:text-2xl">
                  Interested in working together? Contact me! 🤙🏻
                </p>

                <a
                  role="button"
                  href="https://drive.google.com/file/d/1Q8aYVYHCu2syZGTNGaEGt2oJ23o3DgPI/view?usp=sharing"
                  className="w-6/12 lg:max-w-3/12 py-2 rounded-3xl align-middle"
                  style={{
                    background: 'linear-gradient(90deg, rgba(217,145,145,1) 0%, rgba(223,169,140,1) 35%, rgba(179,185,181,1) 65%, rgba(141,189,215,1) 100%)',
                  }}
                >
                  RESUME

                </a>

                <div className="flex-1 grid grid-cols-3 grid-row-1 lg:px-5 items-center content-center justify-items-center justify-center gap-y-4 mt-4">
                  <a href="https://www.linkedin.com/in/nathaniel-chai-48aab4135/" role="button" aria-label="Tech Daddy"><img width="512" height="512" src={linkedin} alt="" title="linkedin" loading="lazy" className="w-9/12 md:w-5/12 lg:w-4/12  mx-auto" /></a>
                  <a href="https://github.com/sunny7dusk" role="button" aria-label="Tech Daddy"><img width="512" height="512" src={github} alt="" title="github" loading="lazy" className="w-9/12 lg:w-4/12 p-0 mx-auto md:w-5/12" /></a>
                  <a href="https://www.instagram.com/dark7storm/" role="button" aria-label="Tech Daddy"><img width="512" height="512" src={ig} alt="" title="instagram" loading="lazy" className="w-9/12 lg:w-4/12 mx-auto md:w-5/12" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* mix-blend-overlay */}
      </div>
    </>
  );
}

export default App;
