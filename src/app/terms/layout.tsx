import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Nispruh Yog – A Quiet Practice',
  description: 'Read our terms and conditions for using the Nispruh Yog website and services.',
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
