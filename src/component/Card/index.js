import './index.modules.css'

const Card = ({ art }) => {
  return (
    <div className='wrapper'>
      {art?.map(({ image, title, price, id, desc }) => {
        return (
          <div className='card-container' key={id}>
            <img alt='article' src={image} />
            <span className='title'>{title}</span>
            <span className='desc'>{desc}</span>
            <span> <strong>€{price}</strong> / night</span>
          </div>
        )
      })}
    </div>
  )
}

export default Card
