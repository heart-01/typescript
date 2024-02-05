// Abstract Notification Class
abstract class Notification {
  abstract send(message: string): string;
}

// Concrete Products
class EmailNotification extends Notification {
  send(message: string): string {
    return `Email sent with message: ${message}`;
  }
}

class SMSNotification extends Notification {
  send(message: string): string {
    return `SMS sent with message: ${message}`;
  }
}

class PushNotification extends Notification {
  send(message: string): string {
    return `Push Notification sent with message: ${message}`;
  }
}

// Notification Type
type NotificationType = "email" | "sms" | "push";

// Creator Class
class NotificationFactory {
  createNotification(type: NotificationType): Notification {
    switch (type) {
      case "email":
        return new EmailNotification();
      case "sms":
        return new SMSNotification();
      case "push":
        return new PushNotification();
      default:
        throw new Error("Notification type not supported");
    }
  }
}

// Usage
const factory = new NotificationFactory();

const email = factory.createNotification("email");
console.log(email.send("Your order has been shipped!")); // Output: Email sent with message: Your order has been shipped!

const sms = factory.createNotification("sms");
console.log(sms.send("Your package will arrive today")); // Output: SMS sent with message: Your package will arrive today

const push = factory.createNotification("push");
console.log(push.send("A new item is in stock")); // Output: Push Notification sent with message: A new item is in stock
