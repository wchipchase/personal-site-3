const printToDom = (divId, textToPrint) => {
  console.error('util js', textToPrint);
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

export default { printToDom };
