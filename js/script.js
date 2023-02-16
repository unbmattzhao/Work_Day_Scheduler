// Spoke with Mayank and he believed use strict coding was always the good practice, I would follow this as much as possible.
"use strict"


$(function () {
// the function to save user's input data to localStorage
$(document).ready(function() {
  // Attach a click event listener to all save buttons
  $('.saveBtn').on('click', function() {
    const textarea = $(this).prev('.description');
    const input = textarea.val();
    const id = $(this).parent().attr('id');
    localStorage.setItem(id, input);
  });

  // Loop through each div and set its textarea value to the saved input data (if any)
  $('div').each(function() {
    const textarea = $(this).find('.description');
    const id = $(this).attr('id');
    const savedInput = localStorage.getItem(id);
    // show the input data if there is data stored in the localStorage
    if (savedInput) {
      textarea.val(savedInput);
    }
  });
});

// show the date as required in the header area
    var today = dayjs();
    $('#currentDay').text(today.format('dddd, MMMM D, YYYY'));

  var currentHour = dayjs().hour();
  var appHours = [];
 
  function appHourGenerator(){
    for( var i = 9; i < 18; i++) {
      var appHour = dayjs().hour(i).format('H');
      appHours.push(appHour);
      // console.log(appHours);
    }
  };

  appHourGenerator();

  // I love forEach loop, as used above and below. This is great!
  // Accomplished below function first. Accidentally tried to use part of the ID + a serial number to select an element and succeeded, this was really exciting!
  appHours.forEach(function(appHour){    
    if(appHour > currentHour) {      
      $("#hour-" + appHour).addClass('future');    
    //  console.log(appHour);
      }
      else if(appHour < currentHour){
       
         $("#hour-" + appHour).addClass('past');
      }
      else{
        // console.log(appHour); 
        $("#hour-" + appHour).addClass('present');
      }
    });
});

