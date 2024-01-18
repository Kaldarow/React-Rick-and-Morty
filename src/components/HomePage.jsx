import React from 'react'
import unnamedimg from "../images/unnamed.jpg"
import airbnbimg from "../images/airbnb-mini.svg"
import googleimg from "../images/google-mini.svg"
import facebookimg from "../images/facebook-mini.svg"
import slackimg from "../images/slack-mini.svg"
import hubspotimg from "../images/hubspot-mini.svg"
import tools_img from '../images/Tools_img.png'
import tools2_img from '../images/Tools_2.png'
import product_img from '../images/product.png'

const HomePage = () => {
  return (
    <>
    <header id="About" className="section-1">
      <div className="section-1_container">
        <div className="section-1_main">
          <div className="section-1_main_left">
            <h1>I make products</h1>
            <h2>
              Delegate the project on me <span>Today</span> - and look forward
              to a bright <span>Tomorrow</span>
            </h2>
            <p>
              Hi! I’m Kanat, a product maker based in Bishkek. I create
              user-friendly websites for fast-growing startups.
            </p>
            <button>Contact me</button>
          </div>
          <div className="section-1_main_right">
            <img src={unnamedimg} alt="" />
          </div>
        </div>
        <div className="section-1_companies">
          <h4>Recommended by</h4>
          <div className="conteiner_companies_logo">
            <img src={googleimg}  alt="" />
            <img src={airbnbimg} alt="" />
            <img src={facebookimg} alt="" />
            <img src={hubspotimg} alt="" />
            <img src={slackimg} alt="" />
          </div>
        </div>
      </div>
    </header>
    <content id="Services" className="section-2">
      <div className="section-2_services">
        <div className="section-2_services_tittle">
          <h4>Services</h4>
          <h2>
            Product that solves problems, <br />
            one product at a time.
          </h2>
        </div>
        <div className="section-2services_cards_container">
          <div className="section-2_services_cards">
            <div className="section-2_services_card">
              <img src={tools_img} alt="" />
              <span>What I can do for you</span>
              <p>
                Faster, better products that your users love. Here's all the
                services I provide:
              </p>
              <ul>
                <li>Front-end Development</li>
                <li>Back-end Development (Base on expectation)</li>
                <li>And many more</li>
              </ul>
            </div>
            <div className="section-2_services_card">
              <img src={tools2_img} alt="" />
              <span>Applications I'm fluent in</span>
              <p>
                Every designer needs the right tools to do the perfect job.
                Thankfully, I'm multilingual.
              </p>
              <ul>
                <li>React</li>
                <li>Java script</li>
                <li>Nod.js</li>
              </ul>
            </div>
            <div className="section-2_services_card">
              <img src={product_img} alt="" />
              <span>What you can expect</span>
              <p>
                I design products that are more than pretty. I make them
                shippable and usable.
              </p>
              <ul>
                <li>Clean and functional</li>
                <li>Device and user friendly</li>
                <li>Efficient and maintainable</li>
              </ul>
            </div>
          </div>
          <div className="section-2_hands_img">
            <div data-aos="fade-left" className="animation_img">
              <img src="./images/Adam_born-right.png" alt="" />
            </div>
            <div className="animation_img" data-aos="fade-left">
              <img src="./images/Adam_born-right.png" alt="" />
            </div>
            <div className="animation_img" data-aos="fade-left">
              <img src="./images/Adam_born-right.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </content>
    </>
  )
}

export default HomePage
