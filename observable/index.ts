interface IObserver {
  next: (value: any) => void;
  error: (error: any) => void;
  complete: () => void;
}

type TeardownLogic = () => void;
type Subscriber = (observer: IObserver) => TeardownLogic;

class Subscription {
  constructor(private tearDown: TeardownLogic) {}

  unsubscribe() {
    this.tearDown();
  }
}

class Observable {
  constructor(private subscriber: Subscriber) {}

  subscribe(observer: IObserver) {
    const tearDown = this.subscriber(observer);
    const subscription = new Subscription(tearDown);
    return subscription;
  }
}

var observer: IObserver = {
  next: (value: any) => console.log("next", value),
  error: (error: any) => console.log("error", error),
  complete: () => console.log("complete!"),
};

var countInSec = (start: number, end: number, milisec: number) => {
  return new Observable((observer: IObserver) => {
    let count = start;
    const index = setInterval(() => {
      if (count <= end) {
        observer.next(count++);
      } else {
        observer.complete();
        clearInterval(index);
      }
    }, milisec);
    return () => clearInterval(index);
  });
};

var source = countInSec(1, 10, 1000);
var subscription = source.subscribe(observer);
// setTimeout(() => subscription.unsubscribe(), 5000);

var of = (...args: any[]) => {
  return new Observable((observer: IObserver) => {
    args.forEach((value) => observer.next(value));
    observer.complete();
    return () => {};
  });
};

const source2 = of(1, 2, 3, 4, 5);
const subscription2 = source2.subscribe(observer);