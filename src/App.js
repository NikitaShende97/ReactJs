import like from "./onclick.js";

export default function App() {
  function like(param) {
    // let prev = param.ParentElement.children[1];
  }
  function dislike(param) {}
  return (
    <div className="container-fluid">
      <div className="row bg-dark text-white sticky-top">
        <div className="col d-flex justify-content-center align-items-center p-2">
          React Example
        </div>
      </div>
      <div className="row bg-warning" style={{ height: "100vh" }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-3 m-1">
            <div className="card bg-dark text-white ">
              <div className="card-header">Images</div>
              <div className="card-body mx-0 px-0 py-0">
                <img
                  src="https://picsum.photos/200"
                  style={{ width: "100%" }}
                ></img>
                <div className="mt-2 mx-2">
                  Lorem Alternatively, you can use this shorthand version for
                  Cards with body only, and no other children
                </div>
                <div className="mx-2">
                  <span onClick={like} style={{ cursor: "pointer" }}>
                    &#128077;
                  </span>{" "}
                  &nbsp;
                  <span>0</span>&nbsp;&nbsp;
                  <span onClick={dislike(this)} style={{ cursor: "pointer" }}>
                    &#128078;
                  </span>
                  &nbsp;&nbsp;
                  <span>0</span>&nbsp;
                </div>
              </div>
            </div>
          </div>
          <div className="col-3 m-1">
            <div className="card bg-dark text-white">
              <div className="card-header">Images</div>
              <div className="card-body mx-0 px-0 py-0">
                <img
                  src="https://picsum.photos/200"
                  style={{ width: "100%" }}
                ></img>
                <div className="mt-2 mx-2">
                  Lorem Alternatively, you can use this shorthand version for
                  Cards with body only, and no other children
                </div>
                <div className="mx-2">
                  <span onClick={like(this)} style={{ cursor: "pointer" }}>
                    &#128077;
                  </span>{" "}
                  &nbsp;
                  <span>0</span>&nbsp;&nbsp;
                  <span onClick={dislike(this)} style={{ cursor: "pointer" }}>
                    &#128078;
                  </span>
                  &nbsp;&nbsp;
                  <span>0</span>&nbsp;
                </div>
              </div>
            </div>
          </div>
          <div className="col-3 m-1">
            <div className="card bg-dark text-white">
              <div className="card-header">Images</div>
              <div className="card-body mx-0 px-0 py-0">
                <img
                  src="https://picsum.photos/200"
                  style={{ width: "100%" }}
                ></img>
                <div className="mt-2 mx-2">
                  Lorem Alternatively, you can use this shorthand version for
                  Cards with body only, and no other children
                </div>
                <div className="mx-2">
                  <span onClick={like(this)} style={{ cursor: "pointer" }}>
                    &#128077;
                  </span>
                  &nbsp;
                  <span>0</span>&nbsp;&nbsp;
                  <span onClick={dislike(this)} style={{ cursor: "pointer" }}>
                    &#128078;
                  </span>
                  &nbsp;&nbsp;
                  <span>0</span>&nbsp;
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
