import React, { useState } from 'react';
import Image from 'next/image';

const Images = ({ results }) => {
  const [search, setSearch] = useState('');
  return (
    <div>
      <h1>Search for images on Unsplash</h1>
      <form>
        <input
          type="text"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <input type="submit" value="Search Unsplash" />
      </form>
      <section className='images'>
        {results.map(({ id, urls, description, width, height }) => (
            <article key={id}>
            <Image
            width={550}
            height={(height / width) * 550}
            // fill={true}
            key={id}
            quality={80}
            priority={false}
            src={urls.regular}
            alt={description || 'unknown'}
            // sizes='(max-width)'
          />
            </article>
        ))}
      </section>
    </div>
  );
};

export async function getServerSideProps({ query }) {
  let results = [];
  if (query.search) {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?page=1&per_page=30&query=${query.search}&client_id=${process.env.UNSPLASH_ACCESS}`
    );
    const data = await response.json();
    results = data.results;
  }
  return {
    props: {
      results,
    },
  };
}

export default Images;
