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
##### In this project, I used fromTo and to only 
<br>



