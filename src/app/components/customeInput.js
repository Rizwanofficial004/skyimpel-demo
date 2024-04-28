
const CustomeInput = ({
  userRegDataObj: {type, name, placeholder, inputTitle, required, iconRight},
  values, onChange, onBlur, touched, errors

}) => {
  return (
    <div className="relative w-full">
      <div className="text-[16px] font-normal text-[#696F79]">{inputTitle}</div>
      <input 
        className={`block w-full h-[64px] rounded-md pl-7 pr-20 text-[#8692A6] font-normal mt-3 ${touched[name] && errors[name] ? 'mb-1' : 'mb-6'}
        border border-[#8692A6] focus:border-[#1565D8] focus:outline-none focus:shadow-2xl
        focus:font-medium focus:text-[16px] focus:placeholder:font-medium
        placeholder:font-normal placeholder:text-[16px] sm:text-sm sm:leading-6 placeholder:text-[#8692A6]`}
        type={type}
        name={name}
        placeholder={placeholder}
        value={values[name]}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
      />
      {
        iconRight && (
          <div className="absolute right-4 top-[58px] end-0 flex items-center justify-center">
            <img src={iconRight} alt="iconRight" />
          </div>
        )
      }
      {
        touched[name] && errors[name] ? (
          <div className={`text-red-800 font-light text-[12px] `}>{errors[name]}</div>
        ) : null
      }

    </div>

  )
}

export default CustomeInput
