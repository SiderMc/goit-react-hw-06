import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectFilters } from '../../redux/filtersSlice';
import { selectContacts } from '../../redux/contactsSlice';

export default function ContactList() {
  const filterSelector = useSelector(selectFilters);
  const listSelector = useSelector(selectContacts);
  const filteredList = listSelector.filter(contact =>
    contact.name.toLowerCase().includes(filterSelector.toLowerCase())
  );

  return (
    <ul className={css.contacts__list}>
      {filteredList.map(contact => (
        <li className={css.contacts__list_item} key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
}
