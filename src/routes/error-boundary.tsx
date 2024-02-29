import { useRouteError } from 'react-router-dom';

function ErrorBoundary() {
  const error = useRouteError() as Error;

  return <div>{error.message}</div>;
}

export default ErrorBoundary;
