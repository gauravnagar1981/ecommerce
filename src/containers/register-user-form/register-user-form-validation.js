import yup from 'yup';

const validationSchema = yup.object({
  email: yup.string().email('invalid email').required('email is required').max(50, 'max 50 chars allowed'),
  password: yup.string().required('password is required').max(20, 'max 20 chars allowed').min(6, 'min 6 chars allowed'),
  forename: yup.string().required('forename is required').max(20, 'max 20 chars allowed').min(6, 'min 6 chars allowed'),
  surname: yup.string().required('surname is required').max(20, 'max 20 chars allowed').min(6, 'min 6 chars allowed'),
  organizationName: yup.string().required('organization name is required').max(20, 'max 20 chars allowed').min(6, 'min 6 chars allowed')
})

export function validate(model){
  return validationSchema.validate(model);
}

