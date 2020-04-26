import React, {Component} from 'react';
import Form from  'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import RegistrationAlert from './RegistrationAlert';
import "../../styles/Registration.css";


class Registration extends Component {

  constructor(props) {
    super(props);
    this.registrationAlert = React.createRef();
  }



  handleSubmit = event => {
    event.preventDefault();
    console.log(event.target.name.value)
    console.log(event.target.email.value);
    console.log(event.target.telephfone.value);
    console.log(event.target.password.value);
    this.registerUser(event.target.name.value, event.target.email.value, 
    event.target.telephfone.value, event.target.password.value);

  }

  registerUser = (name, email, telephfone, password) => {
  fetch('http://localhost:300', {
                    method: 'POST',
                    headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
          body: JSON.stringify({
            name: name,
            email: email,
            telephfone: telephfone,
            password: password,
          })
    }).then(function(response){
      if (response.status === 200) {
        this.showRegistrationAlert("success", "Uzytkownik zarejestrowany!" ,"Teraz mozesz się zalogować.");} 
      else if (response.status === 422) {
        this.showRegistrationAlert("danger", "Uzytkownik juz istnieje.", "Prosze uzyc innego adresu e-mail.");} 
      else {
        this.showRegistrationAlert("danger", "Uzytkownik nie został zarejestrowany!", "Coś poszło nie tak.");}
    })
    };
  

  showRegistrationAlert(variant, heading, message) {
    this.registrationAlert.current.setVariant(variant);
    this.registrationAlert.current.setHeading(heading);
    this.registrationAlert.current.setMessage(message);
    this.registrationAlert.current.setVisible(true);
  };


  render() {
    return (
      <>
      <div className="Register">

    <Form onSubmit = {this.handleSubmit}>

    <Form.Group controlId="name" size="lg">
      <Form.Label> Imię</Form.Label>
      <Form.Control required type="name" placeholder="Imię" autoFocus name="name"/>
    </Form.Group>
   
    <Form.Group controlId="email" size="lg">
        <Form.Label> E-mail</Form.Label>
        <Form.Control required type="email" placeholder="E-mail" autoFocus name="email"/>
    </Form.Group>

    <Form.Group controlId="telephfone" size="lg">
        <Form.Label>Numer telefonu</Form.Label>
        <Form.Control required type="telephone" autoFocus name="telephone" placeholder="Numer telefonu"/>
    </Form.Group>

    <Form.Group controlId="password" size="lg">
        <Form.Label>Hasło</Form.Label>
        <Form.Control required type="password" placeholder="Hasło" name="passwoer"/>
    </Form.Group>
    
    <Form.Group>
      <Form.Check required
      label="Oświadczam iż zapoznałam/(em) się z regulaminem oraz akceptuje jego postanowienia. "
      feedback="To pole jest wymagane!"/>
    </Form.Group>

    <Form.Group>
    <Form.Check
      label="Wyrażam zgode na otrzymywanie informacji handlowych w Newsletterze email"/>
    </Form.Group>

    <Button block size="lg" type="submit">Zarejestruj</Button>
    </Form>

    </div>

    <RegistrationAlert ref={this.RegistrationAlert}/>
    </>
    )
  };
}

export default Registration;
