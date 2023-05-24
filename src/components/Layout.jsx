import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <main>
      <nav>
        <ul>
          <li style={{ fontSize: '20px' }}>
            <Link href="/">Home</Link>
          </li>
          <li style={{ fontSize: '20px' }}>
            <Link href="/about">About</Link>
          </li>
          <li style={{ fontSize: '20px' }}>
            <Link href="/csr">Client Side Renderin</Link>
          </li>
          <li style={{ fontSize: '20px' }}>
            <Link href="/ssr">Server Side Renderin</Link>
          </li>
          <li style={{ fontSize: '20px' }}>
            <Link href="/ssg">Static Side Generation</Link>
          </li>
          <li style={{ fontSize: '20px' }}>
            <Link href="/isr">Incremential Static Generation</Link>
          </li>
          <li style={{ fontSize: '20px' }}>
            <Link href="/friends">Knex Friends & Email</Link>
          </li>
          <li style={{ fontSize: '20px' }}>
            <Link href="/images">Unsplash Images</Link>
          </li>
        </ul>
      </nav>
      {children}
    </main>
  );
};

export default Layout;
