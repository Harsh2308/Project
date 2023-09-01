import useFormValidation from '@/hooks/useFormValidation';
import useIsVisible from '@/hooks/useIsVisible';
import React from 'react';
import { useSelector } from 'react-redux';

const Form = () => {
  const areYouEmployedProps = useIsVisible()
  const { areYouEmployed, companyName } = useSelector((state) => state.form)
  const { validateForm, formErrors } = useFormValidation();

  const handleSubmit = (e) => {
    e.preventDefault()
    const isValid = validateForm();
    if (isValid) {
      console.log({areYouEmployed,companyName})
    }
  }


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Are you employed?</label>
        <select
          name="areYouEmployed"
          value={areYouEmployed}
          onChange={(e) => areYouEmployedProps.handleFieldChange(e)}
        >
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      {areYouEmployed === 'Yes' && (
        <div>
          <label>Company Name</label>
          <input
            type="text"
            name="companyName"
            value={companyName}
            onChange={(e) => areYouEmployedProps.handleFieldChange(e)}
          />
        </div>
      )}
      {formErrors.companyName && <div>{formErrors.companyName}</div>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
