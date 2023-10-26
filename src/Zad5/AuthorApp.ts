import { Author } from "../models/Author";
export class AuthorApp {
    private authors: Author[] = [];

    async fetchAuthors() {
        try {
            const response = await fetch('../build/data.json'); 
            if (!response.ok) {
                throw new Error('Błąd pobierania danych z serwera.');
            }
            const data = await response.json();

            if (Array.isArray(data)) {
                this.authors = data.map((authorData: any) => new Author(authorData.id, authorData.firstname,authorData.lastname,authorData.email));
            } else {
                console.error('Nieprawidłowy format danych.');
            }
        } catch (error) {
            console.error('Wystąpił błąd podczas pobierania danych:', error);
        }
    }

    displayAuthors() {
        console.log('Lista autorów:');
        this.authors.forEach((author) => {
            console.log(`Firstname: ${author.firstname}, Lastname: ${author.lastname}}`);
        });
    }

    async run() {
        await this.fetchAuthors();
        this.displayAuthors();
    }
}
const app = new AuthorApp();
app.run();
