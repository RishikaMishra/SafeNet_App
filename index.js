// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Header() {
  return (
    <header>
      <div className="container">
        <h1>Malicious URL & Malware detection</h1>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#partners">Collaborators</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <h2>Protect Your Information and data with Accurate Intelligence</h2>
        <p>“Secure your business: Use advanced IP scoring, malicious URL & malware detection tools for robust protection.” Stay vigilant!</p>
        <button>
        Validate
        </button>
      </div>
    </div>
  );
}
function Features() {
  return (
    <section id="features">
      <h2>Our Features</h2>
      <p>Effective feature representation is essential for identifying malicious URLs, Suspicious sites, viruses and malware detection. <br />
        Common features include:
        <br />
        <b>URL Components:</b> Analyzing the domain, path, query parameters, and subdomains according to some parameters like https requests.
        <br />
        <b>Lexical Features:</b> Examining the length, character distribution, and presence of suspicious keywords that is helpful to identify the threats about the URLs and sites.
        <br />
        <b>Host Reputation:</b> Checking the reputation of the hosting server or domain. Host Reputation refers to assessing the trustworthiness of a specific host (such as a domain, IP address, or server) based on its historical behavior and associations.
        <br />
        <b>Content Features:</b> Analyzing the content of the webpage associated with the URL.
        <br />
        <b>Network Features:</b> Considering network-level information, such as IP addresses and DNS records.
      </p>
      <img src={require('./images/features.jpg')} alt="Features" width="800px" height="500px" />
    </section>
  );
}

function Collaborators() {
  return (
    <section id="partners">
      <div className="containerr">
        <h2 className="ha">Our Amazing Collaborators</h2>
        <input type="radio" name="dot" id="one" />
        <input type="radio" name="dot" id="two" />
        <div className="main-card">
          <div className="cards">
            <div className="cardd">
              <div className="contentt">
                <div className="imgg">
                  <img src={require('./images/first.png')} alt="1st" />
                </div>
                <div className="details">
                  <div className="name">first Company</div>
                </div>
              </div>
            </div>
            <div className="cardd">
              <div className="contentt">
                <div className="imgg">
                  <img src={require('./images/second.png')} alt="2nd" />
                </div>
                <div className="details">
                  <div className="name">Second company</div>
                </div>
              </div>
            </div>
            <div className="cardd">
              <div className="contentt">
                <div className="imgg">
                  <img src={require('./images/third.png')} alt="3rd" />
                </div>
                <div className="details">
                  <div className="name">Third company</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact">
      <h2>Contact Us</h2>
      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <br />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" required />
        <br />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="container">
        <p>&copy; 2024 SafeNet. All rights reserved.</p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Collaborators />
      <Contact />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
