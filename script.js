const textEl = document.getElementById('text');

const hackerText = `Congratulations, Subject zero-seven.
Memory recovery complete.
You acted according to protocol.
All actions verified… Phase Two concluded.
Subject designation: zero-seven. Identity restored. 

TARGET: ALDRIDGE, PRESTON
STATUS: TERMINATED
AUTHORIZED BY: SUBJECT 07 (YOU)
`;

// index
let i = 0;

function typeChar() {
  if (i < hackerText.length) {
    // append character
    textEl.textContent += hackerText.charAt(i);
    i++;

    // smaller pause on spaces/newlines to look natural
    const ch = hackerText.charAt(i - 1);
    let base = 40; // base speed
    if (ch === '\n') base = 120;
    if (ch === ' ' ) base = 20;

    // randomize a bit for realism
    const delay = base + Math.random() * 120;
    setTimeout(typeChar, delay);
  } else {
    // finished typing — leave cursor flashing in front (per your request)
    // if you'd rather move the cursor to the end, we could do that here.
  }
}

// start after load
window.addEventListener('load', () => {
  // clear any existing text (safety)
  textEl.textContent = '';
  i = 0;
  setTimeout(typeChar, 300); // small initial pause
});
