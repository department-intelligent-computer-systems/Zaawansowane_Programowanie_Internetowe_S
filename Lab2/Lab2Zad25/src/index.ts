import { from } from 'rxjs';
import { catchError, retry, map, delay } from 'rxjs/operators';

export function App() {
 

    const observable = from(fetch('http://localhost:9000/error1')).pipe(
        map(response => {
            if (response.status === 500) {
            
                throw new Error('Błąd 500');
            } else {
               
                return response;
            }
        }),
        retry(3),
    );

    observable.subscribe(
        data => {
            console.log('Odpowiedź z serwera:', data);
        },
        error => {
            console.error('Błąd:', error);
        }
    );
}

App();
