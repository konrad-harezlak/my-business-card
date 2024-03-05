import React from "react";
import { Link } from "react-router-dom";
import "./Projects.scss";
export default class Projects extends React.Component {
  render() {
    return (
      <main className="projects-container">
        <h1> My Projects: </h1>
        <ol className="projects-list">
          <Link rel="https://calendar-frontend-brl8.onrender.com/calendar">
            <li>Calendar</li>
          </Link>
          <p className="description">
            <h3>Users:</h3>
            <ul className="login-data">
              <li>L:Konrad P:Harezlak</li>
              <li>L:Ryszard P:peja</li>
              <li>L:Pudzian P:pudzian</li>
              <li>L:Witkor P:Ruda</li>
            </ul>
            <h3>Project Overview:</h3>
            <p>
              Welcome to the Calendar Project! This web application, built using
              React, Node.js, and MongoDB, aims to provide users with features
              for registration, login, and managing appointments. Please note
              that the backend is under development, and the current version
              focuses on the frontend components and user interface.
            </p>
            <h3>Technologies Used:</h3>
            <p>
              JavaScript (React.js)
              <br />
              Node.js
              <br />
              MongoDB
              <br />
              HTML
              <br />
              CSS
              <br />
              react-router-dom
              <br />
              useState hook
            </p>
          </p>
          <Link rel="https://task-manager-frontend-2l7a.onrender.com">
            <li>Task Manager</li>
          </Link>
          <p className="description">
            <h3>Users:</h3>
            <p className="login-data">
              <b>Admin Account:</b>
              L: admin P: admin 
              <br /> <br />
              <b>User Account:</b> 
              L: user1 P: user
            </p>
            <h3>Project Overview:</h3>
            <p>
              Task Manager is a simple task management system that allows users
              to register, log in, add, edit, delete, and view tasks. The system
              supports categories, titles, and task descriptions, as well as the
              generation of PDF and TXT files containing task information.
            </p>
            <h3>Technologies Used:</h3>
            <p>
              HTML
              <br />
              CSS
              <br />
              JavaScript
              <br />
            </p>
            <h3>Features:</h3>
            <p>
              - Registration and Login
              <br />
              - Task Management
              <br />
              - Categories, Titles, and Descriptions
              <br />
              - Viewing Tasks
              <br />
              - Generating PDF and TXT Files
              <br />
              - Logout
              <br />- Admin Page
            </p>
          </p>
          <Link rel="https://blog-bootstrap.netlify.app">
            <li>Blog</li>
          </Link>
          <p className="description">
            <h3>Project Overview:</h3>
            <p>
              This is a sample basic website built using the Bootstrap
              framework. The page includes navigation, a carousel with images,
              cards with descriptions, blog posts, and a newsletter form.
            </p>
            <h3>Technologies Used:</h3>
            <p>
              HTML
              <br />
              CSS
              <br />
              Bootstrap
              <br />
              JavaScript
            </p>
            <h3>Page Description:</h3>
            <p>
              - Navigation
              <br />
              - Carousel
              <br />
              - Cards
              <br />
              - Blog Posts
              <br />- Newsletter Form
            </p>
          </p>
          <Link rel="https://bussines-card-z31y.onrender.com">
            <li>Portfolio</li>
          </Link>
          <p className="description">
            <h3>Project Overview:</h3>
            <p>
              This is my personal portfolio website showcasing my skills and
              projects. Feel free to explore!
            </p>
            <h3>Technologies Used:</h3>
            <p>
              JavaScript (React)
              <br />
              SCSS
              <br />
              HTML
              <br />
              CSS
              <br />
              react-router-dom
            </p>
            <h3>Project Structure:</h3>
            <p>
              - Home: A brief description about me.
              <br />
              - Articles: A search functionality to find posts from the
              jsonfiles.json file.
              <br />- Projects: This site! - Contact: Contact information,
              including links to my GitHub and LinkedIn profiles, phone number,
              and location.
            </p>
          </p>
          <Link rel="https://simple-portfolio-hary.netlify.app">
            <li>My bussines card</li>
          </Link>
          <p className="description">
            {" "}
            <h3>Portfolio Overview:</h3>
            <p>
              This is my personal portfolio website showcasing my skills and
              projects. Feel free to explore!
            </p>
            <h3>Table of Contents:</h3>
            <ul>
              <li>Introduction</li>
              <li>Technologies</li>
              <li>Features</li>
              <li>Screenshots</li>
              <li>Installation</li>
              <li>Usage</li>
            </ul>
            <h3>Introduction:</h3>
            <p>
              Welcome to my portfolio! My name is Konrad Harężlak, and I am a
              Frontend Developer currently seeking job opportunities. This
              portfolio website provides an overview of my skills, experience,
              and projects. You can find details about my skills, view my
              projects, and get in touch with me through the contact section.
            </p>
            <h3>Technologies:</h3>
            <p>
              HTML
              <br />
              CSS
            </p>
            <h3>Features:</h3>
            <ul>
              <li>
                Navigation: Easy navigation with a sticky navbar that smoothly
                scrolls to different sections.
              </li>
              <li>
                About Section: Introduces myself and provides information about
                my skills and aspirations.
              </li>
              <li>
                Skills Section: Displays my proficiency in various technologies
                with progress bars.
              </li>
              <li>
                Contact Section: Includes links to my GitHub, LinkedIn, email,
                and phone number for easy communication.
              </li>
            </ul>
          </p>
          <Link rel="https://bpu-koncept.netlify.app">
            <li>Architecture Business Card</li>
          </Link>
          <p className="description">
            <h3>Project Overview:</h3>
            <p>
              This project represents a website for the Architectural and Design
              Studio "KONCEPT" owned by Tomasz Harężlak. The website showcases
              the studio's portfolio and provides information about their
              expertise and services.
            </p>
            <h3>Technologies Used:</h3>
            <p>
              HTML
              <br />
              CSS
              <br />
              JavaScript
            </p>
          </p>
        </ol>
      </main>
    );
  }
}
