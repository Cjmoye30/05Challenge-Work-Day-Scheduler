# 05 Third-Party APIs: Work Day Scheduler

## Description

- What was your motivation?
  - The motivation for this project was to create a function work day scheduler which is able to save users input from previous sessions. It has a very simple design and teaches necessary concepts to move forward in our class with.

- Why did you build this project?
  - This project was build in order to track each hour of my day, and log new events as needed. When I close and reopen the broswer, the info I saved from the previous session still shows up.

- What problems does it solve?
  - Solves the problem of closing the window and losing your data by utilizing local storage.

- What did you learn?
  - Day.js has military time which was utilized in this project in order to match the ID of the time-blocks with the current time of the day.
  - Traversing through the DOM with JQuery
    - index.html line 13 was a challenge as I did not realize to put in the "textarea" parameter.
  - Realized after many hours that the ID element I targeted within the function can then be used as the key for the localStorage.setItem - in all of the class examples we used a hard coded string which made this confusing.
  - .each is used the same way as a for loop and probably even better when using JQuery

## Installation / Live Site

[Github Pages Live Site]()

## Usage / Screenshot

![Cambric Moye's Web Development Portfolio](Assets/05Challenge%20-%20Workday%20Scheduler.png)


## Resources Used / Code Editors
[Get the parent ID of the element](https://stackoverflow.com/questions/10260667/jquery-get-parent-parent-id)

[My StackBlitz repo where I found the solution first](https://stackblitz.com/edit/web-platform-ay9mmj?file=script.js)
