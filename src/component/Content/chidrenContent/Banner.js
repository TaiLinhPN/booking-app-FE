import React from "react";

function Banner() {
  return (
    <>
      <div className="content-wrapper  js-content-wrapper">
        <section className="masthead -type-1 js-mouse-move-container">
          <div className="masthead__bg">
            <img src="img/home-1/hero/bg.png" alt="image" />
          </div>
          <div className="container">
            <div
              data-anim-wrap=""
              className="row y-gap-30 justify-between items-end"
            >
              <div className="col-xl-6 col-lg-6 col-sm-10">
                <div className="masthead__content">
                  <h1 data-anim-child="slide-up" className="masthead__title">
                    Learn New Skills with Freesource{" "}
                    <span className="text-green-1 underline">On Top</span>
                  </h1>
                  <p
                    data-anim-child="slide-up delay-1"
                    className="masthead__text"
                  >
                    Build skills with courses, and degrees online and offline
                  
                  </p>
                  <div
                    data-anim-child="slide-up delay-2"
                    className="masthead__buttons row x-gap-10 y-gap-10"
                  >
                    <div className="col-12 col-sm-auto">
                      <a
                        data-barba=""
                        href="signup.html"
                        className="button -md -purple-1 text-white"
                      >
                        Join For Free
                      </a>
                    </div>
                    <div className="col-12 col-sm-auto">
                      <a
                        data-barba=""
                        href="courses-list-1.html"
                        className="button -md -outline-green-1 text-green-1"
                      >
                        Find Class
                      </a>
                    </div>
                  </div>
                  <div
                    data-anim-child="slide-up delay-3"
                    className="masthead-info row y-gap-15 sm:d-none"
                  >
                    <div className="masthead-info__item d-flex items-center text-white">
                      <div className="masthead-info__icon mr-10">
                        <img src="img/masthead/icons/1.svg" alt="icon" />
                      </div>
                      <div className="masthead-info__title lh-1">
                        Over 100 students
                      </div>
                    </div>
                    <div className="masthead-info__item d-flex items-center text-white">
                      <div className="masthead-info__icon mr-10">
                        <img src="img/masthead/icons/2.svg" alt="icon" />
                      </div>
                      <div className="masthead-info__title lh-1">
                        More than 16 class
                      </div>
                    </div>
                    <div className="masthead-info__item d-flex items-center text-white">
                      <div className="masthead-info__icon mr-10">
                        <img src="img/masthead/icons/3.svg" alt="icon" />
                      </div>
                      <div className="masthead-info__title lh-1">
                        Learn anything online and offline
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-anim-child="slide-up delay-5"
                className="col-xl-6 col-lg-6"
              >
                <div className="masthead-image">
                  <div className="masthead-image__el1">
                    <img
                      className="js-mouse-move"
                      data-move={40}
                      src="img/masthead/1.png"
                      alt="image"
                    />
                    <div
                      data-move={30}
                      className="lg:d-none img-el -w-250 px-20 py-20 d-flex items-center bg-white rounded-8 js-mouse-move"
                    >
                      <div className="size-50 d-flex justify-center items-center bg-red-2 rounded-full">
                        <img src="img/masthead/1.svg" alt="icon" />
                      </div>
                      <div className="ml-20">
                        <div className="text-orange-1 text-16 fw-500 lh-1">
                          3.000 +
                        </div>
                        <div className="mt-3">Free Courses</div>
                      </div>
                    </div>
                  </div>
                  <div className="masthead-image__el2">
                    <img
                      className="js-mouse-move"
                      data-move={70}
                      src="img/masthead/2.png"
                      alt="image"
                    />
                    
                  </div>
                  <div className="masthead-image__el3">
                    <img
                      className="js-mouse-move"
                      data-move={40}
                      src="img/masthead/3.png"
                      alt="image"
                    />
                    <div
                      data-move={30}
                      className="shadow-4 img-el -w-260 px-30 py-20 d-flex items-center bg-white rounded-8 js-mouse-move"
                    >
                      <div className="img-el__side">
                        <div className="size-50 d-flex justify-center items-center bg-purple-1 rounded-full">
                          <img src="img/masthead/2.svg" alt="icon" />
                        </div>
                      </div>
                      <div className="">
                        <div className="text-purple-1 text-16 fw-500 lh-1">
                          Congrats!
                        </div>
                        <div className="mt-3">Your Admission Completed</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <svg
            className="svg-waves"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="svg-waves__parallax">
              <use xlinkHref="#gentle-wave" x={48} y={0} />
              <use xlinkHref="#gentle-wave" x={48} y={3} />
              <use xlinkHref="#gentle-wave" x={48} y={5} />
              <use xlinkHref="#gentle-wave" x={48} y={7} />
            </g>
          </svg>
        </section>

        <section className="layout-pt-md layout-pb-md">
          <div data-anim-wrap="" className="container animated">
            <div className="row justify-center text-center">
              <div className="col-auto">
                <div className="sectionTitle ">
                  <h2 className="sectionTitle__title ">BENEFIT</h2>
                  <p className="sectionTitle__text ">
                    The website provides a quick and easy way of communicating
                    information between teachers and students.
                  </p>
                </div>
              </div>
            </div>
            <div className="row y-gap-30 justify-between pt-60 lg:pt-50">
              <div className="col-lg-3 col-md-6">
                <div className="coursesCard -type-3 px-0 text-center">
                  <div className="coursesCard__icon bg-white shadow-2">
                    <i className="icon icon-rating-2 text-dark-1" />
                  </div>
                  <div className="coursesCard__content mt-30">
                    <h5 className="coursesCard__title text-18 lh-1 fw-500">
                      Learn anything
                    </h5>
                    <p className="coursesCard__text text-14 mt-10">
                      
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="coursesCard -type-3 px-0 text-center">
                  <div className="coursesCard__icon bg-white shadow-2">
                    <i className="icon icon-online-learning-3 text-dark-1" />
                  </div>
                  <div className="coursesCard__content mt-30">
                    <h5 className="coursesCard__title text-18 lh-1 fw-500">
                      Learn together
                    </h5>
                    <p className="coursesCard__text text-14 mt-10">
                      
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="coursesCard -type-3 px-0 text-center">
                  <div className="coursesCard__icon bg-white shadow-2">
                    <i className="icon icon-online-learning-2 text-dark-1" />
                  </div>
                  <div className="coursesCard__content mt-30">
                    <h5 className="coursesCard__title text-18 lh-1 fw-500">
                      Learn with experts
                    </h5>
                    <p className="coursesCard__text text-14 mt-10">
                      
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="coursesCard -type-3 px-0 text-center">
                  <div className="coursesCard__icon bg-white shadow-2">
                    <i className="icon icon-access text-dark-1" />
                  </div>
                  <div className="coursesCard__content mt-30">
                    <h5 className="coursesCard__title text-18 lh-1 fw-500">
                      Life Time Access
                    </h5>
                    <p className="coursesCard__text text-14 mt-10">
                     
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default Banner;
