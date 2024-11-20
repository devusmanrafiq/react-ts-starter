import { useTranslation } from 'react-i18next';

function SignIn() {
  const { t } = useTranslation();
  return <div>{t('sign-in')}</div>;
}

export default SignIn;
