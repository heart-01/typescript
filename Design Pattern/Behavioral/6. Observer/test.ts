interface Observer {
  update(subject: Subject): void;
}

interface Subject {
  attach(observer: Observer): void;
  detach(observer: Observer): void;
  notify(): void;
}

class ConcreteSubject implements Subject {
  private observers: Observer[] = [];
  private state: number;

  attach(observer: Observer): void {
    const isExist = this.observers.includes(observer);
    if (isExist) {
      return console.log("Subject: Observer has been attached already.");
    }
    this.observers.push(observer);
  }

  detach(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex === -1) {
      return console.log("Subject: Nonexistent observer.");
    }
    this.observers.splice(observerIndex, 1);
  }

  notify(): void {
    console.log("Subject: Notifying observers...");
    for (const observer of this.observers) {
      observer.update(this);
    }
  }

  public changeState(state: number): void {
    this.state = state;
    this.notify();
  }

  public getState(): number {
    return this.state;
  }
}

class ConcreteObserver implements Observer {
  update(subject: Subject): void {
    if (subject instanceof ConcreteSubject && subject.getState() < 3) {
      console.log("ConcreteObserver: Reacted to the event.");
    }
  }
}

// Usage
const subject = new ConcreteSubject();

const observer1 = new ConcreteObserver();
subject.attach(observer1);

const observer2 = new ConcreteObserver();
subject.attach(observer2);

subject.changeState(2);
subject.changeState(3);
