const message = "Semoga panjang umur, sehat selalu, dan bahagia!";
const messageContainer = document.getElementById("message");
const button = document.getElementById("showMessage");
let index = 0;

button.addEventListener("click", () => {
  messageContainer.innerHTML = "";
  index = 0;
  showLetters();
});

function showLetters() {
  if (index < message.length) {
    messageContainer.innerHTML += message.charAt(index);
    index++;
    setTimeout(showLetters, 100);
  }
}
