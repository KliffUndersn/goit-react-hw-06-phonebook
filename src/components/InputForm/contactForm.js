import { ContactList } from './ContactList/ContactList';
import { FilterContacts } from './FilterContacts/FilterContacts';
import InputForm from './inputForm/InputForm';

const ContactForm = () => {
  return (
    <>
      <InputForm />
      <FilterContacts />
      <ContactList />
    </>
  );
};

export default ContactForm;

// const mapStateToProps = ({ items, filter }) => {
//   return {
//     items,
//     filter,
//   };
// };
// const mapDispatchToProps = dispatch => ({
//   onSubmit: value => dispatch(addContact(value)),
//   onDelete: id => dispatch(deleteContact(id)),
//   changiFilter: ({ target }) => dispatch(filterContact(target.value)),
// });
// export default connect(mapStateToProps, mapDispatchToProps)(InputForm);
