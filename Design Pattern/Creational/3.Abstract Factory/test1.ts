// Abstract Products
abstract class Button {
  abstract render(): void;
}

abstract class Checkbox {
  abstract render(): void;
}

// Concrete Products
class DarkButton extends Button {
  render(): void {
    console.log("Rendering a dark theme button");
  }
}

class LightButton extends Button {
  render(): void {
    console.log("Rendering a light theme button");
  }
}

class DarkCheckbox extends Checkbox {
  render(): void {
    console.log("Rendering a dark theme checkbox");
  }
}

class LightCheckbox extends Checkbox {
  render(): void {
    console.log("Rendering a light theme checkbox");
  }
}

// Abstract Factory Interface
interface IUIElementFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
}

// Abstract Factory
abstract class UIElementFactory implements IUIElementFactory {
  abstract createButton(): Button;
  abstract createCheckbox(): Checkbox;
}

// Concrete Factories
class DarkThemeFactory extends UIElementFactory {
  createButton(): Button {
    return new DarkButton();
  }

  createCheckbox(): Checkbox {
    return new DarkCheckbox();
  }
}

class LightThemeFactory extends UIElementFactory {
  createButton(): Button {
    return new LightButton();
  }

  createCheckbox(): Checkbox {
    return new LightCheckbox();
  }
}

// Usage
function application(factory: IUIElementFactory): void {
  const button = factory.createButton();
  const checkbox = factory.createCheckbox();

  button.render();
  checkbox.render();
}

// Creating a dark-themed UI
const darkFactory = new DarkThemeFactory();
application(darkFactory); // Outputs: Rendering a dark theme button, Rendering a dark theme checkbox

// Creating a light-themed UI
const lightFactory = new LightThemeFactory();
application(lightFactory); // Outputs: Rendering a light theme button, Rendering a light theme checkbox
