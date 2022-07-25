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

export default CreateCalender