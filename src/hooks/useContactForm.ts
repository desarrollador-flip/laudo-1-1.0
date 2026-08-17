import { useState } from 'react';

import type { ContactFormErrors, ContactFormValues, FormField } from '../types/form';

export const MINIMUM_CONTACT_AGE = 48;

const initialValues: ContactFormValues = {
    name: '',
    age: '',
    phone: '',
    state: '',
    email: '',
};

const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

function validate(values: ContactFormValues): ContactFormErrors {
    const errors: ContactFormErrors = {};
    const normalizedPhone = values.phone.replace(/\D/g, '');
    const parsedAge = Number(values.age);

    if (!values.name.trim()) errors.name = 'Ingresa tu nombre completo.';
    if (!values.age) errors.age = 'Ingresa tu edad.';
    else if (!Number.isInteger(parsedAge) || parsedAge < MINIMUM_CONTACT_AGE) errors.age = `Debes tener al menos ${MINIMUM_CONTACT_AGE} años.`;
    if (!normalizedPhone) errors.phone = 'Ingresa tu número de teléfono.';
    else if (normalizedPhone.length !== 12 || !normalizedPhone.startsWith('52')) errors.phone = 'Ingresa un número de México válido de 10 dígitos.';
    if (!values.state) errors.state = 'Selecciona tu estado.';
    if (!values.email.trim()) errors.email = 'Ingresa tu correo electrónico.';
    else if (!emailPattern.test(values.email.trim())) errors.email = 'Ingresa un correo electrónico válido.';

    return errors;
}

export function useContactForm() {
    const [values, setValues] = useState<ContactFormValues>(initialValues);
    const [errors, setErrors] = useState<ContactFormErrors>({});
    const [loading] = useState(false);
    const [hasSubmitError, setHasSubmitError] = useState(false);

    const updateField = (name: FormField, value: string): void => {
        setValues((current) => ({ ...current, [name]: value }));
        setErrors((current) => {
            if (!current[name]) return current;
            const nextErrors = { ...current };
            delete nextErrors[name];
            return nextErrors;
        });
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        updateField(event.target.name as FormField, event.target.value);
    };

    const resetForm = (): void => {
        setValues(initialValues);
        setErrors({});
        setHasSubmitError(false);
    };

    const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        const validationErrors = validate(values);

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setHasSubmitError(true);
            return;
        }

        setHasSubmitError(false);
        // La futura integración con el backend debe comenzar en este punto.
    };

    return { values, errors, loading, hasSubmitError, updateField, handleInputChange, handleSubmit, resetForm };
}
