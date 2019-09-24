import React from "react";

class Register extends React.Component {

  constructor(props){
    super(props)
    this.state ={
      email : '',
      password : '',
      name : ''
    }
  }

  onNameChange = evt => {
    this.setState({ name: evt.target.value })
  }

  onEmailChange = evt => {
    this.setState({ email: evt.target.value })
  }

  onPasswordChange = evt => {
    this.setState( { password : evt.target.value } )
  }

  onSubmitRegister = () => {
    fetch('http://localhost:3001/register', { 
      method: 'post',
      headers : {
        'Content-Type': 'application/json'
      },
      body : JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name
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
  return (
    <article className="br3 ba dark-gray b--black-10 mv5 shadow-3 w-100 w-50-m w-25-l mw6 center">
      <main className="pa4 black-80">
        <div className="measure center">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0 white">Register</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6 white" name="name">Name</label>
              <input onChange={this.onNameChange} className="pa2 input-reset ba b--white bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name"/>
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6 white" name="email-address">Email</label>
              <input onChange={this.onEmailChange} className="pa2 input-reset ba b--white bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6 white" name="password">Password</label>
              <input onChange={this.onPasswordChange} className="b pa2 input-reset ba b--white bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
            </div>
          
            <div className="">
              <input onClick={this.onSubmitRegister} className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib white" type="submit" value="Register"/>
            </div>
            
           </fieldset>
        </div>
      </main>
    </article>
  )};
};

export default Register;
