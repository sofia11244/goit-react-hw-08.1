import PropTypes from 'prop-types';
import styles from './componentContacts.module.css';

export default function ContactListItem ({ id, name, number, onDelete}) {
    return (
        
        <div className={styles.listItemContainer}>
            <li key={id} className={styles.listItem}>
                <div className={styles.listItemAlt}>
                    <p>{name}</p>
                    <p>{number}</p>
                </div>
            <button className={styles.listItemButton} type="button" onClick={() => onDelete(id)}>Delete</button>
        </li>
        </div>
    );
}; 

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired
};

export {ContactListItem};