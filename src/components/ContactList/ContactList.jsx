import style from './Contact.module.scss';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={style.list}>
      {contacts.map(({ name, id, number }) => (
        <li className={style.item} key={id} id={id}>
          {name}: {number}
          <button
            className={style.btn}
            type="button"
            onClick={() => {
              onDeleteContact(id);
            }}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
