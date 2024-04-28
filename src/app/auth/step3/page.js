'use client'
import React, { useEffect } from 'react';
import { dispatch } from '@/redux/store';
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { useFormik } from 'formik';
import { ColorRing } from 'react-loader-spinner'

// ******* Local Imports *******
import { ArrowBack, LockIcon } from '@/utils/imagesUrl';
import { userRegistrationStep3 } from '@/utils/constants';
import { signUp } from '@/redux/actions/auth.actions';
import { validationSchemaStep3 } from '@/utils/validations';
import CustomeInput from '@/app/components/customeInput';

const Step3 = () => {

  const { user, isLoading } = useSelector(state => state.auth)
  const router = useRouter()

  const { values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue, setErrors, setValues } = useFormik({
    initialValues: {
      bankVerificationNo: '',
    },
    // validationSchema: validationSchemaStep3,
    onSubmit: values => {
      handleSubmitFun(values)
    },
  });

  const handleSubmitFun = (userInfo) => {
    console.log('userInfo3', userInfo);
    const { bankVerificationNo } = userInfo
    if (bankVerificationNo) {
      userInfo.step = 3
      userInfo.id = user.id
      dispatch(signUp(userInfo))
    } else {
      router.push('/')
    }
  }

  useEffect(() => {
    if (user?.current_step === 3) {
      router.push('/')
    }
  },[user?.current_step])

  return (
    <div className=''>
      <div className='flex justify-between mx-2 lg:mx-16 mt-[70px] text-[#8692A6]'>
          <div onClick={() => router.push('step2')} className='flex justify-center items-start cursor-pointer'>
            <img src={ArrowBack} alt='arrowback' />
              <div className='mt-[-2px] ml-1'>Back</div>
          </div>
        <div>
          <div className='text-[#BDBDBD] font-medium text-sm'>STEP 03/03</div>
          <div className='text-base font-medium text-left'>Bank Verification</div>
        </div>
      </div>
      <div className='flex flex-col items-center md:items-start'> 
        <div className='flex flex-col items-center md:items-start md:ml-[20px] lg:ml-[65px] xl:ml-[127px] mt-[70px] lg:mt-[78px] w-[300px] md:w-[386px] lg:md:w-[411px]'>
          <div className='font-semibold text-3xl md:text-2xl lg:text-3xl leading-9 text-center md:text-right'>
            Register Individual Account!
          </div>

          <div className='mt-3 text-center md:text-left  font-light leading-7 text-[18px] text-[#8692A6]'>
            For the purpose of industry regulation, your details are required.
          </div>

          <hr className="mt-4 mb-2 border-[0.5px] w-[300px] md:w-[411px] bg-[#F5F5F5]" />
          <form onSubmit={handleSubmit}>
          {
            userRegistrationStep3.map((obj, i)=> (
              <div key={i} className='mt-6 w-[300px] md:w-[386px] lg:w-[411px]'>
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

          <div className='w-[300px] md:w-[386px] lg:w-[411px] mt-8'>
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
                Save & Continue
              </button>
          </div>
          </form>

          <div className='flex justify-center items-center self-center my-8 text-[#8692A6]'>
            <img src={LockIcon} alt="lockIcon" />
            <div className='text-[12px] font-light'>Your Info is safely secured</div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Step3;
