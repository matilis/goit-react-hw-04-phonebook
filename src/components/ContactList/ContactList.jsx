import css from './ContactList.module.css';
import PropTypes from 'prop-types';

export const ContactList = props => {
  const { contacts, onClick } = props;

  const handleDelete = id => onClick(id.target.value);

  return (
    <ul className={css.contacts}>
      {contacts.map(contact => {
        return (
          <li key={contact.id} className={css.contacts__item}>
            <p className={css.contacts__name}>{contact.name}</p>
            <p className={css.contacts__number}>{contact.number}</p>
            <button
              type="button"
              onClick={handleDelete}
              className={css.contacts__button}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};
