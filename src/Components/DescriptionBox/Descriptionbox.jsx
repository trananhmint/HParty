import React from 'react'
import './DescriptionBox.css'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Descriptionbox = () => {
  return (
    <div className="descriptionbox">
      <div className='descriptionbox-description'>
        <h2>Service Details</h2>
        <hr />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias fugit fugiat consectetur!
          Consequatur soluta quisquam quo dicta nesciunt! Nobis quaerat inventore fugiat laborum porro
          voluptates fugit nam magni, eum maxime. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Officiis eaque dolorem perferendis eius non quasi laborum impedit at neque ad nostrum, numquam illum.
          Cum, repellendus incidunt voluptatum voluptatibus fugiat accusamus! Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Praesentium distinctio fuga cum facere molestias natus modi quis!
          Ullam delectus, maxime neque voluptates tenetur qui, adipisci earum architecto, dolorum tempora aspernatur.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero facilis dignissimos minima officia molestias
          iure optio eligendi atque modi quam natus, quod earum tenetur labore? Minima voluptatum magni harum quisquam.
        </p>

      </div>
      {/* <hr /> */}
      <div className="descriptionbox-facilities">
        <h2>Facilities</h2>
        <hr />
        <div className="facilities">
          <p><CheckCircleIcon/> Wifi free</p>
          <p><CheckCircleIcon/> Non-smoking rooms</p>
          <p><CheckCircleIcon/> Bar</p>
          <p><CheckCircleIcon/> Airport shuttle</p>
          <p><CheckCircleIcon/> Beach front</p>
        </div>
      </div>
    </div>

  )
}

export default Descriptionbox