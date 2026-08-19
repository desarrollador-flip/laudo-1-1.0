import PhoneInputImport from 'react-phone-input-2';

import { SpinnerIcon } from '../../assets/icons/SpinnerIcon';
import { MINIMUM_CONTACT_AGE, useContactForm } from '../../hooks/useContactForm';
import styles from '../../styles/modules/form/contactForm.module.css';
import type { FormField } from '../../types/form';
import { CustomSelect, type SelectOption } from './CustomSelect';
import { estados } from './estadosMexicos';

const stateOptions: SelectOption[] = estados.map((state) => ({ value: state, label: state }));

export function ContactForm() {
    const { values, errors, loading, hasSubmitError, submitError, submitSuccess, updateField, handleInputChange, handleSubmit } = useContactForm();

    const PhoneInput =
        (
            PhoneInputImport as unknown as {
                default: typeof PhoneInputImport;
            }
        ).default ?? PhoneInputImport;

    const errorAttributes = (field: FormField) => ({
        'aria-invalid': Boolean(errors[field]),
        'aria-describedby': errors[field] ? `${field}-error` : undefined,
    });

    return (
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
            {hasSubmitError && (
                <p className={styles.formError} role="alert" aria-live="polite">
                    Revisa los campos señalados y completa el formulario correctamente.
                </p>
            )}

            {submitError && (
                <p className={styles.formError} role="alert" aria-live="polite">
                    {submitError}
                </p>
            )}

            <div className={styles.twoColumns}>
                <div className={styles.field}>
                    <label htmlFor="name">Nombre completo</label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={handleInputChange}
                        autoComplete="name"
                        required
                        {...errorAttributes('name')}
                    />
                    {errors.name && (
                        <span id="name-error" className={styles.fieldError} role="alert">
                            {errors.name}
                        </span>
                    )}
                </div>

                <div className={styles.field}>
                    <label htmlFor="age">Edad</label>
                    <input
                        id="age"
                        type="number"
                        name="age"
                        value={values.age}
                        onChange={handleInputChange}
                        min={MINIMUM_CONTACT_AGE}
                        inputMode="numeric"
                        required
                        {...errorAttributes('age')}
                    />
                    {errors.age && (
                        <span id="age-error" className={styles.fieldError} role="alert">
                            {errors.age}
                        </span>
                    )}
                </div>
            </div>

            <div className={styles.field}>
                <label htmlFor="phone">Teléfono</label>

                <PhoneInput
                    country="mx"
                    preferredCountries={['mx']}
                    value={values.phone}
                    onChange={(phone) => updateField('phone', phone)}
                    placeholder="+52 ..."
                    containerClass={`${styles.phoneInput} ${errors.phone ? styles.invalidPhone : ''}`}
                    inputProps={{ id: 'phone', name: 'phone', autoComplete: 'tel', required: true, ...errorAttributes('phone') }}
                />
                {errors.phone && (
                    <span id="phone-error" className={styles.fieldError} role="alert">
                        {errors.phone}
                    </span>
                )}
            </div>

            <CustomSelect
                label="Estado"
                name="state"
                options={stateOptions}
                value={values.state}
                onChange={updateField}
                error={errors.state}
                placeholder="Selecciona tu estado"
            />

            <div className={styles.field}>
                <label htmlFor="email">Correo electrónico</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleInputChange}
                    autoComplete="email"
                    required
                    {...errorAttributes('email')}
                />
                {errors.email && (
                    <span id="email-error" className={styles.fieldError} role="alert">
                        {errors.email}
                    </span>
                )}
            </div>

            <button type="submit" disabled={loading} aria-busy={loading}>
                {loading ? (
                    <SpinnerIcon size={28} color="currentColor" />
                ) : (
                    <>
                        <span aria-hidden="true">▷</span> Enviar
                    </>
                )}
            </button>

            {submitSuccess && (
                <p className={styles.formSuccess} role="status" aria-live="polite">
                    Formulario enviado correctamente
                </p>
            )}
        </form>
    );
}
