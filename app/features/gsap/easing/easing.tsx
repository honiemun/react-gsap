import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useState, useRef } from 'react';

export default function Easing() {

    const easeTypes = ['linear', 'bounce', 'circ', 'elastic', 'sine']
    type EaseType = typeof easeTypes[number];
    const [easeType, setEaseType] = useState<EaseType>('linear');

    const easeItems = easeTypes.map(type => <option value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</option>);
    
    const container = useRef<HTMLDivElement | null>(null);
    const { contextSafe } = useGSAP({ scope: container });
    
    // See reactContext.tsx for more info on using contextSafe in event handlers.
    const onClick = contextSafe((e: React.ChangeEvent<HTMLSelectElement>): void => {
        const type = e.target.value as EaseType;
        setEaseType(type);

        gsap.set('.button-easing', { rotation: 0 });
        
        const finalRotation = {
            rotation: 360,
            duration: 2,
            overwrite: true // Cancel the current animation
        }
        
        gsap.to('.button-easing', {...finalRotation, ease: type});
    });

    
    return (
        <div ref={container}>
            <select name="easeType" onChange={onClick}>
                {easeItems}
            </select>

            <button className='button-easing'>{ easeType.toUpperCase() }</button>
        </div>
    )
}