import { useEffect, useState } from "react";
import "../assets/css/petowner.css";
import { Link } from "react-router-dom";
import HomeImage from "../assets/images/Home-img.avif";

const OurProducts = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("/Cards.json")
      .then((response) => response.json())
      .then((data) => {
        setCards(data.products);
      })
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Our Products</h2>
      <div className="row">
        {cards.map((card, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 shadow-sm">
              <img
                src={card.image}
                alt={card.name}
                className="card-img-top"
                style={{ height: "220px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{card.name}</h5>
                <p className="card-text">{card.description}</p>
                <p className="fw-bold text-primary">{card.price}</p>
                <p>⭐ {card.Rating}</p>
              </div>
              <Link to={`/petProduct`}>
                <button
                  style={{
                    color: "#000",
                    backgroundColor: "#ffc107",
                    borderColor: "#ffc107",
                  }}
                >
                  Purchase Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <img src={HomeImage} alt="Home" />
    </div>
  );
};

export default OurProducts;
