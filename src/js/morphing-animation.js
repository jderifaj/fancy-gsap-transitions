import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

// Register the plugin
gsap.registerPlugin(MorphSVGPlugin);

// Function to initialize the morphing animation
export function initMorphingAnimation() {
  // Timeline for the first morph
  const tl1 = gsap.timeline({defaults:{
    ease:"none"
  }})
  .to("#start1", {morphSVG:"#middle", duration:0.9})
  .to("#start1", {morphSVG:"#end", duration:0.4});

  // Timeline for the second morph
  const tl2 = gsap.timeline({defaults:{
    ease:"none"
  }})
  .to("#start2", {morphSVG:"#middle", duration:0.6})
  .to("#start2", {morphSVG:"#end", duration:0.6, ease:"power1"})
  .to("#demo", {opacity:0, duration:1});

  // Main timeline
  const main = gsap.timeline()
  .add(tl1)
  .add(tl2, 1.3);

  return main;
}
addEventListener('load', () => {
	initMorphingAnimation();
});
