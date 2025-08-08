import { useState, useEffect }  from "react";
import Item from "./Item";

const List = () => {
  const [detailItems, setDetailItems] = useState([]);

  useEffect(() => {
   getItems();
  }, []);

  const getItems = async() => {
    const responsee = await fetch('https://dummyjson.com/recipes?limit=5&select=id,name,image,cuisine,rating');
    const data = await responsee.json();
    setDetailItems(data.recipes);
  }

  return (  
    <div className="detail-list-container">
      {detailItems.length && detailItems.map(item => {
        return <Item key={item.id} data={item}></Item>
      })}
    </div>
  )
}

export default List;
