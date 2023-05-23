import Link from 'next/link';
import { slug } from '@/helpers';

const Index = ({ cocktails }) => {
  return (
    <div>
      <h1>Retrieving cocktails with Static Side Generation</h1>
      <h2>CONS</h2>
      <ol>
        <li>existing data could be stale (not up to date)</li>
        <li>New cocktails were not included on build time</li>
      </ol>
      <h2>PROS</h2>
      <ol>
        <li>Data is retrieved only once</li>
        <li>100% cached, except for images</li>
        <li>Speed!</li>
        <li>if api down still cocktails</li>
        <li>SEO optimum</li>
      </ol>

      <div className="cocktails">
        {cocktails.loading && <p>Loading...</p>}
        {cocktails.map(({ idDrink, strDrinkThumb, strDrink }) => (
          <article key={idDrink}>
            <Link href={`/ssg/detail/${idDrink}-${slug(strDrink)}`}>
              <img src={strDrinkThumb} alt={strDrink} />
              <p>{strDrink}</p>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
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
