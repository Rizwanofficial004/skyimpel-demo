import * as Yup from 'yup';

export const validationSchemaSignup = Yup.object({
  fullName: Yup.string().required('Full name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

export const validationSchemaSignin = Yup.object({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

export const validationSchemaStep2 = Yup.object().shape({
  phoneNo: Yup.string().required('Phone number is required'),
  address: Yup.string().required('Address is required'),
  country: Yup.string().required('Country name is required'),
});

export const validationSchemaStep3 = Yup.object({
  bankVerificationNo: Yup.string().required('Bank verification number is required'),
});