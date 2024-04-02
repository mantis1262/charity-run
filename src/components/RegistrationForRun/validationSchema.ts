import * as Yup from 'yup';

export const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Minimum 2 characters')
    .max(25, 'Maximum 30 characters')
    .required('Required field'),
  surname: Yup.string()
    .min(2, 'Minimum 2 characters')
    .max(25, 'Maximum 30 characters')
    .required('Required field'),
  phone: Yup.string()
    .matches(
      /^\+?(\d{1,3})[ ]?(\d{1,3})[ ]?(\d{1,3})[ ]?(\d{1,3})[ ]?(\d{1,3})$/,
      'Invalid phone number'
    )
    .required('Required field'),
  email: Yup.string().email('Invalid email format').required('Required field'),
});