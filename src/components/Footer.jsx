const Footer = () => (
  <footer style={{ background: "#ffb347", color: "#888", fontWeight: 500 }}>
    <div className="container pt-4 pb-2">
      <div className="row text-center mb-3">
        <div className="col-12">
          <p style={{ fontSize: "1.2rem" }}>
            Get connected with us on social networks:
          </p>
          <div>
            <a href="#" className="mx-2 text-reset">
              <i className="fa fa-facebook fa-lg"></i>
            </a>
            <a href="#" className="mx-2 text-reset">
              <i className="fa fa-twitter fa-lg"></i>
            </a>
            <a href="#" className="mx-2 text-reset">
              <i className="fa fa-google fa-lg"></i>
            </a>
            <a href="#" className="mx-2 text-reset">
              <i className="fa fa-instagram fa-lg"></i>
            </a>
            <a href="#" className="mx-2 text-reset">
              <i className="fa fa-linkedin fa-lg"></i>
            </a>
            <a href="#" className="mx-2 text-reset">
              <i className="fa fa-github fa-lg"></i>
            </a>
          </div>
        </div>
      </div>
      <hr style={{ borderColor: "#eee" }} />
      <div className="row text-center text-md-start py-4">
        <div className="col-12 col-md-3 mb-4 mb-md-0">
          <h5>
            <i className="fa fa-diamond me-2"></i>
            <span style={{ fontWeight: "bold", color: "#666" }}>
              FUREVER CARE
            </span>
          </h5>
          <p>
            Your trusted companion for all things pet care. They deserve forever
            love.
          </p>
        </div>
        <div className="col-12 col-md-3 mb-4 mb-md-0">
          <h5 style={{ fontWeight: "bold", color: "#666" }}>PRODUCTS</h5>
          <p>
            <i className="fa fa-shopping-bag me-2"></i>
            <a href="#" className="text-reset text-decoration-underline">
              Catfood
            </a>
          </p>
          <p>
            <i className="fa fa-shopping-bag me-2"></i>
            <a href="#" className="text-reset text-decoration-underline">
              Dogfood
            </a>
          </p>
          <p>
            <i className="fa fa-heart-o me-2"></i>
            <a href="#" className="text-reset text-decoration-underline">
              CatToys
            </a>
          </p>
          <p>
            <i className="fa fa-heart-o me-2"></i>
            <a href="#" className="text-reset text-decoration-underline">
              DogToys
            </a>
          </p>
        </div>
        <div className="col-12 col-md-3 mb-4 mb-md-0">
          <h5 style={{ fontWeight: "bold", color: "#666" }}>USEFUL LINKS</h5>
          <p>
            <i className="fa fa-dollar me-2"></i>
            <a href="#" className="text-reset text-decoration-underline">
              Pricing
            </a>
          </p>
          <p>
            <i className="fa fa-cog me-2"></i>
            <a href="#" className="text-reset text-decoration-underline">
              Settings
            </a>
          </p>
          <p>
            <i className="fa fa-shopping-bag me-2"></i>
            <a href="#" className="text-reset text-decoration-underline">
              Orders
            </a>
          </p>
          <p>
            <i className="fa fa-question-circle me-2"></i>
            <a href="#" className="text-reset text-decoration-underline">
              Help
            </a>
          </p>
        </div>
        <div className="col-12 col-md-3">
          <h5 style={{ fontWeight: "bold", color: "#666" }}>CONTACT</h5>
          <p>
            <i className="fa fa-map-marker me-2"></i>Pakistan, Karachi
          </p>
          <p>
            <i className="fa fa-envelope me-2"></i>info@example.com
          </p>
          <p>
            <i className="fa fa-phone me-2"></i>+01 234 567 88
          </p>
          <p>
            <i className="fa fa-print me-2"></i>+01 234 567 89
          </p>
        </div>
      </div>
    </div>
    <div
      style={{
        background: "#ffb347",
        borderTop: "1px solid #eee",
        textAlign: "center",
        padding: "16px 0",
        fontSize: "1rem",
      }}
    >
      © 2021 Copyright:{" "}
      <a href="#" className="text-reset fw-bold text-decoration-underline">
        Furever Care
      </a>
      &nbsp; Total Visits: 15 &nbsp; TZ GMT+5
    </div>
  </footer>
);

export default Footer;
