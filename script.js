const textElement = document.getElementById('text');
const cursor = document.getElementById('cursor');

const hackerText = `
Initializing system...
Access granted.
Loading files...
> Welcome, Agent Corbeau.
> All systems online.
> Running diagnostics...
> Initiating protocol X...
`;

let i = 0;

function type() {
  if (i < hackerText.length) {
    textElement.innerHTML += hackerText.charAt(i);
    i++;
    // Randomize typing speed slightly for realism
    const randomDelay = Math.random() * 100 + 20;
    setTimeout(type, randomDelay);
  } else {
    cursor.style.display = 'none'; // hide cursor at the end
  }
}

window.onload = type;
