# Advice Generator App

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Tailwind CSS
- Mobile-first workflow
- JavaScript

### What I learned

I picked up this challenge to practice Async/Await, Promises and Fetch APIs.
It came in very handy and informati9ve as I initially encountered troubles, then went on youtube to check NetNinja, Brad Travesy and Wed Dev Simplified videos on Async/Await and Promises. I also read through MDN and some other articles. I feel FLY!

Some code snippets I loved and Learnt:

```TailwindCSS: Defining my custom values on tailwindCSS
 colors: {
      "light-cyan": "hsl(193, 38%, 86%)",
      "neon-green": "hsl(150, 100%, 66%)",
      "grayish-blue": "hsl(217, 19%, 38%)",
      "dark-grayish-blue": "hsl(217, 19%, 24%)",
      "dark-blue": "hsl(218, 23%, 16%)",
    },
    fontSize: {
      quoteFont: "28px",
    },
    fontFamily: {
      fonts: ["Manrope", "sans-serif"],
    },
```

```js
const getAdvice = async () => {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();
  // console.log(data);
  // console.log(data.slip.id);
  // console.log(data.slip.advice);

  // console.log(response);
  return data;
};

----------AND-------------

dice.addEventListener("click", () => {
  getAdvice()
    .then((data) => {
      adviceBox.textContent = data.slip.advice;
      adviceIndex.textContent = `Advice #${data.slip.id}`;
    })
    .catch((err) => err);
});

```

If you want more help with writing markdown, I'ld recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

### Continued development

Hopefully, this became an app template for anyone to integrate into their web-apps/ websites.
I am going ahed to use this Knowledge to fetch country apis and create a quiz out of it! WOOOOOOOOOOOOOOOOOOOOOW EXCITED

### Useful resources

- [TAILWIND CSS](https://tailwindcss.com/docs/installation) - This is the amazing tailwind CSS docs which helped me fully understand Tailwind CSS. I'd recommend it to anyone still learning this concept to start with rather than a tutorial.

## Author

- Twitter - [@johnScriptjs](https://www.twitter.com/johnScriptjs)
