import legalIcon from '../../../assets/images/icons/juridico.svg';
import eyeIcon from '../../../assets/images/icons/ojo.svg';
import shieldIcon from '../../../assets/images/icons/escudo-check.svg';
import styles from '../../../styles/modules/home/home2.module.css';

const indicators = [
    { value: '15+ Años', description: 'Experiencia acumulada en tribunales laborales y mediación patrimonial federal.' },
    { value: '99.9%', description: 'Tasa de resolución positiva en expedientes admitidos a trámite.' },
];

const commitments = [
    {
        icon: legalIcon,
        title: 'Compromiso Jurídico',
        description: 'Abogados colegiados especializados exclusivamente en normativas de seguridad social (INFONAVIT). Todas nuestras acciones se sustentan en jurisprudencia firme.',
    },
    {
        icon: eyeIcon,
        title: 'Transparencia Absoluta',
        description: 'Acompañamiento personalizado y seguimiento en tiempo real de tu expediente. Cuentas con un número único de caso y contacto directo con tu asesor legal asignado.',
    },
    {
        icon: shieldIcon,
        title: 'Seguridad Patrimonial',
        description: 'Cobro condicionado estrictamente al éxito. La autoridad liquida tus recursos directo a tu cuenta bancaria personal CLABE; jamás intervenimos en transferencias de fondos.',
    },
];

export function Home2() {
    return (
        <section className={styles.section} aria-labelledby="home-about-title">
            <div className={styles.inner}>
                <div className={styles.overview}>
                    <header className={styles.copy}>
                        <p className={styles.eyebrow}>INSTITUCIÓN LEGAL</p>
                        <h2 id="home-about-title">¿Quiénes Somos?</h2>
                        <p className={styles.subtitle}>Defensa legal y rescate técnico del patrimonio de los trabajadores mexicanos.</p>
                        <p className={styles.description}>
                            En <strong>Laudo</strong>, somos una firma especializada en derecho de la seguridad social y fondos de ahorro para el retiro con
                            más de 15 años de trayectoria.{' '}
                            <br />
                            Nuestro objetivo es garantizar la devolución legal de recursos a derechohabientes que no ejercieron crédito o cuentan con saldos a
                            favor acumulados.
                        </p>
                    </header>

                    <ul className={styles.indicators}>
                        {indicators.map(({ value, description }) => (
                            <li className={styles.indicator} key={value}>
                                <strong>{value}</strong>
                                <p>{description}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <ul className={styles.commitments}>
                    {commitments.map(({ icon, title, description }) => (
                        <li className={styles.commitment} key={title}>
                            <span className={styles.icon}>
                                <img src={icon} alt="" />
                            </span>
                            <h3>{title}</h3>
                            <p>{description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
