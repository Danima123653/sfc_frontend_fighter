import doctorpri from "../assets/images/doctorpri.jpg";

const bgColor = {
  background: "#f8e1e9",
  minHeight: "100vh",
  paddingBottom: "40px",
  padding: "30px 0px",
};
const cardStyle = {
  background: "#fff",
  borderRadius: "16px",
  boxShadow: "0 2px 12px #e9bfcf44",
  padding: "24px",
  maxWidth: "480px",
  margin: "32px auto",
};
const slotStyle = {
  background: "#fffbe9",
  borderRadius: "8px",
  padding: "16px",
  marginBottom: "12px",
  fontSize: "1rem",
};
const contactStyle = {
  background: "#f8bfcf",
  borderRadius: "8px",
  padding: "30px 0px",
  marginBottom: "12px",
  fontSize: "1rem",
};

const doctors = [
  {
    id: 1,
    name: "Dr. Arjun Patel",
    specialization: "Internal Medicine",
    contact: "arjunpatel@email.com | +91 98765 42311",
    address: "Pakistan, Karachi, Pet Lane, Paw City, PC 10001",
    about:
      "Dedicated to diagnosing complex conditions and providing comprehensive treatment plans for pets.",
    image: doctorpri,
    slots: [
      {
        name: "Dr. Arjun Patel",
        specialization: "Internal Medicine",
        contact: "+91 98765 42311",
        available: "Mon, Wed, Fri - 2:00 PM - 6:00 PM",
      },
      {
        name: "Dr. Arjun Patel",
        specialization: "Internal Medicine",
        contact: "+91 98765 42311",
        available: "Sun - 10:00 AM - 1:00 PM",
      },
      {
        specialization: "Small Animal Surgery",
        contact: "+91 98765 42310",
        available: "Sat, 4:00 PM - 7:00 PM",
      },
    ],
    clinic: {
      phone: "+91 98765 42311",
      address: "Pakistan, Karachi, Pet Lane, Paw City, PC 10001",
    },
    notes:
      "Focus on endocrine, gastrointestinal, and renal cases. Teleconsults available.",
  },
  {
    id: 2,
    name: "Dr. Ayesha Khan",
    specialization: "Dermatology & Allergies",
    contact: "ayeshakhan@email.com | +92 300 123 4567",
    address: "Pakistan, Karachi, Pet Lane, Paw City, PC 10001",
    about:
      "Focused on skin health, allergy management, and improving comfort for sensitive pets.",
    image: "/images/doctor2.jpg",
    slots: [
      {
        name: "Dr. Ayesha Khan",
        specialization: "Dermatology & Allergies",
        contact: "+92 300 123 4567",
        available: "Tue, Thu - 11:00 AM - 3:00 PM",
      },
      {
        name: "Dr. Ayesha Khan",
        specialization: "Dermatology & Allergies",
        contact: "+92 300 123 4567",
        available: "Sat - 12:00 PM - 4:00 PM",
      },
    ],
    clinic: {
      phone: "+92 300 123 4567",
      address: "Pakistan, Karachi, Pet Lane, Paw City, PC 10001",
    },
    notes:
      "Expertise in chronic allergies and dermatologic diagnostics. Offers follow-up plans.",
  },
];

const VeterinarianHero = () => (
  <div style={bgColor}>
    {doctors.map((doc) => (
      <div key={doc.id}>
        <div style={cardStyle} className="text-center">
          <img
            src={doc.image}
            alt={doc.name}
            style={{
              width: "90px",
              height: "90px",
              borderRadius: "50%",
              objectFit: "cover",
              marginBottom: "12px",
              border: "4px solid #f8e1e9",
            }}
          />
          <h4 style={{ fontWeight: "bold", marginBottom: "8px" }}>
            {doc.name}
          </h4>
          <div style={{ fontWeight: "500", color: "#b86a3c" }}>
            Specialization: {doc.specialization}
          </div>
          <div style={{ fontSize: "1rem", margin: "8px 0" }}>
            <strong>Contact:</strong> {doc.contact}
            <br />
            <strong>Address:</strong> {doc.address}
          </div>
          <div style={{ fontSize: "0.98rem", color: "#444" }}>
            <strong>About:</strong> {doc.about}
          </div>
        </div>
        <div className="container mb-5">
          <div className="row justify-content-center">
            <div className="col-12 col-md-6">
              <h5 style={{ color: "#ffa726", fontWeight: "bold" }}>
                Time Slots
              </h5>
              {doc.slots.map((slot, idx) => (
                <div key={idx} style={slotStyle}>
                  {slot.name && (
                    <div>
                      <strong>Name:</strong> {slot.name}
                    </div>
                  )}
                  {slot.specialization && (
                    <div>
                      <strong>Specialization:</strong> {slot.specialization}
                    </div>
                  )}
                  {slot.contact && (
                    <div>
                      <strong>Contact Info:</strong> {slot.contact}
                    </div>
                  )}
                  <div>
                    <strong>Available:</strong> {slot.available}
                  </div>
                </div>
              ))}
            </div>
            <div className="col-12 col-md-6">
              <h5 style={{ color: "#b86a3c", fontWeight: "bold" }}>
                Contact & Notes
              </h5>
              <div style={contactStyle}>
                <strong>Primary Clinic Contact</strong>
                <br />
                Phone: {doc.clinic.phone}
                <br />
                Address: {doc.clinic.address}
              </div>
              <div style={contactStyle}>
                <strong>Notes</strong>
                <br />
                {doc.notes}
              </div>
            </div>
          </div>
          <hr style={{ borderColor: "#e9bfcf" }} />
        </div>
      </div>
    ))}
  </div>
);

export default VeterinarianHero;
