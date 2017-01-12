import yup from 'yup';

const validationSchema = yup.object({
  forename: yup.string().required('forename is required').max(20, 'max 20 chars allowed').min(6, 'min 6 chars allowed'),
})

export default function validate(model){
  return validationSchema.validate(model);
}

