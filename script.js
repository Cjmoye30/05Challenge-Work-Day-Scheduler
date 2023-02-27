$(function () {

  // Code to display the current date in the header of the page.
  var currentDate = dayjs().format("dddd DD MMM, YYYY");
  $("#currentDay").text(currentDate);

  // Current Hour for calculations to style the divs
  var currentHour = dayjs().format("HH");

  // Click event in place for all of the buttons
  $(".saveBtn").click(function (e) {
    // Traversing through the DOM to get to the parent element 
    var userTextAreaInput = $(this).parent().children("textarea").val();
    var boxId = $(this).parent().attr('id');

    // Figured out the first parameter can be something dynamic like the ID which will change each time depending on which save button is clicked which makes a lot more sense. Now, each button will have it's ID saved along with the input
    localStorage.setItem(boxId, userTextAreaInput);
  })

  // Function which pulls all of the class names called "Time-block", and for each of them which is basically a jquery for loop, we are then grabbing their ID
  $(".time-block").each(function () {
    var calendarHour = $(this).attr('id');

    var textArea = $(this).children("textarea").text(localStorage.getItem(calendarHour));

    // Conditional testing within the each/for loop which pulls the ID of each time block, and then checks that against the current hour
    if (calendarHour === currentHour) {
      $(this).addClass("present");
    } else if (calendarHour < currentHour) {
      $(this).addClass("past");
    } else {
      $(this).addClass("future");
    }
  })
});




