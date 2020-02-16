// source goes here
const app = function () {
  let boxClicked = false;

  const elementDiv = document.createElement('div');
  elementDiv.classList.add('grid-div');

  for (let i = 1; i <= 144; i++) {
    const elementSpan = document.createElement('span');
    elementSpan.setAttribute('id', `${i}`);
    elementSpan.innerHTML = `${i}`;
    elementSpan.classList.add('number-button');

    elementSpan.addEventListener('click', function (event) {
      if (boxClicked !== event.target.id) {
        for (let i = 1; i <= 144; i++) {
          document.getElementById(`${i}`).classList.remove('multiple');
          if (i % parseInt(event.target.id) === 0) {
            document.getElementById(`${i}`).classList.add('multiple');
          }
        }
        boxClicked = event.target.id;
      } else {
        for (let i = 1; i <= 144; i++) {
          document.getElementById(`${i}`).classList.remove('multiple');
        }
        boxClicked = false;
      }
    }, false);
    
    elementDiv.appendChild(elementSpan)
  }

  document.body.appendChild(elementDiv)
};

export default app;
