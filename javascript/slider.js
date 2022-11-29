class slider {
  constructor() {
    this.slide = [
      "./images/Slider/image1.jpg",
      "./images/Slider/image2.jpg",
      "./images/Slider/image3.jpg",
      "./images/Slider/image4.jpg",
      "./images/Slider/image5.jpg",
      "./images/Slider/image6.jpg",];
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