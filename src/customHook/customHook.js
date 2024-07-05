import { useState } from "react";

export const useTogle = (initialValue = false) => {
    const [value, setValue] = useState(initialValue);

    const togle = () => {
        setValue(!value);
    };

    return [value, togle];
};

export const useForm = (initialValue) => {
    const [values, setValues] = useState(initialValue);

    const handleChange = (event) => {
        // console.log(event);
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const resetForm = () => {
        setValues(initialValue);
    };

    return [values, handleChange, resetForm];
};
