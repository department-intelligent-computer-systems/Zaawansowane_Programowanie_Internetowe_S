import { Article } from './Article';
import { Author } from './Author';
import { Blog } from './Blog';
export function TabelaAutor() {
  
    const tabela = document.createElement("table");
    tabela.border = '1';
  
    const header = tabela.createTHead();
    const headerRow = header.insertRow();
  
    
    for (const key in AutorTabela[0]) {
      const th = document.createElement('th');
      th.innerHTML = key;
      headerRow.appendChild(th);
    }
  
    const tableBody = tabela.createTBody();
  
   
    AutorTabela.forEach(author => {
      const bodyRow = tableBody.insertRow();
      for (const key in author) {
        const cell = bodyRow.insertCell();
        cell.innerHTML = author[key];
      }
    });
  
    document.body.appendChild(tabela);
  }
export function ListaAutor() {
    const ul = document.createElement('ul');

    const items = AutorLista.split(',');
    items.forEach(item => {
       const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
    });


        document.body.appendChild(ul);
        }
export function JsonAutor() {
    const json = document.createElement('json');
    json.textContent = AutorJson;
    document.body.appendChild(json);
}
    let today = new Date();
    console.log(today);
    let artykuł:Article = new Article(1,"Pierwszy artykuł","To jest treść pierwszego artykułu", today,[],1);
    
    let Autor:Author = new Author(1,"Jan","Kowalski","adamkowalski@gmail.com", 1);
    let Autor2:Author = new Author(2,"Adam","Nowak","adamnowak@yahoo.com", 2);
    //let Autor2:Author = new Author(2,"Adam","Nowak","adamjakiszlymail", 2);
    let blog1: Blog = new Blog(1,"Blog1",Autor,[],1);
    let blog2: Blog = new Blog(2,"Blog2",Autor,[],2);
    //console.log(blog1);
    //console.log(Autor2);
    //console.log(blog2);
    //console.log(artykuł);
    let AutorTabela = Autor.getAuthorTable();
    TabelaAutor();
    let AutorLista = Autor.getAuthorList();
    ListaAutor();
    let AutorJson = Autor.getAuthorJson();
    JsonAutor();

