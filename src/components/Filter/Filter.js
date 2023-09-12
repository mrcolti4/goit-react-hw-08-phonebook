import { useDispatch, useSelector } from 'react-redux';

import { filterByName } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

import style from './Filter.module.css';
import ContactInput from 'components/ContactInput/ContactInput';

export const Filter = () => {
  const dispatch = useDispatch();
  const selector = useSelector(selectFilter);

  const onFilter = e => {
    dispatch(filterByName(e.target.value));
  };

  return (
    <label className={style.filter__label}>
      Find contacts by name
      <ContactInput
        onChange={onFilter}
        type="text"
        name="filter"
        value={selector}
      />
    </label>
  );
};
