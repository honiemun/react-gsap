// Features
import Section from "~/features/project/section/section";

import ReactContext from "~/features/gsap/reactContext/reactContext";
import Tweens from "~/features/gsap/tweens/tweens";
import ArbitraryVariables from "~/features/gsap/arbitraryVariables/arbitraryVariables";
import Repeat from "~/features/gsap/repeat/repeat";
import Delay from "~/features/gsap/delay/delay";
import Easing from "~/features/gsap/easing/easing";
import Stagger from "~/features/gsap/stagger/stagger";
import AdvancedStaggers from "~/features/gsap/advancedStaggers/advancedStaggers";
import Timeline from "~/features/gsap/timeline/Timeline";
import TimelinePosition from "~/features/gsap/timelinePosition/TimelinePosition";
import Callbacks from "~/features/gsap/callbacks/callbacks";

// All the descriptions for all the GSAP demos go here!

export default function Sections() {
  return (
    <>
        <Section name='Tweens' description='Try out some Tweens by selecting a type of Tween from the dropdown!'
        technicalDescription=
{`The most commmon method for GSAP animations is a Tween.
gsap.to('.box', {x: 200}) has a method (to), target(s) ('.box') and vars ({ x: 200 }).

Four types of Tweens exist:
- TO: Animates from the current position to this value.
- FROM: Animates from this value to the current position.
- FROMTO: Takes two values and animates from the first to the second.
- SET: Immediately snaps to this value with no animation.

The targets are just a CSS selector: something like '.section > .box' would also work.
The variables can be arbitrary CSS properties (like x, rotation or duration) or special properties to GSAP (like duration, onComplete or repeat).
Some existing properties can also be used as short-hand. In CSS, to move an object in px, you'd usually write translateX(10px) - in GSAP, this is shortened to x: 10.`}>
          <Tweens />
        </Section>

        <Section name='ReactContext' description='This uses the React contextSafe API to safely apply a GSAP call on click.'
        technicalDescription=
{`Within React, using the useGSAP hook will automatically revert the timeline on clean-up.
The hook is a wrapper over useEffect; and it needs to be scoped to only run on first render.

Animations reverted on clean-up are considered "context safe". If you create animations called
*after* the useGSAP() hook executes, like something that is triggered by clicking on a button,
that is context unsafe.

You can use the contextSafe() function on your event handler prop to fix this.
You'll also need to pass the scope to your useGSAP function, which you'll receive from a Container.

You could also use the second argument 'contextSafe' inside useGSAP. For more info on that,
read the docs: https://gsap.com/resources/React`}>
          <ReactContext />
        </Section>

        <Section name='Arbitrary Values' description='You can tween any value within GSAP, not just CSS classes.'
        technicalDescription=
{`You can animate any property, even those that don't have a DOM element attached. In this case, an arbitrary property was created (myNum) that animates for 60 seconds, then rendered on an element.

In React, you need to update this property within a State for it to change between renders. You can use the onUpdate method within the vars to achieve this: onUpdate: () => setMyNum(obj.myNum)`}>
          <ArbitraryVariables />
        </Section>

        <Section name='Repeat' description='Animations can repeat and loop with the "repeat" and "yoyo" special properties.'
        technicalDescription=
{`"repeat" is a numeric value defining the amount of times an animation will repeat itself. If the value is -1, like in this example, the animation will go on forever.

"yoyo" is a bool that will make it so this tween runs in the opposite direction when true.`}>
          <Repeat />
        </Section>

        <Section name='Delay' description='Animations can start earlier or later using the "delay" special property. Using "repeatDelay" does the same, for after a "repeat" event.'>
          <Delay />
        </Section>
        
        <Section name='Easing' description='You can use different easing types on your animations with the "ease" special property. You can specify the ease types by including "[ease].out".'>
          <Easing />
        </Section>

        { /* TO-DO: Ease types */ }

        <Section name='Staggers' description='Make different CSS elements with the same classes play the same animation at different speeds by using the "stagger" special property.'>
          <Stagger />
        </Section>

        <Section name='Advanced Staggers' description='Staggers can be a single number or an object of options allowing you to achieve complicated effects easier, like animating items in a grid.'
        technicalDescription=
{`In this case, our stagger object looks like this: { grid: [5, 5], from: 'center', amount: 1}. The grid array is self explanatory, defining the columns and rows.

From corresponds to the position where this grid animation will emanate - you can otherwise use 'start', 'edges', 'random', 'end' or specify a specific object with a number (eg. from:4 is the 5th element, zero-indexed).

Amount is the time in seconds that's split among all the staggers. You can also specify each to change the time every single staggered element takes to animate.

Other useful properties are axis (to lock the stagger to 'x' or 'y'), ease and repeat.

Not explained here are Stagger Functions - you can choose to specify your own logic by setting the stagger as a function, with arguments (index, target, list) and a return (int).`}>
          <AdvancedStaggers />
        </Section>

        { /* TO-DO: Stagger functions */ }

        <Section name='Timeline' description='Finely control when different elements play with the gsap.timeline() function and tl.to().'>
          <Timeline />
        </Section>

        <Section name='Timeline Position' description='Add positions to the timeline so that your animations play in a specified order.'
        technicalDescription=
{`You can use position parameters, appended to the end of a tl.to() call, to change when the animation will play. For example, tl.to('.box', {x: 100}, 2) will move the box 2 seconds into the timeline. The parameters used for each of the buttons are written into them.

The < parameter inserts an animation at the start of the previous animation. This is why it plays automatically after the first animation's 2 second delay.

+=2 plays two seconds after the end of the timeline. In most contexts, the "end of the timeline" refers to the previous animation. Likewise, -=2 plays the animation 2 seconds before the end of the timeline. You can also use percentages, for example, +=50% will play the animation beyond the end of the timeline, by 50% of the inserting animation's total duration.`}>
          <TimelinePosition />
        </Section>
        
        { /* TO-DO: Control */ }

        <Section name='Callbacks' description='Run JS code as a result of your GSAP animation.'>
          <Callbacks />
        </Section>
    </>
  );
}
