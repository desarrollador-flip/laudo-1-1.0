import playIcon from '../../../assets/images/icons/play.svg';
import firstMp4 from '../../../assets/videos/video-home-1.mp4';
import firstWebm from '../../../assets/videos/video-home-1.webm';
import firstPoster from '../../../assets/videos/video-home-1.webp';
import secondMp4 from '../../../assets/videos/video-home-2.mp4';
import secondWebm from '../../../assets/videos/video-home-2.webm';
import secondPoster from '../../../assets/videos/video-home-2.webp';
import { useVideoPlayback } from '../../../hooks/useVideoPlayback';
import styles from '../../../styles/modules/home/home2Videos.module.css';

interface Testimonial {
    id: string;
    title: string;
    quote: string;
    duration: string;
    poster: string;
    mp4: string;
    webm: string;
}

const testimonials: Testimonial[] = [
    {
        id: 'confianza',
        title: 'Su experiencia estuvo basada en la confianza',
        quote: 'Me sentí a gusto con las licenciadas que me acompañaron en todo el proceso. La atención fue amable, cordial y muy satisfactoria.',
        duration: '0:58 min',
        poster: firstPoster,
        mp4: firstMp4,
        webm: firstWebm,
    },
    {
        id: 'recuperacion',
        title: 'Recuperar sus recursos le quitó un peso de encima',
        quote: 'Desde que puse un pie aquí me dieron confianza. Me acompañaron durante todo el proceso y hoy me siento tranquilo y muy contento. Esto es real.',
        duration: '3:16 min',
        poster: secondPoster,
        mp4: secondMp4,
        webm: secondWebm,
    },
];

export function Home2Videos() {
    const { activeId, videoRef, playVideo } = useVideoPlayback();

    return (
        <section className={styles.section} aria-labelledby="home-testimonials-title">
            <div className={styles.inner}>
                <header className={styles.header}>
                    <p className={styles.eyebrow}>
                        <img src={playIcon} alt="" width="15" height="15" />
                        EVIDENCIA REAL
                    </p>
                    <h2 id="home-testimonials-title">Testimonios y Casos de Éxito en Video</h2>
                    <p className={styles.description}>
                        Conoce de viva voz las historias de trabajadores que recuperaron sus recursos con la asesoría jurídica de Laudo.
                    </p>
                </header>

                <div className={styles.cards}>
                    {testimonials.map(({ id, title, quote, duration, poster, mp4, webm }) => (
                        <article className={styles.card} key={id}>
                            <div className={styles.media}>
                                {activeId === id ? (
                                    <video ref={videoRef} controls playsInline preload="none" poster={poster} aria-label={title}>
                                        <source src={webm} type="video/webm" />
                                        <source src={mp4} type="video/mp4" />
                                    </video>
                                ) : (
                                    <>
                                        <img className={styles.poster} src={poster} alt="" width="1280" height="720" loading="lazy" />
                                        <button
                                            type="button"
                                            className={styles.play}
                                            aria-label={`Reproducir testimonio: ${title}`}
                                            onClick={() => playVideo(id)}
                                        >
                                            <img src={playIcon} alt="" width="22" height="22" />
                                        </button>
                                        <span className={styles.duration}>{duration}</span>
                                    </>
                                )}
                            </div>
                            <div className={styles.copy}>
                                <h3>{title}</h3>
                                <blockquote>
                                    <p>“{quote}”</p>
                                </blockquote>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
