import Head from 'next/head';
import Script from 'next/script';
import { useState } from 'react';

const About = () => {
  const [color, setColor] = useState('#000');
  const getRandomColor = () => {
    setColor(randomColor());
  };
  return (
    <div>
      <Head>
        <title>About Page</title>
      </Head>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/randomcolor/0.6.1/randomColor.js"
        onLoad={getRandomColor}
      />
      <h1>About Page</h1>
      <button onClick={getRandomColor}>Get new color</button>
      <p style={{ backgroundColor: color }}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
        laboriosam ipsa esse corrupti velit assumenda quo, sequi ratione eum!
        Praesentium!
      </p>
    </div>
  );
};

export default About;
