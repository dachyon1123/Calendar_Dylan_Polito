let mainDiv = $('.main-div');
const timeArray = [9, 10, 11, 12, 13, 14, 15, 16, 17];
let currentTime = dayjs();
let formattedTime = currentTime.format('H')

let times = [];
let start = dayjs().startOf('day').add(9, 'hour');

let end = dayjs().startOf('day').add(18, 'hour');

while (start < end) {
  times.push(start.format('h A'))

  start = start.add(1, 'hour')
}

$(function() {
  var clockElement = $('.currentDay')

  function clock() {
      clockElement.text(dayjs().format('MM/DD/YYYY'))
  }

  clock();
})


$(function() {
  for (let i = 0; i < timeArray.length; ++i) {
    let calendarBlock = $('<div>');
    calendarBlock.addClass('row time-block');
    calendarBlock.attr('id', `hour-${timeArray[i]}`);
    mainDiv.append(calendarBlock)
    console.log(formattedTime)

    if (formattedTime == timeArray[i]) {
      calendarBlock.addClass('present')
    } else if (timeArray[i] > formattedTime) {
      calendarBlock.addClass('future')
    } else {
      calendarBlock.addClass('past')
    }


    let timeDiv = $('<div>');
    timeDiv.addClass('col-2 col-md-1 hour text-center py-3');
    timeDiv.text(`${times[i]}`)
    calendarBlock.append(timeDiv)

    let calendarEntry = $('<textarea>');
    calendarEntry.addClass('col-8 col-md-10 description');
    calendarEntry.attr('rows', '3');
    calendarBlock.append(calendarEntry);

    let saveButton = $('<button>');
    saveButton.addClass('btn saveBtn col-2 col-md-1');
    saveButton.attr('aria-label', 'save');
    calendarBlock.append(saveButton)

    let saveButtonIcon = $('<i>');
    saveButtonIcon.addClass('fas fa-save');
    saveButton.attr('aria-hidden', 'true');
    saveButton.append(saveButtonIcon)
  }

  
})







$(function () {
  // Use jQuery to select elements and assign event listeners
  $('.saveBtn').each(function() {
      $(this).on('click', function() {
          
          const parentDiv = $(this).closest('.time-block');         
          
          const divID = parentDiv.attr('id');
          
          let textAreaValue = parentDiv.find('textarea').val();

          localStorage.setItem(divID, textAreaValue);
      });
  });
});




//Accesses the elements with the .time-block class, and for each one adds the text from what is saved in local storage. 
  $(function() {
    $('.time-block').each(function() {
      let parentDiv = $(this);
      let divId = parentDiv.attr('id');

      let textArea = parentDiv.find('textarea');

      let textAreaValue = localStorage.getItem(divId);

      textArea.val(textAreaValue);
    })

  })






