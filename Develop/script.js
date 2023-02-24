$(function () {
  // TODO: Add code to display the current date in the header of the page.
  // I feel this needs to be first so that I can style the color of the tabs for testing
  var currentDate = dayjs().format("dddd DD MMM, YYYY");
  $("#currentDay").text(currentDate);

  // Current Hour for calculations to style the divs
  var currentHour = dayjs().format("HH");
  // console.log(currentHour);

  var textBoxes = $(".description");

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  var saveButtons = $(".saveBtn");
  
  saveButtons.click(function (e) {
    console.log("Save button clicked");
    var container = $(this).parent().children("textarea").val();
    console.log(container);
  })

  // On the save button click, then we need to run a function which then saves the input in the textarea to local storage

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?


  // Function which pulls all of the class names called "Time-block", and for each of them which is basically a jquery for loop, we are then grabbing their ID
  $(".time-block").each(function () {
    var calendarHour = $(this).attr('id');

    // Conditional testing within the each/for loop which pulls the ID of each time block, and then checks that against the current hour
    if (calendarHour === currentHour) {
      console.log(calendarHour + " is equal to " + currentHour);
      $(this).addClass("present");
    } else if (calendarHour < currentHour) {
      console.log(calendarHour + " is less than " + currentHour);
      $(this).addClass("past");
    } else {
      console.log(calendarHour + " is greater than " + currentHour);
      $(this).addClass("future");
    }
  })

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

});
