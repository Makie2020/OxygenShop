class slider {
  constructor() {
    this.slide = [
      "./images/Slider/image 1.jpg",
      "./images/Slider/image 2.jpg",
      "./images/Slider/image 3.jpg",
      "./images/Slider/image 4.jpg",
      "./images/Slider/image 5.jpg",
      "./images/Slider/image 6.jpg",];
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