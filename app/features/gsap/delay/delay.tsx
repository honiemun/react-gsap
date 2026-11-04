import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function Delay() {
    const finalRotation = {rotation: 360, repeat: -1, delay: 1, duration: 1}

    useGSAP(() => {
        gsap.fromTo('.button-delay-1', {rotation: 0}, {...finalRotation, repeatDelay: 1});
        gsap.fromTo('.button-delay-2', {rotation: 0}, {...finalRotation});
    });

    return (
        <div>
            <button className="button button-delay-1"></button>
            <button className="button button-delay-2"></button>
        </div>
    );
}