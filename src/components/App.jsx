import { Component } from 'react';
import ContactForm from './ContactForm';
import ContactsList from './ContactsList';
import Filter from './Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleAddContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  // handleNameChange = event => {
  //   this.setState({ name: event.target.value });
  // };

  // formSubmitHandler = data => {
  //   console.log(data);
  // };

  render() {
    return (
      <div className="App">
        <h2>Phonebook</h2>
        <ContactForm onAddContact={this.handleAddContact} />

        <h2>Contacts</h2>
        <ContactsList contacts={this.state.contacts} />
        <Filter onChange={this.changeFilter} />
      </div>
    );
  }
}

export default App;
