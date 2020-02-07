import React from 'react';
import { withRouter } from 'react-router-dom';

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

  componentWillUnmount() {
    this.props.clearErrors(); 
  }
  

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  demoEffect(demoUser) {
    const that = this;
    let index = 0;
    const demoIntervalId = setInterval(() => {
      if (index < demoUser.username.length) {
        that.setState({
          username: this.state.username + demoUser.username[index]
        })
      }
      if (index < demoUser.password.length) {
        that.setState({
          password: this.state.password + demoUser.password[index]
        })
      }
      index++;
      if (index > demoUser.password.length && index > demoUser.username.length) {
        clearInterval(demoIntervalId);
        this.props.processForm(demoUser);
      }
    }, 200)
  }

  handleDemo(e) {
    e.preventDefault();
    const demoUser = {
      first_name: "",
      last_name: "",
      username: "Guest",
      password: "password"
    }; 
    this.demoEffect(demoUser)

  }

  // handleDemo(e) {
  //   e.preventDefault();
  //   const user = Object.assign({}, this.state = {
  //     first_name: "",
  //     last_name: "",
  //     username: "Guest",
  //     password: "password"}); 
  //   this.props.processForm(user);
  // }
  

  update(field) {
    return (e) => this.setState({[field]: e.currentTarget.value});
  };

  render () {
    let pathName = (this.props.formType === 'login') ? 'Sign Up!' : 'Log In!';
    let btnName = (pathName === 'Sign Up!' ? 'Log In' : 'Sign Up');
    let formDescription = (pathName !== 'Sign Up!' ? 'Join BYOTENT!' : 'Welcome Back!');
    let formInfo = (pathName !== 'Sign Up!' ? 'Already a member?' : 'New here?');
    let listErrors = this.props.errors[0];

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
      {/* <div className="errors-list"><ul className="session-form-errors">{listErrors}</ul></div> */}
      <form className="session-form"> 
         <div onClick={this.props.closeModal} className="close-x"></div>
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
      {this.props.otherForm}
      </div>
    </div>);
  
    return (
      <div className="modal-screen">
      <div className="errors-list">
        <ul className="session-form-errors">{listErrors}</ul>
      </div>
      <div className="session-modal">
        <h3 className="form-description">{formDescription}</h3>
      {renderForm}
      </div>
      </div>
    );
  };
};

export default withRouter(SessionForm);