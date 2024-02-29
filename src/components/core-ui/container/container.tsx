interface Props {
  children: React.ReactNode;
}

function Container({ children }: Props) {
  return <div className='mx-auto max-w-screen-3xl'>{children}</div>;
}

export default Container;
