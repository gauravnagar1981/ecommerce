import yup from 'yup';

const validationSchema = yup.object({
  organizationName: yup.string().required('organization name is required').max(20, 'max 20 chars allowed').min(6, 'min 6 chars allowed'),
})

export default function validate(model){
  return validationSchema.validate(model);
}

