import Header from "../Header/Header";

function ContactUs() {
  return (
    <div>
      <Header />
      <div className="content-wrapper  js-content-wrapper">
        <div className="page-header -type-4 bg-beige-1">
          <div className="container">
            <div className="page-header__content">
              <div className="row">
                <div className="col-auto">
                  <div className="slide-up delay-1">
                    <h1 className="page-header__title">Contact Us</h1>
                  </div>

                  <div className="slide-up delay-2">
                    <p className="page-header__text">We’re on a mission to connect you to the best classes<br />

                      at no cost.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="layout-pt-md layout-pb-lg">
          <div data-anim-wrap className="container">
            <div className="row y-gap-50 justify-between">
              <div className="col-xl-5 col-lg-6">
                <h3 className="text-24 lh-1 fw-500">Our offices</h3>
                <div className="row y-gap-30 pt-40">

                  <div className="col-sm-6">
                    <div className="text-20 fw-500 text-dark-1">London</div>
                    <div className="y-gap-10 pt-15">
                      <a href="#" className="d-block">328 Queensberry Street, North Melbourne VIC 3051, Australia.</a>
                      <a href="#" className="d-block">+(1) 123 456 7890</a>
                      <a href="#" className="d-block">hi@educrat.com</a>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="text-20 fw-500 text-dark-1">Paris</div>
                    <div className="y-gap-10 pt-15">
                      <a href="#" className="d-block">328 Queensberry Street, North Melbourne VIC 3051, Australia.</a>
                      <a href="#" className="d-block">+(1) 123 456 7890</a>
                      <a href="#" className="d-block">hi@educrat.com</a>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="text-20 fw-500 text-dark-1">Los Angeles</div>
                    <div className="y-gap-10 pt-15">
                      <a href="#" className="d-block">328 Queensberry Street, North Melbourne VIC 3051, Australia.</a>
                      <a href="#" className="d-block">+(1) 123 456 7890</a>
                      <a href="#" className="d-block">hi@educrat.com</a>
                    </div>
                  </div>

                </div>
              </div>

              <div className="col-lg-6">
                <div className="px-40 py-40 bg-white border-light shadow-1 rounded-8 contact-form-to-top">
                  <h3 className="text-24 fw-500">Send a Message</h3>

                  <form className="contact-form row y-gap-30 pt-60 lg:pt-40" action="#">
                    <div className="col-12">
                      <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Name</label>
                      <input type="text" name="title" placeholder="Name..." />
                    </div>
                    <div className="col-12">
                      <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Email Address</label>
                      <input type="text" name="title" placeholder="Email..." />
                    </div>
                    <div className="col-12">
                      <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Message...</label>
                      <textarea name="comment" placeholder="Message" rows="8"></textarea>
                    </div>
                    <div className="col-12">
                      <button type="submit" name="submit" id="submit" className="button -md -purple-1 text-white">
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContactUs;
