import { Suspense } from 'react';

interface IProps {
  children: React.ReactNode;
}

function WithSuspense({ children }: IProps) {
  return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>;
}

export default WithSuspense;
