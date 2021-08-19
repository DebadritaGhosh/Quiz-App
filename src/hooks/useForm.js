import { useState } from 'react';

const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);

  const resetForm = () => {
    setForm(initialState);
  };

  const changeForm = (name, value) => {
    if (!validate(name, 'changeForm')) {
      return;
    }
    setForm({
      ...form,
      [name]: value,
    });
  };

  const changeFormValues = (changedValues) => {
    if (typeof changedValues !== 'object') {
      console.error('changeFormValues : object 타입만 사용 가능합니다.');
      return;
    }
    if (!validate(changedValues, 'changeFormValues')) {
      return;
    }
    setForm({
      ...form,
      ...changedValues,
    });
  };

  const validate = (keys, func) => {
    if (typeof keys === 'string') {
      if (!Object.keys(form).includes(keys)) {
        console.error(
          `${func} : "${keys}"은(는) useForm의 초기값에 포함되어있지 않습니다.`
        );
        return false;
      } else {
        return true;
      }
    } else if (typeof keys === 'object') {
      const formKeys = Object.keys(form);
      if (
        Object.keys(keys).some((key) => {
          const isValid = formKeys.includes(key);

          if (!isValid) {
            console.error(
              `${func} : "${key}"은(는) useForm의 초기값에 포함되어있지 않습니다.`
            );
          }

          return !isValid;
        })
      ) {
        return false;
      } else {
        return true;
      }
    } else {
      console.error(`${func} : 키값 ${keys}은(는) 유효하지 않습니다.`);
      return false;
    }
  };

  return { resetForm, changeForm, changeFormValues, form };
};

export default useForm;
