import ViewMonth from "./ViewMonth"
import { useState } from "react";
function CreateCalender() {

 
  return (

      <div className="dashboard__content bg-light-4">
          <div className="row pb-50 mb-10">
              <div className="col-auto">

                  <h1 className="text-30 lh-12 fw-700">Create New Course</h1>
                  <div className="mt-10">Lorem ipsum dolor sit amet, consectetur.</div>

              </div>
          </div>


          <div className="row y-gap-60">
              <div className="col-12">
                  <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
                      <div className="d-flex items-center py-20 px-30 border-bottom-light">
                          <h2 className="text-17 lh-1 fw-500">Basic Information</h2>
                      </div>

                      <div className="py-30 px-30">
                          <form className="contact-form row y-gap-30" action="#">

                              <div className="col-12">

                                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Course Title*</label>

                                  <input type="text" placeholder="Learn Figma - UI/UX Design Essential Training" />
                              </div>


                              <div className="col-12">

                                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Short Description*</label>

                                  <textarea placeholder="Description" rows="7"></textarea>
                              </div>


                              <div className="col-12">

                                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Course Description*</label>

                                  <textarea placeholder="Description" rows="7"></textarea>
                              </div>


                              <div className="col-md-6">

                                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">What will students learn in your course?*</label>

                                  <textarea placeholder="Description" rows="7"></textarea>
                              </div>


                              <div className="col-md-6">

                                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Requirements*</label>

                                  <textarea placeholder="Description" rows="7"></textarea>
                              </div>


                              <div className="col-md-6">

                                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Course Level*</label>

                                  <input type="text" placeholder="Select" />
                              </div>


                              <div className="col-md-6">

                                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Audio Language*</label>

                                  <input type="text" placeholder="Select" />
                              </div>


                              <div className="col-md-6">

                                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Close Caption*</label>

                                  <input type="text" placeholder="Select" />
                              </div>


                              <div className="col-md-6">

                                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Course Category*</label>

                                  <input type="text" placeholder="Select" />
                              </div>

                          </form>

                          <div className="row y-gap-20 justify-between pt-15">
                              <div className="col-auto">
                                  <button className="button -md -outline-purple-1 text-purple-1">Prev</button>
                              </div>

                              <div className="col-auto">
                                  <button className="button -md -purple-1 text-white">Next</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="col-12">
                  <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
                      <div className="d-flex items-center py-20 px-30 border-bottom-light">
                          <h2 className="text-17 lh-1 fw-500">Curriculum</h2>
                      </div>

                      <div className="py-30 px-30">
                          <div className="row">
                              <div className="col-12">
                                  <h4 className="text-16 lh-1 fw-500">Introduction to JavaScript</h4>
                              </div>

                              <div className="col-12">
                                  <div className="accordion -block-2 text-left js-accordion">

                                      <div className="accordion__item -dark-bg-dark-1 mt-10">
                                          <div className="accordion__button py-20 px-30 bg-light-4">
                                              <div className="d-flex items-center">
                                                  <div className="icon icon-drag mr-10"></div>
                                                  <span className="text-16 lh-14 fw-500 text-dark-1">Introduction</span>
                                              </div>

                                              <div className="d-flex x-gap-10 items-center">
                                                  <a href="#" className="icon icon-edit mr-5"></a>
                                                  <a href="#" className="icon icon-bin"></a>
                                                  <div className="accordion__icon mr-0">
                                                      <div className="d-flex items-center justify-center icon icon-chevron-down"></div>
                                                      <div className="d-flex items-center justify-center icon icon-chevron-up"></div>
                                                  </div>
                                              </div>
                                          </div>

                                          <div className="accordion__content">
                                              <div className="accordion__content__inner px-30 py-30">
                                                  <div className="d-flex x-gap-10 y-gap-10 flex-wrap">
                                                      <div>
                                                          <a href="#" className="button -sm py-15 -purple-3 text-purple-1 fw-500">Add Article +</a>
                                                      </div>
                                                      <div>
                                                          <a href="#" className="button -sm py-15 -purple-3 text-purple-1 fw-500">Add Article +</a>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>

                                      <div className="accordion__item -dark-bg-dark-1 mt-10">
                                          <div className="accordion__button py-20 px-30 bg-light-4">
                                              <div className="d-flex items-center">
                                                  <div className="icon icon-drag mr-10"></div>
                                                  <span className="text-16 lh-14 fw-500 text-dark-1">Installing Development Software</span>
                                              </div>

                                              <div className="d-flex x-gap-10 items-center">
                                                  <a href="#" className="icon icon-edit mr-5"></a>
                                                  <a href="#" className="icon icon-bin"></a>
                                                  <div className="accordion__icon mr-0">
                                                      <div className="d-flex items-center justify-center icon icon-chevron-down"></div>
                                                      <div className="d-flex items-center justify-center icon icon-chevron-up"></div>
                                                  </div>
                                              </div>
                                          </div>

                                          <div className="accordion__content">
                                              <div className="accordion__content__inner px-30 py-30">
                                                  <div className="d-flex x-gap-10 y-gap-10 flex-wrap">
                                                      <div>
                                                          <a href="#" className="button -sm py-15 -purple-3 text-purple-1 fw-500">Add Article +</a>
                                                      </div>
                                                      <div>
                                                          <a href="#" className="button -sm py-15 -purple-3 text-purple-1 fw-500">Add Article +</a>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>

                                      <div className="accordion__item -dark-bg-dark-1 mt-10">
                                          <div className="accordion__button py-20 px-30 bg-light-4">
                                              <div className="d-flex items-center">
                                                  <div className="icon icon-drag mr-10"></div>
                                                  <span className="text-16 lh-14 fw-500 text-dark-1">Hello World Project from GitHub</span>
                                              </div>

                                              <div className="d-flex x-gap-10 items-center">
                                                  <a href="#" className="icon icon-edit mr-5"></a>
                                                  <a href="#" className="icon icon-bin"></a>
                                                  <div className="accordion__icon mr-0">
                                                      <div className="d-flex items-center justify-center icon icon-chevron-down"></div>
                                                      <div className="d-flex items-center justify-center icon icon-chevron-up"></div>
                                                  </div>
                                              </div>
                                          </div>

                                          <div className="accordion__content">
                                              <div className="accordion__content__inner px-30 py-30">
                                                  <div className="d-flex x-gap-10 y-gap-10 flex-wrap">
                                                      <div>
                                                          <a href="#" className="button -sm py-15 -purple-3 text-purple-1 fw-500">Add Article +</a>
                                                      </div>
                                                      <div>
                                                          <a href="#" className="button -sm py-15 -purple-3 text-purple-1 fw-500">Add Article +</a>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>

                                  </div>
                              </div>
                          </div>

                          <div className="row pt-30">
                              <div className="col-12">
                                  <h4 className="text-16 lh-1 fw-500">Introduction to JavaScript</h4>
                              </div>

                              <div className="col-12">
                                  <div className="accordion -block-2 text-left js-accordion">

                                      <div className="accordion__item -dark-bg-dark-1 mt-10">
                                          <div className="accordion__button py-20 px-30 bg-light-4">
                                              <div className="d-flex items-center">
                                                  <div className="icon icon-drag mr-10"></div>
                                                  <span className="text-16 lh-1 fw-500 text-dark-1">Introduction</span>
                                              </div>

                                              <div className="d-flex x-gap-10 items-center">
                                                  <a href="#" className="icon icon-edit mr-5"></a>
                                                  <a href="#" className="icon icon-bin"></a>
                                                  <div className="accordion__icon mr-0">
                                                      <div className="d-flex items-center justify-center icon icon-chevron-down"></div>
                                                      <div className="d-flex items-center justify-center icon icon-chevron-up"></div>
                                                  </div>
                                              </div>
                                          </div>

                                          <div className="accordion__content">
                                              <div className="accordion__content__inner px-30 py-30">
                                                  <div className="d-flex">
                                                      <a href="#" className="button -sm py-15 -purple-3 text-purple-1 fw-500">Add Article +</a>
                                                      <a href="#" className="button -sm py-15 -purple-3 text-purple-1 fw-500 ml-10">Add Article +</a>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>

                                      <div className="accordion__item -dark-bg-dark-1 mt-10">
                                          <div className="accordion__button py-20 px-30 bg-light-4">
                                              <div className="d-flex items-center">
                                                  <div className="icon icon-drag mr-10"></div>
                                                  <span className="text-16 lh-1 fw-500 text-dark-1">Installing Development Software</span>
                                              </div>

                                              <div className="d-flex x-gap-10 items-center">
                                                  <a href="#" className="icon icon-edit mr-5"></a>
                                                  <a href="#" className="icon icon-bin"></a>
                                                  <div className="accordion__icon mr-0">
                                                      <div className="d-flex items-center justify-center icon icon-chevron-down"></div>
                                                      <div className="d-flex items-center justify-center icon icon-chevron-up"></div>
                                                  </div>
                                              </div>
                                          </div>

                                          <div className="accordion__content">
                                              <div className="accordion__content__inner px-30 py-30">
                                                  <div className="d-flex">
                                                      <a href="#" className="button -sm py-15 -purple-3 text-purple-1 fw-500">Add Article +</a>
                                                      <a href="#" className="button -sm py-15 -purple-3 text-purple-1 fw-500 ml-10">Add Article +</a>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>

                                      <div className="accordion__item -dark-bg-dark-1 mt-10">
                                          <div className="accordion__button py-20 px-30 bg-light-4">
                                              <div className="d-flex items-center">
                                                  <div className="icon icon-drag mr-10"></div>
                                                  <span className="text-16 lh-1 fw-500 text-dark-1">Hello World Project from GitHub</span>
                                              </div>

                                              <div className="d-flex x-gap-10 items-center">
                                                  <a href="#" className="icon icon-edit mr-5"></a>
                                                  <a href="#" className="icon icon-bin"></a>
                                                  <div className="accordion__icon mr-0">
                                                      <div className="d-flex items-center justify-center icon icon-chevron-down"></div>
                                                      <div className="d-flex items-center justify-center icon icon-chevron-up"></div>
                                                  </div>
                                              </div>
                                          </div>

                                          <div className="accordion__content">
                                              <div className="accordion__content__inner px-30 py-30">
                                                  <div className="d-flex">
                                                      <a href="#" className="button -sm py-15 -purple-3 text-purple-1 fw-500">Add Article +</a>
                                                      <a href="#" className="button -sm py-15 -purple-3 text-purple-1 fw-500 ml-10">Add Article +</a>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>

                                  </div>
                              </div>
                          </div>

                          <div className="row y-gap-20 justify-between pt-30">
                              <div className="col-auto sm:w-1/1">
                                  <button className="button -md -outline-purple-1 text-purple-1 sm:w-1/1">Prev</button>
                              </div>

                              <div className="col-auto sm:w-1/1">
                                  <button className="button -md -purple-1 text-white sm:w-1/1">Next</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="col-12">
                  <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
                      <div className="d-flex items-center py-20 px-30 border-bottom-light">
                          <h2 className="text-17 lh-1 fw-500">Media</h2>
                      </div>

                      <div className="py-30 px-30">
                          <div className="row y-gap-50">
                              <div className="col-12">
                                  <form className="contact-form d-flex lg:flex-column">
                                      <div className="relative shrink-0">
                                          <img className="w-1/1" src="img/dashboard/media/1.png" alt="image" />

                                          <div className="absolute-full-center d-flex justify-end py-20 px-20">
                                              <a href="#" className="d-flex justify-center items-center bg-white size-40 rounded-8 shadow-1">
                                                  <i className="icon-bin text-16"></i>
                                              </a>
                                          </div>
                                      </div>

                                      <div className="w-1/1 ml-30 lg:ml-0 lg:mt-20">

                                          <div className="form-upload col-12">
                                              <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Course thumbnail*</label>
                                              <div className="form-upload__wrap">
                                                  <input type="text" name="name" placeholder="Cover-1.html" />
                                                  <button className="button -dark-3 text-white">Upload Files</button>
                                              </div>
                                          </div>

                                          <p className="mt-10">Upload your course image here. It must meet our course image quality standards to be accepted. Important guidelines: 750x440 pixels; .jpg, .jpeg,. gif, or .png. no text on the image.</p>
                                      </div>
                                  </form>
                              </div>

                              <div className="col-12">
                                  <form className="contact-form d-flex lg:flex-column">
                                      <div className="relative shrink-0">
                                          <img className="w-1/1" src="img/dashboard/media/2.png" alt="image" />

                                          <div className="absolute-full-center d-flex justify-end py-20 px-20">
                                              <a href="#" className="d-flex justify-center items-center bg-white size-40 rounded-8 shadow-1">
                                                  <i className="icon-bin text-16"></i>
                                              </a>
                                          </div>
                                      </div>

                                      <div className="w-1/1 ml-30 lg:ml-0 lg:mt-20">

                                          <div className="form-upload col-12">
                                              <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Video URL*</label>
                                              <div className="form-upload__wrap">
                                                  <input type="text" name="name" placeholder="Video-1.html" />
                                                  <button className="button -dark-3 text-white">Upload Files</button>
                                              </div>
                                          </div>

                                          <p className="mt-10">Enter a valid video URL. Students who watch a well-made promo video are 5X more likely to enroll in your course.</p>
                                      </div>
                                  </form>
                              </div>
                          </div>

                          <div className="row y-gap-20 justify-between pt-30">
                              <div className="col-auto">
                                  <button className="button -md -outline-purple-1 text-purple-1">Prev</button>
                              </div>

                              <div className="col-auto">
                                  <button className="button -md -purple-1 text-white">Next</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

      </div>

  )
}


