import React from "react";

class Signin extends React.Component {

  constructor(props){
    super(props)
    this.state ={
      signinEmail : '',
      signinPassword : ''
    }
  }

  onEmailChange = evt => {
    this.setState({ signinEmail: evt.target.value })
  }

  onPasswordChange = evt => {
    this.setState( { signinPassword : evt.target.value } )
  }

  onSubmitSignIn = () => {
    fetch('https://stormy-wildwood-66031.herokuapp.com/signin', { 
      method: 'post',
      headers : {
        'Content-Type': 'application/json'
      },
      body : JSON.stringify({
        email: this.state.signinEmail,
        password: this.state.signinPassword
      })
     }).then( response => response.json() )
     .then( user => {
       if (user.id){
         this.props.loadUser(user);
         this.props.onRouteChange('home');
       }
     } )
  }
  
  render(){
    const { onRouteChange } = this.props
  return (
    <article className="br3 ba dark-gray b--white-10 mv5 shadow-3 w-100 w-50-m w-25-l mw6 center">
      <main className="pa4 black-80">
        <div className="measure center">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0 white">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6 white" htmlFor="email-address">Email</label>
              <input className="pa2 input-reset ba b--white bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" onChange={this.onEmailChange}/>
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6 white" htmlFor="password">Password</label>
              <input className="b pa2 input-reset ba b--white bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" onChange={this.onPasswordChange}/>
            </div>
          
            <div className="">
              <input onClick={this.onSubmitSignIn} className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib white" type="submit" value="Sign in"/>
            </div>
            <div className="lh-copy mt3">
             <p onClick={() => onRouteChange('register')} href="#0" className="f6 link dim black db pointer white">Register</p>
           </div>
           </fieldset>
        </div>
      </main>
    </article>
  )};
};

export default Signin;
