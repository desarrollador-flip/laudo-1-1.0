import type { StylesConfig } from 'react-select';

import type { SelectOption } from './CustomSelect';

export const stylesSelect = (hasError = false): StylesConfig<SelectOption, false> => ({
    control: (provided, state) => ({
        ...provided,
        cursor: 'pointer',
        borderRadius: '5px',
        borderWidth: '1px',
        borderColor: hasError ? 'var(--color-red)' : 'var(--color-border)',
        boxShadow: state.isFocused ? '0 0 0 3px rgba(189, 0, 38, .12)' : 'none',
        fontSize: '16px',
        padding: 0,
        minHeight: '54px',
        width: '100%',
        backgroundColor: 'var(--color-surface)',
        color: 'var(--color-black)',
    }),

    valueContainer: (provided) => ({
        ...provided,
        padding: '0 10px',
        color: 'var(--color-black)',
    }),

    placeholder: (provided) => ({
        ...provided,
        color: 'var(--color-silver)',
        marginLeft: '2px',
        marginRight: 0,
        marginBottom: 'var(--placeholder-marginB)',
        fontSize: '16px',
    }),

    singleValue: (provided) => ({
        ...provided,
        color: 'var(--color-black)',
        fontSize: '16px',
        padding: 0,
        marginBottom: 'var(--placeholder-marginB)',
    }),

    indicatorsContainer: (provided) => ({
        ...provided,
        alignItems: 'center',
        display: 'flex',
        flexShrink: 0,
        boxSizing: 'border-box',
    }),

    indicatorSeparator: (provided) => ({
        ...provided,
        backgroundColor: 'transparent',
        width: '1px',
        marginTop: 0,
        marginBottom: 0,
    }),

    dropdownIndicator: (provided) => ({
        ...provided,
        padding: '0 8px',
        color: 'var(--color-black)',

        ':hover': {
            color: 'var(--color-red)',
        },
    }),

    menu: (provided) => ({
        ...provided,
        zIndex: '2',
        top: 0,
        backgroundColor: 'var(--color-white)',
        border: '1px solid var(--color-border)',
        boxShadow: 'none',
        borderRadius: 'var(--menu-border)',
        marginBottom: 0,
        marginTop: 0,
    }),

    menuList: (provided) => ({
        ...provided,
        maxHeight: '200px',
        paddingBottom: 0,
        paddingTop: '1px',
        borderRadius: 'var(--menu-border)',
    }),

    option: (provided, state) => ({
        ...provided,
        padding: 'var(--option-padding)',
        fontSize: '16px',
        cursor: 'pointer',
        backgroundColor: state.isFocused ? 'rgba(0, 0, 0, 0.06)' : 'var(--color-white)',
        color: 'var(--color-black)',

        ':active': {
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
        },
    }),
});
