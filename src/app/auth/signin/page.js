'use client'
import React, { useEffect } from 'react';
import Link from 'next/link';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux'
import { ColorRing } from 'react-loader-spinner'
import { useRouter } from 'next/navigation';

// ******* Local Imports *******
import { ArrowBack } from '@/utils/imagesUrl';
import { userLoginFormInfo } from '@/utils/constants';
import CustomeInput from '@/app/components/customeInput';
import { validationSchemaSignin } from '@/utils/validations';
import { signIn } from '@/redux/actions/auth.actions';
import { dispatch } from '@/redux/store';


const SignIn = () => {

  const router = useRouter()

  const {user: { current_step }, errorStatus, errorMessage, isLoading } = useSelector(state => state.auth)

  const { values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue, setErrors, setValues } = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: validationSchemaSignin,
    onSubmit: values => {
      handleSubmitFun(values)
    },
  });

  const handleSubmitFun = (userInfo) => {
    dispatch(signIn(userInfo))
  }

  useEffect(() => {
    if (errorStatus === 403) {
      setErrors({'email': errorMessage})
    }
  },[errorStatus])

  useEffect(() => {
    if (current_step) {
      switch(current_step) {
        case 1: 
          router.replace('/auth/step2')
          break
        case 2:
          router.replace('/auth/step3')
          break
        case 3:
          router.replace('/')
          break
        default:
          router.replace('/auth')
      }
    }
  },[current_step])

  return (
    <div className=''>
      <div className='flex justify-between mx-2 lg:mx-16 mt-[70px] text-[#8692A6]'>
          <Link href="/auth">
            <div className='flex justify-center items-start cursor-pointer'>
              <img src={ArrowBack} alt='arrowback' />
                <div className='mt-[-2px] ml-1'>Back</div>
            </div>
          </Link>
      </div>
      <div className='flex flex-col items-center md:items-start'> 
        <div className='flex flex-col items-center md:items-start md:ml-[20px] lg:ml-[65px] xl:ml-[127px] mt-[70px] lg:mt-[78px] w-[300px] md:w-[386px] lg:md:w-[411px]'>
          <div className='font-semibold text-3xl md:text-2xl lg:text-3xl leading-9 text-center md:text-right'>
            Login to your Account!
          </div>

          <div className='mt-3 text-center md:text-left  font-light leading-7 text-[18px] text-[#8692A6]'>
            Please login here
          </div>

          <hr className="mt-4 mb-2 border-[0.5px] w-[300px] md:w-[411px] bg-[#F5F5F5]" />

          <form onSubmit={handleSubmit}>
            {
              userLoginFormInfo.map((obj, i)=> (
                <div key={i} className='mt-2 w-[300px] md:w-[386px] lg:w-[411px]'>
                  <CustomeInput
                    userRegDataObj={obj}
                    values={values}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    touched={touched}
                    errors={errors}
                  />
                </div>
              ))
            }

            <div className='w-[300px] md:w-[386px] lg:w-[411px] mt-12'>
              <button
                className="flex justify-center items-center cursor-pointer w-[300px] md:w-[386px] lg:w-[411px] h-[64px] text-white bg-[#1565D8] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="submit" 
                disabled={isLoading}
              >
                <ColorRing
                  visible={isLoading}
                  height="50"
                  width="50"
                  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                />
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
