import { Link } from 'react-router-dom';
import './signin.css'
const SignIn = () => {
    return(
        

<div className="container py-5 h-100">
  <div className="row d-flex justify-content-center h-100">
    <div className="col-md-4">
      <div className="card " style={{ borderRadius: '1rem' }}>
        <div className="card-body p-5 text-center">
          <div className="mb-md-5 mt-md-4 pb-5">
            <h2 className="mb-2 ">Sign In</h2>
            <p className=" mb-5">Please enter your email/mobile number and password!</p>
            <form action="">
              <div className="form-outline form-white mb-4">
                <input type="email" className="form-control form-control-lg" />
                <label className="form-label">Email</label>
              </div>
              <div className="form-outline form-white mb-4">
                <input type="password" className="form-control form-control-lg" />
                <label className="form-label">Password</label>
              </div>
              <button className="btn btn-outline-dark btn-lg px-5" type="submit">Sign In</button>
            </form>
          </div>
          <div>
            <p className="mb-0">Don't have an account? <Link to="/signup" className="fw-bold">Sign Up</Link></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}
export default SignIn