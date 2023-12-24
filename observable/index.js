var Subscription = /** @class */ (function () {
    function Subscription(tearDown) {
        this.tearDown = tearDown;
    }
    Subscription.prototype.unsubscribe = function () {
        this.tearDown();
    };
    return Subscription;
}());

var Observable = /** @class */ (function () {
    function Observable(subscriber) {
        this.subscriber = subscriber;
    }
    Observable.prototype.subscribe = function (observer) {
        var tearDown = this.subscriber(observer);
        var subscription = new Subscription(tearDown);
        return subscription;
    };
    return Observable;
}());

var observer = {
    next: function (value) { return console.log("next", value); },
    error: function (error) { return console.log("error", error); },
    complete: function () { return console.log("complete!"); },
};
var countInSec = function (start, end, milisec) {
    return new Observable(function (observer) {
        var count = start;
        var index = setInterval(function () {
            if (count <= end) {
                observer.next(count++);
            }
            else {
                observer.complete();
                clearInterval(index);
            }
        }, milisec);
        return function () { return clearInterval(index); };
    });
};
var source = countInSec(1, 10, 1000);
var subscription = source.subscribe(observer);
// setTimeout(() => subscription.unsubscribe(), 5000);
var of = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return new Observable(function (observer) {
        args.forEach(function (value) { return observer.next(value); });
        observer.complete();
        return function () { };
    });
};
var source2 = of(1, 2, 3, 4, 5);
var subscription2 = source2.subscribe(observer);
