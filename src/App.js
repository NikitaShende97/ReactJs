import download from "./download.png";

export default function App() {
  const displayMsg = () => {
    alert("Thank You for Registration!!!");
  };

  const clear = () => {
    document.querySelector("#Fname").value = "";
    document.querySelector("#Lname").value = "";
    document.querySelector("#address").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#contact").value = "";
  };
  return (
    <div className="container-fluid">
      <div
        className="row bg-dark "
        style={{ backgroundColor: "black", height: "100vh" }}
      >
        <div className="col d-flex justify-content-center align-items-center flex-column ">
          <div
            className="alert alert-info w-50 text-dark"
            style={{ height: "auto" }}
          >
            <div className="row">
              <div className="col">
                <label for="Fname">First Name:</label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="form-control"
                  id="Fname"
                ></input>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label for="Lname">Last Name:</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="form-control"
                  id="Lname"
                ></input>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label for="address">Address:</label>
                <input
                  type="text"
                  placeholder="Address"
                  className="form-control"
                  id="address"
                ></input>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label for="email" className="">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="abc@gmail.com"
                  className="form-control"
                  id="email"
                ></input>
              </div>
            </div>
            <div className="row mt-1">
              <div className="col">
                <label for="contact" className="">
                  Contact No.
                </label>
                <input
                  type="text"
                  placeholder="Mobile No"
                  className="form-control"
                  id="contact"
                ></input>
              </div>
            </div>
            <div className="row mt-1">
              <div className="col">
                <input
                  type="button"
                  value="Login"
                  className="btn btn-secondary"
                  onClick={displayMsg}
                ></input>
                <input
                  type="button"
                  value="Reset"
                  className="btn btn-secondary mx-2"
                  onClick={clear}
                ></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
