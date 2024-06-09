import '@/app/ui/global.css';

import { inter, dancingScript } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <body className={`${dancingScript.className} antialiased`}>{children}</body>
    </html>
  );
}
