# Frontend Mentor - Multi-step form solution

This is a solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Multi-step form solution](#frontend-mentor---multi-step-form-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
  - [Author](#author)
 

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Complete each step of the sequence
- Go back to a previous step to update their selections
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Receive form validation messages if:
  - A field has been missed
  - The email address is not formatted correctly
  - A step is submitted, but no selection has been made

### Screenshot
- Desktop preview
![](./src/design/desktop-preview.jpg)

- Mobile previw

![](./src/design/mobile-design-step-1.jpg)


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Hooks React
- [React](https://reactjs.org/) - JS library


**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

- Use various array methods for values, using JS's "Object" to be able to iterate the values ​​of an object literal

```js
 <div onClick={handleInfoSub} className="all-per">
          <p>Total (per {auxSub})</p>
          <p className="price">
            +$
            {Object.values(addOns)
              .map((value) => parseInt(value))
              .reduce((total, value) => total + value, 0) +
              parseInt(selectedPlanUser.planPrice)}
            /{auxMode}
          </p>
```

## Author

- Website - [Add your name here](https://luisjimenez19.github.io/desafios-frontend-mentor/)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/LuisJimenez19)

