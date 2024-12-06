import '../App.css';
import ContactForm from '../components/contact-components/ContactForm.jsx';
import SearchBox from '../components/contact-components/SearchBox.jsx';
import ContactList from '../components/contact-components/ContactList.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../redux/contact/contactsOps.js';
import { changeFilter } from '../redux/contact/filtersSlice.js';
import style from '../components/contact-components/componentContacts.module.css';

function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const searchValue = useSelector((state) => state.filters.nameFilter);

  const handleAddContact = (newContact) => {
    dispatch(addContact(newContact));
  };

  const handleSearchChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className={style.container}>


      <ContactForm onAddContact={handleAddContact} />
      <SearchBox inputValue={searchValue} handleChange={handleSearchChange} />
      <ContactList contacts={filteredContacts} />

    </div>
  );
}

export default Contacts;
