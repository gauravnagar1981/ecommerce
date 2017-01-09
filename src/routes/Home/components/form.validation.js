import yup from 'yup';

const validationSchema = yup.object({
  email: yup.string().email('invalid email').required('email is required').max(50, 'max only 50 chars allowed'),
})

export function validate(model){
  debugger;
  const isValidated = validationSchema.validate(model);
  return isValidated;
}
