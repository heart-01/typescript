class UserProfile {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    // Assume there are more complex fields here
  }

  clone(): UserProfile {
    // The simplest approach to cloning, creating a new instance with the same values.
    return new UserProfile(this.name, this.age);
  }

  toString(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

// Usage
const prototypeProfile = new UserProfile("John Doe", 30);

// Cloning the prototype to create a new profile
const newUserProfile = prototypeProfile.clone();
newUserProfile.name = "Jane Doe"; // Changing the name for the new profile

console.log(prototypeProfile.toString()); // Output: Name: John Doe, Age: 30
console.log(newUserProfile.toString()); // Output: Name: Jane Doe, Age: 30
