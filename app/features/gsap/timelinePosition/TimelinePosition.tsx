import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function TimelinePosition() {
    useGSAP(() => {
        var tl = gsap.timeline({ defaults: {duration: 1, x: 200}});

        tl.from('.button-timelinepos-1', {}, 2)     // 1 second after the start of the timeline
        .from('.button-timelinepos-2', {}, "<")     // Immediately, when the previous element starts
        .from('.button-timelinepos-3', {}, '+=2')  // 2 seconds after the end of the timeline (prev. inserted animation)
    });

    return (
        <div>
            <button className="button button-timelinepos-1">
                2
            </button><br />
            <button className="button button-timelinepos-2">
                &lt;
            </button><br />
            <button className="button button-timelinepos-3">
                +=2
            </button>
        </div>
    );
}