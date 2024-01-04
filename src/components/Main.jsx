function Main() {
  return (
    <div className="hero border-1 pb-3">
      <div className="card bg-dark text-white border-0 mx-3">
        <img
          src="https://png.pngtree.com/background/20210710/original/pngtree-home-e-commerce-poster-background-banner-picture-image_998919.jpg"
          alt="baner"
          className="card-img img-fluid w-auto  opacity-50"
          height={500}
        />
        <div className="card-img-overlay d-flex align-items-center">
          <div className="container">
            <h5 className="card-title fs-1 text-light fw-bold">
              New Session Arrivals
            </h5>
            <p className="card-text fs-5 d-none d-sm-block">
              This is a wider card with supporting text <br/> below as a natural
              lead-in additional content. <br/> This content is a little bit langer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
