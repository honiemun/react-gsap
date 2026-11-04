import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP);

export default function Callbacks() {
    const container = useRef<HTMLDivElement | null>(null);
    const { contextSafe } = useGSAP({ scope: container });

    const onClick = contextSafe(() => {
        var tl = gsap.timeline({onComplete: tlComplete});

        tl.to('.button-clickable', {
            background: 'linear-gradient(4300deg, red 0%, rgb(180, 5, 78) 100%)',
            duration: .2
        }).to('.button-clickable', {
            scale: 1.2,
            duration: .3,
            repeat: 2,
            yoyo: true
        });
        
        function tlComplete() {
            alert('You have angered this button!');
            tl.revert(); // Control method
        }

        /*
        You could otherwise use an inline:
        gsap.to(".class", {
            duration: 1, 
            x: 100, 
            // arrow functions are handy for concise callbacks
            onComplete: () => console.log("the tween is complete")
        });
        */
    });

    return (
        <div ref={container}>
            <button onClick={onClick} className="button button-clickable">
                Don't click
            </button>
        </div>
    );
}