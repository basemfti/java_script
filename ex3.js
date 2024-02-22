// Task 1

function logDairy() {

    const logDairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];
    for (let i = 0; i < logDairy.length; i++) {
      console.log(logDairy[i])
    }
  
  }
  logDairy();
  // Task 2
  function birdCan() {
    const animal = {
      canJump: true
    };
  
    const bird = Object.create(animal);
  
    bird.canFly = true;
  
    bird.hasFeathers = true;
  
    for (prop of Object.keys(bird)) {
      console.log(prop + ":" + " " + bird[prop])
    }
  }
  birdCan();

// Task 3

function animalCan() {
    const animal = {
        canJump: true
    };

    const bird = Object.create(animal);

    bird.canFly = true;

    bird.hasFeathers = true;
    
    for (const prop in bird) {//loops over all properties in the object,  including the prototype's properties.
        console.log(prop + ":" + " " + bird[prop]);
    }
}

animalCan();
