import { Component } from '@angular/core';

@Component({
  selector: 'app-zadanie21',
  templateUrl: 'zadanie21.component.html',
  styleUrls: ['zadanie21.component.css']
})
export class Zadanie21Component {

  // best way is to add model instead of static objects
  favoriteLinks = [
    { name: 'Google', url: 'https://www.google.com', color: 'black' },
    { name: 'GitHub', url: 'https://www.github.com', color: 'black' },
    { name: 'Stack Overflow', url: 'https://www.stackoverflow.com', color: 'black' }
  ];

  // variables needs to delete elemeny from array
  selectedLink? : any
  indexOfSelectedLink : number = -1; 

  // variables needs to add element to array
  linkName : string;
  linkUrl : string;
  link = {};
  

  // variables to edit data in array
  selectedLinkToEdit? : any;
  linkToEdit = {}
  indexOfSelectedLinkToEdit : number = -1; 

  //variables need to validate fields
  linkError : string 
  urlError : string;

  constructor() {
    this.linkError = "";
  }

  ngOnInit() {

  }

  // two functions needs to delete element
  deleteLink(index : number) {
    this.favoriteLinks.splice(index, 1);
    this.selectedLink = undefined;
    this.indexOfSelectedLink = -1;
  }

  changeLink(link : any, index:number) {
    this.selectedLinkToEdit = undefined;
    this.selectedLink = link;
    this.indexOfSelectedLink = index;
  }

  // two funcitons needs to edit emelent
  changeLinkToEdit(link : any, index:number) {
    this.selectedLink = undefined;
    this.selectedLinkToEdit = link;
    this.indexOfSelectedLinkToEdit = index;
   
  }

  editLink(data: { linkNameToEdit: string, linkUrlToEdit: string }) {
    if (this.indexOfSelectedLinkToEdit >= 0 && this.indexOfSelectedLinkToEdit < this.favoriteLinks.length) {
      this.favoriteLinks[this.indexOfSelectedLinkToEdit].name = data.linkNameToEdit;
      this.favoriteLinks[this.indexOfSelectedLinkToEdit].url = data.linkUrlToEdit;
    }
  }

  // two functions needs to add element to array
  clearForm() {
    this.linkName = "";
    this.linkUrl = "";
    this.linkError = ``;
    this.urlError = ``;
  }

  submit() {
    if(!this.linkName) {
      this.linkError = `Pole "Nazwa strony" jest wymagane`
      if(!this.linkUrl)
        {
          this.urlError = `Pole "link strony" jest wymagane`
        }
      return;
    } else if(!this.linkUrl) {
      this.urlError = `Pole "link strony" jest wymagane`
      if(!this.linkName)
        {
          this.linkError = `Pole "Nazwa strony" jest wymagane`
        }
      return; 
      
    } else {
      this.favoriteLinks.push({name: this.linkName, url: this.linkUrl, color: 'black'});
      this.clearForm();
    }
    
  }



}
