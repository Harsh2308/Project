import { updateField } from '@/redux/formSlice';
import { useSelector, useDispatch } from 'react-redux';


const useFormValidation = () => {
  const dispatch = useDispatch();
  const {areYouEmployed,companyName,formErrors} = useSelector((state) => state.form);

  const validateForm = () => {
    const errors = {};
    if (areYouEmployed === 'Yes' && !companyName.trim()) {
      errors.companyName = 'Company Name is required.';
    }
    dispatch(updateField({ fieldName: 'formErrors', fieldValue: errors }));

    return Object.keys(errors).length === 0;
  };

  return { validateForm, formErrors: formErrors };
};

export default useFormValidation;