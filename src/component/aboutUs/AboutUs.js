import AboutChilde from "./aboutChilde/AboutChilde";
import AboutChildeChilde from "./aboutChilde/AboutChildeChilde";

function AboutUs() {
  return (
    <div className="preloader-visible" data-barba="wrapper">
      <div className="barba-container" data-barba="container">
        <main className="main-content">
          <div className="content-wrapper  js-content-wrapper">
            <section data-anim="fade" className="breadcrumbs ">
              <div className="container">
                <div className="row">
                  <div className="col-auto">
                    <div className="breadcrumbs__content">
                      <div className="breadcrumbs__item ">
                        <a href="#">Home</a>
                      </div>
                      <div className="breadcrumbs__item ">
                        <a href="#">All courses</a>
                      </div>
                      <div className="breadcrumbs__item ">
                        <a href="#">User Experience Design</a>
                      </div>
                      <div className="breadcrumbs__item ">
                        <a href="#">User Interface</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="page-header -type-1">
              <div className="container">
                <div className="page-header__content">
                  <div className="row justify-center text-center">
                    <div className="col-auto">
                      <div data-anim="slide-up delay-1">
                        <h1 className="page-header__title">About Us</h1>
                      </div>
                      <div data-anim="slide-up delay-2">
                        <p className="page-header__text">
                          We’re on a mission to deliver engaging, curated
                          courses at a reasonable price.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="layout-pt-md layout-pb-lg">
              <div data-anim-wrap className="container">
                <div className="row y-gap-50 justify-between items-center">
                  <div className="col-lg-6 pr-50 sm:pr-15">
                    <div className="composition -type-8">
                      <div className="-el-1">
                        <img src="img/about-1/1.png" alt="image" />
                      </div>
                      <div className="-el-2">
                        <img src="img/about-1/2.png" alt="image" />
                      </div>
                      <div className="-el-3">
                        <img src="img/about-1/3.png" alt="image" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <h2 className="text-30 lh-16">
                      Welcome to Educrat Enhance your skills with best Online
                      courses
                    </h2>
                    <p className="text-dark-1 mt-30">
                      You can start and finish one of these popular courses in
                      under a day – for free! Check out the list below.. Take
                      the course for free
                    </p>
                    <p className="pr-50 lg:pr-0 mt-25">
                      Neque convallis a cras semper auctor. Libero id faucibus
                      nisl tincidunt egetnvallis a cras semper auctonvallis a
                      cras semper aucto. Neque convallis a cras semper auctor.
                      Liberoe convallis a cras semper atincidunt egetnval
                    </p>
                    <div className="d-inline-block">
                      <a
                        href="signup.html"
                        className="button -md -purple-1 text-white mt-30"
                      >
                        Start Learning For Free
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="layout-pt-lg layout-pb-lg bg-dark-2">
              <div data-anim-wrap="" class="container animated">
                <div class="row justify-center text-center">
                  <div
                    data-anim-child="slide-up delay-1"
                    class="col-auto is-in-view"
                  >
                    <div class="sectionTitle ">
                      <h2 class="sectionTitle__title text-white">
                        Why learn with our courses?
                      </h2>

                      <p class="sectionTitle__text text-white">
                        Lorem ipsum dolor sit amet, consectetur.
                      </p>
                    </div>
                  </div>
                </div>

                {/* AboutUs component */}
                <AboutChilde />
              </div>
            </section>
            <div class="tabs__content pt-40 js-tabs-content">
              <div class="tabs__pane -tab-item-1 is-active container">
                <AboutChildeChilde />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
export default AboutUs;
