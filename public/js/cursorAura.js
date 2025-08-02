const buttons = document.querySelectorAll('.cursorAura');

buttons.forEach(button => button.addEventListener("mousemove", e => {
   const {x, y} = button.getBoundingClientRect();
   button.style.setProperty("--x", e.clientX - x);
   button.style.setProperty("--y", e.clientY - y);
}));