import { Author } from "./Author";
import { Article } from "./Article";
import { Blog } from "./Blog";
import { IDataType } from "./IDataType";
import { DataHTML } from "./DataHTML";
import { DataPresenter } from "./DataPresenter";
import { DataList } from "./DataList";
import { DataJson } from "./DataJson";
import { Zad4 } from "./Zad4";
import { AutorFileLoader } from "./AutorFileLoader";
import { HowDisplay } from "./HowDisplay";

let author1:Author = new Author(1, "Kamil", "Beza", "sjema@wp.pl");
let author2:Author = new Author(2, "Luki", "Stive", "mis@wp.pl");
let authors:Author[] = [author1, author2]; //dodanie do tablicy autorów

let article1:Article = new Article(1, "Okej", "Tresc", new Date(), []);
let article2:Article = new Article(2, "Witam", "Tresc2", new Date(), []);
let blog1:Blog = new Blog(1, "Blog", author1, []);
blog1.addArticle(article1);
blog1.addArticle(article2);

//console.log(blog1);
//console.log(blog1.getArticle(2));

//Zadanie 3
//let dataType: IDataType = new DataHTML(authors);
//let dataType: IDataType = new DataList(authors);
let dataType: IDataType = new DataJson(authors);
let authorData: DataPresenter = new DataPresenter(dataType);
authorData.showData(document.body);

//Zadanie 4
let zad4 = new Zad4();

//Zadanie 5
const autorFile = new AutorFileLoader();
const authorsFromFile = await autorFile.downloadAuthorUrl('data.json');
console.log(authorsFromFile);

//Zadanie 6
let DataType: IDataType = new DataList(authorsFromFile);
let DataTypePresenter = new DataPresenter(DataType);
DataTypePresenter.showData(document.body);

//Zadanie 7
let DataType3 : IDataType = new DataList(authorsFromFile);
let DataType4 = new DataPresenter(DataType3);
let div = document.createElement("div");
let zad7 = new HowDisplay(DataType4, document.body, authorsFromFile);