import React from 'react';
import Quote from '../Components/Quotes/Quote';
import quotesData from '../Components/Quotes/quotes.json'; // Importing quotes data

const QuoteList = () => {
  return (
    <>
        <div className="app">
            <h1>Customer Quotes</h1>
            <div className="quote-list">
                {quotesData.map((quote, index) => (
                <Quote key={index} quote={quote.quote} name={quote.name} />
                ))}
            </div>
        </div>
    </> 
  );
};

export default QuoteList;
