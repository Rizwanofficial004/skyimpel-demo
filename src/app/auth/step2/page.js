'use client'
import React, { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useFormik } from 'formik';
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { ColorRing } from 'react-loader-spinner'
import { dispatch } from '@/redux/store';

// ******* Local Imports *******
import '../../../styles/step2.css'
import { ArrowBack, LockIcon } from '@/utils/imagesUrl';
import { userRegistrationStep2 } from '@/utils/constants';
import { signUp } from '@/redux/actions/auth.actions';
import { validationSchemaStep2 } from '@/utils/validations';
import CustomeInput from '@/app/components/customeInput';

const Step2 = () => {

  const { user, isLoading } = useSelector(state => state.auth)
  const router = useRouter()

  const { values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue, setErrors, setValues } = useFormik({
    initialValues: {
      phoneNo: '',
      address: '',
      country: ''
    },
    // validationSchema: validationSchemaStep2,
    onSubmit: values => {
      handleSubmitFun(values)
    },
  });

  const handleSubmitFun = (userInfo) => {
    console.log('userInfo2', userInfo);
    const { phoneNo, address, country } = userInfo
    if (phoneNo || address || country) {
      userInfo.step = 2
      userInfo.id = user.id
      dispatch(signUp(userInfo))
    } else {
      router.push('step3')
    }
  }

  useEffect(() => {
    if (user?.current_step === 2) {
      router.push('step3')
    }
  },[user?.current_step])
  
  return (
    <div className=''>
      <div className='flex justify-between mx-2 lg:mx-16 mt-[70px] text-[#8692A6]'>
          <div onClick={() => router.push('signup')} className='flex justify-center items-start cursor-pointer'>
            <img src={ArrowBack} alt='arrowback' />
              <div className='mt-[-2px] ml-1'>Back</div>
          </div>
        <div>
          <div className='text-[#BDBDBD] font-medium text-sm'>STEP 02/03</div>
          <div className='text-base font-medium text-left'>Residency Info.</div>
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
            <div className=" w-[300px] md:w-[386px] lg:w-[411px]">
              <label htmlFor="phoneNo" className="block my-3 text-[16px] font-normal text-[#696F79]">Phone number</label>
              <PhoneInput
                id="phoneNo"
                className="phone-input-container"
                country={'pk'}
                value={values.phoneNo}
                onChange={phone => setFieldValue('phoneNo', phone)}
                inputStyle={{ width: '100%', height: '100%' }}
              />
              {touched.phoneNo && errors.phoneNo && <div className="text-red-500">{errors.phoneNo}</div>}
            </div>

            {
              userRegistrationStep2.map((obj, i)=> (
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

            <div className=" w-[300px] md:w-[386px] lg:w-[411px] mb-[60px]">
              <label htmlFor="country" className="block my-2 text-[16px] font-normal text-[#696F79]">Country of residence</label>
              <select
                id="country"
                className="block w-full px-7 my-3 pr-8 h-[64px] text-baserounded-lg text-[#8692A6] font-normal focus:font-medium border border-[#8692A6] focus:border-[#1565D8] focus:outline-none focus:shadow-2xl"
                value={values.country}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option disabled value="">Please select</option>
                <option value="Pakistan">Pakistan</option>
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="France">France</option>
                <option value="Germany">Germany</option>
              </select>
              {touched.country && errors.country && <div className="text-red-500">{errors.country}</div>}
            </div>

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

export default Step2;
