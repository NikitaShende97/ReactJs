import download from "./download.png";
export default function App() {
  return (
    <div className="container-fluid">
      <div
        className="row bg-dark "
        style={{ backgroundColor: "black", height: "100vh" }}
      >
        <div className="d-flex justify-content-center align-items-center">
          <img src={download} alt="" height={250} width={200}></img>
          <h1 className="text-white">React Js</h1>
        </div>
      </div>
    </div>
  );
}
