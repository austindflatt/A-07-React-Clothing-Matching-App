import React, { useState } from 'react';
import Item from './components/Item';
import clothingData from './Data';

// Gives us a full outfit
const getOutfit = (dressCode) => {

  // 1. filterOut all elements that dont belong to the dress code.
  const dressCodeFiltered = clothingData.filter(item => item.dressCode === dressCode);

  // 2. Split them based on their type (top, bottom, or shoes.
  const topList = dressCodeFiltered.filter(item => item.type === 'top');
  const bottomList = dressCodeFiltered.filter(item => item.type === 'bottom');
  const shoesList = dressCodeFiltered.filter(item => item.type === 'shoes');

  // 3. Select one from each of those at random.

  return {
    top: topList[Math.floor(Math.random() * topList.length)],
    bottom: bottomList[Math.floor(Math.random() * bottomList.length)],
    shoes: shoesList[Math.floor(Math.random() * shoesList.length)]
  }
};

const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const selectOutFitBasedOnWeekday = (weekday) => {
  
  switch (weekday) {
    case 'Saturday':
      return getOutfit('casual');
      break;

    case 'Sunday':
      return getOutfit('sport');
      break;
      
      default:
      return getOutfit('formal');
      break;
  }
};

const App = () => {

  const d = new Date();
  let day = weekday[d.getDay()]

  const [selectedOutfit, setSelectedOutfit] = useState(selectOutFitBasedOnWeekday(day));

  return (
    <div 
    style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}
    >
      <div>
      {d.toDateString()}
      </div>
      <div>
        Good morning this is what we recommend you wear today:
      </div>
      <Item
        description={selectedOutfit.top.description}
        type={selectedOutfit.top.type}
        itemImage={selectedOutfit.top.imageUrl}
      />
      <Item
        description={selectedOutfit.bottom.description}
        type={selectedOutfit.bottom.type}
        itemImage={selectedOutfit.bottom.imageUrl}
      />
      <Item
        description={selectedOutfit.shoes.description}
        type={selectedOutfit.shoes.type}
        itemImage={selectedOutfit.shoes.imageUrl}
      />

      <button style={{margin: '20px'}}
        onClick={ () => {
          setSelectedOutfit(selectOutFitBasedOnWeekday(day))
        }}
      >Try Again</button>
      <button style={{margin: '20px'}}
        onClick={ () => {
          setSelectedOutfit(getOutfit('formal'))
        }}
      >Formal</button>
      <button style={{margin: '20px'}}
        onClick={ () => {
          setSelectedOutfit(getOutfit('casual'))
        }}
      >Casual</button>
      <button style={{margin: '20px'}}
        onClick={ () => {
          setSelectedOutfit(getOutfit('sport'))
        }}
      >Sport</button>
    </div>
  );
};

export default App;