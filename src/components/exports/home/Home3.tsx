import gavel from '../../../assets/images/icons/martillo-juez.svg';
import money from '../../../assets/images/icons/billetes.svg';
import support from '../../../assets/images/icons/servicio-cliente-diadema.svg';
import styles from '../../../styles/modules/home/home3.module.css';
const benefits = [
    {
        icon: gavel,
        title: 'Proceso Legal',
        text: 'Todo el trámite se realiza bajo el marco normativo vigente, garantizando el cumplimiento de las leyes de seguridad social.',
    },
    {
        icon: money,
        title: 'Sin pagos anticipados',
        text: 'Nosotros invertimos en tu caso. Solo cobramos nuestros honorarios una vez que el dinero esté en tu cuenta bancaria.',
    },
    {
        icon: support,
        title: 'Asesoría Experta',
        text: 'Contamos con abogados especializados en derecho laboral con más de 15 años de experiencia recuperando fondos.',
    },
];
export function Home3() {
    return (
        <section className={styles.section}>
            <header>
                <h2>¿Por qué elegir Laudo?</h2>
                <p>
                    Nuestra metodología se basa en la excelencia jurídica y la protección del patrimonio del trabajador con un enfoque institucional
                    sólido.
                </p>
            </header>
            <div className={styles.cards}>
                {benefits.map((item) => (
                    <article key={item.title}>
                        <span>
                            <img src={item.icon} alt="" />
                        </span>
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
