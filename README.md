## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
    - This is your pseudocode
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
7) Think about how to validate each of your steps


1. write TDD for didUserWin function

2. write function for didUserWin and getRandomThrow
- import functions in to app.js 
- import getRandomThrow to get-random-throw.js

3. create HTML document with DOM elements ill need
- 3 divs for rock, paper, scissors
- 3 radio buttons for rock, paper, scissors <input type="radio" name="" value=""/> wrap these in a <label></label>
- 2 buttons for submit, reset 
- 3 divs to display draw, win, lose

4. grab dom elements into app.js 
- use document.querySelector('')

5. create event handler 
- .addEventListener('click', () => {

    - ill need to grab computers throw
        Why? to know what to compare user pick to 
        how? with function
    - grab users throw 
        why? to compare it to computers
        how? using dom element from html
    - compare users pick to computers random
        why? to know the outcome
        how? if statements
    - display the outcome of the game 
        - why? to know who wins
        - how? .textContent

});

6. create restart button
.addEventListener('click', () => {

});
