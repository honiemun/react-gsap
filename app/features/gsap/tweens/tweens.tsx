import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useState, useRef } from 'react';

export default function Tweens() {

    type TweenType = 'to' | 'from' | 'fromto' | 'set';
    const [tweenType, setTweenType] = useState<TweenType>('to');

    
    const container = useRef<HTMLDivElement | null>(null);
    const { contextSafe } = useGSAP({ scope: container });
    
    // See reactContext.tsx for more info on using contextSafe in event handlers.
    const onClick = contextSafe((e: React.ChangeEvent<HTMLSelectElement>): void => {
        const type = e.target.value as TweenType;
        setTweenType(type);

        // Reset rotation (useful for this example)
        gsap.set('.button-clickable', {rotation: 0});
        
        switch (type) {
            case ('to'): {
                gsap.to('.button-clickable', {rotation: 180});
                break;
            }
            case ('from'): {
                gsap.from('.button-clickable', {rotation: 180});
                break;
            }
            case ('fromto'): {
                gsap.fromTo('.button-clickable', {rotation: 0}, {rotation: 360});
                break;
            }
            case ('set'): {
                gsap.set('.button-clickable', {rotation: 180});
                break;
            }
        }
    });

    
    return (
        <div ref={container}>
            <select name="tweenType" onChange={onClick}>
                <option value="to">To</option>
                <option value="from">From</option>
                <option value="fromto">FromTo</option>
                <option value="set">Set</option>
            </select>

            <button className='button-clickable'>{ tweenType.toUpperCase() }</button>
        </div>
    )
}