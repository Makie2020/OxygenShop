class slider{
  constructor(){
      this.slide = [
        "./images/Slider/image 1.jpg",
        "./images/Slider/image 2.jpg",
        "./images/Slider/image 3.jpg",
        "./images/Slider/image 4.jpg",
        "./images/Slider/image 5.jpg",
        "./images/Slider/image 6.jpg",];
      this.next = document.getElementById('next');
      this.previous = document.getElementById('previous');
      this.index = 1;
      this.next.onclick = () => {
          if (this.index >= 6){
              this.index = 0;
          }
          document.getElementById("slider__image").src = this.slide[this.index];
          this.index++;
          console.log(this.index);
      }
      this.previous.onclick = () => {
        if (this.index < 1){
            this.index = 5;
        }
        document.getElementById("slider__image").src = this.slide[this.index];
        this.index--;
        console.log(this.index);
    }
  }
};

new slider();