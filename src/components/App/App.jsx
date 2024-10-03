import 'modern-normalize';
import css from './App.module.css';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';

export default function App() {
  return (
    <div className={css.wrapper}>
      <section className={css.section}>
        <div className={css.container}>
          <h1 className={css.title}>Phonebook</h1>
          <div className={css.content}>
            <ContactForm />
            <SearchBox />
          </div>
          <ContactList />
        </div>
      </section>
    </div>
  );
}
