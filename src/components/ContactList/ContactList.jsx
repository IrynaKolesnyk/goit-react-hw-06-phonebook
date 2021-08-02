import React from 'react';
import { connect } from 'react-redux';
import ContactListStyled from './ContactListStyled';
import contactsActions from '../../redux/phoneBook/phoneBookActions';

const ContactList = ({ contacts, onDeleteContact }) => {
  console.log(contacts);
  return (
    <ContactListStyled>
      {contacts.map(contact => {
        const { id, name, number } = contact;

        return (
          <li className="item" key={id}>
            <p className="name">{name}:</p>
            <p className="number">{number}</p>
            <button
              className="delBtn"
              type="button"
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ContactListStyled>
  );
};

const mapstateToProps = state => {
  return {
    contacts: state.contacts.items,
  };
};

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsActions.deleteContact(id)),
});

export default connect(mapstateToProps, mapDispatchToProps)(ContactList);
