import './section.css';
import { type PropsWithChildren } from 'react';

type SectionProps = {
    name?: string;
    description?: string;
    technicalDescription?: string;
}

// Did you know? You can add props in a Typescript-ey way by doing PropsWithChildren instead of setting them manually!
// Oh React, aren't you a little box of wonders.
export default function Section(props: PropsWithChildren<SectionProps>) {
    return (
        <section className='section'>
            {(props.name || props.description) && 
                <div className='section-info'>
                    { props.name && <h1>{ props.name }</h1> }
                    { props.description && <p>{ props.description }</p>}
                    { props.technicalDescription &&
                        <details>
                            <summary></summary>
                            <p>{ props.technicalDescription }</p>
                        </details>
                    }
                </div>
            }
            <div className='children'>
                { props.children }
            </div>
        </section>
    );
}