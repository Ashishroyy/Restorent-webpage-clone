import React from 'react'

const MenuCard = ({menudata}) => {
  return (
    <>
    <section className='main-card-container'>
      
        {menudata.map((curElem) => {
          const{id, name, category, image, description} = curElem;
         return(
                <>
                <div className='card-container' key={id}>
                <div className="card">
                    <div className="card-body">
                            <span className="card-number card-circle subtle">{id}</span>
                            <span className="card-author subtle">{category}</span>
                            <h2 className="card-title">{name} </h2>
                            <span className="card-description subtle">
                                {description}
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                 Cumque quas,fugit.
                            </span>
                            <div className="card-read">Read</div>
                    </div>
                    <img src={image} alt="images" className="card-media" />
                    <span type='button' className="order-tag">Order now</span>
                </div>
            </div>  
            </>
            );
        })}
    </section>
           
    </>
  );
};

export default MenuCard;