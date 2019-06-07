import React from "react";

const Signin = ({onRouteChange}) => {
  return (
    <article className="br3 ba dark-gray b--white-10 mv5 shadow-3 w-100 w-50-m w-25-l mw6 center">
      <main className="pa4 black-80">
        <div className="measure center">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0 white">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6 white" htmlfor="email-address">Email</label>
              <input className="pa2 input-reset ba b--white bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6 white" htmlfor="password">Password</label>
              <input className="b pa2 input-reset ba b--white bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
            </div>
          
            <div className="">
              <input onClick={() => onRouteChange('home')} className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib white" type="submit" value="Sign in"/>
            </div>
            <div className="lh-copy mt3">
             <p onClick={() => onRouteChange('register')} href="#0" className="f6 link dim black db pointer white">Register</p>
           </div>
           </fieldset>
        </div>
      </main>
    </article>
  );
};

export default Signin;
