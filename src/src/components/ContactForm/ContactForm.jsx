import React, { Component } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = value => {
    this.setState({
      number: value,
    });
  };

  handleAddContact = () => {
    const { addContact } = this.props;
    const { name, number } = this.state;

    if (name.trim() === '' || number.trim() === '') {
      alert('Please enter both name and phone number.');
      return;
    }

    addContact({ id: nanoid(), name, number });
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <div className={css.contactForm}>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+([' -][a-zA-Zа-яА-Я]+)*$"
          title="Please enter a valid name"
          required
          value={this.state.name}
          onChange={e => this.setState({ name: e.target.value })}
          placeholder="Enter name"
          className={css.input}
        />

        <PhoneInput
          placeholder="Enter phone number"
          value={this.state.number}
          onChange={this.handleChange}
          defaultCountry="PH"
          className={css.customPhoneInput}
          limitMaxLength
        />

        <button className={css.button} onClick={this.handleAddContact}>
          Add Contact
        </button>
      </div>
    );
  }
}