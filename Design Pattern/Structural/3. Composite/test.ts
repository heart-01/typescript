interface FileSystemComponent {
  name: string;
  showStructure(prefix: string): void;
}

class FileDetail implements FileSystemComponent {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  showStructure(prefix: string): void {
    console.log(`${prefix}/${this.name}`);
  }
}

class Directory implements FileSystemComponent {
  name: string;
  children: FileSystemComponent[] = [];

  constructor(name: string) {
    this.name = name;
  }

  addComponent(component: FileSystemComponent): void {
    this.children.push(component);
  }

  showStructure(prefix: string): void {
    console.log(`${prefix}/${this.name}`);
    this.children.forEach((child) => child.showStructure(`${prefix}/${this.name}`));
  }
}

// Creating files
const file1 = new FileDetail("File1.txt");
const file2 = new FileDetail("File2.txt");
const file3 = new FileDetail("File3.txt");

// Creating directories and adding files to them
const rootDirectory = new Directory("Root");
const subDirectory1 = new Directory("SubDirectory1");
const subDirectory2 = new Directory("SubDirectory2");

subDirectory1.addComponent(file1);
subDirectory2.addComponent(file2);
subDirectory2.addComponent(file3);

// Creating a more complex structure by adding subdirectories to root
rootDirectory.addComponent(subDirectory1);
rootDirectory.addComponent(subDirectory2);

// Displaying the structure
rootDirectory.showStructure("");
