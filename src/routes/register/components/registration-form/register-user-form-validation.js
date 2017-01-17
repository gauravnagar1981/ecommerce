import yup from 'yup';

const validationSchema = yup.object({
  email: yup.string().email('invalid email').required('email is required').max(50, 'max 50 chars allowed'),
  password: yup.string().min(6, 'min 6 chars allowed').required('password is required').max(20, 'max 20 chars allowed'),
  forename: yup.string().min(6, 'min 6 chars allowed').required('forename is required').max(20, 'max 20 chars allowed'),
  surname: yup.string().min(6, 'min 6 chars allowed').required('surname is required').max(20, 'max 20 chars allowed'),
  organizationName: yup.string().min(6, 'min 6 chars allowed').required('organization name is required').max(20, 'max 20 chars allowed')
});

export function validate(model){
  return validationSchema.validate(model, {abortEarly: false, strict: true, stripUnknown: true});
};

export function getErrorMessage(error){

  const validation = error.inner.reduce((a, b) => {
    a[b.path] = {
      message: b.message
    };
    return a;
  }, {});

  return validation;
};
