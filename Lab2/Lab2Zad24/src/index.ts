import { from, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

export function App() {
    const observable = from(
        fetch('http://localhost:9000/error')
            .then(response => {
                if (response.status === 404) {
                    throw new Error('Błąd 404: Nie znaleziono zasobu.');
                }
            })
    );

    observable
        .pipe(
            catchError(error => {
                console.error(error);
                return of(null);
            })
        )
        .subscribe(data => {
            if (data !== null) {
                console.log('Odpowiedź z serwera:', data);
            }
        });
}

App();
