const circularProgress = document.querySelectorAll(".circular-progress");

Array.from(circularProgress).forEach((progressBar) => {
  const progressValue = progressBar.querySelector(".percentage");
  const innerCircle = progressBar.querySelector(".inner-circle");
  let startValue = 0,
    endValue = Number(progressBar.getAttribute("data-percentage")),
    speed = 50,
    progressColor = progressBar.getAttribute("data-progress-color");

  const progress = setInterval(() => {
    startValue++;
    progressValue.textContent = `${startValue}%`;
    progressValue.style.color = `#fff`;

    innerCircle.style.backgroundColor = `${progressBar.getAttribute(
      "data-inner-circle-color"
    )}`;
    

    progressBar.style.background = `conic-gradient(${progressColor} ${
      startValue * 3.6
    }deg,${progressBar.getAttribute("data-bg-color")} 0deg)`;
    if (startValue === endValue) {
      clearInterval(progress);
    }
  }, speed);
});

let sc = ScrollReveal({
  origin: 'top',
  distance: '50px',
  duration: 2000,
  reset: true
});

sc.reveal(`.header,.about,.quote,.service,.portfolio,.contact`,{
  interval: 200
})
// ScrollTop

function scrollTop(){
  const scrollTop = document.getElementById('scroll-top');

  if(this.scrollY >= 560){
      scrollTop.classList.add('show-scroll');
  }else{
      scrollTop.classList.remove('show-scroll');
  }
}
window.addEventListener('scroll',scrollTop);