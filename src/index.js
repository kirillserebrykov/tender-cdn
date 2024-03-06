

let slider = {
  slides: [
    "https://images.unsplash.com/photo-1704799191531-085f46e6221c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1707343848873-d6a834b5f9b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1674480165849-5e7fa1344ad3?q=80&w=1912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ],
  i: 0,
  set: function (image) {
    document.getElementById("scr").style.backgroundImage = "url(" + image + ")";
  },
  init: function () {
    this.set("./1.jpg");
  },

  left: function () {
    this.i--;
    if (this.i < 0) this.i = this.slides.length - 1;
    this.set(this.slides[this.i]);
  },
  right: function () {
    this.i++;
    if (this.i == this.slides.length) this.i = 0;
    this.set(this.slides[this.i]);
  },
};
slider.init();
setInterval(function () {
  slider.right();
}, 5000);

let btn1 = document.querySelector(".left");
btn1.addEventListener("click", () => slider.left());

let btn2 = document.querySelector(".right");
btn2.addEventListener("click", () => slider.right());
