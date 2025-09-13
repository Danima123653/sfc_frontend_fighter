import { useEffect, useState } from "react";
import "../assets/css/PetOwner.css";

const BestSelling = () => {
  const [cards, setCards] = useState([]);
  const [Foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("/Cat.json")
      .then((response) => response.json())
      .then((data) => {
        setCards(data);
      })
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);
  useEffect(() => {
    fetch("/Dog.json")
      .then((response) => response.json())
      .then((data) => {
        setFoods(data);
      })
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Best Selling Cat Foods!</h2>
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
              </div>
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-center mb-4">Best Selling Dog Foods!</h2>
      <div className="row">
        {Foods.map((card, index) => (
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSelling;
