import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  componentDidMount(){
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleDemo(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state = {
      first_name: "",
      last_name: "",
      username: "Guest",
      password: "password"});
    this.props.processForm(user);
  }

  update(field) {
    return (e) => this.setState({[field]: e.currentTarget.value});
  };

  render () {
    let path = (this.props.formType === 'login') ? '/signup' : '/login';
    let pathName = (this.props.formType === 'login') ? 'Sign Up!' : 'Log In!';
    let btnName = (pathName === 'Sign Up!' ? 'Log In' : 'Sign Up');
    let formDescription = (pathName !== 'Sign Up!' ? 'Join BYOTENT!' : 'Welcome Back!');
    let formInfo = (pathName !== 'Sign Up!' ? 'Already a member? Or try a demo.' : 'New here?');
    let listErrors = this.props.errors.map((error, i) => (
        <li key={i}>{error}</li>
      ));
      // <div className="name-input">

    let fnameInput = (this.props.formType !== 'signup') ? <p className="sign-in">It's camping o'clock.</p> : (<input type="text"
          className="form-input-fname"
          value={this.state.first_name}
          placeholder="First Name..."
          onChange={this.update("first_name")}
        />);
       
    let lnameInput = (this.props.formType !== 'signup') ? null : (<input type="text"
          className="form-input-lname"
          value={this.state.last_name}
          placeholder="Last Name..."
          onChange={this.update("last_name")}
        />);

    let demoButton = (this.props.formType === 'signup') ? null : (<button className="demo-btn" 
          onClick={this.handleDemo}>Demo</button>);    

    let renderForm = (<div>
      <div className="errors-list"><ul className="session-form-errors">{listErrors}</ul></div>
      <form className="session-form"> 
          <div className="name-input">
            {fnameInput}
            {lnameInput}
          </div>
          <input type="text"
            className="form-input"
            value={this.state.username}
            placeholder="Username"
            onChange={this.update("username")}
          />
          <input type="password"
            className="form-input"
            value={this.state.password}
            placeholder="Password"
            onChange={this.update("password")}
          />
        <button className="session-btn" onClick={this.handleSubmit}>{btnName}</button>
        {demoButton}
      </form>
      <div className="form-suggest">
      <p className="form-info">{formInfo}</p>
      <Link className="form-link" to={path}>{pathName}</Link>
      </div>
    </div>);
  
    return (
      <div className="modal-screen">
      <div className="session-modal">
      <h3 className="form-description">{formDescription}</h3>
      {renderForm}
      </div>
      </div>
    );
  };
};

export default SessionForm;