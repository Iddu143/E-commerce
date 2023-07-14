import React, { useState,useEffect } from 'react';
import { Link, } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// import { useHistory } from 'react-router-dom';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      // Redirect to the desired page after successful signup
      history.push('/dashboard');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <center>
        <h1>Signup Page</h1>
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
                  <form onSubmit={handleSignup}>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="form1Example1"
                        className="form-control form-control-lg"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <label className="form-label" htmlFor="form1Example1">
                        Name
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="form1Example2"
                        className="form-control form-control-lg"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label className="form-label" htmlFor="form1Example2">
                        Email address
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form1Example3"
                        className="form-control form-control-lg"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <label className="form-label" htmlFor="form1Example3">
                        Password
                      </label>
                    </div>

                    <button type="submit" className="btn btn-primary btn-lg btn-block">
                      Sign up
                    </button>

                    <p className="small fw-bold mt-2 pt-1 mb-0">Already have an account?</p>
                    <Link to="/login">Login</Link>
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

// export default function Signup() {
//   return (
//     <>
//     <div classNameName='bg-color-red'>
//       <center><h2>SignUp Page</h2></center>
//       <div classNameName=''>
//       <section className="vh-10 background-color: #eee;">
//   <div className="container">
//     <div className="row d-flex justify-content-center align-items-center h-100">
//       <div className="col-lg-12 col-xl-11">
//         <div className="card text-black">
//           <div className="card-body p-md-5">
//             <div className="row justify-content-center">
//               <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
//                 <form className="mx-1 mx-md-1">
//                     <div className="d-flex flex-row align-items-center mb-4">
//                         <i className="fas fa-user fa-lg me-3 fa-fw"></i>
//                         <div className="form-outline flex-fill mb-0">
//                             <input type="text" id="form3Example1c" className="form-control" />
//                             <label className="form-label" for="form3Example1c">Your Name</label>
//                         </div>
//                     </div>

//                     <div className="d-flex flex-row align-items-center mb-4">
//                         <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
//                         <div className="form-outline flex-fill mb-0">
//                             <input type="email" id="form3Example3c" className="form-control" />
//                             <label className="form-label" for="form3Example3c">Your Email</label>
//                         </div>
//                     </div>

//                     <div className="d-flex flex-row align-items-center mb-4">
//                         <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
//                         <div className="form-outline flex-fill mb-0">
//                             <input type="password" id="form3Example4c" className="form-control" />
//                             <label className="form-label" for="form3Example4c">Password</label>
//                         </div>
//                     </div>

//                     <div className="d-flex flex-row align-items-center mb-4">
//                         <i className="fas fa-key fa-lg me-3 fa-fw"></i>
//                         <div className="form-outline flex-fill mb-0">
//                             <input type="password" id="form3Example4cd" className="form-control" />
//                             <label className="form-label" for="form3Example4cd">Repeat your password</label>
//                         </div>
//                     </div>

//                     <div className="form-check d-flex justify-content-center mb-5">
//                         <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
//                         <label className="form-check-label" for="form2Example3">
//                             I agree all statements in <a href="#!">Terms of service</a>
//                         </label>
//                     </div>

//                     <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
//                         <button type="button" className="btn btn-primary btn-lg">Register</button>
//                     </div>

//                 </form>
//                 </div>
//               <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

//                 <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
//                   class="img-fluid" alt="Sample image"/>

//                 </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
//       </div>
// </div>
//     </>
//   )
// }
