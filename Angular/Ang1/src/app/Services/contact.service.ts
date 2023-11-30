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


}