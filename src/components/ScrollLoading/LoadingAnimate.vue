<template>
  <div class="loading-animate">
    <div class="loading-animate-container container1">
      <div class="circle1"></div>
      <div class="circle2"></div>
      <div class="circle3"></div>
      <div class="circle4"></div>
    </div>

    <div class="loading-animate-container container2">
      <div class="circle1"></div>
      <div class="circle2"></div>
      <div class="circle3"></div>
      <div class="circle4"></div>
    </div>

    <div class="loading-animate-container container3">
      <div class="circle1"></div>
      <div class="circle2"></div>
      <div class="circle3"></div>
      <div class="circle4"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.loading-animate {
  width: 20px;
  height: 20px;
  position: relative;

  .loading-animate-container {
    position: absolute;
    width: 100%;
    height: 100%;
  }
}

.loading-animate-container > div {
  width: 6px;
  height: 6px;
  background-color: #00cd96;
  border-radius: 100%;
  position: absolute;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation: bouncedelay 1.2s infinite ease-in-out;
  animation: bouncedelay 1.2s infinite ease-in-out;
}

@-webkit-keyframes bouncedelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
  }

  40% {
    -webkit-transform: scale(1);
  }
}

@keyframes bouncedelay {
  0%,
  80%,
  100% {
    transform: scale(0);
    -webkit-transform: scale(0);
  }

  40% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
}

.circle1 {
  top: 0;
  left: 0;
}

.circle2 {
  top: 0;
  right: 0;
}

.circle3 {
  right: 0;
  bottom: 0;
}

.circle4 {
  left: 0;
  bottom: 0;
}

.container1 {
  .circle2 {
    -webkit-animation-delay: -0.9s;
    animation-delay: -0.9s;
  }

  .circle3 {
    -webkit-animation-delay: -0.6s;
    animation-delay: -0.6s;
  }

  .circle4 {
    -webkit-animation-delay: -0.3s;
    animation-delay: -0.3s;
  }
}

.container2 {
  -webkit-transform: rotateZ(45deg);
  transform: rotateZ(45deg);

  .circle1 {
    -webkit-animation-delay: -1.1s;
    animation-delay: -1.1s;
  }

  .circle2 {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
  }

  .circle3 {
    -webkit-animation-delay: -0.5s;
    animation-delay: -0.5s;
  }

  .circle4 {
    -webkit-animation-delay: -0.2s;
    animation-delay: -0.2s;
  }
}

.container3 {
  -webkit-transform: rotateZ(90deg);
  transform: rotateZ(90deg);

  .circle1 {
    -webkit-animation-delay: -1s;
    animation-delay: -1s;
  }

  .circle2 {
    -webkit-animation-delay: -0.7s;
    animation-delay: -0.7s;
  }

  .circle3 {
    -webkit-animation-delay: -0.4s;
    animation-delay: -0.4s;
  }

  .circle4 {
    -webkit-animation-delay: -0.1s;
    animation-delay: -0.1s;
  }
}
</style>
