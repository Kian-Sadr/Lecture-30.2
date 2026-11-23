const { useState } = React;
const root = ReactDOM.createRoot(document.getElementById("root"));

function Movie() {

   return (
      <>
         <h1>Favorite Movie</h1>
         <p>
            {title}, {rating}, {releaseYear}
         </p>
         <button onClick={changeMovie}>
            Change Movie
         </button>
      </>
   );
}

root.render(<Movie/>);