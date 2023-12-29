### Modal by Noor Tushar

#### Check below if you have confusion about (e) event object.

```javascript
window.addEventListener("click", (e) => {
  console.log(e);
});
```

`e` is a commonly used abbreviation for an event object. In JavaScript, when an event occurs (such as a click, mouse movement, keypress, etc.), an event object is automatically created and passed to the event handler function. This event object contains information about the event that occurred, and you can use it to access details like the type of event, the target element, mouse coordinates, and more.

Let's break down the code:

- `window.addEventListener("click", ...)`: This line adds an event listener to the `window` object. It listens for the "click" event, which is triggered when the user clicks anywhere on the webpage.

- `(e) => { console.log(e); }`: This is an arrow function, which is the callback function that gets executed when the "click" event occurs. It takes one parameter, `e`, which represents the event object.

- `console.log(e)`: This line logs the entire event object (`e`) to the console. By examining the logged event object, you can see various properties and details about the click event.

As a beginner, it's helpful to explore the event object to understand what information is available. You can modify the `console.log(e)` line to log specific properties of the event object. For example, you might log `e.target` to see which element was clicked, or `e.clientX` and `e.clientY` to see the mouse coordinates at the time of the click. This can be a valuable learning exercise to understand how events work in JavaScript.
