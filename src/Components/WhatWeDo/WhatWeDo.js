
import React from 'react';
import './WhatWeDo.css';
import img1 from '../../assets/cleaning2.jpeg';
import img2 from '../../assets/cleaning3.jpeg';
import img3 from '../../assets/Homepic.jpeg';
// Using existing images temporarily - you should replace these with appropriate images
import img4 from '../../assets/cleaning1.jpeg';
import img5 from '../../assets/cleaning16.jpeg';
import img6 from '../../assets/cleaning18.jpeg';
import Contact from '../Contact/Contact';

export const WhatWeDo = () => {
  return (
    <div className="what-page">
      <header className="what-hero">
        <div>
          <h1>What We Do</h1>
          <p>Comprehensive cleaning solutions for homes and businesses — tailored, reliable and efficient.</p>
        </div>
        <img src={img3} alt="what we do" />
      </header>

      <section className="what-services">
        <h2>Services</h2>
        <div className="what-grid">
          <div className="item">
            <img src={img1} alt="residential" />
            <h3>Residential Cleaning</h3>
            <p>Recurring and deep cleans to keep your home comfortable and healthy.</p>
            <ul>
              <li>Weekly/bi-weekly cleaning</li>
              <li>Kitchen & bathroom sanitization</li>
              <li>Dusting & vacuuming</li>
            </ul>
          </div>
          <div className="item">
            <img src={img2} alt="commercial" />
            <h3>Commercial Cleaning</h3>
            <p>Custom programs for offices, retail and facilities of all sizes.</p>
            <ul>
              <li>Daily/weekly maintenance</li>
              <li>Floor care & maintenance</li>
              <li>Window cleaning</li>
            </ul>
          </div>
          <div className="item">
            <img src={img4} alt="deep-cleaning" />
            <h3>Deep Cleaning</h3>
            <p>Thorough cleaning for those special occasions or seasonal needs.</p>
            <ul>
              <li>Move-in/move-out cleaning</li>
              <li>Deep carpet cleaning</li>
              <li>Cabinet & appliance detailing</li>
            </ul>
          </div>
          <div className="item">
            <img src={img5} alt="specialized" />
            <h3>Post-Construction Cleaning</h3>
            <p>Detailed cleanup after renovation or construction projects.</p>
            <ul>
              <li>Debris removal</li>
              <li>Dust & particle cleanup</li>
              <li>Surface finishing</li>
            </ul>
          </div>
          <div className="item">
            <img src={img6} alt="green-cleaning" />
            <h3>Green Cleaning</h3>
            <p>Eco-friendly cleaning solutions for environmentally conscious clients.</p>
            <ul>
              <li>Non-toxic products</li>
              <li>Sustainable practices</li>
              <li>Allergen-free options</li>
            </ul>
          </div>
          <div className="item">
            <img src={img4} alt="specialty" />
            <h3>Specialty Services</h3>
            <p>Custom cleaning solutions for specific needs.</p>
            <ul>
              <li>Window washing</li>
              <li>Upholstery cleaning</li>
              <li>Pressure washing</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="what-cta">
        <h2>Ready to get started?</h2>
        <p>Contact us for a free quote and we'll tailor a cleaning plan to your needs.</p>
      </section>
      <Contact />
    </div>
  )
}
export default WhatWeDo;

