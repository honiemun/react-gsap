import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useState } from 'react';

gsap.registerPlugin(useGSAP);

export default function ArbitraryVariables() {
    // myNum is both a state (updates between renders) and part of an obj instead useGSAP
    const [myNum, setMyNum] = useState(0);

    useGSAP(() => {
        let obj = { myNum: 0 };
        
        gsap.to(obj, {
            duration: 60,
            myNum: 100,
            // When updating, store the myNum object that's being animated into the myNum state
            onUpdate: () => setMyNum(obj.myNum)
        });
    })

    return (
        <div>
            <button className="button button-static">
                { myNum.toFixed(2) }%
            </button>
        </div>
    );
}