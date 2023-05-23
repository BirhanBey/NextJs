import Link from 'next/link';
import { slug } from '@/helpers';

const Index = ({ cocktails }) => {
  return (
    <div>
      <h1>Retrieving cocktails with Client Side Rendering</h1>
      <h2>CONS</h2>
      <ol>
        <li>if cocktailapi down =&gt; no cocktails</li>
        <li>10.000 users =&gt; 10.000 api calls (no caching)</li>
      </ol>
      <h2>PROS</h2>
      <ol>
        <li>no loading UI</li>
        <li>fetch handled by server : faster</li>
        <li>SEO !!! page got all the html on pageload</li>
      </ol>

      <div className="cocktails">
        {cocktails.loading && <p>Loading...</p>}
        {cocktails.map(({ idDrink, strDrinkThumb, strDrink }) => (
          <article key={idDrink}>
            <Link href={`/ssr/detail/${idDrink}-${slug(strDrink)}`}>
              <img src={strDrinkThumb} alt={strDrink} />
              <p>{strDrink}</p>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const response = await fetch(
    'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
  );
  const { drinks: cocktails } = await response.json();
  return {
    props: {
      cocktails,
    },
  };
}

export default Index;
