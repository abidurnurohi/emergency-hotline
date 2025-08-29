
### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
getElementById()- is a javascript method that returns the html element whose id attribute matches the specified value.
getElementsByClassName()- is a javascript method that returns a collection of all elements in the document with the specified classname.
querySelector- is a javascript method that returns the first element within the document that matches a specified css selector
querySelectorAll- is a javascript method that returnsa static NodeList of all elements in the document that match the specified CSS selector.

2. How do you **create and insert a new element into the DOM**?
let newElement = document.createElement("div");
document.body.appendChild(newElement)

3. What is **Event Bubbling** and how does it work?
Event Bubbling- is a process in which an event stars from the target element and propagates upward through its ancestors in the DOM hierarchy. 
Working Procedure- When an event is triggered on an element then bubbles up to its parent then to the ancestor elements until it reaches the root(document). This allows parent elements to also handle the event.

4. What is **Event Delegation** in JavaScript? Why is it useful?
Event delegation- is a technique where you attach a single event listener to a parent element to manage events on its child elements using event bubbling.
Why useful- because it improves performance, reduces memory usage.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
preventDefault()- is a javascript method that stops the browser's default action for an event.
stopPropagation()- is a javascript method that prevents an event from bubbling up or capturing down the dom,stoping it from reaching parent or ancestor elements.