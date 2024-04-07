class Key {
  private signature: number = Math.random() * 10;

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected tenants: Person[] = [];
  protected door: boolean = false;
  constructor(protected key: Key) {}

  abstract openDoor(personKey: Key): void;

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
    } else {
      console.log("The door is closed. You cannot come in.");
    }
  }
}

class MyHouse extends House {
  openDoor(personKey: Key): void {
    if (personKey.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("The door is unlocked. You can come in!");
    } else {
      console.log("You do not have the correct key to open the door.");
    }
  }
}

const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());
house.comeIn(person);

export {};
