export class Author {
    static authorData: Author[] = [];
    constructor(public _id:number, public _firstname:string, public _lastname:string, public _email:string, public _ObjectCounter:number) {
        const emailPattern = /^[^@]+@[^.]+\..+$/i;
        
        Author.authorData.push(this);}

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