function CreateCalender() {
    return (

        <div className="dashboard__main">
            {/* ////////////////////////////// */}

            <div>
                <input
                    type="text"
                    name="content"
                    placeholder="Add Title"
                    style={{ width: "20%", marginRight: "10px" }}
                    value={newEvent.title}
                    onChange={(e) =>
                        setNewEvent({ ...newEvent, title: e.target.value })
                    }
                />
                <input
                    type="datetime-local"
                    placeholder="start day"
                    name="start"
                    style={{ width: "20%", marginRight: "10px" }}
                    value={newEvent.start}
                    onChange={(e) =>
                        setNewEvent({
                            ...newEvent,
                            start_time: e.target.value,
                        })
                    }
                />
                <input
                    type="datetime-local"
                    name="end"
                    placeholder="End Date "
                    style={{ width: "20%", marginRight: "10px" }}
                    value={newEvent.end}
                    onChange={(e) =>
                        setNewEvent({
                            ...newEvent,
                            end_time: e.target.value,
                        })
                    }
                />
                <button stlye={{ marginTop: "10px" }} onClick={handleAddEvent}>
                    Add Event
                </button>
            </div>
            {/* ////////////////////////////// */}
            <div className="dashboard__content bg-light-4">
                <div className="row pb-50 mb-10">
                    <div className="col-auto">
                        <h1 className="text-30 lh-12 fw-700">Create New Course</h1>
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

                                        <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Class Title*</label>

                                        <input type="text"
                                            name="content"
                                            placeholder="Learn Figma - UI/UX Design Essential Training"
                                            value={newEvent.title}
                                            onChange={(e) =>
                                                setNewEvent({ ...newEvent, title: e.target.value })
                                            } />
                                    </div>


                                    <div className="col-12">

                                        <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Short Description*</label>

                                        <textarea placeholder="Description" rows="3"></textarea>
                                    </div>


                                    <div className="col-12">

                                        <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Online Link/Offline Address*</label>


                                        <input type="text" placeholder="Link/Address" />


                                    </div>


                                    <div className="col-md-6">


                                        <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Class size*</label>

                                        <input type="text" placeholder="Select" />

                                    </div>


                                    <div className="col-md-6">


                                        <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Class Level</label>

                                        <input type="text" placeholder="Select" />
                                    </div>


                                    <div className="col-md-6">

                                        <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Class Image</label>

                                        <input type="text" placeholder="Import" />
                                    </div>

                                </form>

                                <div className="row y-gap-20 justify-between pt-15">
                                    <div className="col-auto">
                                        <button className="button -md -outline-purple-1 text-purple-1">Review</button>
                                    </div>

                                    <div className="col-auto">
                                        <button className="button -md -purple-1 text-white">Create</button>
                                    </div>
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