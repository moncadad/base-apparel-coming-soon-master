# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Vanilla JS
- Mobile-first workflow

### What I learned

At first the responsive hero image gave me trouble. Then I decided to take a simle approach of visibillity. Second thing the JS when it came to the email validator and it's interaction. This project allowed me to practice my JS as in where to start, steps to take.

Nothing out of this world, but proud of this code below:

```js
checkEmailBtn.addEventListener("click", function () {
  console.log("firing");
  if (emailInput.value.match(emailFormat)) {
    console.log(emailInput.value);
    emailAlert.classList.remove("show");
    inputBox.style.border = "2px solid green";
    // inputBox.style.borderColor = "";
    errorMark.style.visibility = "hidden";
  } else {
    emailAlert.classList.add("show");
    inputBox.style.border = "2px solid var(--primary-soft-red)";
    errorMark.style.visibility = "visible";
  }
});
```

### Continued development

Learning is a never ending process in this field, but that's what makes it great. Overall I feel confident when it comes to basics of the big three HTML, CSS, JS (kind of for JS). That being said there's a few things I continue to better for HTML, it's keeping it semantic, accessibility in general the planning of the layout, also including class names that follow BEM principles. As for CSS I do need to start utilizing more SCSS it would help when it comes to structuring the styling file. Another thing I would like to get better at is animation, I haven't practiced it much. JS, well that's a whole work in progress my level in it is much lower than the rest. I think it's just a matter of continuing developing, and diversifying the projects.

### Useful resources

- [Stack overflow](https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript) - Regex pattern used for the email vaidator.
- [Jacascript DOM Playlist](https://www.youtube.com/watch?v=VW8kNAous88&list=PLVvjrrRCBy2JS8__NYlhPeaoNz2p1aPEN) - This is an amazing playlist on Youtube that explains Javascript DOM and tutorials.

## Author

- Frontend Mentor - [@moncadad](https://www.frontendmentor.io/profile/moncadad)
