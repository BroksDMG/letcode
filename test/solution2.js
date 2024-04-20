'use strict';

const lodash = require("lodash")

let lastCallTimestamp = 0;
const handleJSON = (jsonString, saveToFile) => {
    let json;
    // zabezpieczenie żeby funkcja nie była zbyt czesto wywoływana
    // sprawdza roznice pomiedzy now i lastcallTimestamp i przerywa funkcje kiedy roznica jest wieksza niz 1s
    // a  jezeli roznica nie jest wieksza lastcalltimestam jest aktualizowane do aktualnego czasu
    const now = Date.now(); 
    if (now - lastCallTimestamp < 1000) {
    return; 
  }
     lastCallTimestamp = now;

     //pasrowaie JSON na obiekt js 
    try{
        json=JSON.parse(jsonString)
    }catch(error){
        console.error(`Invalid Json:${jsonString}`)
        return
    }

    //// funkcja do normalizowania za pomoca biblioteki lodash
    //
    const normalizeName=(name)=>{
        //zamienia znaki diakrytyczne  (np  "é" na "e")
       name= lodash.deburr(name);
       //usówa z konca i poczatku teksu białe znaki(np spacje)
       name= lodash.trim(name);
       // zwraca zastepione białe znaki (spacje tabulatory) podłogą _
       return name.replace(/\s+/g, "_");
    }
    
    const userName=normalizeName(json.username);
    const fileName=normalizeName(json.filename);
    ///wyodrębnie reszte jsonStringu od usernam i filename za pomocą operatora spread
    const {username,filename,...rest}=json;
    const restJson=rest;
    
   
   
    // Feel free to use console.log() for debugging purposes
    
   //zapisanie pliku funkcja saveToFIle
    saveToFile(userName, fileName, JSON.stringify(restJson));
 

    // Here is an example usage of saveToFile function
    // saveToFile("username", "filename", `{"good":"luck"}`)
}

module.exports = handleJSON

