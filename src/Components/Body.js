import React, { useEffect } from 'react'
import RestaurantCard from './RestaurantCard'
function Body(){
    let [listOfRestaurants,setListOfRestaurants] = React.useState([



    // {
    //     imgUrl : 'https://img.freepik.com/free-photo/front-view-breakfast-table-with-eggs-buns-cheese-fresh-juice-restaurant-during-daytime-food-meal-breakfast_140725-25904.jpg?size=626&ext=jpg&ga=GA1.1.1316105049.1693383838&semt=ais',
    //     title: 'Taj Mahal-Abids',
    //     decription:'North Indian Chinese, South Indian',
    //     rating: 4.4,
    //     price:'300 for two',
    //     time: '22 minutes'
    // },
    // {
    //     imgUrl : 'https://img.freepik.com/free-photo/front-view-breakfast-table-with-eggs-buns-cheese-fresh-juice-restaurant-during-daytime-food-meal-breakfast_140725-25904.jpg?size=626&ext=jpg&ga=GA1.1.1316105049.1693383838&semt=ais',
    //     title: 'Taj Mahal-Abids',
    //     decription:'North Indian Chinese, South Indian',
    //     rating: 4.4,
    //     price:'300 for two',
    //     time: '22 minutes'
    // },
    // {
    //     imgUrl : 'https://img.freepik.com/free-photo/front-view-breakfast-table-with-eggs-buns-cheese-fresh-juice-restaurant-during-daytime-food-meal-breakfast_140725-25904.jpg?size=626&ext=jpg&ga=GA1.1.1316105049.1693383838&semt=ais',
    //     title: 'Taj Mahal-Abids',
    //     decription:'North Indian Chinese, South Indian',
    //     rating: 4.4,
    //     price:'300 for two',
    //     time: '22 minutes'
    // }
    ])
    let [searchInput,setSearchInput] = React.useState('')
    let [filterData,setFilterData] = React.useState([])
    
 useEffect(()=>{
    getData()
  },[])  
    

    let getData = async () =>{
        let fetchData = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
        let fetchResult = await fetchData.json()
        setListOfRestaurants(fetchResult?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
         setFilterData(fetchResult?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      }
   
    return(

      <div>
       
        <div className='search-container'>
        <button className='all-button' onClick={() => {
          getData()
        }}> All </button>
        <input className='input' type='text' value={searchInput} onChange={(e)=> setSearchInput(e.target.value)}/>
        <button onClick={()=> {
         
         let searchInputData = filterData.filter(item => item.info.name.toUpperCase().includes(searchInput.toUpperCase()))
          setListOfRestaurants(searchInputData)
          
        }}> search </button>
        </div>
       
         <button className='filter-button' onClick={()=>setListOfRestaurants(listOfRestaurants.filter(item => item?.info.avgRating>4.2))}>filtered Data</button>
        <div className='body-container'>
     {
        listOfRestaurants.map(item => <RestaurantCard list={item}/>)
     }
    
        </div>
        
         </div>
    )
    
}

export default Body

