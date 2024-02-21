// Memento
class EditorMemento {
  private state: string;

  constructor(state: string) {
    this.state = state;
  }

  public getState(): string {
    return this.state;
  }
}

// Originator
class Editor {
  private content: string = "";

  public setContent(content: string) {
    this.content = content;
  }

  public getContent(): string {
    return this.content;
  }

  public save(): EditorMemento {
    return new EditorMemento(this.content);
  }

  public restore(memento: EditorMemento) {
    this.content = memento.getState();
  }
}

// Caretaker
class HistoryTaker {
  private mementos: EditorMemento[] = [];

  public addMemento(memento: EditorMemento) {
    this.mementos.push(memento);
  }

  public getMemento(index: number): EditorMemento {
    return this.mementos[index];
  }
}

// Usage
const editor = new Editor();
const historyTaker = new HistoryTaker();

editor.setContent("First");
historyTaker.addMemento(editor.save());

editor.setContent("Second");
historyTaker.addMemento(editor.save());

editor.setContent("Third");
console.log(editor.getContent()); // Output: Third

// Undo to 'Second'
editor.restore(historyTaker.getMemento(1));
console.log(editor.getContent()); // Output: Second

// Undo to 'First'
editor.restore(historyTaker.getMemento(0));
console.log(editor.getContent()); // Output: First
