import React from 'react';
import styled from 'styled-components';
// import aiImage from "../assets/intervuew2.jpg";
import aiImage from "../assets/pngwing2.png";
import {Link} from "react-router-dom";


export const Home = () => {
  return (
    <>
    <DIV>
      <div className="text">
        <h1>Start preparing for Interviews</h1>
        {/* <p>Ace Your Interviews with AI-Powered Practice Sessions.</p> */}
        <Link to={"/interviews"}>
           <button>MOCK TESTS</button>
        </Link>
      </div>
      <div className="image-container">
        <img src="https://media.northwest.education/wp-content/uploads/2023/05/12143504/vecteezy_system-artificial-intelligence-chatgpt-chat-bot-ai_22479077_474-680x380.jpg" alt="" className="image" />
      </div>
     
    </DIV>
     </>
  );
};

const DIV = styled.div`
  width: 100%;
  height: 481px;
  background-color: #87adcf;
  display: flex;
  margin-top: 0px;
  padding-top: 130px;
  padding-bottom: 130px;
  color: #000000;
  justify-content: space-evenly;
background: url("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhFDewOcYbCPbReZ7XwFsTcMKMROZugPfod8onsV-AvFJToNCQLNL06JBTr67V-z7ADFW_DytBuEdlrlL1EYhB2ftSOt0ZrmzTEWwyz5n40sGcNtVvYpG-kLzIVeFeB8a6fEsnv-LgVwRzK4FBqZojrsiX2-1H2htfCalWsiTfYaUgz5sdoC5o2Q8qKI-w/s1200/AI-websites-you-should-try.jpg");
h1{
  font-size:47px;
}
  .text {
    margin-top:2px;
    text-align: left;
  }

  .image-container {
    border-radius: 10%;
    overflow: hidden;
    
  }

  .image {
    /* width: 100%; */
    width: 800px;
    height: 500px;
   
  }
  
  button {
    width: 70%;
    margin-top:30px;
    background-color: #fefffe;
    font-size: 25px;
    padding: 16px;
    border-radius: 20px;
    border: none;
  }

  button:hover {
    background-color: white;
    color: black;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    padding-top: 40px;
    padding-bottom: 60px;
    width:100%;
    display: flex;
    flex-direction:column;
    padding-left:20px;
    padding-right:20px;
    
    button {
      width: 50%;
      font-size: 20px;
      padding: 12px;
      margin:20px;
    }
    .text {
      margin-top:5px;
     
    }
  }
`;
