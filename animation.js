// Let's DOM something first

//  Out astronaut
const astro = document.querySelector('#astro');

//  All text
const summer = document.querySelector('.summer-text');
const watermalon = document.querySelector('.watermelon-text');
const navtext = document.querySelector('.logo');

// Hamburger lines (navigator lines)
const hamlineLeft = document.querySelector('.left-line');
const hamlineMid = document.querySelector('.middle-line');
const hamlineRight = document.querySelector('.right-line');

// watermelon pieces
const pieces = document.querySelectorAll('.piece');

// circle
const wrapper = document.querySelector('.wrapper')
const redBg = document.querySelector('.red-bg');
const incText = document.querySelector('.inc-text');
const bigCir = document.querySelector('.big-circle');
const smallCir = document.querySelector('.small-circle .circle');

// Create timeline to arrange all animation as we want.
const tl = gsap.timeline();

// Let's create animation timeline by timeline

// For somebody who new for GSAP, I recommended you two read know the form of it first 

// <timeline name>.<animation option>(<obj. that we want to animate it>, {<How they move>}, 'positioning animation in a timeline');
//  You can see a precise detail on repository on my Github


tl.fromTo(bigCir, 1, {height: '1px', xPercent: -200}, {height: '1px', xPercent: 0}) 
    .to(redBg, 0.1, {css: {zIndex: 1}}, '>0.1')
    .fromTo(bigCir, 0.3, {height: '1px'}, {height: '800px'}, '>0.1')
    .fromTo(smallCir, 0.1, {height: '0px'}, {height: '500px'}, '>=0.1')
    .fromTo(incText, 0.1, {opacity: 0}, {opacity: 1}, '>0.1')
    .fromTo(smallCir, 1, {yPercent: 0}, {yPercent: -200}, '>=0.1')
    .fromTo(bigCir, 0.5, {scale: 1}, {scale: 0.5, rotation: -90}, '>=0.1')
    .from(summer, 0.2, {opacity: 0, yPercent: -100}, 'bigCir-=0.7')
    .from(watermalon, 0.2, {opacity: 0, yPercent: 100}, 'bigCir-=0.7')
    .from(astro, 0.5, {yPercent: 200}, '>0.2')
    .fromTo(bigCir, 0.3, {width: '800px'}, {width: '1px', opacity: 0}, '>-0.1')
    .to(incText, 0.1, {opacity: 0}, '>0.1')
    .fromTo(navtext, 0.5, {xPercent: 200, opacity: 0, rotation: 90}, {xPercent: 0, opacity: 1, rotation: 0}, '>0.1')
    .fromTo(hamlineMid, 0.5, 
        {height: '0px'}, 
        {height: '190px', transformOrigin: 'top', clearProps: 'transform, height'}, '>0.5')
    .fromTo(hamlineLeft, 0.5, 
        {height: '0px'}, 
        {height: '25px', transformOrigin: 'bottom', clearProps: 'transform'}, 'hamlineMid<0.1')
    .fromTo(hamlineRight, 0.5, 
        {height: '0px'}, 
        {height: '25px', transformOrigin: 'bottom', clearProps: 'transform'}, 'hamlineMid<0.2')
        // We cen use {transformOrigin as common Javascript to control how they start} and {clearProps} to default the original value of line from CSS. 
    .add(loop, '>-0.1');


// post-start animation: watermalon piece animation.
// GSAP utils.random function is useful function which help us to random all number in our specific range before we .add to our timeline.
// (<minimum number>, <maximum number>, <range between a random number>)

function loop() {
    pieces.forEach(piece => {
        // create random range.
        const ranY = gsap.utils.random(-50, 50, 2);
        const ranX = gsap.utils.random(-50, 50, 2);
        // create random rotation degree.
        const ranRotate = gsap.utils.random(0, 360, 5, true);
        const ranScale = gsap.utils.random(1, 1.2);
        // create random delay.
        const delay = gsap.utils.random(0.2, 2)
        // So much random right, but it's so uniquely and look interesting (maybe, for me only).

        tl.fromTo(piece, 0.1, {scale: 0}, {scale: 1, opacity: 1}, 'start')
            .to(piece, 0.5, {
                rotation: ranRotate,
                scale: ranScale,
                repeat: -1,
                yoyo: true,
                delay: delay,
                duration: 3, 
                repeatRefresh: true,
                xPercent: ranX,
                yPercent: ranY,
                onComplete: loop
            }, 'start')
            // 'start is mean they'll start simultaneously.
    });
};


