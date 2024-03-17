import './Card.css'
const Card = ({imagePath,category,price,title,prop}) => {
  return (
    <div className='card'>
                <img src={imagePath} className='img'/>
                <div className='category-price'>
                    <div className='category'>
                        <h6>{category}</h6>
                    </div>
                    <h1>${price}</h1>
                </div>
                <div className='title'>
                {title}
                </div>
                <div className='details'>
                    <div className='line'>
                        <h2>Bedrooms: <span>{prop.Bedrooms}</span></h2>
                        <h2>Bathrooms: <span>{prop.Bathrooms}</span></h2>
                    </div>
                    <div className='line'>
                        <h2>Area: <span>{prop.Area}</span></h2>
                        <h2>Floor: <span>{prop.Floor}</span></h2>
                    </div>
                    <div className='line'>
                        <h2>Parking: <span>{prop.Parking}</span></h2>
                    </div>
                </div>
                <div className='divider'></div>
                <a className='button'>Schedule a visit</a>
            </div>
  )
}

export default Card