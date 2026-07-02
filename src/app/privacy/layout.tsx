import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Nispruh Yog – A Quiet Practice',
  description: 'Learn how we collect, use, and protect your personal information at Nispruh Yog.',
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
