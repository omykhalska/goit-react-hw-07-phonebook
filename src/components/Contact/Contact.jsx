import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import Button from '../Button';
import { ContactItem, ContactText } from './Contact.styled';

function Contact({ name, number, id }) {
  const dispatch = useDispatch();

  const deleteContact = () => {
    //TODO: dispatch(deleteItem(id));
    toast.success('Selected contact deleted');
  };

  return (
    <ContactItem>
      <ContactText>
        <b>{name}:</b> {number}
      </ContactText>
      <Button label="Delete" type="submit" onClick={deleteContact} />
    </ContactItem>
  );
}

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Contact;