function ViewCalender(){
  const [state , setState] = useState(false)
  const Toggle = () =>{
      setState(!state)
  }
    return(
        <div className="dashboard__main">
                <div className="dashboard__content bg-light-4">
                  <div className="row pb-50 mb-10">
                    <div className="col-auto">

                      <h1 className="text-30 lh-12 fw-700">Calendar</h1>
                      <div className="breadcrumbs mt-10 pt-0 pb-0">
                        <div className="breadcrumbs__content">
                          <div className="breadcrumbs__item">
                            <a href="index.html">Home</a>
                          </div>
                          <div className="breadcrumbs__item">
                            <a href="courses-list-3.html">All courses</a>
                          </div>
                          <div className="breadcrumbs__item">
                            <a href="courses-single-1.html">User Experience Design</a>
                          </div>
                          <div className="breadcrumbs__item">
                            <a href="courses-single-1.html">User Interface</a>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                  <button className="button -md -purple-1 text-white" onClick={Toggle}>create calendar</button>
                  {state && <CreateCalender/>}


                  <div className="row">
                    <div className="col-xl-9 col-lg-9">
                      <div className="col-12">
                        <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4">
                          <div className="d-flex items-center py-20 px-30 border-bottom-light">
                            <h2 className="text-17 lh-1 fw-500">Calendar</h2>
                          </div>

                          <div className="py-40 px-30">
                            <div className="row y-gap-15 justify-between">
                              <div className="col-auto">
                                <div className="d-flex">
                                  <div className="">

                                    <div className="dropdown js-dropdown js-category-active">
                                      <div className="dropdown__button d-flex items-center text-14 h-50 rounded-8 px-15 py-10 " data-el-toggle=".js-category-toggle" data-el-toggle-active=".js-category-active">
                                        <span className="js-dropdown-title">Monthly</span>
                                        <i className="icon text-9 ml-40 icon-chevron-down"></i>
                                      </div>

                                      <div className="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-category-toggle">
                                        <div className="text-14 y-gap-15 js-dropdown-list">

                                          <div><a href="#" className="d-block js-dropdown-link">Animation</a></div>

                                          <div><a href="#" className="d-block js-dropdown-link">Design</a></div>

                                          <div><a href="#" className="d-block js-dropdown-link">Illustration</a></div>

                                          <div><a href="#" className="d-block js-dropdown-link">Lifestyle</a></div>

                                          <div><a href="#" className="d-block js-dropdown-link">Business</a></div>

                                        </div>
                                      </div>
                                    </div>

                                  </div>

                                  <div className="ml-20">

                                    <div className="dropdown js-dropdown js-category-active">
                                      <div className="dropdown__button d-flex items-center text-14 h-50 rounded-8 px-15 py-10 " data-el-toggle=".js-category-toggle" data-el-toggle-active=".js-category-active">
                                        <span className="js-dropdown-title">All Courses</span>
                                        <i className="icon text-9 ml-40 icon-chevron-down"></i>
                                      </div>

                                      <div className="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-category-toggle">
                                        <div className="text-14 y-gap-15 js-dropdown-list">

                                          <div><a href="#" className="d-block js-dropdown-link">Animation</a></div>

                                          <div><a href="#" className="d-block js-dropdown-link">Design</a></div>

                                          <div><a href="#" className="d-block js-dropdown-link">Illustration</a></div>

                                          <div><a href="#" className="d-block js-dropdown-link">Lifestyle</a></div>

                                          <div><a href="#" className="d-block js-dropdown-link">Business</a></div>

                                        </div>
                                      </div>
                                    </div>

                                  </div>
                                </div>
                              </div>

                              <div className="col-auto">
                                <button className="button -md -narrow -purple-1 text-white">
                                  <i className="icon-calendar-2 mr-10"></i>
                                  New Event
                                </button>
                              </div>
                            </div>

                            <div className="row justify-between pt-30">
                              <div className="col-auto">
                                <div className="d-flex items-center">
                                  <button className="button -single-icon -dark-7 -dark-button-dark-2 size-45 rounded-8 text-dark-1">
                                    <i className="icon-chevron-left text-11"></i>
                                  </button>
                                  <div className="ml-10 text-15 fw-500 lh-1">November 2022</div>
                                </div>
                              </div>

                              <div className="col-auto">
                                <div className="text-24 text-dark-1 fw-500">December 2022</div>
                              </div>

                              <div className="col-auto">
                                <div className="d-flex items-center">
                                  <div className="mr-10 text-15 fw-500 lh-1">January 2023</div>
                                  <button className="button -single-icon -dark-7 -dark-button-dark-2 size-45 rounded-8 text-dark-1">
                                    <i className="icon-chevron-right text-11"></i>
                                  </button>
                                </div>
                              </div>
                            </div>

                            <div className="row ml-0 mr-0 pt-20">

                            </div>

                            <div className="overflow-scroll scroll-bar-1">
                              <table className="table-calendar">
                                <thead>
                                  <tr>

                                    <th className="calendar-top-cell border-light">
                                      <div className="text-15 text-dark-1 fw-500">Sun</div>
                                    </th>

                                    <th className="calendar-top-cell border-light">
                                      <div className="text-15 text-dark-1 fw-500">Mon</div>
                                    </th>

                                    <th className="calendar-top-cell border-light">
                                      <div className="text-15 text-dark-1 fw-500">Tue</div>
                                    </th>

                                    <th className="calendar-top-cell border-light">
                                      <div className="text-15 text-dark-1 fw-500">Wed</div>
                                    </th>

                                    <th className="calendar-top-cell border-light">
                                      <div className="text-15 text-dark-1 fw-500">Thu</div>
                                    </th>

                                    <th className="calendar-top-cell border-light">
                                      <div className="text-15 text-dark-1 fw-500">Fri</div>
                                    </th>

                                    <th className="calendar-top-cell border-light">
                                      <div className="text-15 text-dark-1 fw-500">Sat</div>
                                    </th>

                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>

                                    <td className="calendar-cell border-light">
                                      <div className="text-15 text-dark-1">28</div>
                                    </td>

                                    <td className="calendar-cell border-light">
                                      <div className="text-15 text-dark-1">29</div>
                                    </td>

                                    <td className="calendar-cell border-light">
                                      <div className="text-15 text-dark-1">30</div>
                                    </td>

                                    <td className="calendar-cell border-light">
                                      <div className="text-15 text-dark-1">1</div>
                                    </td>

                                    <td className="calendar-cell border-light">
                                      <div className="text-15 text-dark-1">2</div>
                                    </td>

                                    <td className="calendar-cell border-light">
                                      <div className="text-15 text-dark-1">3</div>
                                    </td>

                                    <td className="calendar-cell border-light">
                                      <div className="text-15 text-dark-1">4</div>
                                    </td>

                                  </tr>

                                  <tr>

                                    <td className="calendar-cell border-light">
                                      <div className="text-15 text-dark-1">5</div>


                                    </td>

                                    <td className="calendar-cell border-light">
                                      <div className="text-15 text-dark-1">6</div>


                                    </td>

                                    <td className="calendar-cell border-light">
                                      <div className="text-15 text-dark-1">7</div>


                                    </td>

                                    <td className="calendar-cell border-light">
                                      <div className="text-15 text-dark-1">8</div>


                                    </td>

                                    <td className="calendar-cell border-light">
                                      <div className="text-15 text-dark-1">9</div>


                                    </td>

                                    <td className="calendar-cell border-light">
                                      <div className="text-15 text-dark-1">10</div>


                                      <div className="text-left pt-5 pb-15 px-10">
                                        <div className="text-14 dot-left">15:00 PM</div>
                                        <div className="text-14 text-dark-1">Assignment: Languages of Love is due</div>
                                      </div>

                                    </td>

                                    <td className="calendar-cell border-light">
                                      <div className="text-15 text-dark-1">11</div>


                                    </td>

                                  </tr>

                                  <tr>

                                    <td className="calendar-cell border-light">
                                      <div className="text-15 text-dark-1">12</div>


                                      <div className="text-left pt-5 pb-15 px-10">
                                        <div>
                                          <div className="text-14 dot-left">15:00 PM</div>
                                          <div className="text-14 text-dark-1">Birthday Party</div>
                                        </div>
                                        <div className="mt-5">
                                          <div className="text-14 dot-left -orange">15:00 PM</div>
                                          <div className="text-14 text-dark-1">Birthday Party</div>
                                        </div>
                                      </div>

                                    </td>

                                    <td className="calendar-cell border-light">
                                      <div className="text-15 text-dark-1">13</div>


                                    </td>

                                    <td className="calendar-cell border-light">
                                      <div className="text-15 text-dark-1">14</div>


                                    </td>

                                    <td className="calendar-cell border-light">
                                      <div className="text-15 text-dark-1">15</div>


                                    </td>

                                    <td className="calendar-cell border-light">
                                      <div className="text-15 text-dark-1">16</div>


                                    </td>

                                    <td className="calendar-cell border-light">
                                      <div className="text-15 text-dark-1">17</div>


                                    </td>

                                    <td className="calendar-cell border-light">
                                      <div className="text-15 text-dark-1">18</div>


                                    </td>

                                  </tr>

                                  <tr>

                                    <td className="calendar-cell border-light">
                                      <div className="text-15 text-dark-1">19</div>


                                    </td>

                                    <td className="calendar-cell border-light">
                                      <div className="text-15 text-dark-1">20</div>


                                    </td>

                                    <td className="calendar-cell border-light">
                                      <div className="text-15 text-dark-1">21</div>


                                    </td>

                                    <td className="calendar-cell border-light">
                                      <div className="text-15 text-dark-1">22</div>


                                      <div className="text-left pt-5 pb-15 px-10">
                                        <div className="text-14 dot-left">15:00 PM</div>
                                        <div className="text-14 text-dark-1">Group Project is due</div>
                                      </div>

                                    </td>

                                    <td className="calendar-cell border-light">
                                      <div className="text-15 text-dark-1">23</div>


                                    </td>

                                    <td className="calendar-cell border-light">
                                      <div className="text-15 text-dark-1">24</div>


                                    </td>

                                    <td className="calendar-cell border-light">
                                      <div className="text-15 text-dark-1">25</div>


                                    </td>

                                  </tr>

                                  <tr>

                                    <td className="calendar-cell border-light">
                                      <div className="text-15 text-dark-1">26</div>
                                    </td>

                                    <td className="calendar-cell border-light">
                                      <div className="text-15 text-dark-1">27</div>
                                    </td>

                                    <td className="calendar-cell border-light">
                                      <div className="text-15 text-dark-1">28</div>
                                    </td>

                                    <td className="calendar-cell border-light">
                                      <div className="text-15 text-dark-1">29</div>
                                    </td>

                                    <td className="calendar-cell border-light">
                                      <div className="text-15 text-dark-1">30</div>
                                    </td>

                                    <td className="calendar-cell border-light">
                                      <div className="text-15 text-dark-1">31</div>
                                    </td>

                                    <td className="calendar-cell border-light">
                                      <div className="text-15 text-dark-1">1</div>
                                    </td>

                                  </tr>
                                </tbody>
                              </table>
                            </div>

                            <div className="row x-gap-20 y-gap-10 justify-center pt-30">
                              <div className="col-auto">

                                <a href="#" className="button -icon -purple-3 text-light-1">
                                  Export Calender
                                  <i className="icon-arrow-top-right text-13 ml-10"></i>
                                </a>

                              </div>
                              <div className="col-auto">

                                <a href="#" className="button -icon -purple-3 text-light-1">
                                  Manage Subscriptions
                                  <i className="icon-arrow-top-right text-13 ml-10"></i>
                                </a>

                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <ViewMonth/>
                  </div>

                </div>

               
              </div>
    )
}
export default ViewCalender