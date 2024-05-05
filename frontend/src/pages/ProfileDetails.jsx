const ProfileDetails = () =>{
    return(
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body text-center " style={{ borderRadius: '1rem' }}>
                            <h2>Let us know you more..</h2>
                        <form action="">
                                <div className="row d-flex justify-content-center">
                                    <div className="col-12">

                                        <div className="form-outline form-white mb-4">
                                        <label className="form-label">Name</label>
                                        <input type="name" className="form-control form-control-lg" />
                                        </div>
                                        
                                        <div className="form-outline form-white mb-4">
                                        <label className="form-label">Mobile Number</label>
                                        <input type="mobile" className="form-control form-control-lg" />
                                        </div>
                                        <div className="form-outline form-white mb-4">
                                        <label className="form-label">Address</label>
                                        <input type="text" name="addressLine1" placeholder="Address Line One" className="form-control form-control-lg"  />
                                        </div>
                                            <div className="form-outline form-white mb-4">
                                            <input type="text" name="addressLine2" placeholder="Address Line Two" className="form-control form-control-lg"  />
                                            </div>
                                        
                                        <div className="form-outline form-white mb-4">
                                            <input type="text" name="addressLine3" placeholder="Address Line Three" className="form-control form-control-lg"  />
                                        </div>
                                        <div className="form-outline form-white mb-4">
                                            <input type="text" name="city" placeholder="City" className="form-control form-control-lg" />
                                        </div>
                                        <div className="form-outline form-white mb-4">
                                            <input type="text" name="pin" placeholder="PIN Code" className="form-control form-control-lg"/>
                                            </div>
                                        <div className="form-outline form-white mb-4">
                                            <input type="text" name="state" placeholder="State" className="form-control form-control-lg" />
                                        </div>
                                        <button className="btn btn-outline-dark btn-lg px-5" type="submit">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProfileDetails