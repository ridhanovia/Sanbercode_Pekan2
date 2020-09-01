console.log('Soal 1');
// 0
class Animal {
    // Code class di sini
    constructor(name){
        this._name = name;
        this.legs = "4";
        this.cold_blooded = false;
    }
    get a_name(){
        return this._name;
    }
}
 
var sheep = new Animal("shaun");
 
console.log(sheep.a_name); // "shaun"
console.log(sheep.legs); // 4
console.log(sheep.cold_blooded); // false

// 1
class Ape extends Animal{
  constructor(name) {
    super(name);
    this.legs = "2";
  }

  yell(){
    console.log("Auoooo");
  }
}
var sungokong = new Ape("kera sakti");
 
console.log(sungokong.a_name); // "shaun"
console.log(sungokong.legs); // 4
console.log(sungokong.cold_blooded); // false
sungokong.yell();


class Frog extends Animal{
  constructor(name) {
    super(name);
  }

  jump(){
    console.log("hop hop");
  }
}
var kodok = new Frog("kodok");
 
console.log(kodok.a_name); // "shaun"
console.log(kodok.legs); // 4
console.log(kodok.cold_blooded); // false
kodok.jump();

console.log('Soal 2');
class Clock {
    constructor ({template}){
      this.template = template;
      this.timer;
    }
    render(){
      var date = new Date();
  
      var hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      var mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      var secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      var output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
    stop(){
      clearInterval(this.timer);
    }
    start(){
      this.render();
      this.timer = setInterval(this.render.bind(this), 1000);
    }
  }
  
  var clock = new Clock({template: 'h:m:s'});
  clock.start(); 