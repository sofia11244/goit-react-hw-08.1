import '../App.css';
import ContactForm from './ContactForm.jsx';
import SearchBox from './SearchBox.jsx';
import ContactList from './ContactList.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../redux/contactsOps.js';
import { changeFilter } from '../redux/filtersSlice';

function App() {
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
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox inputValue={searchValue} handleChange={handleSearchChange} />
      <ContactList contacts={filteredContacts} />
    </div>
  );
}

export default App;
