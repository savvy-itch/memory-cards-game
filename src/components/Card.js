export default function Card({ card, onClick, openCards }) {
  return (
    <button className="card"
      data-pair={card}
      onClick={onClick}
      disabled={openCards.find(el => el.dataset.pair === card) ? true : false}
    >
      <div className="card-inner">
        <div className="card-back"></div>
        <div className="card-front">
          {card}
        </div>
      </div>
    </button>
  )
}