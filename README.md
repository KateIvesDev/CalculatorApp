# Mobile First Calculator App

This is my solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). 

## Table of contents

- [Mobile First Calculator App](#mobile-first-calculator-app)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The Challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

### The Challenge

Users should be able to:

[x] See the size of the elements adjust based on their device's screen size

[x] Perform mathmatical operations like addition, subtraction, multiplication, and division

[x] Adjust the color theme based on their preference

[x] **Bonus**: Have their initial theme preference checked using `prefers-color-scheme` and have any additional changes saved in the browser

### Screenshot


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- Sass/Scss
- Flexbox
- CSS Grid
- Mobile-first workflow
- Object Oriented Programming

### What I learned

For this project, I made a deeper dive into using Sass/Scss, including how to structure it in a project and how to use mixins and functions. This made it so much cleaner to setup the different themes for this project. I also took a mobile-first approach to coding the CSS; this made it fairly easy to scale up to a larger screen size.

To implement the toggle switch, I used radio buttons and a simple function that checked to see which option was selected to change the theme. The radio buttons are set to 0 opacity, and a toggle button overlay moves to a certain position based on which option is selected. The current theme is saved to Local Storage, but this is only used in the even that the user browser doesn't indicate which color scheme (light/dark) it prefers. 


### Continued development

Improve the mathematic functionality. While I added an event listener for using keyboard keys to enter numbers and operators, I need to add one that would include the numberpad keys on a larger keyboard. 

### Useful resources


## Author

- Website - Kate Ives (https://www.kateives.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@KateIvesDev](https://www.twitter.com/kateivesdev)

