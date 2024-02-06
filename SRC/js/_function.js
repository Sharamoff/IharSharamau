new WOW().init();


var Stars = {
  canvas: null,
  context: null,
  circleArray: [],
  colorArray: [
                '#FFFFFF',
                '#FFFFFF',
                '#FFFFFF',
                '#F1D5AB',
                '#F1D5AB',
                '#F1D5AB',
                '#8BB3C3',
                '#8BB3C3',
                '#8BB3C3',
                '#DAD3C1',
                '#D4B6B0',
                '#71878D',
                '#213B3D',
                '#D7967A',
                '#0A95DC'
              ],

  mouseDistance: 30,
  radius: .5,
  maxRadius: 1.2,

  //  MOUSE
  mouse: {
    x: undefined,
    y: undefined,
    down: false,
    move: false
  },

  //  INIT
  init: function () {
    this.canvas = document.getElementById('stars');
    //this.canvas.width = window.innerWidth;
    this.canvas.width = document.getElementById('container-main').offsetWidth;
    this.canvas.height = window.innerHeight;
    this.canvas.style.display = 'block';
    this.context = this.canvas.getContext('2d');

    window.addEventListener('mousemove', this.mouseMove);
    window.addEventListener('resize', this.resize);

    this.prepare();
    this.animate();
  },

  //  CIRCLE
  Circle: function (x, y, dx, dy, radius, fill) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = this.radius;

    this.draw = function () {
      Stars.context.beginPath();
      Stars.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      Stars.context.fillStyle = fill;
      Stars.context.fill();
    };

    this.update = function () {
      if (this.x + this.radius > Stars.canvas.width || this.x - this.radius < 0) this.dx = -this.dx;
      if (this.y + this.radius > Stars.canvas.height || this.y - this.radius < 0) this.dy = -this.dy;

      this.x += this.dx;
      this.y += this.dy;

      //  INTERACTIVITY
      if (Stars.mouse.x - this.x < Stars.mouseDistance && Stars.mouse.x - this.x > -Stars.mouseDistance && Stars.mouse.y - this.y < Stars.mouseDistance && Stars.mouse.y - this.y > -Stars.mouseDistance) {
        if (this.radius < Stars.maxRadius) this.radius += 1;
      } else if (this.radius > this.minRadius) {
        this.radius -= 1;
      }

      this.draw();
    };
  },

  //  PREPARE
  prepare: function () {
    this.circleArray = [];

    for (var i = 0; i < 3000; i++) {
      var radius = Stars.radius;
      var x = Math.random() * (this.canvas.width - radius * 2) + radius;
      var y = Math.random() * (this.canvas.height - radius * 2) + radius;
      var dx = (Math.random() - 0.5) * 0.4;
      var dy = (Math.random() - 0.5) * 0.4;
      var fill = this.colorArray[Math.floor(Math.random() * this.colorArray.length)];

      this.circleArray.push(new this.Circle(x, y, dx, dy, radius, fill));
    }
  },

  //  ANIMATE
  animate: function () {
    requestAnimationFrame(Stars.animate);
    Stars.context.clearRect(0, 0, Stars.canvas.width, Stars.canvas.height);

    for (var i = 0; i < Stars.circleArray.length; i++) {
      var circle = Stars.circleArray[i];
      circle.update();
    }
  },

  //  MOUSE MOVE
  mouseMove: function (event) {
    Stars.mouse.x = event.x;
    Stars.mouse.y = event.y;
  },

  //  RESIZE
  resize: function () {
    Stars.canvas.width = document.getElementById('container-main').offsetWidth;
    Stars.canvas.height = window.innerHeight;
  }
};

Stars.init();





