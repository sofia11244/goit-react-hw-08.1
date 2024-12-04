import styles from './component.module.css';
import{ useDispatch, useSelector } from 'react-redux';
import {changeFilter } from '../redux/filtersSlice';


const SearchBox = () => {

  const dispatch = useDispatch();
  const inputValue = useSelector(state => state.filters.nameFilter);

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };


  return (
    <div className={styles.searchBox}>
        <p>Find contacs by name</p>
      <input 
      className={styles.valueText} 
      type="text" 
      value={inputValue} 
      onChange={handleChange} />
      
    </div>
  );
};



export default SearchBox;
