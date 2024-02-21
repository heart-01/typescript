interface Visitor {
  visitText(text: TextElement): void;
  visitImage(image: ImageElement): void;
}

interface BaseElement {
  accept(visitor: Visitor): void;
}

class TextElement implements BaseElement {
  constructor(public text: string) {}

  accept(visitor: Visitor): void {
    visitor.visitText(this);
  }
}

class ImageElement implements BaseElement {
  constructor(public src: string, public altText: string) {}

  accept(visitor: Visitor): void {
    visitor.visitImage(this);
  }
}

class SEOAnalyzer implements Visitor {
  visitText(text: TextElement): void {
    console.log(`Analyzing SEO for text: ${text.text}`);
  }

  visitImage(image: ImageElement): void {
    console.log(`Analyzing SEO for image with alt: ${image.altText}`);
  }
}

class SocialMediaAnalyzer implements Visitor {
  visitText(text: TextElement): void {
    console.log(`Analyzing social media impact for text: ${text.text}`);
  }

  visitImage(image: ImageElement): void {
    console.log(`Analyzing social media impact for image: ${image.src}`);
  }
}

// Usage
const elements: Element[] = [new TextElement("Hello, world!"), new ImageElement("logo.png", "Company Logo")];

const seoAnalyzer = new SEOAnalyzer();
const socialMediaAnalyzer = new SocialMediaAnalyzer();

elements.forEach((element) => {
  element.accept(seoAnalyzer);
  element.accept(socialMediaAnalyzer);
});
