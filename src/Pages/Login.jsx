import React from 'react';
import './Login.css';
function Login() {
  return (
    <div>
      <h1>Login</h1>
      <div className="container">
        <div class="mb-3">
          <label for="exampleFormControlInput1" className="form-label">email</label>
          <input type="email" name='Email' className="div form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
      </div>

      <div class="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Password</label>
        <input type="email" name='Email' className="div form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
      </div>

      <div className="button_div">
              <button className="cv" type="submit">Login</button>
            </div>
    </div>
  )
}

export default Login;