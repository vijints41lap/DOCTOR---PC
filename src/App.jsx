import { useState } from "react";
import "./App.css";

function App() {
  const services = [
    {
      icon: "💻",
      title: "Laptop Repair",
      description:
        "Professional laptop diagnosis, repair, cleaning and maintenance."
    },
    {
      icon: "🖥️",
      title: "Desktop Services",
      description:
        "Desktop repair, upgrades, custom builds and troubleshooting."
    },
    {
      icon: "⚡",
      title: "SSD & RAM Upgrade",
      description:
        "Upgrade your system for better speed and performance."
    },
    {
      icon: "🔧",
      title: "Hardware Service",
      description:
        "Hardware replacement, cleaning and performance optimization."
    },
    {
      icon: "⚙️",
      title: "Windows Installation",
      description:
        "Windows installation, drivers, updates and system setup."
    },
    {
      icon: "🛡️",
      title: "Software Support",
      description:
        "Software installation, troubleshooting and virus removal."
    }
  ];

  const [currentWork, setCurrentWork] = useState(0);

const workImages = [
  {
    src: "/Work/Work 1.jpg",
    alt: "Laptop repair work",
  },
  {
    src: "/Work/Work 2.jpg",
    alt: "Desktop repair work",
  },
  {
    src: "/Work/Work 3.jpg",
    alt: "SSD and RAM upgrade",
  },
  {
    src: "/Work/Work 4.jpg",
    alt: "Computer maintenance",
  },
  {
    src: "/Work/Work 5.jpg",
    alt: "Computer service work",
  },
  {
    src: "/Work/Work 6.jpg",
    alt: "Computer repair work",
  },
];

  return (
    <div className="website">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          <span>DOCTOR</span>-PC  
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          className="instagram-nav"
          href="https://www.instagram.com/Amalu_47_/"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="5"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle
            cx="12"
            cy="12"
            r="4"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle
            cx="17.5"
            cy="6.5"
            r="1"
            fill="currentColor"
          />
          </svg>
        </a>

        <a
          className="nav-button"
          href="https://wa.me/918301052925"
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-content">

          

          <h1>
            Smart Tech
            <br />
            <span>Better Solutions</span>
          </h1>

          <p>
            Reliable laptop and desktop sales, repairs, upgrades
            and technical support — all in one place.
          </p>

          <div className="hero-buttons">
            <a href="#services" className="primary-button">
              Explore Services →
            </a>

            <a
              href="https://wa.me/918301052925"
              target="_blank"
              rel="noreferrer"
              className="secondary-button"
            >
              💬 WhatsApp Us
            </a>
          </div>

          <div className="hero-info">
            <div>
              <strong>✓</strong>
              <span>Professional Service</span>
            </div>

            <div>
              <strong>✓</strong>
              <span>Affordable Pricing</span>
            </div>

            <div>
              <strong>✓</strong>
              <span>Customer Support</span>
            </div>
          </div>

        </div>

        <div className="hero-visual">

          <div className="glow"></div>

          <div className="laptop">
            <div className="laptop-screen">
              <div className="screen-content">
                <div className="screen-logo">DOCTOR-PC</div>
                <div className="screen-line"></div>
                <div className="screen-line short"></div>
              </div>
            </div>

            <div className="laptop-base"></div>
          </div>

          <div className="floating-card card-one">
            <span>⚡</span>
            <div>
              <strong>Fast Service</strong>
              <small>Quick Diagnosis</small>
            </div>
          </div>

          <div className="floating-card card-two">
            <span>🛠️</span>
            <div>
              <strong>Expert Repair</strong>
              <small>Quality Service</small>
            </div>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="section services-section" id="services">

        <div className="section-heading">
          <span>WHAT WE DO</span>
          <h2>Computer Services</h2>
          <p>
            From simple software problems to complete hardware upgrades,
            we provide reliable solutions for your computer.
          </p>
        </div>

        <div className="services-grid">

          {services.map((service, index) => (
            <div className="service-card" key={index}>

              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <a href="#contact">
                Get Service →
              </a>

            </div>
          ))}

        </div>

      </section>

      {/* PRODUCTS */}
      <section className="products-section" id="products">

        <div className="products-content">

          <div className="section-heading left">
            <span>LAPTOPS & DESKTOPS</span>

            <h2>
              Looking for a
              <br />
              <strong>new computer?</strong>
            </h2>

            <p>
              We help you choose the right laptop or desktop according
              to your needs and budget.
            </p>

            <a
              href="https://wa.me/918301052925"
              target="_blank"
              rel="noreferrer"
              className="primary-button"
            >
              Enquire Now →
            </a>
          </div>

          <div className="product-cards">

            <div className="product-card laptop-product">
              <div className="product-image">
                💻
              </div>

              <div>
                <span>LAPTOPS</span>
                <h3>Business & Personal</h3>
                <p>
                  Laptops for work, study, entertainment and everyday use.
                </p>
              </div>
            </div>

            <div className="product-card desktop-product">
              <div className="product-image">
                🖥️
              </div>

              <div>
                <span>DESKTOPS</span>
                <h3>Custom PC Builds</h3>
                <p>
                  Build a desktop according to your performance requirements.
                </p>
              </div>
            </div>

          </div>

        </div>

      </section>

      
      {/* OUR WORK */}
<section className="section work-section" id="work">

  <div className="section-heading">
    <span>OUR WORK</span>
    <h2>Recent Work</h2>
    <p>
      A look at some of our laptop and desktop repair,
      upgrade and service work.
    </p>
  </div>

  <div className="work-carousel">

    <button
      className="work-arrow"
      onClick={() =>
        setCurrentWork(
          (currentWork - 1 + workImages.length) % workImages.length
        )
      }
    >
      ←
    </button>

    <div className="work-viewport">
      <div
        className="work-track"
        style={{
          transform: `translateX(-${currentWork * 100}%)`,
        }}
      >
        {workImages.map((work, index) => (
          <div className="work-slide" key={index}>
            <img src={work.src} alt={work.alt} />
          </div>
        ))}
      </div>
    </div>

    <button
      className="work-arrow"
      onClick={() =>
        setCurrentWork(
          (currentWork + 1) % workImages.length
        )
      }
    >
      →
    </button>

  </div>

  <div className="work-dots">
    {workImages.map((_, index) => (
      <button
        key={index}
        className={`work-dot ${
          currentWork === index ? "active" : ""
        }`}
        onClick={() => setCurrentWork(index)}
        aria-label={`Go to work ${index + 1}`}
      ></button>
    ))}
  </div>

</section>    

      {/* WHY CHOOSE US */}
      <section className="section why-section">

        <div className="section-heading">
          <span>WHY CHOOSE US</span>
          <h2>Service You Can Trust</h2>
        </div>

        <div className="why-grid">

          <div className="why-item">
            <div>🔍</div>
            <h3>Proper Diagnosis</h3>
            <p>
              We identify the actual problem before recommending a solution.
            </p>
          </div>

          <div className="why-item">
            <div>💰</div>
            <h3>Fair Pricing</h3>
            <p>
              Transparent and reasonable pricing for our services.
            </p>
          </div>

          <div className="why-item">
            <div>🛠️</div>
            <h3>Quality Work</h3>
            <p>
              Careful repair and upgrade work for better reliability.
            </p>
          </div>

          <div className="why-item">
            <div>🤝</div>
            <h3>Customer Support</h3>
            <p>
              We are available to help you after the service as well.
            </p>
          </div>

        </div>

      </section>

      {/* ABOUT */}
      <section className="about-section" id="about">

        <div className="about-image">
          <div className="about-icon">
            🖥️
          </div>
        </div>

        <div className="about-content">

          <span>ABOUT DOCTOR-PC</span>

          <h2>
            We keep your
            <br />
            <strong>technology healthy.</strong>
          </h2>

          <p>
            DOCTOR-PC provides laptop and desktop sales, repair,
            maintenance and technical support for individuals,
            students and businesses.
          </p>

          <p>
            Whether your computer is slow, damaged or simply needs
            an upgrade, we're here to help you find the right solution.
          </p>

          <div className="about-points">

            <div>
              <strong>01</strong>
              <span>Experienced technical service</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Solutions for different budgets</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Friendly customer support</span>
            </div>

          </div>

        </div>

      </section>

      {/* PROCESS */}
      <section className="section process-section">

        <div className="section-heading">
          <span>HOW IT WORKS</span>
          <h2>Simple Service Process</h2>
        </div>

        <div className="process-grid">

          <div className="process-item">
            <div className="process-number">01</div>
            <h3>Contact Us</h3>
            <p>Tell us about your laptop or desktop problem.</p>
          </div>

          <div className="process-item">
            <div className="process-number">02</div>
            <h3>Diagnosis</h3>
            <p>We inspect the system and identify the issue.</p>
          </div>

          <div className="process-item">
            <div className="process-number">03</div>
            <h3>Get a Quote</h3>
            <p>We explain the required work and estimated cost.</p>
          </div>

          <div className="process-item">
            <div className="process-number">04</div>
            <h3>Get It Fixed</h3>
            <p>We complete the service and return your system.</p>
          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section className="contact-section" id="contact">

        <div className="contact-container">

          <div className="contact-text">

            <span>GET IN TOUCH</span>

            <h2>
              Need computer
              <br />
              <strong>help?</strong>
            </h2>

            <p>
              Have a laptop problem or looking for a new computer?
              Contact us today.
            </p>

            <div className="contact-details">

              <div className="contact-detail">
                <div>📞</div>
                <div>
                  <small>CALL US</small>
                  <strong>+91 8301052925</strong>
                </div>
              </div>

              <div className="contact-detail">
                <div>💬</div>
                <div>
                  <small>WHATSAPP</small>
                  <strong>+91 8301052925</strong>
                </div>
              </div>

              <div className="contact-detail">
                <div>📍</div>
                <div>
                  <small>LOCATION</small>
                  <strong>Your Location</strong>
                </div>
              </div>

            </div>

          </div>
          

          <div className="contact-card">

            <h3>Send an Enquiry</h3>

            <p>
              Tell us what you need help with.
            </p>

            <form>

              <input
                type="text"
                placeholder="Your Name"
              />

              <input
                type="tel"
                placeholder="Phone Number"
              />

              <select>
                <option>Select Service</option>
                <option>Laptop Repair</option>
                <option>Desktop Repair</option>
                <option>Windows Installation</option>
                <option>SSD / RAM Upgrade</option>
                <option>Laptop Purchase</option>
                <option>Desktop Purchase</option>
                <option>Other</option>
              </select>

              <textarea
                placeholder="Tell us about your requirement..."
                rows="5"
              ></textarea>

              <a
                href="https://wa.me/918301052925"
                target="_blank"
                rel="noreferrer"
                className="submit-button"
              >
                Send via WhatsApp →
              </a>

            </form>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer>

        <div className="footer-content">

          <div className="footer-logo">
            <span>DOCTOR</span>-PC
          </div>

          <p>
            Laptop & Desktop Sales • Service • Support
          </p>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#products">Products</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>

        </div>

        <div className="copyright">
          © 2026 DOCTOR-PC. All Rights Reserved.
        </div>

      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        className="floating-whatsapp"
        href="https://wa.me/918301052925"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
      >
        💬
      </a>

    </div>
  );
}

export default App;