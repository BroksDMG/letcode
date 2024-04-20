


import React, { useState } from 'react';
//------------------------------------------------------------------------------------------
 //definiowanie interfejsu menuItem z określeniem struktury\                             //
 //obiekt musi miec title który jest stringiem                                           //
 //i opcjonalnie subItem który jest tablicą stringów                                     //    
type MenuItem = {                                                                        //
  title: string,                                                                         //
  subItems?: Array<string>                                                               // 
}                                                                                        // POLECENIE 2
 //interfejs który jest tabvlicą objektów MenuItem                                       //   
type MenuConfig = Array<MenuItem>                                                        //
 //okresla strukture typu Props który skłąda sie z obiektu menukonfig z typem MenuConfig //
type Props = {                                                                           //
  menuConfig: MenuConfig                                                                 //
}                                                                                        //
 //-----------------------------------------------------------------------------------------
const Menu: React.FC<Props> = ({ menuConfig }) => {
//okerślenie stanu za pomoca use state z typem string lub null
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
 //metoda wywoływana po kliknięciu w element menu i zmienia wtedy jego stan
 //argumentem jest tytuł z typem string bo to ts
  const handleItemClick = (title: string) => {
    //jeżeli po kliknięciu title jest równy obecnie rozwiniętemu elementowi
    // element zmieni stan i podemnu zostanie zwinięte
    if (title === expandedItem) {
      setExpandedItem(null);
    } else {
    //jeżeli po kliknięciu title nie jest rowny obecnemu tytulowi 
    // element zmieni stan i podmenu zostanie rozwinięte z tytułem kliknietego elementu
      setExpandedItem(title);
    }
  };
 //przyjmuje dwa opcojnalne argumenty subitem jako tablice<string> i title jako sting
  const renderSubItems = (subItems?: Array<string>, title?: string) => {
    //sprawdza czy subItem istnieje i czy ma dlugosc wieksza niz 0 jesli nie zwraca null
    if (!subItems || subItems.length === 0) {
      return null;
    }
    //w jezeli istnieje i jest dluzszy niz 0 funkcja tworzy zmienna 
    //subitemsID z tytułem z łaymi znakami
    const subItemsId = `ul-${title?.toLowerCase()}`;
    //funkcja zwraca element listy ul z atrybutem data-test-id 
    //z wartością subItemsId stworzoną wcześniej?
    return (
      //W elemencie ul za pomocą metody map tworzony jest element li
      
      <ul data-test-id={subItemsId}>
        {subItems.map((item) => (
      //dla każdego elementu tablicy subItems z atrybutem date-test-id
      //którego wartością jest połoczenie title i item w małych literach
      //atrybut key przyjmuje wartosc item tak ajak caly element li
          <li data-test-id={`li-${title?.toLowerCase()}-${item.toLowerCase()}`} key={item}>
            {item}
          </li>
        ))}
      </ul>
    );
  };
 
  return (
    <div className="menu-wrapper">

      {menuConfig.map(({ title, subItems }) => { //tworzy elementy menu na podstawie danych zawartych w przekazanej
      // właściwości menuConfig
        const isExpanded = title === expandedItem; // zmienna true/false jezeli title jest rozny obecnemu elementowi stanu
        const buttonTestId = `button-${title.toLowerCase()}`;// zzmienna z wartością button-title z małymi literami
        const itemTestId = `first-level-${title.toLowerCase()}`;// zmienn a z wartoscia first-level-title z małymi literami
        return (
          // tworzy diva reprezentującego pojedynczy elekment menu  a key uzywan jest do zapewnienia unikalności
          <div  key={title} data-test-id={itemTestId}>
            <div>
              {title //tytuł elementu
              } 

              {subItems && subItems.length > 0 && //warunek sprawdzajacy czy subItem istnieje i czy jest wiekszy od 0
              //jeśli tak wyświetla element button
              (
                //button po kliknieciu wywołuje funkcje handleClick do której przekazywany jest title
                //jezeli isExpended jest true to wyświetla hide w innym wypadku expand
                <button data-test-id={buttonTestId} onClick={() => handleItemClick(title)}>
                  {isExpanded ? 'Hide' : 'Expand'}                                                              
                </button>
              )}
              
            
            </div>
            
            {// jezeli is xpend jest prawdziwe czyli element jest rozwinięty to wywołuje 
            //renderSubItems z argumentami subItems i title co generuje liste podmenu
            isExpanded && renderSubItems(subItems, title)}
          </div>
        );
      })}
    </div>
  );
};
 
