const Menu = ({ menuConfig }) => {
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
          c  onst itemTestId = `first-level-${title.toLowerCase()}`;
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