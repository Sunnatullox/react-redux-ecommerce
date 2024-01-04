import Loader from "react-loading-skeleton";

function LoadingSkelationProduct() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-6 py-3">
              <Loader height={400} width={400} />
            </div>
            <div className="col-md-6 py-5">
              <Loader height={30} width={250} />
              <Loader height={90} />
              <Loader height={40} width={70} />
              <Loader height={50} width={110} />
              <Loader height={120} />
              <Loader height={40} width={110} inline={true} />
              <Loader className="mx-3" height={40} width={110} inline={true} />
            </div>
          </div>
        </div>
      </>
    );
  }

  export default LoadingSkelationProduct