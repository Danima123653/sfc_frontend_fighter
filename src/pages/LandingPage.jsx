import { useState } from "react";
import "../assets/css/landing.css";

const LandingPage = () => {
  const [name, setName] = useState("");
  const [userType, setUserType] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [petData, setPetData] = useState({
    petName: "",
    petSpecies: "",
    petBreed: "",
    petAge: "",
    petGender: "",
    petWeight: "",
    petVaccinations: "",
    petNotes: "",
  });

  const speciesBreeds = {
    dog: [
      "Labrador Retriever",
      "Golden Retriever",
      "German Shepherd",
      "French Bulldog",
      "Bulldog",
      "Poodle",
      "Beagle",
      "Rottweiler",
      "German Shorthaired Pointer",
      "Yorkshire Terrier",
    ],
    cat: [
      "Persian",
      "Maine Coon",
      "British Shorthair",
      "Ragdoll",
      "Sphynx",
      "Scottish Fold",
      "American Shorthair",
      "Siamese",
      "Abyssinian",
      "Bengal",
    ],
    bird: [
      "Budgerigar",
      "Cockatiel",
      "Canary",
      "Lovebird",
      "Cockatoo",
      "African Grey",
      "Conure",
      "Finch",
    ],
    rabbit: [
      "Holland Lop",
      "Mini Rex",
      "Netherland Dwarf",
      "Lionhead",
      "Flemish Giant",
      "English Lop",
      "Mini Lop",
    ],
    other: ["Hamster", "Guinea Pig", "Ferret", "Turtle", "Fish", "Other"],
  };

  const handleRedirect = () => {
    if (!name.trim()) {
      alert("Please Enter your Name.");
      return;
    }

    if (!/^[A-Za-z ]+$/.test(name)) {
      alert("Name can only contain letters and spaces.");
      return;
    }

    if (!userType) {
      alert("Please select a user category!");
      return;
    }

    localStorage.setItem("name", name);
    localStorage.setItem("type", userType);
    sessionStorage.setItem("welcome", "1");

    if (userType === "owner") {
      setShowModal(true);
    } else if (userType === "vet") {
      window.location.href = "veterinarian";
    } else if (userType === "shelter") {
      window.location.href = "animalshelter";
    }
  };

  const handlePetChange = (e) => {
    setPetData({ ...petData, [e.target.id]: e.target.value });
  };

  const handlePetSubmit = () => {
    if (
      !petData.petName ||
      !petData.petSpecies ||
      !petData.petBreed ||
      !petData.petAge ||
      !petData.petGender
    ) {
      alert("Please fill all required fields!");
      return;
    }

    const saveData = {
      ...petData,
      age: parseInt(petData.petAge),
      weight: petData.petWeight ? parseFloat(petData.petWeight) : null,
      registeredAt: new Date().toISOString(),
    };

    localStorage.setItem("petData", JSON.stringify(saveData));
    sessionStorage.setItem("welcome", "1");

    setShowModal(false);
    window.location.href = "Pet/PetOwner.html";
  };

  const skipPetRegistration = () => {
    sessionStorage.setItem("welcome", "1");
    setShowModal(false);
    window.location.href = "PetOwner";
  };

  return (
    <div className="pop">
      <div className="LandingBox mt-5 p-5 text-center">
        <div className="row">
          <div className="col-12">
            <h1>Welcome to Furever Care</h1>
            <p id="txt-1">Trusted Companion for All Things Pet Care.</p>
            <p id="txt-2">They Deserve Forever Love</p>

            {/* Name Input */}
            <label htmlFor="name" id="inp-txt">
              Enter Your Name:
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="form-control"
              required
              value={name}
              onChange={(e) =>
                setName(e.target.value.replace(/[^A-Za-z ]+/g, ""))
              }
            />
            <br />

            {/* Category Selection */}
            <label id="inp-txt" className="mt-3">
              Select your category:
            </label>
            <div className="mt-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="userType"
                  id="owner"
                  value="owner"
                  checked={userType === "owner"}
                  onChange={(e) => setUserType(e.target.value)}
                />
                <label className="form-check-label" htmlFor="owner">
                  Pet Owner
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="userType"
                  id="vet"
                  value="vet"
                  checked={userType === "vet"}
                  onChange={(e) => setUserType(e.target.value)}
                />
                <label className="form-check-label" htmlFor="vet">
                  Veterinarian
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="userType"
                  id="shelter"
                  value="shelter"
                  checked={userType === "shelter"}
                  onChange={(e) => setUserType(e.target.value)}
                />
                <label className="form-check-label" htmlFor="shelter">
                  Animal Shelter / Rescue Volunteer
                </label>
              </div>
            </div>
            <br />

            <button
              className="btn btn-warning fw-bold"
              onClick={handleRedirect}
            >
              Get Started
            </button>
          </div>
        </div>

        {/* Pet Registration Modal */}
        {showModal && (
          <div
            className="modal fade show d-block"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5
                    className="modal-title fw-bold"
                    style={{ color: "#ffb347" }}
                  >
                    Welcome {name}! Tell us about your pet
                  </h5>
                </div>
                <div className="modal-body">
                  <form id="petRegistrationForm">
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label htmlFor="petName" className="form-label">
                          Pet Name *
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="petName"
                          value={petData.petName}
                          onChange={handlePetChange}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="petSpecies" className="form-label">
                          Species *
                        </label>
                        <select
                          className="form-select"
                          id="petSpecies"
                          value={petData.petSpecies}
                          onChange={handlePetChange}
                          required
                        >
                          <option value="">Select Species</option>
                          <option value="dog">Dog</option>
                          <option value="cat">Cat</option>
                          <option value="bird">Bird</option>
                          <option value="rabbit">Rabbit</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="petBreed" className="form-label">
                          Breed *
                        </label>
                        <select
                          className="form-select"
                          id="petBreed"
                          value={petData.petBreed}
                          onChange={handlePetChange}
                          required
                        >
                          <option value="">Select Breed</option>
                          {speciesBreeds[petData.petSpecies]?.map((breed) => (
                            <option key={breed} value={breed}>
                              {breed}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="petAge" className="form-label">
                          Age (years) *
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="petAge"
                          min="0"
                          max="30"
                          value={petData.petAge}
                          onChange={handlePetChange}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="petGender" className="form-label">
                          Gender *
                        </label>
                        <select
                          className="form-select"
                          id="petGender"
                          value={petData.petGender}
                          onChange={handlePetChange}
                          required
                        >
                          <option value="">Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="petWeight" className="form-label">
                          Weight (kg)
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="petWeight"
                          value={petData.petWeight}
                          onChange={handlePetChange}
                        />
                      </div>
                      <div className="col-12">
                        <label htmlFor="petVaccinations" className="form-label">
                          Vaccinations (comma-separated)
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="petVaccinations"
                          value={petData.petVaccinations}
                          onChange={handlePetChange}
                        />
                      </div>
                      <div className="col-12">
                        <label htmlFor="petNotes" className="form-label">
                          Additional Notes
                        </label>
                        <textarea
                          className="form-control"
                          id="petNotes"
                          rows="3"
                          value={petData.petNotes}
                          onChange={handlePetChange}
                        />
                      </div>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    className="btn btn-secondary"
                    onClick={skipPetRegistration}
                  >
                    Skip for now
                  </button>
                  <button
                    className="btn btn-warning fw-bold"
                    onClick={handlePetSubmit}
                  >
                    Continue to Pet Store
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
