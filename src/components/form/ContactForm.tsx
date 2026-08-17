import styles from '../../styles/modules/form/contactForm.module.css';

export function ContactForm() {
    return (
        <form className={styles.form} onSubmit={(event) => event.preventDefault()}>
            <div className={styles.twoColumns}>
                <label>
                    Nombre completo
                    <input type="text" name="name" autoComplete="name" />
                </label>

                <label>
                    Edad
                    <input type="number" name="age" min="18" inputMode="numeric" />
                </label>
            </div>

            <label>
                Teléfono
                <input type="tel" name="phone" autoComplete="tel" placeholder="+52 ..." />
            </label>

            <label>
                Estado
                <input type="text" name="state" autoComplete="address-level1" />
            </label>

            <label>
                Correo electrónico
                <input type="email" name="email" autoComplete="email" />
            </label>

            <button type="submit">
                <span aria-hidden="true">▷</span> Enviar
            </button>
        </form>
    );
}
