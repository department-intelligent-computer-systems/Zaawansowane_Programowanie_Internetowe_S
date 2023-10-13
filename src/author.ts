class Author {
    private _id: number;
    private _firstname: string;
    private _lastname: string;
    private _email: string;
    private static _objectCounter: number = 0;
  
    constructor(id: number, firstname: string, lastname: string, email: string) {
      if (!firstname || !lastname || !email || !isValidEmail(email)) {
        throw new Error("Niepoprawne dane autora");
      }
      this._id = id;
      this._firstname = firstname;
      this._lastname = lastname;
      this._email = email;
      Author._objectCounter++;
    }
    public getAuthor(): string {
        return `${this._firstname} ${this._lastname} - ${this._email}`;
      }
  }
  
  // Funkcja sprawdzająca poprawność adresu email
  function isValidEmail(email: string): boolean {
    return email.includes("@");
  }
  interface DataLoaderStrategy {
    loadAuthors(): Promise<Author[]>;
  }
  
  class FetchDataLoaderStrategy implements DataLoaderStrategy {
    async loadAuthors(): Promise<Author[]> {
      try {
        const response = await fetch('data.json'); // Upewnij się, że ścieżka jest poprawna
        if (!response.ok) {
          throw new Error(`Błąd pobierania danych: ${response.statusText}`);
        }
        const authorData = await response.json();
  
        return authorData.map((data: any) => {
          return new Author(data.id, data.firstname, data.lastname, data.email);
        });
      } catch (error) {
        console.error('Błąd pobierania danych:', error);
        return [];
      }
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const fetchDataLoader = new FetchDataLoaderStrategy();
  
    fetchDataLoader.loadAuthors()
      .then((authors: Author[]) => {
        console.log(authors);
      })
      .catch((error) => {
        console.error('Błąd pobierania danych:', error);
      });
  });