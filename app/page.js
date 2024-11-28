"use client"

import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FaEnvelope } from 'react-icons/fa';
import Image from "next/image";
import joseph from "../public/joseph.png";
import dsu from "../public/dsu.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import linkle from "../public/Linkle.png";
import sortingVisualizer from "../public/SortingAlgorithmVisualizer.png";
import platformer2D from "../public/Platformer2D.png";
import solarTracker from "../public/SolarTracker.png";
import connectAI from "../public/ConnectAI.png";
import weatherApp from "../public/WeatherApp.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-neutral-900">

        {/* BEGIN INTRODUCTION SECTION */}
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-white">Joseph Wilson</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl dark:text-white"/>
              </li>
              <li>
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-cyan-500">
              Joseph Wilson
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Aspiring software engineer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-neutral-400">
              I&apos;m a determined CS student and excited to jump into the world of tech. 
              Take a look at all the work I&apos;ve done so far!
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-neutral-400">
            <AiFillLinkedin onClick={() => window.open("https://www.linkedin.com/in/joseph-wilson-jw/")} className="cursor-pointer" />
            <AiFillGithub onClick={() => window.open("https://github.com/joewil08")} className="cursor-pointer" />
            <FaEnvelope onClick={() => window.location = "mailto:joewilson.jmw@gmail.com"} className="cursor-pointer" />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96 dark:from-cyan-500">
            <Image src={joseph} layout="fill" objectFit="cover" alt="Photo of Joseph Wilson"/>
          </div>
        </section>
        {/* END INTRODUCTION SECTION */}

        {/* BEGIN EDUCATION SECTION */}
        <section>
          <div>
          <h3 className="text-3xl py-1 dark:text-white">My education</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-neutral-400">
              Here is my academic journey so far!
            </p>
          </div>
          <div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-neutral-800">
              <div className="flex justify-center">
                <Image src={dsu} width={300} height={300} alt="Delaware State University logo" />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">Delaware State University</h3>
              <p className="py-2 dark:text-neutral-400">
                August 2022 - May 2026
              </p>
              <h4 className="py-4 text-teal-600 dark:text-cyan-500">Bachelor of Science in Computer Science, Minor in Mathematics</h4>
              <p className="text-gray-800 py-1 dark:text-neutral-400">GPA: 3.93</p>
              <p className="text-gray-800 py-1 dark:text-neutral-400">Awards: Presidential Scholar, Inspire Scholar, President&apos;s List</p>
              <p className="text-gray-800 py-1 dark:text-neutral-400">
                Coursework: Data Structures & Algorithms, Operating Systems, Database Systems, Stochastic Computing, Elements of Computer Programming, Game Programming, Systems Architecture, Discrete Structures, Digital Logic Design, Calculus, Linear Algebra, Rhetoric & Speech
              </p>
            </div>
          </div>
        </section>
        {/* BEGIN EDUCATION SECTION */}

        {/* BEGIN SKILLS SECTION */}
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">My skills</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-neutral-400">
              Throughout my education, projects, and other experiences, 
              I have acquired many skills within software engineering, web development, 
              game development, and data science. Here are my highlights!
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-neutral-800">
              <div className="flex justify-center">
                <Image src={code} width={100} height={100} alt="Image of code" />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">Programming & Development</h3>
              <p className="py-2 dark:text-neutral-400">
                I have experience learning and utilizing many different programming languages.
              </p>
              <h4 className="py-4 text-teal-600 dark:text-cyan-500">Top languages & frameworks I use</h4>
              <p className="text-gray-800 py-1 dark:text-neutral-400">Python, NumPy, SQL</p>
              <p className="text-gray-800 py-1 dark:text-neutral-400">Java, JUnit</p>
              <p className="text-gray-800 py-1 dark:text-neutral-400">JavaScript, CSS, HTML</p>
              <p className="text-gray-800 py-1 dark:text-neutral-400">React, Tailwind CSS </p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-neutral-800">
              <div className="flex justify-center">
                <Image src={design} width={100} height={100} alt="Image of design" />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">Tools & Platforms</h3>
              <p className="py-2 dark:text-neutral-400">
                I have worked with a variety of tools and platforms for facilitating development.
              </p>
              <h4 className="py-4 text-teal-600 dark:text-cyan-500">Technologies I use</h4>
              <p className="text-gray-800 py-1 dark:text-neutral-400">Git, GitHub</p>
              <p className="text-gray-800 py-1 dark:text-neutral-400">VS Code, JetBrains IDEs, Spyder</p>
              <p className="text-gray-800 py-1 dark:text-neutral-400">Godot, Blender</p>
              <p className="text-gray-800 py-1 dark:text-neutral-400">Arduino, MS Access</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-neutral-800">
              <div className="flex justify-center">
                <Image src={consulting} width={100} height={100} alt="Image of thumbs up" />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">Design & Methodologies</h3>
              <p className="py-2 dark:text-neutral-400">
                I have experience with designing and using methodologies.
              </p>
              <h4 className="py-4 text-teal-600 dark:text-cyan-500">Processes I use</h4>
              <p className="text-gray-800 py-1 dark:text-neutral-400">Agile</p>
              <p className="text-gray-800 py-1 dark:text-neutral-400">Scrum</p>
              <p className="text-gray-800 py-1 dark:text-neutral-400">UML</p>
            </div>
          </div>
        </section>
        {/* END SKILLS SECTION */}

        {/* BEGIN PROJECTS SECTION */}
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">My projects</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-neutral-400">
              I have completed a wide variety of projects, both individually and within a team. 
              Here are my top projects!
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div onClick={() => window.open("https://github.com/joewil08/Linkle")} className="cursor-pointer basis-1/3 flex-1 text-center shadow-lg p-10 rounded-xl mb-10 dark:bg-neutral-800">
              <Image src={linkle} className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" alt="Image of Linkle project" />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">Linkle</h3>
              <p className="py-2 dark:text-neutral-400">
                Play a Wordle clone that features words from my favorite video game series, <i>The Legend of Zelda</i>.
              </p>
              <h4 className="pt-4 text-teal-600 dark:text-cyan-500">Skills: React, JavaScript, HTML, CSS</h4>
            </div>
            <div onClick={() => window.open("https://github.com/joewil08/Sorting-Algorithm-Visualizer")} className="cursor-pointer basis-1/3 flex-1 text-center shadow-lg p-10 rounded-xl mb-10 dark:bg-neutral-800">
              <Image src={sortingVisualizer} className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" alt="Image of sorting algorithm visualizer" />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">Sorting Algorithm Visualizer</h3>
              <p className="py-2 dark:text-neutral-400">
                Learn about various sorting algorithms! Customize an array, select a sorting algorithm, 
                see algorithm complexities/properties, and watch an animated visualization of the sorting process.
              </p>
              <h4 className="pt-4 text-teal-600 dark:text-cyan-500">Skills: Data Structures & Algorithms, JavaScript, HTML, CSS</h4>
            </div>
            <div onClick={() => window.open("https://github.com/joewil08/csci-374-platformer-2d")} className="cursor-pointer basis-1/3 flex-1 text-center shadow-lg p-10 rounded-xl mb-10 dark:bg-neutral-800">
              <Image src={platformer2D} className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" alt="Image of sorting algorithm visualizer" />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">2D Platforming Game</h3>
              <p className="py-2 dark:text-neutral-400">
                Explore the level to find four gems while fighting enemies and collecting powerups!
              </p>
              <h4 className="pt-4 text-teal-600 dark:text-cyan-500">Skills: Godot, GDScript</h4>
            </div>
            <div onClick={() => window.open("https://sites.google.com/view/mid-program-project-group-7")} className="cursor-pointer basis-1/3 flex-1 text-center shadow-lg p-10 rounded-xl mb-10 dark:bg-neutral-800">
              <Image src={solarTracker} className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" alt="Image of blog for solar tracker project" />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">Solar Tracking System</h3>
              <p className="py-2 dark:text-neutral-400">
                Visit the team blog website to learn more about the Solar Tracking System we created to maximize solar energy capture!
              </p>
              <h4 className="pt-4 text-teal-600 dark:text-cyan-500">Skills: Arduino, Fusion 360</h4>
            </div>
            <div onClick={() => window.open("https://github.com/joewil08/ConnectFour")} className="cursor-pointer basis-1/3 flex-1 text-center shadow-lg p-10 rounded-xl mb-10 dark:bg-neutral-800">
              <Image src={connectAI} className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" alt="Image of connect 4 board" />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">Connect 4 AI</h3>
              <p className="py-2 dark:text-neutral-400">
                Play a game of Connect 4 against a friend or an AI! You can also customize the board size and winning condition.
              </p>
              <h4 className="pt-4 text-teal-600 dark:text-cyan-500">Skills: Python, NumPy, PyGame</h4>
            </div>
            <div onClick={() => window.open("https://github.com/joewil08/WeatherApp")} className="cursor-pointer basis-1/3 flex-1 text-center shadow-lg p-10 rounded-xl mb-10 dark:bg-neutral-800">
              <Image src={weatherApp} className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" alt="Image of weather application" />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">Weather App</h3>
              <p className="py-2 dark:text-neutral-400">
                View the current and forecasted weather of any city!
              </p>
              <h4 className="pt-4 text-teal-600 dark:text-cyan-500">Skills: REST API, Python, Tkinter</h4>
            </div>
          </div>
        </section>
        {/* END PROJECTS SECTION */}

      </main>
    </div>
  );
}
