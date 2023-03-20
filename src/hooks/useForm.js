import React from "react";

const types = {
  username: {
    regex: /^[A-Za-z][A-Za-z0-9_]{2,29}$/,
    message: "Usuário precisa ter ao menos 3 carácteres",
  },
  password: {
    regex: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
    message: "Erro na validação, verifique o usuário e a senha",
  },
};

export default function useForm(type) {
    const [error, setError] = React.useState(null);
    const [value, setValue] = React.useState("");

    function validate(value) {
      if (type === false) {
        return true;
      }
      if (value.length === 0) {
        setError("Campo obrigatório");
        return false;
      } else if (types[type] && !types[type].regex.test(value)) {
        setError(types[type].message);
        return false;
      } else {
        setError(null);
        return true;
      }
    }

    function onChange({target}) {
        if(error) {validate(target.value)};
        setValue(target.value);
    }
    return {
      value,
      setValue,
      error,
      onChange,
      onBlur: () => validate(value),
      validate: () => validate(value),
    };
}