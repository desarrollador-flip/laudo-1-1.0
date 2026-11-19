import globe from '../../../assets/images/icons/planeta-tierra.svg';
import styles from '../../../styles/modules/contacto/contacto2.module.css';

const locations = [
    {
        name: 'Ciudad de México',
        building: 'Edificio Valle de México / Centro Empresarial Naucalpan',
        address: 'Av. Primero de Mayo 15-Piso 12, Oficina 1220, Naucalpan, 53500 Naucalpan de Juárez, Méx.',
        mapQuery: 'Av. Primero de Mayo 15, 53500 Naucalpan de Juárez, Méx.',
    },
    {
        name: 'Nuevo León',
        building: 'Edificio chapa piso 12',
        address: 'Emilio Carranza 732 oriente, Centro, 64000 Monterrey, N.L.',
        mapQuery: 'Emilio Carranza 732, Centro, 64000 Monterrey, N.L.',
    },
];

export function Contacto2() {
    return (
        <section className={styles.section}>
            <h2>
                Atención en toda la
                <br />
                República Mexicana
            </h2>
            <p>
                Brindamos asesoría legal y financiera a nivel nacional, asegurando que cada trabajador <br />
                recupere lo que le corresponde sin importar su ubicación.
            </p>

            <h3 className={styles.subtitle}>Oficinas físicas</h3>
            <div className={styles.locations}>
                {locations.map((location) => (
                    <article key={location.name} className={styles.location}>
                        <h4>{location.name}</h4>
                        <span className={styles.building}>{location.building}</span>
                        <span>{location.address}</span>
                        <iframe
                            className={styles.map}
                            src={`https://www.google.com/maps?q=${encodeURIComponent(location.mapQuery)}&output=embed`}
                            title={`Mapa de la oficina de Laudo en ${location.name}`}
                            loading="lazy"
                            allowFullScreen
                        />
                        <a
                            className={styles.locationAction}
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.building + ', ' + location.address)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Ver ubicación <span aria-hidden="true">↗</span>
                        </a>
                    </article>
                ))}
            </div>

            <img src={globe} alt="" />
        </section>
    );
}
