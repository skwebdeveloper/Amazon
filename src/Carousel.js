import React from 'react'

function Carousel() {
    return (
        <React.Fragment>
            
<div id="myCarousel" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner">
      <div className="item active">
        <img className="home__img" src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="Los Angeles" style={{ width:"100%;" }} />
      </div>

      <div className="item">
        <img className="home__img" src="https://images.unsplash.com/photo-1561053720-76cd73ff22c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Chicago" style={{ width:"100%;" }} />
      </div>
    
      <div className="item">
        <img className="home__img" src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="New York" style={{ width:"100%;" }} />
      </div>
    </div>
    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
      <span className="glyphicon glyphicon-chevron-left"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="right carousel-control" href="#myCarousel" data-slide="next">
      <span className="glyphicon glyphicon-chevron-right"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>

        </React.Fragment>
    )
}

export default Carousel
