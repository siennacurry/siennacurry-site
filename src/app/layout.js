import "./globals.css";

export const metadata = {
  title: "Sienna Curry",
  description: "Sienna Curry's personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://cur.cursors-4u.net" />
        <link
          rel="preload"
          href="/images/windows-xp-bliss.webp"
          as="image"
          type="image/webp"
        />
        <link
          rel="preload"
          href="/images/bubble-tree-banner.webp"
          as="image"
          type="image/webp"
        />
      </head>
      <body className="min-h-screen p-4 md:p-8">
        {children}
      </body>
    </html>
  );
}