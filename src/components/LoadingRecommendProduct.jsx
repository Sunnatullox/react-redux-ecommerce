import Loader from "react-loading-skeleton";

function LoadingRecommendProduct (){
    return (
      <>
        <div className="my-4 py-4">
          <div className="d-flex">
            <div className="mx-4">
              <Loader height={400} width={250} />
            </div>
            <div className="mx-4">
              <Loader height={400} width={250} />
            </div>
            <div className="mx-4">
              <Loader height={400} width={250} />
            </div>
            <div className="mx-4">
              <Loader height={400} width={250} />
            </div>
          </div>
        </div>
      </>
    )
  }

  
  export default LoadingRecommendProduct