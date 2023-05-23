import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { slug } from '../../helpers';

const Index = () => {
  const [cocktails, setCocktails] = useState({
    loading: false,
    data: [],
  });

  useEffect(() => {
    (async () => {
      setCocktails({ loading: false, data: [] });
      const response = await fetch(
        'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
      );
      const { drinks: data } = await response.json();
      setCocktails({ loading: false, data });
    })();
  }, []);

  return (
    <div>
      <h1>Retrieving cocktails with Client Side Rendering</h1>
      <h2>CONS</h2>
      <ol>
        <li>seo: cocktaillist not indexed by google</li>
        <li>every page refresh dat is retrieved</li>
        <li>if cocktail-api down =&gt; no cocktails</li>
        <li>visual loading / it takes time</li>
      </ol>
      <h2>PROS</h2>
      <ol>
        <li>vercel hosting not overloaded</li>
        <li>data always accurate / up to date</li>
      </ol>
      {cocktails.data.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className="cocktails">
          {cocktails.loading && <p>Loading...</p>}
          {cocktails.data &&
            cocktails.data.map(({ idDrink, strDrinkThumb, strDrink }) => (
              <article key={idDrink}>
                <Link href={`/csr/detail/${idDrink}-${slug(strDrink)}`}>
                  <img src={strDrinkThumb} alt={strDrink} />
                  <p>
                    {strDrink} ({idDrink})
                  </p>
                </Link>
              </article>
            ))}
        </div>
      )}
    </div>
  );
};

export default Index;
