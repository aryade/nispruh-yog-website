import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Nispruhyog – A Quiet Practice',
  description: 'Learn how we collect, use and protect your personal information at Nispruhyog.',
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
