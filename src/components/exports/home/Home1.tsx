import heroImage from '../../../assets/images/home/home-1-1.webp';
import checkIcon from '../../../assets/images/icons/check-no-back.svg';
import shieldIcon from '../../../assets/images/icons/escudo.svg';
import styles from '../../../styles/modules/home/home1.module.css';

export function Home1() {
    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                <div className={styles.copy}>
                    <h1>Recupera el saldo de tu subcuenta de vivienda hoy</h1>

                    <p>
                        Transformamos tus ahorros acumulados en liquidez inmediata a través de un proceso legal transparente y seguro. Sin riesgos,
                        sin complicaciones.
                    </p>

                    <div className={styles.badges}>
                        <span>
                            <img src={checkIcon} alt="" />

                            <span>100% EFICIENTE</span>
                        </span>

                        <span>
                            <img src={shieldIcon} alt="" />

                            <span>RECUPERACIÓN SIN COMPLICACIONES</span>
                        </span>
                    </div>
                </div>

                <img className={styles.hero} src={heroImage} alt="Casa y gráfica que representa el crecimiento del patrimonio" />
            </div>
        </section>
    );
}
