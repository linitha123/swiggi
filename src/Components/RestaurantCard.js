

function RestaurantCard(props){
let {name,costForTwo,avgRating,cloudinaryImageId,locality} = props.list.info

let frontUrl = 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/'
let url= `${frontUrl}${cloudinaryImageId}`
    return (
      
        <div className="card-container">
        <img className='card-image' src={url} alt='image'/>
         <h4>{name}</h4>
          <p>{avgRating}</p>
          <p> {costForTwo}</p>

          <p>{locality}</p>
        </div>
    )
}
export default RestaurantCard

