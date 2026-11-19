import PhoneInputImport from 'react-phone-input-2';

import { SpinnerIcon } from '../../assets/icons/SpinnerIcon';
import lockIcon from '../../assets/images/icons/candado-verde.svg';
import { MINIMUM_CONTACT_AGE, useContactForm } from '../../hooks/useContactForm';
import styles from '../../styles/modules/form/contactForm.module.css';
import type { FormField } from '../../types/form';
import { CustomSelect, type SelectOption } from './CustomSelect';
import { estados } from './estadosMexicos';

const stateOptions: SelectOption[] = estados.map((state) => ({ value: state, label: state }));

interface ContactFormProps {
    variant?: 'hero';
}

export function ContactForm({ variant }: ContactFormProps) {
    const isHero = variant === 'hero';
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
        <form className={isHero ? `${styles.form} ${styles.heroForm}` : styles.form} onSubmit={handleSubmit} noValidate>
            {isHero && (
                <header className={styles.heroHeader}>
                    <p className={styles.heroEyebrow}>EVALUACIÓN INMEDIATA</p>
                    <h2>Contacta a un Experto</h2>
                    <p className={styles.heroDescription}>Asesoría legal especializada para evaluar tu saldo sin costo.</p>
                </header>
            )}
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
                        placeholder={isHero ? 'Ej. Juan Manuel Romero' : undefined}
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
                        placeholder={isHero ? 'Ej. 54' : undefined}
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
                <label htmlFor="phone">{isHero ? 'Teléfono celular' : 'Teléfono'}</label>

                <PhoneInput
                    country="mx"
                    preferredCountries={['mx']}
                    value={values.phone}
                    onChange={(phone) => updateField('phone', phone)}
                    placeholder={isHero ? '55 1234 5678' : '+52 ...'}
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
                label={isHero ? 'Estado de residencia' : 'Estado'}
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
                    placeholder={isHero ? 'tu.nombre@correo.com' : undefined}
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
                        <span className={styles.submitIcon} aria-hidden="true">
                            ▷
                        </span>{' '}
                        Enviar
                    </>
                )}
            </button>

            {isHero && (
                <p className={styles.confidentiality}>
                    <img src={lockIcon} alt="" width="11" height="14" />
                    <span>Tus datos están estrictamente protegidos bajo nuestro aviso de confidencialidad legal.</span>
                </p>
            )}

            {submitSuccess && (
                <p className={styles.formSuccess} role="status" aria-live="polite">
                    Formulario enviado correctamente
                </p>
            )}
        </form>
    );
}
