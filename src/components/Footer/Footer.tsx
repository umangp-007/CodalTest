import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
    
        <div className="newsletter-form">
          <div className="newsletter-text">
            <span className="newsletter-head mb-2">Join our newsletter</span>
            <span className="newsletter-desc">We’ll send you a nice letter once per week. No spam.</span>
          </div>
          <div className="email">
            <input type="email" placeholder="Email address" />
            <button>SUBSCRIBE</button>
          </div>
        </div>
        <hr className="footer-hr" />

        <div className="footer-content">
          <div className="footer-column">
            <div className="fw-bold footer-logo">IPSUM</div>
            <p className="clr-copy-text">Delivering unique and complete solutions for your business.</p>
          </div>
          <div className="footer-column">
            <div className="footer-menu-title">Product</div>
            <ul>
              <li>
                <a href="#">Lubricants</a>
              </li>
              <li>
                <a href="#">Chemicals</a>
              </li>
              {/* ...other product links */}
            </ul>
          </div>
          <div className="footer-column">
          <div className="footer-menu-title">Services</div>
            <ul>
              <li>
                <a href="#">Recycling</a>
              </li>
              <li>
                <a href="#">Industrial Equipment</a>
              </li>
              {/* ...other service links */}
            </ul>
          </div>
          <div className="footer-column">
          <div className="footer-menu-title">Resources</div>
            <ul>
              <li>
                <a href="#">Blog & News</a>
              </li>
              <li>
                <a href="#">Product Information</a>
              </li>
              {/* ...other resource links */}
            </ul>
          </div>
          <div className="footer-column">
          <div className="footer-menu-title">Careers</div>
            <ul>
              <li>
                <a href="#">Join Our Team</a>
              </li>
              <li>
                <a href="#">Available Positions</a>
              </li>
              {/* ...other career links */}
            </ul>
          </div>
        </div>
        <hr className="footer-hr" />
        <div className="d-flex align-items-center justify-content-between">
            <p className="mb-0 clr-copy-text">&copy; 2024 IPSUM Industries. All rights reserved.</p>
            <div className="social-icons">
            <a href="#">
                <i className="bi bi-facebook clr-copy-text"></i>
            </a>
            <a href="#">
                <i className="bi bi-twitter clr-copy-text"></i>
            </a>
            <a href="#">
                <i className="bi bi-linkedin clr-copy-text"></i>
            </a>
            <a href="#">
                <i className="bi bi-instagram clr-copy-text"></i>
            </a>
            </div>
        </div>
        
        
    
    </footer>
  );
};

export default Footer;
