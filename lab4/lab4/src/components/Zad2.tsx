import React from 'react'
import { useState, useEffect } from "react"; 
import { Linki } from "../Model/Links";
import Zad2_1 from "./Zad2_1";
import Zad2_2 from "./Zad2_2";

let _links : Linki[] = [
  new Linki(1, "Github","https://github.com/department-intelligent-computer-systems/Zaawansowane_Programowanie_Internetowe_S/tree/Marcin_Mierzejewski", "black", "System zarządzania treścią"),
  new Linki(2, "Google", "https://www.google.pl/?hl=pl", "black", "wyszukiwarka najbardziej popularna")
]

const Zad2 = () => {
  
  const [displayedLinks, setDisplayedLinks] = useState<Linki[]>([..._links]);
  const [isDescriptionVisible, setIsDescriptionVisible] = useState<boolean>(false);
  const [linkDescription, setLinkDescription] = useState<string>("");
  const [selectedLinkId, setSelectedLinkId] = useState<number>(-1);
  const [isDeleteComponentVisible, setIsDeleteComponentVisible] = useState<boolean>(false);

  const [linkNameForAdd, setLinkNameForAdd] = useState<string>("");
  const [link, setLink] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const [isEditComponentVisible, setIsEditComponentVisible] = useState<boolean>(false);
  const [editValue, setEditValue] = useState<string>("");



  const toggleLinkSelection = (link: Linki) => {
    const updatedLinks = displayedLinks.map((item) => {
      item.color = "black"; // usunąć tą linijkę do wielokrotnego wyboru
      if (item.id === link.id) {
        //return { ...item, color: 'red' };
        item.color = "red";
      }
      return item;
    });
    setDisplayedLinks(updatedLinks);
  };

  const DeleteItem = () => {
    const updatedLinks = displayedLinks.splice(selectedLinkId, 1);
    setIsDeleteComponentVisible(false); // Jeśli to jest związane z widokiem usuwania
    setIsDescriptionVisible(false); // Jeśli to jest związane z widokiem opisu
    setLinkDescription("");
    setSelectedLinkId(0); 
    setDisplayedLinks(updatedLinks);
  }

  const AddElement = async () => {
    const element = new Linki(displayedLinks.length + 1, linkNameForAdd, link, "black", description);
    const newList = [...displayedLinks, element];
    setDisplayedLinks(newList);
    setLinkNameForAdd("");
    setLink("");
    setDescription("");
   
  }

 const EditSelectedLink = (link: Linki) => {
    const updatedLinks = displayedLinks.map((item) => {
      if (item.id === link.id) {
        //return { ...item, color: 'red' };
        item.adres = editValue;
      }
      return item;
    });
    setDisplayedLinks(updatedLinks);
    setEditValue("");
    setIsEditComponentVisible(false);
  };



 

  return (
    <div>
      <p>Zadanie 2 - Lista ulubionych linków</p>
      <ul>
      {displayedLinks.map((item : Linki, index : number) => (
        <li key={index} onClick={() => {toggleLinkSelection(item); setIsDescriptionVisible(true); setLinkDescription(item.description); setSelectedLinkId(index)} } style={{
          color: item.color
        }}>{item.adres}
        { selectedLinkId === index && isDescriptionVisible === true ? (<div><Zad2_1 linkDescription={linkDescription}/> <button onClick={() => {setIsDeleteComponentVisible(true)}}>Usuń</button><button onClick={() => {setIsEditComponentVisible(true); setEditValue(item.adres)}}>Edytuj</button></div>) : null}
        { selectedLinkId === index && isDeleteComponentVisible && <Zad2_2 deleteItem={DeleteItem}/>}
        { selectedLinkId === index && isEditComponentVisible && (
          <>
          <input type="text" id="editValue" onChange={(e) => {setEditValue(e.target.value)}} value={editValue}/>
          <button onClick={() => {EditSelectedLink(item)}}>zapisz</button>
          </>
        )}
        </li>
      ))}
      </ul>

      <form>
        <input type="text" id="linkNameForAdd" onChange={(e) => {setLinkNameForAdd(e.target.value)}} value={linkNameForAdd} placeholder="Nazwa linku"/>
        <input type="text" id="link" onChange={(e) => {setLink(e.target.value)}} value={link} placeholder="link adress"/>
        <input type="text" id="linkDescription" onChange={(e) => {setDescription(e.target.value)}} value={description} placeholder="opis linka"/>
        <button onClick={(e) => {e.preventDefault(); AddElement();}}>Dodaj</button>
        <button onClick={(e) => {e.preventDefault(); setLinkNameForAdd(""); setLink(""); setDescription("")}}>Anuluj</button>
      </form>

    </div>
  )
}

export default Zad2