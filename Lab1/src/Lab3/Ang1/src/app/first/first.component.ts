import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: `first.component.html`,
  styleUrls: ['first.component.css']
})

export class FirstComponent implements OnInit {
    
    h1Class? :{};
    zad2Class? :{};
    
    title: string = "Pierwsza wartość przekazana przez komponent";
    ns: string = "";
    isEffectEnable: boolean = true;
    person={
      firstname: "Jacek",
      lastname: 'Pelikan'
    }
    constructor () {}
    ngOnInit(): void {}

    method(){
      return "wartość zwrócona"
    }
    

    onClick(){
      this.title = "Po kliknięciu";
      this.h1Class = {"kliknieta":true, "niekliknieta":true};
      
      
    }
    tosmall(){
      this.h1Class = {"kliknieta":true, "niekliknieta":false};
    }

    nameSurname(){
      return this.ns = this.person.firstname + " " + this.person.lastname;
    }
    bigger(){ 
        if(this.isEffectEnable){
          this.zad2Class = {"powiekszony":true, "przekresloneZielone":false};
          this.isEffectEnable = !this.isEffectEnable;
        }
        else{
          this.zad2Class = {"powiekszony":false, "przekresloneZielone":false};
          this.isEffectEnable = !this.isEffectEnable;  
        }
        
    }
    notbigger(){

      this.zad2Class = {"powiekszony":false, "przekresloneZielone":true};
    }
}
