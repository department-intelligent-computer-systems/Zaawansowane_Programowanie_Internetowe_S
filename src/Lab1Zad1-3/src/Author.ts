export class Author {
    static authorData: Author[] = [];
    constructor(public _id:number, public _firstname:string, public _lastname:string, public _email:string, public _ObjectCounter:number) {
        const emailPattern = /^[^@]+@[^.]+\..+$/i;
        if(!_firstname){
            throw new Error("Podaj imie");
        }
        else if(!_lastname){
            throw new Error("Podaj nazwisko");
        }
        else if(!_email){
            throw new Error("Podaj email");
        }
        else if(emailPattern.test(_email)==false ){
            throw new Error("Email jest niepoprawny");
        }
        else{
        Author.authorData.push(this);}
}
    getAuthorTable():Author[]{
        return Author.authorData;
    }
    getAuthorList():string{
        const authorList = Author.authorData.map(author => `${author._firstname} ${author._lastname} ${author._email}`).join(', ');
    return authorList;
    }
    getAuthorJson():string{
        let authorJson:string = JSON.stringify(this);
        return authorJson;
    }
}