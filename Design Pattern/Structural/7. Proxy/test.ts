interface IFeatureAccess {
  accessFeature(userId: string): Promise<string>;
}

class FeatureAccessService implements IFeatureAccess {
  async accessFeature(userId: string): Promise<string> {
    // Simulate providing access to a premium feature
    return `User ${userId} has accessed the premium feature.`;
  }
}

class SubscriptionProxy implements IFeatureAccess {
  private featureAccessService: FeatureAccessService;
  private subscribedUsers: Set<string>;

  constructor(featureAccessService: FeatureAccessService) {
    this.featureAccessService = featureAccessService;
    this.subscribedUsers = new Set(); // Simulate a list of subscribed users
  }

  subscribeUser(userId: string): void {
    this.subscribedUsers.add(userId);
  }

  async accessFeature(userId: string): Promise<string> {
    if (!this.subscribedUsers.has(userId)) {
      return `User ${userId} is not subscribed and cannot access premium features.`;
    }
    return this.featureAccessService.accessFeature(userId);
  }
}

async function clientCode(featureAccess: IFeatureAccess, userId: string) {
  console.log(await featureAccess.accessFeature(userId));
}

// Usage
async function main() {
  const realService = new FeatureAccessService();
  const proxy = new SubscriptionProxy(realService);

  // Simulate subscribing a user
  proxy.subscribeUser("user123");

  // Attempt to access the feature with subscribed user
  await clientCode(proxy, "user123"); // User user123 has accessed the premium feature.

  // Attempt to access the feature with unsubscribed user
  await clientCode(proxy, "user456"); // User user456 is not subscribed and cannot access premium features.
}

main();
