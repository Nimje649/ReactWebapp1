import React from 'react'
import vg from "../assets/2.jpg"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"


const Home = () => {
  return (
    <>
    <div className='home' id='home'>
      <main>
        <h1>TechBoom</h1>
        <p>solution to all your problems</p>
      </main>
    </div>
    <div className='home2'>
        <img src={vg} alt="Graphics" />

        <div>
            <p>
                we are your one and only solution to the tech problems you 
                face every day. We are leading tech company whose aim is to 
                increase the problem solving ability in children.
            </p>
        </div>
    </div>
    <div className="home3" id="about">
      <div>
        <h1>Who we are?</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Temporibus id pariatur quae. Delectus, vero? Perspiciatis cumque, 
          eligendi quaerat est quisquam optio quo distinctio iure harum! 
          Officiis eius voluptates assumenda nam.

          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Iste quis quisquam cum distinctio minus corrupti cumque sed? 
          Facilis obcaecati sapiente molestias, repellendus veritatis odio possimus, 
          quia, aperiam ratione velit quaerat!
          </p>
      </div>
    </div>
    <div className="home4" id="brands">
      <div>
        <h1>Brands</h1>
        <article>
          <div style={{animationDelay: "0.3s"}}>
            <AiFillGoogleCircle />
            <p>Google</p>
          </div>
          <div style={{animationDelay: "0.5s"}}>
            <AiFillYoutube />
            <p>Youtube</p>
          </div>
          <div style={{animationDelay: "0.7s"}}>
            <AiFillAmazonCircle />
            <p>Amazon</p>
          </div>
          <div style={{animationDelay: "1s"}}>
            <AiFillInstagram />
            <p>Instagram</p>
          </div>
        </article>
      </div>
    </div>

    </>
  )
}

export default Home
