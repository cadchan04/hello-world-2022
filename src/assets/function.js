const button = document.querySelector('input');
const paragraph = document.querySelector('p');

button.addEventListener('click', updateButton);

function updateButton() {
  if (button.value === 'Click to Submit') {
    button.value = 'Submitted!';
    paragraph.textContent = 'Thank you, your answer has been submitted!';
  } else {
    button.value = 'Click to Submit';
  }
}

var gallons = 0; // gallons is supposed to be from user input, but that is not the case here

function message() {
    alert(`In total, you have used 33 of water. Visit https://www.epa.gov/sites/default/files/2017-03/documents/ws-facthseet-indoor-water-use-in-the-us.pdf for more information on water use in the United States.`);
}