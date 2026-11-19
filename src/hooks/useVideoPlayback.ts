import { useRef, useState } from 'react';
import { flushSync } from 'react-dom';

export function useVideoPlayback() {
    const [activeId, setActiveId] = useState<string | null>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    function playVideo(id: string) {
        videoRef.current?.pause();

        // Mount the player while the click or keyboard activation is still in progress.
        flushSync(() => setActiveId(id));
        const video = videoRef.current;

        if (!video) return;

        video.focus({ preventScroll: true });
        void video.play().catch(() => {
            // Native controls remain available if the browser declines playback.
        });
    }

    return { activeId, videoRef, playVideo };
}
