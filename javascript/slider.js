class slider {
  constructor() {
    this.slide = [
      "./images/slider/foto1.jpg",
      "./images/slider/foto2.jpg",
      "./images/slider/foto3.jpg",
      "./images/slider/foto4.jpg",
      "./images/slider/foto5.jpg",
      "./images/slider/foto6.jpg",];
    this.next = document.getElementById('next');
    this.previous = document.getElementById('previous');
    this.index = 0;
    this.next.onclick = () => {
      this.index++;
      if (this.index > 5)  {
        this.index = 0;
      }
      document.getElementById("slider__image").src = this.slide[this.index];
      console.log(this.index);
    };
    this.previous.onclick = () => {
      this.index--;
      console.log(this.index);
      if (this.index < 0) {
        this.index = 5;
      }
      console.log(this.index);
      document.getElementById("slider__image").src = this.slide[this.index];
    }
  }
};

new slider();