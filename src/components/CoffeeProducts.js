import React from "react";
import '../App.css'
import Card from './Card'


function CoffeeProducts()  {
  
  return (
    <div>
      <div className='cardWrapper'>
                <Card
            title='Vanilla Sweet Cream Cold Brew'
            imageUrl='https://globalassets.starbucks.com/assets/07951b9a7d7d47a2892dfa7a707fd318.jpg?impolicy=1by1_wide_topcrop_630'
            
            calories='110'
           fat='4.5g'
           carbs='23g'
            protein='2g'
            price='555 MKD'
            />
          

        <Card
         title='Salted Caramel Cream Cold Brew'
         imageUrl='https://globalassets.starbucks.com/assets/64da774b521447f690c20290cd4cb29d.jpg?impolicy=1by1_wide_topcrop_630'
         calories='220'
         fat='4.5g'
         carbs='23g'
         protein='2g'
         price='600 MKD'
         
        
        />
        <Card
         title='Vanilla Oatmilk Shaken Espresso'
         imageUrl='https://globalassets.starbucks.com/assets/9a51e00fff1c42e8acb62fcbfcef8838.jpg?impolicy=1by1_wide_topcrop_630'
  
         calories='140'
         fat='4.5g'
         carbs='23g'
          protein='2g'
          price='620 MKD'
        
        />
            </div>
            
            <div className='cardWrapper'>
                <Card
            title='Caramel Macchiato'
            imageUrl='https://globalassets.starbucks.com/assets/58db701349cb48738069e8c912e2b3ac.jpg?impolicy=1by1_wide_topcrop_630'
            
            calories='250'
            fat='7g'
            carbs='37g'
             protein='10g'
             price='620 MKD'
            />

        <Card
         title='Iced Coffee With Milk'
         imageUrl='https://globalassets.starbucks.com/assets/062aac2b949a40e188e832c868803b58.jpg?impolicy=1by1_wide_topcrop_630'
     
         calories='110'
            fat='1.5g'
            carbs='23g'
             protein='2g'
             price='620 MKD'
        />
        <Card
         title='Pumpkin Spice Late'
         imageUrl='https://globalassets.starbucks.com/assets/c3f556afdd4e4a18b96f51135afe2de2.jpg?impolicy=1by1_wide_topcrop_630'
         body='370 Calories 16g Fat 47g Carbs 11g Protein'
         calories='370'
            fat='16g'
            carbs='47g'
             protein='11g'
             price='620 MKD'
        />
            </div>
    </div>
  )
}

export default CoffeeProducts
