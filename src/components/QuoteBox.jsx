//import React from 'react'
import "./QuoteBox.css"
const QuoteBox = ({handleChangeQuote, quote}) => {
  console.log(quote)
  return (
    <section className="quoteBox">
        <h1 className="title">Knowing the universe</h1>

        <section>
            <button onClick={handleChangeQuote}>Change the phrase and image </button>
            <article>
                <p className="borderQuote">{quote.phrase}</p>
            </article>
        </section>
        <footer>
            <h4>Author: {quote.author}</h4>
        </footer>
    </section>
  )
}

export default QuoteBox