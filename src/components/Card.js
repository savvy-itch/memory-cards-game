export default function Card({ card, onClick, openCards }) {
  return (
    <button className="card"
      data-pair={card.pair}
      onClick={onClick}
      disabled={openCards.find(el => el.dataset.pair === card.pair) ? true : false}
    >
      <div className="card-inner">
        <div className="card-back">
          <img src={card.img} alt="card" />
        </div>
        <div className="card-front"></div>
      </div>
    </button>
  )
}