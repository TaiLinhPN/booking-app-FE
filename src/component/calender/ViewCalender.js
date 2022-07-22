import ViewMonth from "./ViewMonth"
import { useState } from "react";
function CreateCalender() {

 
  return (

      <div class="dashboard__content bg-light-4">
          <div class="row pb-50 mb-10">
              <div class="col-auto">

                  <h1 class="text-30 lh-12 fw-700">Create New Course</h1>
                  <div class="mt-10">Lorem ipsum dolor sit amet, consectetur.</div>

              </div>
          </div>


          <div class="row y-gap-60">
              <div class="col-12">
                  <div class="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
                      <div class="d-flex items-center py-20 px-30 border-bottom-light">
                          <h2 class="text-17 lh-1 fw-500">Basic Information</h2>
                      </div>

                      <div class="py-30 px-30">
                          <form class="contact-form row y-gap-30" action="#">

                              <div class="col-12">

                                  <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">Course Title*</label>

                                  <input type="text" placeholder="Learn Figma - UI/UX Design Essential Training" />
                              </div>


                              <div class="col-12">

                                  <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">Short Description*</label>

                                  <textarea placeholder="Description" rows="7"></textarea>
                              </div>


                              <div class="col-12">

                                  <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">Course Description*</label>

                                  <textarea placeholder="Description" rows="7"></textarea>
                              </div>


                              <div class="col-md-6">

                                  <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">What will students learn in your course?*</label>

                                  <textarea placeholder="Description" rows="7"></textarea>
                              </div>


                              <div class="col-md-6">

                                  <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">Requirements*</label>

                                  <textarea placeholder="Description" rows="7"></textarea>
                              </div>


                              <div class="col-md-6">

                                  <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">Course Level*</label>

                                  <input type="text" placeholder="Select" />
                              </div>


                              <div class="col-md-6">

                                  <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">Audio Language*</label>

                                  <input type="text" placeholder="Select" />
                              </div>


                              <div class="col-md-6">

                                  <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">Close Caption*</label>

                                  <input type="text" placeholder="Select" />
                              </div>


                              <div class="col-md-6">

                                  <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">Course Category*</label>

                                  <input type="text" placeholder="Select" />
                              </div>

                          </form>

                          <div class="row y-gap-20 justify-between pt-15">
                              <div class="col-auto">
                                  <button class="button -md -outline-purple-1 text-purple-1">Prev</button>
                              </div>

                              <div class="col-auto">
                                  <button class="button -md -purple-1 text-white">Next</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div class="col-12">
                  <div class="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
                      <div class="d-flex items-center py-20 px-30 border-bottom-light">
                          <h2 class="text-17 lh-1 fw-500">Curriculum</h2>
                      </div>

                      <div class="py-30 px-30">
                          <div class="row">
                              <div class="col-12">
                                  <h4 class="text-16 lh-1 fw-500">Introduction to JavaScript</h4>
                              </div>

                              <div class="col-12">
                                  <div class="accordion -block-2 text-left js-accordion">

                                      <div class="accordion__item -dark-bg-dark-1 mt-10">
                                          <div class="accordion__button py-20 px-30 bg-light-4">
                                              <div class="d-flex items-center">
                                                  <div class="icon icon-drag mr-10"></div>
                                                  <span class="text-16 lh-14 fw-500 text-dark-1">Introduction</span>
                                              </div>

                                              <div class="d-flex x-gap-10 items-center">
                                                  <a href="#" class="icon icon-edit mr-5"></a>
                                                  <a href="#" class="icon icon-bin"></a>
                                                  <div class="accordion__icon mr-0">
                                                      <div class="d-flex items-center justify-center icon icon-chevron-down"></div>
                                                      <div class="d-flex items-center justify-center icon icon-chevron-up"></div>
                                                  </div>
                                              </div>
                                          </div>

                                          <div class="accordion__content">
                                              <div class="accordion__content__inner px-30 py-30">
                                                  <div class="d-flex x-gap-10 y-gap-10 flex-wrap">
                                                      <div>
                                                          <a href="#" class="button -sm py-15 -purple-3 text-purple-1 fw-500">Add Article +</a>
                                                      </div>
                                                      <div>
                                                          <a href="#" class="button -sm py-15 -purple-3 text-purple-1 fw-500">Add Article +</a>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>

                                      <div class="accordion__item -dark-bg-dark-1 mt-10">
                                          <div class="accordion__button py-20 px-30 bg-light-4">
                                              <div class="d-flex items-center">
                                                  <div class="icon icon-drag mr-10"></div>
                                                  <span class="text-16 lh-14 fw-500 text-dark-1">Installing Development Software</span>
                                              </div>

                                              <div class="d-flex x-gap-10 items-center">
                                                  <a href="#" class="icon icon-edit mr-5"></a>
                                                  <a href="#" class="icon icon-bin"></a>
                                                  <div class="accordion__icon mr-0">
                                                      <div class="d-flex items-center justify-center icon icon-chevron-down"></div>
                                                      <div class="d-flex items-center justify-center icon icon-chevron-up"></div>
                                                  </div>
                                              </div>
                                          </div>

                                          <div class="accordion__content">
                                              <div class="accordion__content__inner px-30 py-30">
                                                  <div class="d-flex x-gap-10 y-gap-10 flex-wrap">
                                                      <div>
                                                          <a href="#" class="button -sm py-15 -purple-3 text-purple-1 fw-500">Add Article +</a>
                                                      </div>
                                                      <div>
                                                          <a href="#" class="button -sm py-15 -purple-3 text-purple-1 fw-500">Add Article +</a>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>

                                      <div class="accordion__item -dark-bg-dark-1 mt-10">
                                          <div class="accordion__button py-20 px-30 bg-light-4">
                                              <div class="d-flex items-center">
                                                  <div class="icon icon-drag mr-10"></div>
                                                  <span class="text-16 lh-14 fw-500 text-dark-1">Hello World Project from GitHub</span>
                                              </div>

                                              <div class="d-flex x-gap-10 items-center">
                                                  <a href="#" class="icon icon-edit mr-5"></a>
                                                  <a href="#" class="icon icon-bin"></a>
                                                  <div class="accordion__icon mr-0">
                                                      <div class="d-flex items-center justify-center icon icon-chevron-down"></div>
                                                      <div class="d-flex items-center justify-center icon icon-chevron-up"></div>
                                                  </div>
                                              </div>
                                          </div>

                                          <div class="accordion__content">
                                              <div class="accordion__content__inner px-30 py-30">
                                                  <div class="d-flex x-gap-10 y-gap-10 flex-wrap">
                                                      <div>
                                                          <a href="#" class="button -sm py-15 -purple-3 text-purple-1 fw-500">Add Article +</a>
                                                      </div>
                                                      <div>
                                                          <a href="#" class="button -sm py-15 -purple-3 text-purple-1 fw-500">Add Article +</a>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>

                                  </div>
                              </div>
                          </div>

                          <div class="row pt-30">
                              <div class="col-12">
                                  <h4 class="text-16 lh-1 fw-500">Introduction to JavaScript</h4>
                              </div>

                              <div class="col-12">
                                  <div class="accordion -block-2 text-left js-accordion">

                                      <div class="accordion__item -dark-bg-dark-1 mt-10">
                                          <div class="accordion__button py-20 px-30 bg-light-4">
                                              <div class="d-flex items-center">
                                                  <div class="icon icon-drag mr-10"></div>
                                                  <span class="text-16 lh-1 fw-500 text-dark-1">Introduction</span>
                                              </div>

                                              <div class="d-flex x-gap-10 items-center">
                                                  <a href="#" class="icon icon-edit mr-5"></a>
                                                  <a href="#" class="icon icon-bin"></a>
                                                  <div class="accordion__icon mr-0">
                                                      <div class="d-flex items-center justify-center icon icon-chevron-down"></div>
                                                      <div class="d-flex items-center justify-center icon icon-chevron-up"></div>
                                                  </div>
                                              </div>
                                          </div>

                                          <div class="accordion__content">
                                              <div class="accordion__content__inner px-30 py-30">
                                                  <div class="d-flex">
                                                      <a href="#" class="button -sm py-15 -purple-3 text-purple-1 fw-500">Add Article +</a>
                                                      <a href="#" class="button -sm py-15 -purple-3 text-purple-1 fw-500 ml-10">Add Article +</a>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>

                                      <div class="accordion__item -dark-bg-dark-1 mt-10">
                                          <div class="accordion__button py-20 px-30 bg-light-4">
                                              <div class="d-flex items-center">
                                                  <div class="icon icon-drag mr-10"></div>
                                                  <span class="text-16 lh-1 fw-500 text-dark-1">Installing Development Software</span>
                                              </div>

                                              <div class="d-flex x-gap-10 items-center">
                                                  <a href="#" class="icon icon-edit mr-5"></a>
                                                  <a href="#" class="icon icon-bin"></a>
                                                  <div class="accordion__icon mr-0">
                                                      <div class="d-flex items-center justify-center icon icon-chevron-down"></div>
                                                      <div class="d-flex items-center justify-center icon icon-chevron-up"></div>
                                                  </div>
                                              </div>
                                          </div>

                                          <div class="accordion__content">
                                              <div class="accordion__content__inner px-30 py-30">
                                                  <div class="d-flex">
                                                      <a href="#" class="button -sm py-15 -purple-3 text-purple-1 fw-500">Add Article +</a>
                                                      <a href="#" class="button -sm py-15 -purple-3 text-purple-1 fw-500 ml-10">Add Article +</a>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>

                                      <div class="accordion__item -dark-bg-dark-1 mt-10">
                                          <div class="accordion__button py-20 px-30 bg-light-4">
                                              <div class="d-flex items-center">
                                                  <div class="icon icon-drag mr-10"></div>
                                                  <span class="text-16 lh-1 fw-500 text-dark-1">Hello World Project from GitHub</span>
                                              </div>

                                              <div class="d-flex x-gap-10 items-center">
                                                  <a href="#" class="icon icon-edit mr-5"></a>
                                                  <a href="#" class="icon icon-bin"></a>
                                                  <div class="accordion__icon mr-0">
                                                      <div class="d-flex items-center justify-center icon icon-chevron-down"></div>
                                                      <div class="d-flex items-center justify-center icon icon-chevron-up"></div>
                                                  </div>
                                              </div>
                                          </div>

                                          <div class="accordion__content">
                                              <div class="accordion__content__inner px-30 py-30">
                                                  <div class="d-flex">
                                                      <a href="#" class="button -sm py-15 -purple-3 text-purple-1 fw-500">Add Article +</a>
                                                      <a href="#" class="button -sm py-15 -purple-3 text-purple-1 fw-500 ml-10">Add Article +</a>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>

                                  </div>
                              </div>
                          </div>

                          <div class="row y-gap-20 justify-between pt-30">
                              <div class="col-auto sm:w-1/1">
                                  <button class="button -md -outline-purple-1 text-purple-1 sm:w-1/1">Prev</button>
                              </div>

                              <div class="col-auto sm:w-1/1">
                                  <button class="button -md -purple-1 text-white sm:w-1/1">Next</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div class="col-12">
                  <div class="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
                      <div class="d-flex items-center py-20 px-30 border-bottom-light">
                          <h2 class="text-17 lh-1 fw-500">Media</h2>
                      </div>

                      <div class="py-30 px-30">
                          <div class="row y-gap-50">
                              <div class="col-12">
                                  <form class="contact-form d-flex lg:flex-column">
                                      <div class="relative shrink-0">
                                          <img class="w-1/1" src="img/dashboard/media/1.png" alt="image" />

                                          <div class="absolute-full-center d-flex justify-end py-20 px-20">
                                              <a href="#" class="d-flex justify-center items-center bg-white size-40 rounded-8 shadow-1">
                                                  <i class="icon-bin text-16"></i>
                                              </a>
                                          </div>
                                      </div>

                                      <div class="w-1/1 ml-30 lg:ml-0 lg:mt-20">

                                          <div class="form-upload col-12">
                                              <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">Course thumbnail*</label>
                                              <div class="form-upload__wrap">
                                                  <input type="text" name="name" placeholder="Cover-1.html" />
                                                  <button class="button -dark-3 text-white">Upload Files</button>
                                              </div>
                                          </div>

                                          <p class="mt-10">Upload your course image here. It must meet our course image quality standards to be accepted. Important guidelines: 750x440 pixels; .jpg, .jpeg,. gif, or .png. no text on the image.</p>
                                      </div>
                                  </form>
                              </div>

                              <div class="col-12">
                                  <form class="contact-form d-flex lg:flex-column">
                                      <div class="relative shrink-0">
                                          <img class="w-1/1" src="img/dashboard/media/2.png" alt="image" />

                                          <div class="absolute-full-center d-flex justify-end py-20 px-20">
                                              <a href="#" class="d-flex justify-center items-center bg-white size-40 rounded-8 shadow-1">
                                                  <i class="icon-bin text-16"></i>
                                              </a>
                                          </div>
                                      </div>

                                      <div class="w-1/1 ml-30 lg:ml-0 lg:mt-20">

                                          <div class="form-upload col-12">
                                              <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">Video URL*</label>
                                              <div class="form-upload__wrap">
                                                  <input type="text" name="name" placeholder="Video-1.html" />
                                                  <button class="button -dark-3 text-white">Upload Files</button>
                                              </div>
                                          </div>

                                          <p class="mt-10">Enter a valid video URL. Students who watch a well-made promo video are 5X more likely to enroll in your course.</p>
                                      </div>
                                  </form>
                              </div>
                          </div>

                          <div class="row y-gap-20 justify-between pt-30">
                              <div class="col-auto">
                                  <button class="button -md -outline-purple-1 text-purple-1">Prev</button>
                              </div>

                              <div class="col-auto">
                                  <button class="button -md -purple-1 text-white">Next</button>
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
        <div class="dashboard__main">
                <div class="dashboard__content bg-light-4">
                  <div class="row pb-50 mb-10">
                    <div class="col-auto">

                      <h1 class="text-30 lh-12 fw-700">Calendar</h1>
                      <div class="breadcrumbs mt-10 pt-0 pb-0">
                        <div class="breadcrumbs__content">
                          <div class="breadcrumbs__item">
                            <a href="index.html">Home</a>
                          </div>
                          <div class="breadcrumbs__item">
                            <a href="courses-list-3.html">All courses</a>
                          </div>
                          <div class="breadcrumbs__item">
                            <a href="courses-single-1.html">User Experience Design</a>
                          </div>
                          <div class="breadcrumbs__item">
                            <a href="courses-single-1.html">User Interface</a>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                  <button className="button -md -purple-1 text-white" onClick={Toggle}>create calendar</button>
                  {state && <CreateCalender/>}


                  <div class="row">
                    <div class="col-xl-9 col-lg-9">
                      <div class="col-12">
                        <div class="rounded-16 bg-white -dark-bg-dark-1 shadow-4">
                          <div class="d-flex items-center py-20 px-30 border-bottom-light">
                            <h2 class="text-17 lh-1 fw-500">Calendar</h2>
                          </div>

                          <div class="py-40 px-30">
                            <div class="row y-gap-15 justify-between">
                              <div class="col-auto">
                                <div class="d-flex">
                                  <div class="">

                                    <div class="dropdown js-dropdown js-category-active">
                                      <div class="dropdown__button d-flex items-center text-14 h-50 rounded-8 px-15 py-10 " data-el-toggle=".js-category-toggle" data-el-toggle-active=".js-category-active">
                                        <span class="js-dropdown-title">Monthly</span>
                                        <i class="icon text-9 ml-40 icon-chevron-down"></i>
                                      </div>

                                      <div class="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-category-toggle">
                                        <div class="text-14 y-gap-15 js-dropdown-list">

                                          <div><a href="#" class="d-block js-dropdown-link">Animation</a></div>

                                          <div><a href="#" class="d-block js-dropdown-link">Design</a></div>

                                          <div><a href="#" class="d-block js-dropdown-link">Illustration</a></div>

                                          <div><a href="#" class="d-block js-dropdown-link">Lifestyle</a></div>

                                          <div><a href="#" class="d-block js-dropdown-link">Business</a></div>

                                        </div>
                                      </div>
                                    </div>

                                  </div>

                                  <div class="ml-20">

                                    <div class="dropdown js-dropdown js-category-active">
                                      <div class="dropdown__button d-flex items-center text-14 h-50 rounded-8 px-15 py-10 " data-el-toggle=".js-category-toggle" data-el-toggle-active=".js-category-active">
                                        <span class="js-dropdown-title">All Courses</span>
                                        <i class="icon text-9 ml-40 icon-chevron-down"></i>
                                      </div>

                                      <div class="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-category-toggle">
                                        <div class="text-14 y-gap-15 js-dropdown-list">

                                          <div><a href="#" class="d-block js-dropdown-link">Animation</a></div>

                                          <div><a href="#" class="d-block js-dropdown-link">Design</a></div>

                                          <div><a href="#" class="d-block js-dropdown-link">Illustration</a></div>

                                          <div><a href="#" class="d-block js-dropdown-link">Lifestyle</a></div>

                                          <div><a href="#" class="d-block js-dropdown-link">Business</a></div>

                                        </div>
                                      </div>
                                    </div>

                                  </div>
                                </div>
                              </div>

                              <div class="col-auto">
                                <button class="button -md -narrow -purple-1 text-white">
                                  <i class="icon-calendar-2 mr-10"></i>
                                  New Event
                                </button>
                              </div>
                            </div>

                            <div class="row justify-between pt-30">
                              <div class="col-auto">
                                <div class="d-flex items-center">
                                  <button class="button -single-icon -dark-7 -dark-button-dark-2 size-45 rounded-8 text-dark-1">
                                    <i class="icon-chevron-left text-11"></i>
                                  </button>
                                  <div class="ml-10 text-15 fw-500 lh-1">November 2022</div>
                                </div>
                              </div>

                              <div class="col-auto">
                                <div class="text-24 text-dark-1 fw-500">December 2022</div>
                              </div>

                              <div class="col-auto">
                                <div class="d-flex items-center">
                                  <div class="mr-10 text-15 fw-500 lh-1">January 2023</div>
                                  <button class="button -single-icon -dark-7 -dark-button-dark-2 size-45 rounded-8 text-dark-1">
                                    <i class="icon-chevron-right text-11"></i>
                                  </button>
                                </div>
                              </div>
                            </div>

                            <div class="row ml-0 mr-0 pt-20">

                            </div>

                            <div class="overflow-scroll scroll-bar-1">
                              <table class="table-calendar">
                                <thead>
                                  <tr>

                                    <th class="calendar-top-cell border-light">
                                      <div class="text-15 text-dark-1 fw-500">Sun</div>
                                    </th>

                                    <th class="calendar-top-cell border-light">
                                      <div class="text-15 text-dark-1 fw-500">Mon</div>
                                    </th>

                                    <th class="calendar-top-cell border-light">
                                      <div class="text-15 text-dark-1 fw-500">Tue</div>
                                    </th>

                                    <th class="calendar-top-cell border-light">
                                      <div class="text-15 text-dark-1 fw-500">Wed</div>
                                    </th>

                                    <th class="calendar-top-cell border-light">
                                      <div class="text-15 text-dark-1 fw-500">Thu</div>
                                    </th>

                                    <th class="calendar-top-cell border-light">
                                      <div class="text-15 text-dark-1 fw-500">Fri</div>
                                    </th>

                                    <th class="calendar-top-cell border-light">
                                      <div class="text-15 text-dark-1 fw-500">Sat</div>
                                    </th>

                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>

                                    <td class="calendar-cell border-light">
                                      <div class="text-15 text-dark-1">28</div>
                                    </td>

                                    <td class="calendar-cell border-light">
                                      <div class="text-15 text-dark-1">29</div>
                                    </td>

                                    <td class="calendar-cell border-light">
                                      <div class="text-15 text-dark-1">30</div>
                                    </td>

                                    <td class="calendar-cell border-light">
                                      <div class="text-15 text-dark-1">1</div>
                                    </td>

                                    <td class="calendar-cell border-light">
                                      <div class="text-15 text-dark-1">2</div>
                                    </td>

                                    <td class="calendar-cell border-light">
                                      <div class="text-15 text-dark-1">3</div>
                                    </td>

                                    <td class="calendar-cell border-light">
                                      <div class="text-15 text-dark-1">4</div>
                                    </td>

                                  </tr>

                                  <tr>

                                    <td class="calendar-cell border-light">
                                      <div class="text-15 text-dark-1">5</div>


                                    </td>

                                    <td class="calendar-cell border-light">
                                      <div class="text-15 text-dark-1">6</div>


                                    </td>

                                    <td class="calendar-cell border-light">
                                      <div class="text-15 text-dark-1">7</div>


                                    </td>

                                    <td class="calendar-cell border-light">
                                      <div class="text-15 text-dark-1">8</div>


                                    </td>

                                    <td class="calendar-cell border-light">
                                      <div class="text-15 text-dark-1">9</div>


                                    </td>

                                    <td class="calendar-cell border-light">
                                      <div class="text-15 text-dark-1">10</div>


                                      <div class="text-left pt-5 pb-15 px-10">
                                        <div class="text-14 dot-left">15:00 PM</div>
                                        <div class="text-14 text-dark-1">Assignment: Languages of Love is due</div>
                                      </div>

                                    </td>

                                    <td class="calendar-cell border-light">
                                      <div class="text-15 text-dark-1">11</div>


                                    </td>

                                  </tr>

                                  <tr>

                                    <td class="calendar-cell border-light">
                                      <div class="text-15 text-dark-1">12</div>


                                      <div class="text-left pt-5 pb-15 px-10">
                                        <div>
                                          <div class="text-14 dot-left">15:00 PM</div>
                                          <div class="text-14 text-dark-1">Birthday Party</div>
                                        </div>
                                        <div class="mt-5">
                                          <div class="text-14 dot-left -orange">15:00 PM</div>
                                          <div class="text-14 text-dark-1">Birthday Party</div>
                                        </div>
                                      </div>

                                    </td>

                                    <td class="calendar-cell border-light">
                                      <div class="text-15 text-dark-1">13</div>


                                    </td>

                                    <td class="calendar-cell border-light">
                                      <div class="text-15 text-dark-1">14</div>


                                    </td>

                                    <td class="calendar-cell border-light">
                                      <div class="text-15 text-dark-1">15</div>


                                    </td>

                                    <td class="calendar-cell border-light">
                                      <div class="text-15 text-dark-1">16</div>


                                    </td>

                                    <td class="calendar-cell border-light">
                                      <div class="text-15 text-dark-1">17</div>


                                    </td>

                                    <td class="calendar-cell border-light">
                                      <div class="text-15 text-dark-1">18</div>


                                    </td>

                                  </tr>

                                  <tr>

                                    <td class="calendar-cell border-light">
                                      <div class="text-15 text-dark-1">19</div>


                                    </td>

                                    <td class="calendar-cell border-light">
                                      <div class="text-15 text-dark-1">20</div>


                                    </td>

                                    <td class="calendar-cell border-light">
                                      <div class="text-15 text-dark-1">21</div>


                                    </td>

                                    <td class="calendar-cell border-light">
                                      <div class="text-15 text-dark-1">22</div>


                                      <div class="text-left pt-5 pb-15 px-10">
                                        <div class="text-14 dot-left">15:00 PM</div>
                                        <div class="text-14 text-dark-1">Group Project is due</div>
                                      </div>

                                    </td>

                                    <td class="calendar-cell border-light">
                                      <div class="text-15 text-dark-1">23</div>


                                    </td>

                                    <td class="calendar-cell border-light">
                                      <div class="text-15 text-dark-1">24</div>


                                    </td>

                                    <td class="calendar-cell border-light">
                                      <div class="text-15 text-dark-1">25</div>


                                    </td>

                                  </tr>

                                  <tr>

                                    <td class="calendar-cell border-light">
                                      <div class="text-15 text-dark-1">26</div>
                                    </td>

                                    <td class="calendar-cell border-light">
                                      <div class="text-15 text-dark-1">27</div>
                                    </td>

                                    <td class="calendar-cell border-light">
                                      <div class="text-15 text-dark-1">28</div>
                                    </td>

                                    <td class="calendar-cell border-light">
                                      <div class="text-15 text-dark-1">29</div>
                                    </td>

                                    <td class="calendar-cell border-light">
                                      <div class="text-15 text-dark-1">30</div>
                                    </td>

                                    <td class="calendar-cell border-light">
                                      <div class="text-15 text-dark-1">31</div>
                                    </td>

                                    <td class="calendar-cell border-light">
                                      <div class="text-15 text-dark-1">1</div>
                                    </td>

                                  </tr>
                                </tbody>
                              </table>
                            </div>

                            <div class="row x-gap-20 y-gap-10 justify-center pt-30">
                              <div class="col-auto">

                                <a href="#" class="button -icon -purple-3 text-light-1">
                                  Export Calender
                                  <i class="icon-arrow-top-right text-13 ml-10"></i>
                                </a>

                              </div>
                              <div class="col-auto">

                                <a href="#" class="button -icon -purple-3 text-light-1">
                                  Manage Subscriptions
                                  <i class="icon-arrow-top-right text-13 ml-10"></i>
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