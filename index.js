import './css/style.css'
import P5 from 'p5'

new P5(function (p5) {
 
  p5.setup = () => {
    p5.pixelDensity(1)
    p5.createCanvas(400, 400)
    p5.frameRate(5)
  }

  p5.draw = () => {
    p5.background('blue')
    p5.circle(30,30,30)



  }
})


