import css from './Filter.module.css';
import PropTypes from 'prop-types';

export const Filter = ({ onChange }) => {
  const filterContacts = event => {
    const { value } = event.target;
    onChange(value);
  };

  return (
    <div className={css.filter}>
      <h3>Find contact by name</h3>
      <input
        className={css.filter__input}
        onChange={filterContacts}
        placeholder="Contact name"
      />
    </div>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
