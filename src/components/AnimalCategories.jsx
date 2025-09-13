import React, { useEffect, useState } from "react";

const categories = ["All Pets", "Dogs", "Cats", "Rabbits", "Other"];

const AnimalCategories = () => {
  const [pets, setPets] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [active, setActive] = useState("All Pets");

  useEffect(() => {
    fetch("/pet.json")
      .then((res) => res.json())
      .then((data) => {
        setPets(data);
        setFiltered(data);
      });
  }, []);

  const handleFilter = (cat) => {
    setActive(cat);
    if (cat === "All Pets") setFiltered(pets);
    else setFiltered(pets.filter((pet) => pet.category === cat));
  };

  return (
    <div
      style={{
        background: "#f8e1e1",
        minHeight: "100vh",
        paddingBottom: "40px",
      }}
    >
      <h2
        className="text-center mt-4 mb-3"
        style={{ color: "#b86a3c", fontWeight: "bold" }}
      >
        Adoptable Pets
      </h2>
      <div className="d-flex justify-content-center mb-4 flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`btn ${
              active === cat ? "btn-warning" : "btn-light"
            } px-4 rounded-pill`}
            style={{ fontWeight: "bold" }}
            onClick={() => handleFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="container">
        <div className="row justify-content-center">
          {filtered.map((pet) => (
            <div key={pet.id} className="col-12 col-md-6 col-lg-4 mb-4 d-flex">
              <div
                className="card w-100 shadow-sm"
                style={{
                  borderRadius: "20px",
                  background: "#fff8e1",
                  alignItems: "center",
                  paddingBottom: "20px",
                }}
              >
                <img
                  src={pet.image}
                  alt={pet.name}
                  className="card-img-top mt-3"
                  style={{
                    borderRadius: "16px",
                    width: "90%",
                    height: "260px",
                    objectFit: "cover",
                    margin: "0 auto",
                  }}
                />
                <div className="card-body text-center">
                  <h4 style={{ color: "#ffa726", fontWeight: "bold" }}>
                    {pet.name}
                  </h4>
                  <p>
                    <strong>Age:</strong> {pet.age}
                  </p>
                  <p>
                    <strong>Breed:</strong> {pet.breed}
                  </p>
                  <p>{pet.description}</p>
                  <button
                    className="btn btn-warning px-4 py-2 rounded"
                    style={{ fontWeight: "bold" }}
                  >
                    Adopt {pet.name}
                  </button>
                </div>
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="text-center text-muted my-5">
              No pets found in this category.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnimalCategories;
