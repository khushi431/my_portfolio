const Footer = () => {
  return (
    
    <div className="footer">
      <div className="footer__builder">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div
                className="social-links scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/khushi431">
      <i aria-hidden="true" className="fab fa-github" />
    </a>
    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/khushi-arora-b317b024a/">
      <i aria-hidden="true" className="fab fa-linkedin" />
    </a>
    <a target="_blank" rel="nofollow" href="#">
                        <i aria-hidden="true" className="fab fa-twitter" />
                      </a>
                {/* <a target="_blank" rel="nofollow" href="http://twitter.com">
                  <i aria-hidden="true" className="fab fa-twitter" />
                </a>
                <a target="_blank" rel="nofollow" href="http://dribble.com">
                  <i aria-hidden="true" className="fab fa-dribbble" />
                </a>
                <a target="_blank" rel="nofollow" href="http://behance.com">
                  <i aria-hidden="true" className="fab fa-behance" />
                </a> */}
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div
                className="copyright-text align-center scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                © 2025 <strong>Khushi Arora</strong>. All rights reserved
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div
                className="copyright-text align-right scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                Developed by <strong>Khushi Arora</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
