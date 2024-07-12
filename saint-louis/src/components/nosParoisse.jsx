import data from '../data/paroisse.json'

import Slider from "react-slick";
 import "slick-carousel/slick/slick.css";
 import "slick-carousel/slick/slick-theme.css";

export const Paroisse=()=>{
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 2, // Show 2 slides at a time
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show 1 slide at a time
        },
      },
    ],
  };
  return (
    <div className='paroisse' id='paroisse'>
      <h2>Une paroisse une histoire,<br/>découvrez nos différent paroisse</h2>
        <div className='card-container'>
        <Slider {...settings}>
            {data.map((data)=>(
                  <div className='cards' key={data.index}>
                      <img
                              src={data.image}
                              alt={data.name}
                              className="card-image"
                      />
                      <div className='id-church'>
                          <h3>{data.name}</h3>
                          <p>{data.location}</p>
                      </div>
                  </div>
              ))}
               </Slider>
        </div>
    </div>
  )
}
