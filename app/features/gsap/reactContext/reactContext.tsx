import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP);

export default function ReactContext() {
    const container = useRef<HTMLDivElement | null>(null);
    const { contextSafe } = useGSAP({ scope: container });

    const onClick = contextSafe(() => {
        gsap.to('.button-clickable', {rotation: 180});
    });

    return (
        <div ref={container}>
            <button onClick={onClick} className="button button-clickable">
                Click to spin
            </button>
        </div>
    );
}