import { ContactForm } from '../../form/ContactForm';
import styles from '../../../styles/modules/home/home2.module.css';

export function Home2() {
    return <section className={styles.section}><div className={styles.inner}><div className={styles.copy}><h2>Contacta a un<br />Experto</h2><p>Estamos aquí para asesorarle en la recuperación de saldos de subcuenta de vivienda.<br />Nuestro equipo institucional le brindará la claridad y seguridad que su patrimonio merece.</p></div><ContactForm /></div></section>;
}
