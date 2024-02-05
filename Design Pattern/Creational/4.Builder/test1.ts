// User Interface
interface IUser {
  name: string;
  age?: number;
  phone?: string;
  address?: string;
}

// User Class
class User implements IUser {
  name: string;
  age?: number;
  phone?: string;
  address?: string;

  constructor(builder: UserBuilder) {
    this.name = builder.name;
    this.age = builder.age;
    this.phone = builder.phone;
    this.address = builder.address;
  }

  toString(): string {
    return JSON.stringify(this);
  }
}

// UserBuilder Class
class UserBuilder {
  name: string;
  age?: number;
  phone?: string;
  address?: string;

  constructor(name: string) {
    this.name = name;
  }

  setAge(age: number): UserBuilder {
    this.age = age;
    return this;
  }

  setPhone(phone: string): UserBuilder {
    this.phone = phone;
    return this;
  }

  setAddress(address: string): UserBuilder {
    this.address = address;
    return this;
  }

  build(): User {
    return new User(this);
  }
}

// Usage
const user1 = new UserBuilder("John Doe").setAge(30).setPhone("1234567890").build();

console.log(user1.toString()); // User with name, age, and phone

const user2 = new UserBuilder("Alice").setAddress("123 Main St").build();

console.log(user2.toString()); // User with name and address
