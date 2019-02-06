

document.addEventListener('click', function (event) {
  if (!localStorage.getItem('clicks')) {
    localStorage.setItem('clicks', JSON.stringify([]));
  }

  let currentHistory = JSON.parse(localStorage.getItem('clicks'));

  currentHistory.push(`${event.target.innerText}\t-\t${event.target.className}`);
  localStorage.setItem('clicks', JSON.stringify(currentHistory));
});



function handleKeyup(e) {

  if(e.ctrlKey && e.keyCode === 72) {
    downloadHistory()
  }
}

document.addEventListener('keyup', handleKeyup)

function downloadHistory() {

  let currentHistory = JSON.parse(localStorage.getItem('clicks'));
  let content = "name\t-\tclassName\n" + currentHistory.join("\n")

  var atag = window.document.createElement('a');
  atag.href = window.URL.createObjectURL(new Blob([content], {type: 'text'}))
  atag.download = 'research-steps.txt'

  document.body.appendChild(atag);
  atag.click();
  document.body.removeChild(atag);
};
