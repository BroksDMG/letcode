


import React, { useState } from 'react';
 
type MenuItem = {
  title: string,
  subItems?: Array<string>
}
 
type MenuConfig = Array<MenuItem>
 
type Props = {
  menuConfig: MenuConfig
}
 
const Menu: React.FC<Props> = ({ menuConfig }) => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
 
  const handleItemClick = (title: string) => {
    if (title === expandedItem) {
      setExpandedItem(null);
    } else {
      setExpandedItem(title);
    }
  };
 
  const renderSubItems = (subItems?: Array<string>, title?: string) => {
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