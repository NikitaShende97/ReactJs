import download from "./download.png";
export default function App() {
  return (
    <div className="container-fluid">
      <div
        className="row bg-dark "
        style={{ backgroundColor: "black", height: "100vh" }}
      >
        <div className="col d-flex justify-content-center align-items-center flex-column">
          <div className="row">
            <div className="col">
              <label for="email" className="text-white">
                Email
              </label>
              <input
                type="text"
                placeholder="abc@gmail.com"
                className="form-control"
              ></input>
            </div>
          </div>
          <div className="row mt-1">
            <div className="col">
              <label for="email" className="text-white">
                Password
              </label>
              <input
                type="password"
                placeholder=""
                className="form-control"
              ></input>
            </div>
          </div>
          <div className="row mt-1">
            <div className="col">
              <input
                type="button"
                value="Login"
                className="btn btn-secondary"
              ></input>
              <input
                type="button"
                value="Reset"
                className="btn btn-secondary mx-2"
              ></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
