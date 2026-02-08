function showWish() {
  document.getElementById("wish").style.display = "block";
  document.getElementById("music").play();
  confettiEffect();
}

function confettiEffect() {
  for (let i = 0; i < 30; i++) {
    let c = document.createElement("div");
    c.className = "confetti";
    c.style.left = Math.random() * 100 + "vw";
    c.style.background = `hsl(${Math.random() * 360},100%,50%)`;
    c.style.animationDuration = Math.random() * 2 + 2 + "s";
    document.body.appendChild(c);

    setTimeout(() => c.remove(), 3000);
  }
}
