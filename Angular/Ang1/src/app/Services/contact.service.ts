import {HttpClient} from '@angular/common/http'

import {Injectable} from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'


@Injectable({
    providedIn: 'root'
})

export class ContactService {

    private contactsCollectionChange: BehaviorSubject<Contact[]>;
    contacts$: Observable<Contact[]>;

    constructor(private client:HttpClient) {
    this.contactsCollectionChange = new BehaviorSubject([] as Contact
    []);
    this.contacts$ = this.contactsCollectionChange.asObservable();
    }

    filterContactsByLastName(str: string) {
        //let contacts = this.contacts.filter(e => e.lastName.includes(str));
        //this.contactsCollectionChange.next(contacts);
    }
        
    addContact(contact: Contact): void {
        // contact.id = Math.max(...this.contacts.map(c=>c.id))+1;
        // this.contacts.push(contact);
        // this.contactsCollectionChange.next(this.contacts);
    }

    findById(id: number): Contact | undefined {
        return undefined;
        //return this.contacts.find(contact => contact.id == id);
    }

    private toContact(dto:ContactDTO) : Contact {
        return new Contact(dto.id,
        dto.firstName,
        dto.lastName,
        dto.sex,
        new Email(dto.email),
        dto.age
        )
    }

    load() {
        this.client
        .get<ContactDTO[]>("http://localhost:5220/api/contacts")
        .pipe(map(contacts=>contacts.map(this.toContact)))
        .subscribe({next:
        res=>this.contactsCollectionChange.next(res),
        error:
        error=>console.error(error)
        }
        )
    }

    // private contacts: Contact[] = [
    // new Contact(1, "Ala", "Kot", Sex.Female,
    // new Email("ala.kot@przyklad.pl"), 23),
    // new Contact(2, "Tomasz", "Nowak", Sex.Male,
    // new Email("tomasz.nowak@przyklad.pl"), 23),
    // new Contact(3, "Cezary", "Adamski", Sex.Male,
    // new Email("cezary.adamski@przyklad.pl"), 23)
    // ];

        
        

}

type ContactDTO = {
    id:number,
    firstName:string,
    lastName:string,
    age:number,
    sex:number,
    email:string
}
    