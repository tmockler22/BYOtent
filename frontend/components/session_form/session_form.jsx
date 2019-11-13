import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return (e) => this.setState({[field]: e.currentTarget.value});
  };

  render () {
    let path = (this.props.formType === 'login') ? '/signup' : '/login';
    let pathName = (this.props.formType === 'login') ? 'signup' : 'login';
    
    let listErrors = this.props.errors.map(error => (
        <li>{error}</li>
      ));

    let signupName = (this.props.formType !== 'signup') ? <div></div> : (<div>
      <label>
        First Name:
          <input type="text"
          value={this.state.firstName}
          onChange={this.update("firstName")}
        />
      </label>
      <label>
        Last Name:
          <input type="text"
          value={this.state.lastName}
          onChange={this.update("lastName")}
        />
      </label>
    </div>);

    let renderForm = (<div>
      <h3>{this.props.formType}</h3>
      <ul>{listErrors}</ul>
      <form>
        <label>
          Username:
          <input type="text"
            value={this.state.username}
            onChange={this.update("username")}
          />
        </label>
        <label>
          Password:
          <input type="password"
            value={this.state.password}
            onChange={this.update("password")}
          />
        </label>
        <button onClick={this.handleSubmit}>{this.props.formType}</button>
      </form>
      <Link to={path}>{pathName}</Link>
    </div>);
  
    return (
      <div className="session-modal">
      {signupName}
      {renderForm}</div>
    );
  };
 
};

export default SessionForm;