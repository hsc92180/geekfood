import './Quote.css'

const Quote = ({ quote, name }) => {
    return (
      <>
      <div className='box'>      
      <div className="quote">
        <blockquote>{quote}</blockquote>
        <p>{name}</p>
      </div>
      </div>
      </>
    );
  };
  
  export default Quote;