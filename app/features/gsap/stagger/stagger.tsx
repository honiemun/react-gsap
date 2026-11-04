import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function Stagger() {
    const finalRotation = {rotation: 360, repeat: -1, delay: 0, duration: 3}
    
    useGSAP(() => {
        gsap.to('.button-delay', {
            ...finalRotation, stagger: 0.1
        });
        
        // This same code done with Delay, for comparison:
        /*
        gsap.fromTo('.button-delay-1', {rotation: 0}, {...finalRotation, delay: 0});
        gsap.fromTo('.button-delay-2', {rotation: 0}, {...finalRotation, delay: 0.1});
        gsap.fromTo('.button-delay-3', {rotation: 0}, {...finalRotation, delay: 0.2});
        */
    })



    return (
        <div style={{ position: 'relative', height: '100px'}}>
            <button className="button button-delay button-delay-1" style={{ position: 'absolute', zIndex: 3 }}></button>
            <button className="button button-delay button-delay-2" style={{ position: 'absolute', zIndex: 2, opacity: .9 }}></button>
            <button className="button button-delay button-delay-3" style={{ position: 'absolute', zIndex: 1, opacity: .8 }}></button>
        </div>
    );
}