import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function AdvancedStaggers() {
    
    useGSAP(() => {
        gsap.to('.button-stagger', {
            duration: 1,
            scale: .1,
            ease: 'power1.inOut',

            stagger: {
                grid: [5, 5],
                from: 'center',
                amount: 1,
                repeat: -1,
                yoyo: true
            }
        });
    })

    return (
        <>
            <div className='stagger-container'>
                { /* (I'm sure there's a better way to do this!) */}
                <button className="button button-stagger"></button>
                <button className="button button-stagger"></button>
                <button className="button button-stagger"></button>
                <button className="button button-stagger"></button>
                <button className="button button-stagger"></button>
                <button className="button button-stagger"></button>
                <button className="button button-stagger"></button>
                <button className="button button-stagger"></button>
                <button className="button button-stagger"></button>
                <button className="button button-stagger"></button>
                <button className="button button-stagger"></button>
                <button className="button button-stagger"></button>
                <button className="button button-stagger"></button>
                <button className="button button-stagger"></button>
                <button className="button button-stagger"></button>
                <button className="button button-stagger"></button>
                <button className="button button-stagger"></button>
                <button className="button button-stagger"></button>
                <button className="button button-stagger"></button>
                <button className="button button-stagger"></button>
                <button className="button button-stagger"></button>
                <button className="button button-stagger"></button>
                <button className="button button-stagger"></button>
                <button className="button button-stagger"></button>
                <button className="button button-stagger"></button>
            </div>

            <style>
            {
                `.stagger-container {
                    display: grid;
                    grid-template-columns: repeat(5, 100px);
                    grid-template-rows: repeat(5, 100px);
                    gap: 0;
                }
                    
                .button-stagger {
                    width: 50px;
                    height: 50px;
                }`
            }
            </style>
        </>
    );
}

