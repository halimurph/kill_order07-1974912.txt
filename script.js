const textElement = document.getElementById('text');
const cursor = document.getElementById('cursor');

const hackerText = `
Congratulations, Subject zero-seven.
Memory recovery complete.
You acted according to protocol.
All actions verified… Phase Two concluded.
Subject designation: zero-seven. Identity restored. 

TARGET: ALDRIDGE, PRESTON
STATUS: TERMINATED
AUTHORIZED BY: SUBJECT 07 (YOU)
`;

let i = 0;

function type() {
  if (i < hackerText.length) {
    textElement.innerHTML += hackerText.charAt(i);
    i++;
    const randomDelay = Math.random() * 100 + 20; // random typing speed
    setTimeout(type, randomDelay);
  } else {
    cursor.style.display = 'none'; // hide cursor at the end
  }
}

window.onload = type;
