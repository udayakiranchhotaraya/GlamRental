import { Link } from "react-router-dom"
const SignUp =() =>{
    return(
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body text-center">
                        <h2> Sign Up Now!</h2>
                        <p className="mb-4">Please enter your details!</p>
                            <form action="">
                                <div className="row">
                                    <div className="col-12">

                                        <div className="form-outline form-white mb-4">
                                        <label className="form-label">Email</label>
                                        <input type="email" className="form-control form-control-lg" />
                                        </div>
                                        
                                        <div className="form-outline form-white mb-4">
                                        <label className="form-label">Set your Password</label>
                                        <input type="password" className="form-control form-control-lg" />
                                        </div>
                                        <div className="form-outline text-center">
                                            
                                            <Link to="/profile" className="btn btn-outline-dark btn-lg px-5 fw-bold">
                                                Next
                                            </Link>
                                            </div>
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
export default SignUp