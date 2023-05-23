
import React from 'react';

const Detail = ({cocktail}) => {
  return (
    <>
      <h1>Detail of Cocktail using SSR</h1>
      {cocktail && (
    <>
    <h2>
      {cocktail.strDrink} - {cocktail.idDrink}
    </h2>
    <div style={{ display: 'flex', gap: "2rem", marginTop: "2rem",justifyContent:"center" }}>
      <img
        style={{ width: '400px' }}
        src={cocktail.strDrinkThumb}
        alt={cocktail.strDrink}
      />
      <p style={{fontSize: "24px"}}>{cocktail.strInstructions}</p>
    </div>
  </>
)}
    </>
  );
};

export async function getServerSideProps({ params }) {
  const id = params.slug.split('-')[0];
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${ id }`
  );
  const { drinks } = await response.json();
  return {
    props: {
      cocktail: drinks[0],
    },
  };
}

export default Detail;
