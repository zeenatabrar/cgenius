import React from 'react';
import "./About.css"
const About = () => {
  const redirectToHome = () => {
    window.location.href = "index.html";
  };

  return (
    <div>
      <header>
        {/* <h1 onClick={redirectToHome}>CodeGenius</h1> */}
        {/* <nav>
          <a href="index.html">Home</a>
          <a href="interview.html">Interview</a>
          <a href="about.html">About</a>
          <a href="contact.html">Contact</a>
        </nav> */}
      </header>
      <main>
        <h1>About Us</h1>
        <p>Welcome to Code Genius, your AI-powered interview preparation platform. We are dedicated to helping students master the art of interviews through the magic of Artificial Intelligence and language processing.</p>

        <h2>Our Mission</h2>
        <p>At Code Genius, our mission is to empower students with the skills and confidence they need to excel in job interviews. We understand the challenges of entering the tech industry, and we're here to guide you on your journey to success.</p>

        <h2>Key Features</h2>
        <ul>
          <li><strong>Interview Simulator:</strong> Practice realistic interviews with our AI, tailored to your preferred technology stack (MERN, Node, Java, and more).</li>
          <li><strong>Dynamic Question Generation:</strong> Utilizing the OpenAI API, we dynamically generate relevant interview questions for an immersive learning experience.</li>
          <li><strong>Personalized Feedback:</strong> Receive instant feedback on your responses and access resources to enhance your interview skills.</li>
        </ul>

        <h2>Join Code Genius Today</h2>
        <p>Embark on your journey to interview mastery with Code Genius. Whether you're a seasoned developer or just starting, our platform is designed to elevate your skills and boost your confidence. Start practicing, refining, and conquering interviews like a true Code Genius!</p>
      </main>
      <footer>
        <p>&copy; 2023 Your Website Name | Contact: contact@Codegenius.com</p>
      </footer>
    </div>
  );
};

export default About;

