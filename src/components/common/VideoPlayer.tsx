import playIcon from '../../assets/images/icons/play.svg';
import { useVideoPlayback } from '../../hooks/useVideoPlayback';
import styles from '../../styles/modules/videoPlayer.module.css';

interface VideoPlayerProps {
    title: string;
    poster: string;
    webm: string;
    mp4: string;
    className: string;
}

export function VideoPlayer({ title, poster, webm, mp4, className }: VideoPlayerProps) {
    const { activeId, videoRef, playVideo } = useVideoPlayback();

    return (
        <div className={`${styles.frame} ${className}`}>
            {activeId ? (
                <video className={styles.media} ref={videoRef} controls playsInline preload="none" poster={poster} aria-label={title}>
                    <source src={webm} type="video/webm" />
                    <source src={mp4} type="video/mp4" />
                </video>
            ) : (
                <>
                    <img className={styles.media} src={poster} alt="" loading="lazy" />
                    <button type="button" className={styles.play} aria-label={`Reproducir video: ${title}`} onClick={() => playVideo(title)}>
                        <img src={playIcon} alt="" width="22" height="22" />
                    </button>
                </>
            )}
        </div>
    );
}
