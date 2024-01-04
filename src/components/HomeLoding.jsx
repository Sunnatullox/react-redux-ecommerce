
import LoadingSkeletion from "react-loading-skeleton";

export default function HomeLoding() {
    return (
      <>
        <div className="col-12 py-5 text-center">
          <LoadingSkeletion height={40} width={560} />
        </div>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
            <LoadingSkeletion height={400} />
          </div>
        ))}
      </>
    );
  }