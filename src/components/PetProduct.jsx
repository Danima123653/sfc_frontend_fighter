import "bootstrap/dist/css/bootstrap.min.css";
import PetHeader from "./PetHeader";
import { NavLink } from "react-router-dom";

const PetProduct = () => {
  return (
    <>
      <PetHeader />
      <div style={{ background: "#fafbfc", minHeight: "100vh" }}>
        <div className="container-fluid p-0">
          <div
            className="w-100"
            style={{
              backgroundImage: "url('/assets/images/vet-bg.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "480px",
              position: "relative",
            }}
          >
            <div className="container pt-5">
              <div className="row justify-content-center">
                <div className="col-12 col-md-8">
                  <div
                    className="alert alert-light text-center shadow-sm mt-5"
                    style={{ borderRadius: "24px" }}
                  >
                    No personalized care info found.{" "}
                    <NavLink className="fw-bold text-warning" to="/">
                      Register your pet
                    </NavLink>
                    to see personalized care information.
                  </div>
                </div>
              </div>
              <div className="row justify-content-center mt-4">
                <div className="col-12 col-md-5 mb-3">
                  <div
                    className="card shadow-sm"
                    style={{ borderRadius: "16px" }}
                  >
                    <div className="card-body">
                      <h5 className="fw-bold text-warning mb-3">
                        Puppies & Adult Dogs
                      </h5>
                      <table className="table table-bordered mb-0">
                        <thead>
                          <tr>
                            <th>Weight</th>
                            <th>Puppy (cup/day)</th>
                            <th>Adult (cup/day)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1–5 kg</td>
                            <td>0.5–1</td>
                            <td>0.4–0.8</td>
                          </tr>
                          <tr>
                            <td>5–10 kg</td>
                            <td>1–2</td>
                            <td>0.8–1.4</td>
                          </tr>
                          <tr>
                            <td>10–20 kg</td>
                            <td>2–3</td>
                            <td>1.4–2.3</td>
                          </tr>
                          <tr>
                            <td>20–35 kg</td>
                            <td>3–4.5</td>
                            <td>2.3–3.2</td>
                          </tr>
                        </tbody>
                      </table>
                      <small className="text-muted">
                        Adjust for activity level. Always provide fresh water.
                      </small>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-5 mb-3">
                  <div
                    className="card shadow-sm"
                    style={{ borderRadius: "16px" }}
                  >
                    <div className="card-body">
                      <h5 className="fw-bold text-warning mb-3">
                        Kittens & Adult Cats
                      </h5>
                      <table className="table table-bordered mb-0">
                        <thead>
                          <tr>
                            <th>Weight</th>
                            <th>Kitten (cup/day)</th>
                            <th>Adult (cup/day)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>0.5–2 kg</td>
                            <td>0.2–0.5</td>
                            <td>0.2–0.5</td>
                          </tr>
                          <tr>
                            <td>2–4 kg</td>
                            <td>0.35–0.6</td>
                            <td>0.35–0.6</td>
                          </tr>
                          <tr>
                            <td>4–6 kg</td>
                            <td>0.6–0.8</td>
                            <td>0.6–0.8</td>
                          </tr>
                        </tbody>
                      </table>
                      <small className="text-muted">
                        Split into 2–3 meals. Consult your vet for specific
                        needs.
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center mt-4">
                <div className="col-12 col-md-4 mb-3">
                  <div className="ratio ratio-16x9 shadow-sm rounded">
                    <iframe
                      src="https://www.youtube.com/embed/VIDEO_ID1"
                      title="Video 1"
                      allowFullScreen
                    />
                  </div>
                </div>
                <div className="col-12 col-md-4 mb-3">
                  <div className="ratio ratio-16x9 shadow-sm rounded">
                    <iframe
                      src="https://www.youtube.com/embed/VIDEO_ID2"
                      title="Video 2"
                      allowFullScreen
                    />
                  </div>
                </div>
                <div className="col-12 col-md-4 mb-3">
                  <div className="ratio ratio-16x9 shadow-sm rounded">
                    <iframe
                      src="https://www.youtube.com/embed/VIDEO_ID3"
                      title="Video 3"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
              <div className="row justify-content-center mt-4">
                <div className="col-12 col-md-8 mb-3">
                  <div className="ratio ratio-16x9 shadow-sm rounded">
                    <iframe
                      src="https://www.youtube.com/embed/VIDEO_ID4"
                      title="Oral Care & Preventive Health"
                      allowFullScreen
                    />
                  </div>
                  <div className="mt-2 text-center fw-bold">
                    Oral Care & Preventive Health
                  </div>
                </div>
                <div className="col-12 col-md-4 mb-3">
                  <div
                    className="card shadow-sm"
                    style={{ borderRadius: "16px" }}
                  >
                    <div className="card-body">
                      <h6 className="fw-bold text-warning mb-2">
                        Quick Audio Tips
                      </h6>
                      <audio controls style={{ width: "100%" }}>
                        <source src="/assets/audio/tip.mp3" type="audio/mpeg" />
                        Your browser does not support the audio element.
                      </audio>
                      <ul className="mt-2 mb-0">
                        <li>
                          Maintain a healthy weight; avoid excessive treats.
                        </li>
                        <li>Annual vet exam is beneficial for seniors.</li>
                        <li>Regular dental checks and brushing.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center mt-4">
                <div className="col-12 col-md-4 mb-3">
                  <div
                    className="card shadow-sm"
                    style={{ borderRadius: "16px" }}
                  >
                    <div className="card-body">
                      <h6 className="fw-bold text-warning mb-2">Audio Guide</h6>
                      <audio controls style={{ width: "100%" }}>
                        <source
                          src="/assets/audio/training.mp3"
                          type="audio/mpeg"
                        />
                        Your browser does not support the audio element.
                      </audio>
                      <div className="mt-2 text-muted">
                        Short primer on positive reinforcement.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 mb-3">
                  <div
                    className="card shadow-sm"
                    style={{ borderRadius: "16px" }}
                  >
                    <div className="card-body">
                      <h6 className="fw-bold text-warning mb-2">
                        Core Techniques
                      </h6>
                      <ol className="mb-0">
                        <li>
                          <strong>Consistency:</strong> Same cue words and
                          timing.
                        </li>
                        <li>
                          <strong>Positive Reinforcement:</strong> Reward
                          desired behavior immediately.
                        </li>
                        <li>
                          <strong>Short Sessions:</strong> 5–10 minutes, 2–3
                          times daily.
                        </li>
                        <li>
                          <strong>Socialization:</strong> Gradual exposure to
                          people and environments.
                        </li>
                        <li>
                          <strong>Crate & House Training:</strong> Routine,
                          patience, and praise.
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PetProduct;
