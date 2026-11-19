import procesoMp4 from '../../../assets/videos/laudo-proceso.mp4';
import procesoWebm from '../../../assets/videos/laudo-proceso.webm';
import procesoPoster from '../../../assets/videos/laudo-proceso.webp';
import styles from '../../../styles/modules/funciona/funciona2Video.module.css';
import { VideoPlayer } from '../../common/VideoPlayer';

export function Funciona2Video() {
    return (
        <section className={styles.section} aria-label="Video del proceso legal">
            <VideoPlayer
                className={styles.video}
                title="Cómo funciona la recuperación de tu subcuenta de vivienda"
                poster={procesoPoster}
                webm={procesoWebm}
                mp4={procesoMp4}
            />
        </section>
    );
}
