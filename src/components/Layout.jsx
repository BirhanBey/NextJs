import Link from 'next/link';
import { useRouter } from "next/router";


const Layout = ({ children }) => {
  const { locale, locales, asPath } = useRouter();
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
          <li style={{ fontSize: '20px' }}>
            <Link href="/translation">CTA Translation</Link>
          </li>
        </ul>
      </nav>
      <ol>
        {locales.map((l) => (
          <li key={l}>
            <Link
              className={locale === l ? "active" : ""}
              href={asPath}
              locale={l}>
              {l}
            </Link>
          </li>
        ))}
      </ol>
      {children}
    </main>
  );
};

export default Layout;
