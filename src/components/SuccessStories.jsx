import React from "react";
import animal1 from "../assets/images/animalshelter.jpg";
const events = [
  {
    date: "June 15, 2023",
    title: "Summer Adoption Drive",
    desc: "Join us for our annual summer adoption event! Reduced adoption fees, free pet goodie bags, and expert advice on pet care.",
    time: "10:00 AM - 4:00 PM",
    img: animal1,
  },
  {
    date: "June 22, 2023",
    title: "Vaccination Camp",
    desc: "Free vaccinations for pets in the community. First come, first served. Sponsored by local veterinarians.",
    time: "9:00 AM - 1:00 PM",
    img: animal1,
  },
  {
    date: "July 8, 2023",
    title: "Pet Training Workshop",
    desc: "Learn basic obedience training techniques from certified trainers. Great for new pet owners or those needing a refresher.",
    time: "11:00 AM - 2:00 PM",
    img: animal1,
  },
];

const SuccessStories = () => (
  <div className="py-5" style={{ background: "#f8dede" }}>
    <h2 className="text-center mb-5">Success Stories</h2>
    <div className="container">
      <div className="row justify-content-center">
        {events.map((event, idx) => (
          <div key={idx} className="col-12 col-md-6 col-lg-4 mb-4 d-flex">
            <div
              className="card w-100 shadow-sm"
              style={{ borderRadius: "20px" }}
            >
              <div className="card-header text-center text-white">
                <img
                  src={event.img}
                  alt=""
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
              </div>
              <div className="card-body">
                <h4 className="card-title" style={{ fontWeight: "bold" }}>
                  {event.title}
                </h4>
                <p className="card-text">{event.desc}</p>
                <p className="mb-0">
                  <span style={{ fontWeight: "bold" }}>Time:</span> {event.time}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default SuccessStories;
