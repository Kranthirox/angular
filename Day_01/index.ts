class animals{
    dogs:number
    cats:number
 
    count(){
      console.log(`dog are ${this.dogs} and cats ${this.cats}`);
    }
}
let animal = new animals
animal.cats=3
animal.dogs=4
animal.count()