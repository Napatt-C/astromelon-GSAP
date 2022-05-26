# astromelon-GSAP 🍉🧑‍🚀

### Let's talk something before we'll start  :feelsgood:
____________
#### Hi everyone, this is my first pubished project on Github and I really want to thanks for your attention in it. 
###### you can visit this website from [here](https://napatt-c.github.io/astromelon-GSAP/)

<br> 

### Introduction 🧦
____________

#### This project was created by HTML, CSS and Javascript with [GSAP](https://greensock.com) plugins

##### You can check this javascript file for explanation on code. [animation.js](https://github.com/Napatt-C/astromelon-GSAP/blob/main/animation.js) for details on code

#### So, let's begin. :dash:

<br>

## 1. Import GSAP CDN 🧦
_____________

#### You can copy from a code below or copy from [GSAP CDN](https://greensock.com/docs/v3/Installation) directly.

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></script>
```
<br>

## 2. HTML, importance explanation. 🍊
______________

<br>

#### 2.1 Trick to reveal a "astrofruit" by a small circle made it uniquely from common appear (as opacity: 0 to 1).
```html
<div class="big-circle">
        <div class="small-circle">
           <div class="circle"></div>
        </div>
        <div class="inc-text">
           <h3>astrofruit</h3>
        </div>
</div>
```
<br>

#### 2.2 Empty div for create adaptable lines (hamburger line or navigation menu).
```html
<div class="hamburger">
       <div class="hamburger-line left-line"></div>
       <div class="hamburger-line middle-line"></div>
       <div class="hamburger-line right-line"></div>
</div>
```

<br>

## 3. Javascript :banana:
_________________

### 3.1 Create GSAP timeline. ⏲️

#### After we DOM all we want to animate, we'll create animation [timeline](https://greensock.com/docs/v3/GSAP/Timeline) to arrange all animation as we want.
```html
const tl = gsap.timeline();
```
##### You can change a name as you want if you don't like my tl as timeline. 😮	:open_mouth:

<br>

### 3.2 Understand thier form. 🦾

#### GSAP has 3 optional for animate object as [to](https://greensock.com/docs/v3/GSAP/gsap.to()), [fromTo](https://greensock.com/docs/v3/GSAP/gsap.fromTo()) and [from](https://greensock.com/docs/v3/GSAP/gsap.from())
##### In this project, I used 'fromTo' and 'to' only 
<br>

```html
tl.fromTo(bigCir, 0.3, {height: '1px'}, {height: '800px'}, '>0.1')
```
* tl : Timeline which we just created.
* .fromTo : Optional animation controller which setting between 'start point' and 'ending point'.
### In bracket : 
* 1st bigCir : Object which we want it to animate.
* 2nd 0.3 (integer) : Duration of animation (how long you want it to play until end). 
### In curly bracket :
* first of curly braket : where/how it was before start.
* second of curly braket : where/how it going to be.
### After curly bracket :
* In the quotation, they are timeline positioning for object what control when they'll start.
* We can use it variously, let's check all of them [here](https://greensock.com/docs/v3/GSAP/Timeline).
##### In this project, I used 'xPercent' mostly which is mean percentage of it width they can move. You can replace it with 'x:' width any unit e.g. 'px' . 
##### If you have Javascript basic GSAP animation is easy to you surely, because they use same property mostly e.g. height, width, opacity, transformOrigin or color. 
##### But, they build most useful property which help us a lot to create interesting animation e.g xPercent, yPercent or yoyo


### 3.3 Create animation on our timeline 

#### As you can see in the bunch of code in a timeline you can design it as variously as you can imagine. 
#### and In the final line of timeline's code as 
```html
.add(loop, '>-0.1');
```
#### I want all watermelon pieces move, rotate, scale and delay with specific random number and.. restart everytime they return to start point
```html
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
```

#### In '.utils' GSAP have a lot of useful property and random is the one of them.

#### Let's get into the random bracket.
```html
.utils.random(-50, 50, 2)
```
* First, Minimum range/degree/scale/delay time.
* Second, Maximum range/degree/scale/delay time.
* Third, Gap of number they random in range. (for distance and rotation degree only)

#### As you can see a code, we use same timeline (tl) to make sure watermelon will swim after pre-animation was ended.
#### Let's get deeper in a timeline in side loop(function).

```html
.repeat: -1
```
##### Watermelon piece will playing till the end of the world (Or until you just close it).

```html
yoyo: true
```
#### Watermelon piece will return in the same way they went like yoyo.

```html
repeatRefresh: true
```
#### Refresh everytime they return to the start point (distance, degree, scale).

________________

### All right, thank you everyone who have patience to read until the end. :pray:
### Like I said on the head, this is my first Github publish with explanation, but I feel free and very pleasure if you have complaination, advise or anything else that you want me to fix it to be better. :open_hands:
