import React from 'react';
import { slug } from '@/helpers';

const Detail = ({ cocktail }) => {
  return (
    <>
      <h1>Detail of Cocktail using SSG</h1>
      {cocktail?.strDrink && (
        <>
          <h2>
            {cocktail.strDrink} - {cocktail.idDrink}
          </h2>
          <div
            style={{
              display: 'flex',
              gap: '2rem',
              marginTop: '2rem',
              justifyContent: 'center',
            }}
          >
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

export async function getStaticPaths() {
  const response = await fetch(
    'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
  );
  const { drinks: cocktails } = await response.json();

  return {
    paths: cocktails.map((c) => ({
      params: {
        slug: `${c.idDrink}-${slug(c.strDrink)}`,
      },
    })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const id = params.slug.split('-')[0];
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  const { drinks } = await response.json();
  return {
    props: {
      cocktail: drinks[0],
    },
  };
}

export default Detail;
