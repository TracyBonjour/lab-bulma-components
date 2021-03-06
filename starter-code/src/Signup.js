import React, { Component } from "react";
import 'bulma/css/bulma.css';
import Navbar from "./Navbar";
import FormField from "./Formfield";
import CoolButton from "./CoolButton";

class Signup extends Component {
    render() {
      return (
        <div>
        <Navbar />
  
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <FormField label="Password" type="password"  />
  
        <CoolButton name1="Submit"/>
  
      </div>
      );
    }
  }
  
  export default Signup;