import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

const ContactsPage = () => {
  return (
    <>
      <h1 className="uppercase font-bold text-2xl">Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};

export default ContactsPage;
