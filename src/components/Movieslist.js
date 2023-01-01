import React from 'react'

function Movieslist({moviesList}) {
  
  const formatDurationUnits = value => {
    const unit = value.slice(-1);
    if(unit === 'm') {
      const hrs = Math.round(parseInt(value.slice(0, -1), 10) / 60 * 2)/2;
      return hrs + ' Hrs';
    }
    return value.slice(0, -1) + ' Hrs';
  }

  return (
    <section>
      <ul 
        className='styled w-100 pl-0' 
        data-testid='moviesList'
      >
        {moviesList.map((item, index) => (
          <li 
            className='flex slide-up-fade-in justify-content-between'
            style={{borderBottom: '2px solid var(--primary-color)'}}
            key={index}
          >
            <div className='layout-column w-40'>
                {item.name}
              <h3 className='my-3'></h3>
                {`Ratings: ${item.ratings}/100`}
              <p className='my-0'></p>
            </div>
            <div className='layout-row my-auto mr-20'>
              {formatDurationUnits(item.duration)}
              <p className='justify-content-end'></p>
            </div>
          </li>
      ))}
      </ul>
    </section>
  )
}

export default Movieslist;
