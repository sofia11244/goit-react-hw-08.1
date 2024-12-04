import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import styles from './componentContacts.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/contact/contactsOps.js';

// Validation schema
const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .typeError("Must be a text")
    .min(3, "Too Short!")
    .max(500, "Too Long!")
    .required("Required"),

  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Invalid phone number")
    .required("Required"),
});

// Sayı formatını xx-xx-xx biçiminde ayarlama fonksiyonu
const handleNumberChange = (event, setFieldValue) => {
  const { value } = event.target;
  const formattedValue = value
    .replace(/\D/g, "") // Sadece rakamları al
    .replace(/(\d{3})(\d{2})?(\d{2})?/, (_, g1, g2, g3) => {
      return [g1, g2, g3].filter(Boolean).join("-");
    });
  setFieldValue("number", formattedValue); // Formik değerini güncelle
};

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const dispatch = useDispatch(); // Redux dispatch kullanımı
  const contacts = useSelector(state => state.contacts.items); // Redux store'dan veriyi almak

  const handleSubmit = (values, actions) => {
    // Aynı isimdeki kişiyi eklemeyi engelleme
    const existingContact = contacts.find(contact => contact.name === values.name && contact.number === values.number);
    if (existingContact) {
      // Kişi zaten mevcut, hata mesajı gösterilebilir
      alert("This contact already exists!");
      return;
    }

    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(newContact));  // Redux'a ekleme
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      {({ setFieldValue }) => (
        <Form className={styles.form}>
          <div className={styles.inputText}>
            <label htmlFor="name">Name</label>
            <Field className={styles.name} type="text" name="name" id="name" />
            <ErrorMessage className={styles.inputError} name="name" component="span" />
          </div>

          <div className={styles.inputNumber}>
            <label htmlFor="number">Number</label>
            <Field
              className={styles.name}
              type="text"
              name="number"
              id="number"
              onChange={(event) => handleNumberChange(event, setFieldValue)}
            />
            <ErrorMessage className={styles.inputError} name="number" component="span" />
          </div>

          <button className={styles.submit} type="submit">Add Contact</button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
