import yup from 'yup';

const validationSchema = yup.object({
  email: yup.string().email('invalid email').required('email is required').max(50, 'max 50 chars allowed'),
})

export function validate(model){
  return validationSchema.validate(model);
}

