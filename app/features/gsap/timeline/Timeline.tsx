import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function Timeline() {
    useGSAP(() => {
        // We use defaults here to automatically assign preset values to all members of this timeline
        var tl = gsap.timeline({ defaults: {duration: 2, x: 200}});

        // These will run sequentially (one after another)!
        tl.to('.button-timeline-1', {})
        .to('.button-timeline-2', {})
        .to('.button-timeline-3', {});
    });

    return (
        <div>
            <button className="button button-timeline-1">
                Weee!
            </button><br />
            <button className="button button-timeline-2">
                Weee!
            </button><br />
            <button className="button button-timeline-3">
                Weee!
            </button>
        </div>
    );
}