export default Menu;
 

















import React, { useState } from 'react';
 
const SideMenu = ({ menuConfig }) => {
  const [expandedItem, setExpandedItem] = useState(null);
 
  const handleItemClick = (title) => {
    if (title === expandedItem) {
      setExpandedItem(null);
    } else {
      setExpandedItem(title);
    }
  };
 
  const renderSubItems = (subItems, title) => {
    if (!subItems || subItems.length === 0) {
      return null;
    }
    const subItemsId = `ul-${title?.toLowerCase()}`;
    return (
      <ul data-test-id={subItemsId}>
        {subItems.map((item) => (
          <li data-test-id={`li-${title?.toLowerCase()}-${item.toLowerCase()}`} key={item}>
            {item}
          </li>
        ))}
      </ul>
    );
  };
 
  return (
    <div className="menu-wrapper">
      {menuConfig.map(({ title, subItems }) => {
        const isExpanded = title === expandedItem;
        const buttonTestId = `button-${title.toLowerCase()}`;
        const itemTestId = `first-level-${title.toLowerCase()}`;
        return (
          <div key={title} data-test-id={itemTestId}>
            <div>
              {title}
              {subItems && subItems.length > 0 && (
                <button data-test-id={buttonTestId} onClick={() => handleItemClick(title)}>
                  {isExpanded ? 'Hide' : 'Expand'}
                </button>
              )}
            </div>
            {isExpanded && renderSubItems(subItems, title)}
          </div>
        );
      })}
    </div>
  );
};
 
export default SideMenu;















// import React, { ReactElement } from 'react';

// type MenuItem = {
//   title: string;
//   subItems?: Array<string>;
// };

// type MenuConfig = Array<MenuItem>;

// function Solution({ menuConfig }: { menuConfig: MenuConfig }): ReactElement {
//   return <div className="menu-wrapper">
//   Implement your solution here
  
//   </div>;
// }

// export default Solution;




import React, { useState } from 'react';
 
interface MenuItem {
  title: string;
  subItems?: string[];
}
 
interface Props {
  menuConfig: MenuItem[];
}
 
const Menu: React.FC<Props> = ({ menuConfig }) => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
 
  const handleItemClick = (title: string) => {
    setExpandedItem(prevState => prevState === title ? null : title);
  };
 
  const renderSubItems = (subItems?: string[], title?: string) => {
    if (!subItems || subItems.length === 0) {
      return null;
    }
    const subItemsId = `ul-${title?.toLowerCase()}`;
    return (
      <ul data-test-id={subItemsId}>
        {subItems.map((item) => (
          <li data-test-id={`li-${title?.toLowerCase()}-${item.toLowerCase()}`} key={item}>
            {item}
          </li>
        ))}
      </ul>
    );
  };
 
  return (
    <div className="menu-wrapper">
      {menuConfig.map(({ title, subItems }) => {
        const isExpanded = title === expandedItem;
        const buttonTestId = `button-${title.toLowerCase()}`;
        const itemTestId = `first-level-${title.toLowerCase()}`;
        return (
          <div key={title} data-test-id={itemTestId}>
            <div>
              {title}
              {subItems && subItems.length > 0 && (
                <button data-test-id={buttonTestId} onClick={() => handleItemClick(title)}>
                  {isExpanded ? 'Hide' : 'Expand'}
                </button>
              )}
            </div>
            {isExpanded && renderSubItems(subItems, title)}
          </div>
        );
      })}
    </div>
  );
};
 
export default Menu;