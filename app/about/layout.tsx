import { ReactNode } from 'react';

type AboutLayoutProps = {
  children: ReactNode;
};

function AboutLayout({ children }: AboutLayoutProps): JSX.Element {
  return (
    <div>
      <h1>THIS IS THE ABOUT LAYOUT</h1>
      {children}
    </div>
  );
}

export default AboutLayout;
