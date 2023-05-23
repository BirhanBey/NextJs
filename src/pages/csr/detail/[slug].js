import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

const Detail = () => {
  const router = useRouter();
  //   const id = slug.split("-")[0];
  const [cocktail, setCocktail] = useState({
    loading: false,
    data: [],
  });
  useEffect(() => {
    (async () => {
      if (router.query.slug) {
        setCocktail({ loading: false, data: {} });
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${
            router.query.slug.split('-')[0]
          }`
        );
        const { drinks: data } = await response.json();
        setCocktail({ loading: false, data: data[0] });
      }
    })();
  }, [router]);
  return (
    <>
      <h1>Detail of Cocktail using CSR</h1>
      {cocktail.loading && <p>LOADING...</p>}
      {cocktail.data && (
        <>  
          <h2>{cocktail.data.strDrink}</h2>
        <div style={{display: "flex", gap: "2rem", marginTop: "2rem" }}>
          <img style={{width: "400px"}} src={cocktail.data.strDrinkThumb} alt={cocktail.data.strDrink} />
          <p style={{fontSize: "24px"}}>{cocktail.data.strInstructions}</p>
        </div>
        </>
      )}
    </>
  );
};

export default Detail;
