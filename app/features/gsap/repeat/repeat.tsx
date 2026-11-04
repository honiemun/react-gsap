import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function Repeat() {
    useGSAP(() => {
        gsap.to('.button-repeat', {
            xPercent: 100,
            repeat: -1, // Repeats forever. >1 is the amount of repeats
            yoyo: true
        });
    });

    return (
        <div>
            <button className="button button-repeat">
                Weee!
            </button>
        </div>
    );
}