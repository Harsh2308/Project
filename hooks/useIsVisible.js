import { updateField } from '@/redux/formSlice';
import { useSelector, useDispatch } from 'react-redux';


const useIsVisible = () => {
  const dispatch = useDispatch();

  const handleFieldChange = (e) => {
    const { value, name } = e.target
    dispatch(updateField({ fieldName: name, fieldValue: value }));
  };

  return {
    handleFieldChange,
  };
};

export default useIsVisible;