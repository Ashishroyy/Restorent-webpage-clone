import React,{useState} from 'react';
import './Style.css';
import MenuApi from '../MenuApi';
import MenuCard from './MenuCard';
import Navbar from './Navbar'

const uniquelist = [
  ...new Set(
    MenuApi.map((curElem)=> {
  return curElem.category;
})
),
"All",
];
console.log(uniquelist);

 const Restorent = () => {
     const [menuData, setMenuData] = useState(MenuApi);
     const [menulist, setmenulist] = useState(uniquelist);
    
     const filteritem = (category) => {
       if(category=== 'All'){
         setMenuData(MenuApi);
         return;
       }
        const updatedList= MenuApi.filter((curElem)=>{
          return curElem.category===category;
        })
        setMenuData(updatedList);
     };
    
  return (
    <>
     <Navbar filteritem={filteritem} menulist={menulist} />
      <MenuCard menudata={menuData}/>
     
    </>
  )
}

export default Restorent;