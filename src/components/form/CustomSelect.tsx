import Select, { type SingleValue } from 'react-select';

import styles from '../../styles/modules/form/contactForm.module.css';

import type { FormField } from '../../types/form';

import { stylesSelect } from './stylesSelect';

export interface SelectOption {
    value: string;
    label: string;
}

interface CustomSelectProps {
    label: string;
    name: FormField;
    options: SelectOption[];
    value: string;
    onChange: (name: FormField, value: string) => void;
    error?: string;
    placeholder?: string;
}

export const CustomSelect = ({ label, name, options, value, onChange, error, placeholder = 'Selecciona una opción' }: CustomSelectProps) => {
    const selectedOption = options.find((option) => option.value === value) ?? null;

    const handleSelectChange = (selected: SingleValue<SelectOption>): void => {
        onChange(name, selected?.value ?? '');
    };

    return (
        <div className={`${styles.field} select-scope`}>
            <label htmlFor={name}>{label}</label>

            <Select<SelectOption, false>
                options={options}
                value={selectedOption}
                onChange={handleSelectChange}
                placeholder={placeholder}
                aria-invalid={Boolean(error)}
                aria-describedby={error ? `${name}-error` : undefined}
                isSearchable={false}
                inputId={name}
                name={name}
                styles={stylesSelect(Boolean(error))}
            />

            {error && (
                <span id={`${name}-error`} className={styles.fieldError} role="alert">
                    {error}
                </span>
            )}
        </div>
    );
};
