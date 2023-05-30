import { useTranslation } from '../helpers';

const Translation = () => {
  const t = useTranslation();
  return (
    <>
      <p>url http://localhost:3000/(tr or fr or en or nl)/translation</p>
      <h1>{t('welcome')}</h1>
      <button>{t('cta')}</button>
    </>
  );
};

export default Translation;
