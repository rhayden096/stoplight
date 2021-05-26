(function() {
  'use strict';
  let stopButton = document.querySelector('#stopButton')
  let slowButton = document.querySelector('#slowButton')
  let goButton = document.querySelector('#goButton')
  let stopLight = document.querySelector('#stopLight')
  let slowLight = document.querySelector('#slowLight')
  let goLight = document.querySelector('#goLight')
  
  let isStopOn = false
  let isSlowOn = false
  let isGoOn = false

  document.addEventListener("DOMContentLoaded", function() {
    stopButton.addEventListener('click', function() {
      if (isStopOn) {
        stopLight.setAttribute('class', 'bulb')
        isStopOn = false
        console.log(`${this.textContent} bulb off`)
      } else {
      stopLight.setAttribute('class', 'bulb stop')
      isStopOn = true
      console.log(`${this.textContent} bulb on`)
      }
    })

    stopButton.addEventListener('mouseenter', function(){
      console.log(`Entered ${this.textContent} button`)

    stopButton.addEventListener('mouseleave', function(){
        console.log(`Left ${this.textContent} button`)
      })  
    })


  });

  document.addEventListener("DOMContentLoaded", function() {
    slowButton.addEventListener('click', function() {
      if (isSlowOn) {
        slowLight.setAttribute('class', 'bulb')
        isSlowOn = false
        console.log(`${this.textContent} bulb off`)
      } else {
      slowLight.setAttribute('class', 'bulb slow')
      isSlowOn = true
      console.log(`${this.textContent} bulb on`)
      }
    })

    slowButton.addEventListener('mouseenter', function(){
      console.log(`Entered ${this.textContent} button`)
    })
    
    slowButton.addEventListener('mouseleave', function(){
      console.log(`Left ${this.textContent} button`)
    })

  });

  document.addEventListener("DOMContentLoaded", function() {
    goButton.addEventListener('click', function() {
      if (isGoOn) {
        goLight.setAttribute('class', 'bulb')
        isGoOn = false
        console.log(`${this.textContent} bulb off`)
      } else {
      goLight.setAttribute('class', 'bulb go')
      isGoOn = true
      console.log(`${this.textContent} bulb on`)
      }
    })

    goButton.addEventListener('mouseenter', function(){
      console.log(`Entered ${this.textContent} button`)
    })
    goButton.addEventListener('mouseleave', function(){
      console.log(`Left ${this.textContent} button`)
    })

  });

  // YOUR CODE HERE
})();
