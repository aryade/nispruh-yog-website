import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Nispruhyog – A Quiet Practice',
  description: 'Read our terms and conditions for using the Nispruhyog website and services.',
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
