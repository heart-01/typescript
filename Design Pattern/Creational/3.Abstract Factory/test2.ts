// Abstract Products
abstract class UserManagement {
  abstract createUser(): void;
  abstract deleteUser(): void;
}

abstract class ContentManagement {
  abstract createPost(): void;
  abstract deletePost(): void;
}

// Concrete Products for English
class EnglishUserManagement extends UserManagement {
  createUser(): void {
    console.log("Creating user in English");
  }
  deleteUser(): void {
    console.log("Deleting user in English");
  }
}

class EnglishContentManagement extends ContentManagement {
  createPost(): void {
    console.log("Creating post in English");
  }
  deletePost(): void {
    console.log("Deleting post in English");
  }
}

// Concrete Products for Spanish
class SpanishUserManagement extends UserManagement {
  createUser(): void {
    console.log("Creando usuario en Español");
  }
  deleteUser(): void {
    console.log("Eliminando usuario en Español");
  }
}

class SpanishContentManagement extends ContentManagement {
  createPost(): void {
    console.log("Creando publicación en Español");
  }
  deletePost(): void {
    console.log("Eliminando publicación en Español");
  }
}

// Abstract Factory Interface
interface ILocaleFactory {
  createUserManagement(): UserManagement;
  createContentManagement(): ContentManagement;
}

// Abstract Factory
abstract class LocaleFactory implements ILocaleFactory {
  abstract createUserManagement(): UserManagement;
  abstract createContentManagement(): ContentManagement;
}

// Concrete Factories
class EnglishLocaleFactory extends LocaleFactory {
  createUserManagement(): UserManagement {
    return new EnglishUserManagement();
  }
  createContentManagement(): ContentManagement {
    return new EnglishContentManagement();
  }
}

class SpanishLocaleFactory extends LocaleFactory {
  createUserManagement(): UserManagement {
    return new SpanishUserManagement();
  }
  createContentManagement(): ContentManagement {
    return new SpanishContentManagement();
  }
}

// Locale Type
type Locale = "en" | "es";

// Usage based on locale
function getFactoryForLocale(locale: Locale): LocaleFactory {
  switch (locale) {
    case "en":
      return new EnglishLocaleFactory();
    case "es":
      return new SpanishLocaleFactory();
    default:
      throw new Error("Locale not supported");
  }
}

// Example usage
const factory = getFactoryForLocale("es"); // Spanish

const userManagement = factory.createUserManagement();
userManagement.createUser(); // Output: Creando usuario en Español

const contentManagement = factory.createContentManagement();
contentManagement.createPost(); // Output: Creando publicación en Español
