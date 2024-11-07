import React from "react";
import Dance from "../assests/rm-removebg-preview.png"
import BP from "../assests/bp.jpeg"
import marriage from "../assests/marriage.jpeg"
import seminar from "../assests/seminar.jpeg"
import social from "../assests/social.jpeg"
import cocktail from "../assests/cocktail.jpeg"



function HomePage() {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1> Planning Guru</h1>
         
          <p>Best Place to Plan Your Events</p>
        </main>
      </div>

   

      <div className="home3" id="about">
        <div>
          <p>Hello,We are Planning Guru, an experienced event manager dedicated to turning your special occasions into unforgettable moments. With a passion for creativity and meticulous attention to detail, I thrive on bringing your visions to life. Whether it's a wedding, corporate event, or any celebration, I'm here to ensure every aspect is flawlessly executed, leaving you free to enjoy every moment. Let's collaborate to make your event dreams a reality.</p>
          
        </div>
      <div>
        <img src={Dance} alt="" />
      </div>
      </div>

      <div className="home4" id="events">
        <div>
          <h1>Events</h1>
          <div>
            <div className="img1">
              <img  src={BP} alt="" />
              <h3>Birthday Party</h3>
            </div>
            <div className="img2">
              <img  src={marriage} alt="" />
              <h3>Marriage</h3>
            </div>
            <div className="img3">
              <img  src={social} alt="" />
              <h3>Social Meetup</h3>
            </div>
            <div className="img4">
              <img  src={seminar} alt="" />
              <h3>Seminar</h3>
            </div>
            <div className="img5">
              <img  src={cocktail} alt="" />
              <h3>Cocktail Party</h3>
            </div>
            </div>
          
        </div>
      </div>
    </>
  );
}

export default HomePage;
