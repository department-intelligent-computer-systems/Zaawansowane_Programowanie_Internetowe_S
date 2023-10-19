import { Author } from './author';

class CounterApp {
    private counter: number;
    private counterInput: HTMLInputElement;
    private incrementButton: HTMLButtonElement;
    private decrementButton: HTMLButtonElement;
  
    constructor() {
      this.counter = 0;
      this.counterInput = document.getElementById('counterInput') as HTMLInputElement;
      this.incrementButton = document.getElementById('incrementButton') as HTMLButtonElement;
      this.decrementButton = document.getElementById('decrementButton') as HTMLButtonElement;
  
      this.incrementButton.addEventListener('click', this.increment.bind(this));
      this.decrementButton.addEventListener('click', this.decrement.bind(this));
    }
  
    private increment() {
      this.counter++;
      this.updateCounterInput();
    }
  
    private decrement() {
      if (this.counter > 0) {
        this.counter--;
        this.updateCounterInput();
      }
    }
  
    private updateCounterInput() {
      this.counterInput.value = this.counter.toString();
    }
  }
  
  class DataLoader {
    private authors: Author[] = [];
    private isDataLoaded = false;
  
    constructor() {}
  
    async loadAuthorsFromServer(): Promise<void> {
      if (this.isDataLoaded) {
        return; // Jeśli dane są już wczytane, nie wczytuj ich ponownie
      }
  
      try {
        const response = await fetch("data.json"); // Upewnij się, że ścieżka jest poprawna
        if (!response.ok) {
          throw new Error(`Błąd pobierania danych: ${response.statusText}`);
        }
  
        const authorData = await response.json();
  
        for (let index = 0; index < authorData.length; index++) {
          const data = authorData[index];
          const id = index + 1;
          const _fn = data.firstname;
          const _lt = data.lastname;
          const _em = data.email;
          this.authors.push(new Author(_fn, _lt, _em, id));
        }
  
        this.isDataLoaded = true;
      } catch (error) {
        console.error('Błąd pobierania danych:', error);
      }
    }
  
    getAuthors(): Author[] {
      return this.authors;
    }
  }
  
  class App {
    private dataLoader: DataLoader;
  
    constructor(dataLoader: DataLoader) {
      this.dataLoader = dataLoader;
    }
    
    public async run(): Promise<void> {
      await this.dataLoader.loadAuthorsFromServer();
      this.displayAuthors();
      const displayOption = document.getElementById("displayOption") as HTMLSelectElement;
  
      displayOption.addEventListener("change", () => {
        this.displayAuthors();
      });
    }
  
    public displayAuthors(): void {
      const displayOption = document.getElementById("displayOption") as HTMLSelectElement;
      const selectedOption = displayOption.value;
      const displayContainer = document.getElementById("displayContainer");
  
      if (displayContainer) {
        displayContainer.innerHTML = "";
  
        if (selectedOption === "bulletList" || selectedOption === "numberedList") {
          const listType = selectedOption === "bulletList" ? "ul" : "ol";
          const list = document.createElement(listType);
  
          this.dataLoader.getAuthors().forEach((author) => {
            const li = document.createElement("li");
            li.textContent = author.getAuthor();
            list.appendChild(li);
          });
  
          displayContainer.appendChild(list);
        } else if (selectedOption === "table") {
          const table = document.createElement("table");
          const thead = document.createElement("thead");
          thead.innerHTML = `
            <tr>
              <th>Imię</th>
              <th>Nazwisko</th>
              <th>Email</th>
            </tr>
          `;
          table.appendChild(thead);
  
          const tbody = document.createElement("tbody");
          this.dataLoader.getAuthors().forEach((author) => {
            const row = document.createElement("tr");
            row.innerHTML = `
              <td>${author.firstname}</td>
              <td>${author.lastname}</td>
              <td>${author.email}</td>
            `;
            tbody.appendChild(row);
          });
  
          table.appendChild(tbody);
          displayContainer.appendChild(table);
        }
      }
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const dataLoader = new DataLoader();
    const app = new App(dataLoader);
    new CounterApp();
    app.run();
  });

  export type Node<P> = {
    value: P;
    children: Array<Tree<P>>;
  };
  
  type Leaf<P> = {
    value: P;
  };
  
  enum TreeTag {
    Node = 'Node',
    Leaf = 'Leaf',
  }
  
  type TreeRecord<P> = {
    [TreeTag.Node]: Node<P>;
    [TreeTag.Leaf]: Leaf<P>;
  };
  
  type TreeTaggedRecord<P> = {
    [Tag in TreeTag]: { tag: Tag; value: TreeRecord<P>[Tag] }
  };
  
  type Tree<P> = TreeTaggedRecord<P>[TreeTag];
  
  // Constructors
  const node = <P>(value: Node<P>): Tree<P> => ({
    tag: TreeTag.Node,
    value,
  });
  const leaf = <P>(value: Leaf<P>): Tree<P> => ({
    tag: TreeTag.Leaf,
    value,
  });
  
  
  

  const exampleTree: Tree<string> = node({
    value: 'Root',
    children: [
      leaf({ value: 'Leaf 1' }),
      node({
        value: 'Node 1',
        children: [
          leaf({ value: 'Leaf 1.1' }),
          leaf({ value: 'Leaf 1.2' }),
        ],
      }),
      leaf({ value: 'Leaf 2' }),
    ],
  });
  
  
  export const traverseTree = <P>(tree: Tree<P>) => {
    switch (tree.tag) {
      case TreeTag.Node:
        console.log(`Node: ${tree.value.value}`);
        tree.value.children.forEach(child => traverseTree(child));
        break;
      case TreeTag.Leaf:
        console.log(`Leaf: ${tree.value.value}`);
        break;
    }
  };
  
  traverseTree(exampleTree);
  