import Head from 'next/head';
import Script from 'next/script';
import { useState } from 'react';
import Button from '@/components/Button/Button';

const index = () => {
  const [color, setColor] = useState('#000');
  const getRandomColor = () => {
    setColor(randomColor());
  };
  return (
    <div>
      <Head>
        <title>HomePage</title>
      </Head>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/randomcolor/0.6.1/randomColor.js"
        onLoad={getRandomColor}
      />
      <h1>Home</h1>
      <button onClick={getRandomColor}>Get new color</button><br />
      <Button>Click me</Button>
      <Button active>Click me</Button>
      <Button disabled>Click me</Button>
      <Button secondary>Click me</Button>

      <p style={{ backgroundColor: color }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet provident
        dolores iste ab obcaecati eos.
      </p>
    </div>
  );
};

export default index;
