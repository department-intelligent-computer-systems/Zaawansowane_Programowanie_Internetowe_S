import { Author } from "./Author";

export class AutorFileLoader {
    async downloadAuthorUrl(filename) {
        try {
          // Pobranie pliku JSON dzięki fetch
          const response = await fetch(filename);
    
          if (!response.ok) {
            throw new Error('Błąd podczas pobierania pliku.');
          }
    
          // Pobierz dane JSON
          const jsonData = await response.json();
    
          // Przekształć dane JSON na obiekty klasy Author
          const authors = jsonData.map((authorData) => {
            return new Author(authorData.id, authorData.firstName, authorData.lastName, authorData.email);
          });
    
          return authors;
        } catch (error) {
          console.error('Błąd podczas wczytywania pliku:', error);
          return [];
        }
      }
    }