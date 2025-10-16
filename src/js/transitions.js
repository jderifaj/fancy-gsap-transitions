import { gsap } from "gsap";
//timeline for the first morph
const tl1 = gsap.timeline({defaults:{
	ease:"none",
	delay:0.5
}})

.to("#start1", {morphSVG:"#middle",  duration:0.9})
.to("#start1", {morphSVG:"#end",  duration:0.4})


// the timing
const tl2 = gsap.timeline({defaults:{
	ease:"none"
}})

.to("#start2", {morphSVG:"#middle",  duration:0.6})
.to("#start2", {morphSVG:"#end",  duration:0.6, ease:"power1"})
.to("#demo", {opacity:0, duration:1})

const main = gsap.timeline()
.add(tl1)
.add(tl2, 1.3)
