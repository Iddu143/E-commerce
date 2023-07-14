import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      // Redirect to the desired page after successful login
      history.push('/dashboard');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <center>
        <h1 className="">Login Page</h1>
      </center>
      <div className="container">
        <div>
          <section className="vh-100">
            <div className="container py-5 h-100">
              <div className="row d-flex align-items-center justify-content-center h-100">
                <div className="col-md-8 col-lg-7 col-xl-6">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                    className="img-fluid"
                    alt="Phone image"
                  />
                </div>
                <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                  <form onSubmit={handleLogin}>
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="form1Example13"
                        className="form-control form-control-lg"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label className="form-label" htmlFor="form1Example13">
                        Email address
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form1Example23"
                        className="form-control form-control-lg"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <label className="form-label" htmlFor="form1Example23">
                        Password
                      </label>
                    </div>

                    <div className="d-flex justify-content-around align-items-center mb-4">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="form1Example3"
                          defaultChecked
                        />
                        <label className="form-check-label" htmlFor="form1Example3">
                          Remember me
                        </label>
                      </div>
                      <a href="#!">Forgot password?</a>
                    </div>

                    <button type="submit" className="btn btn-primary btn-lg btn-block">
                      Sign in
                    </button>

                    <div className="divider d-flex align-items-center my-4">
                      <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                    </div>

                    <a
                      className="btn btn-primary btn-lg btn-block"
                      href="#!"
                      role="button"
                    >
                      <i className="fab fa-facebook-f me-2"></i>Continue with Facebook
                    </a>
                    <a
                      className="btn btn-primary btn-lg btn-block"
                      href="#!"
                      role="button"
                    >
                      <i className="fab fa-twitter me-2"></i>Continue with Twitter
                    </a>

                    <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? </p>
                    <Link to="/signup">Register</Link>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}








// import React from 'react'
// import { Link, NavLink } from 'react-router-dom'



// export default function Login() {
//   return (
//     <>
//       <center><h1 className=''>Login Page</h1></center>
//       <div className='container'>
//         <div>
// <section class="vh-100">
//   <div class="container py-5 h-100">
//     <div class="row d-flex align-items-center justify-content-center h-100">
//       <div class="col-md-8 col-lg-7 col-xl-6">
//         <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
//           class="img-fluid" alt="Phone image"/>
//       </div>
//       <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
//         <form>
//           {/* <!-- Email input --> */}
//           <div class="form-outline mb-4">
//             <input type="email" id="form1Example13" class="form-control form-control-lg" />
//             <label class="form-label" for="form1Example13">Email address</label>
//           </div>

//           {/* <!-- Password input --> */}
//           <div class="form-outline mb-4">
//             <input type="password" id="form1Example23" class="form-control form-control-lg" />
//             <label class="form-label" for="form1Example23">Password</label>
//           </div>

//           <div class="d-flex justify-content-around align-items-center mb-4">
//             {/* <!-- Checkbox --> */}
//             <div class="form-check">
//               <input class="form-check-input" type="checkbox" value="" id="form1Example3" checked />
//               <label class="form-check-label" for="form1Example3"> Remember me </label>
//             </div>
//             <a href="#!">Forgot password?</a>
//           </div>

//           {/* <!-- Submit button --> */}
//           <button type="submit" class="btn btn-primary btn-lg btn-block">Sign in</button>

//           <div class="divider d-flex align-items-center my-4">
//             <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
//           </div>

//           <a class="btn btn-primary btn-lg btn-block" href="#!"
//             role="button">
//             <i class="fab fa-facebook-f me-2"></i>Continue with Facebook
//           </a>
//           <a class="btn btn-primary btn-lg btn-block" href="#!"
//             role="button">
//             <i class="fab fa-twitter me-2"></i>Continue with Twitter</a>
            
//             <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? </p>
//             <Link to="/signup" >Register</Link>

//         </form>
//       </div>
//     </div>
//   </div>
// </section>
// </div>
// </div>

//     </>
//   )
// }

