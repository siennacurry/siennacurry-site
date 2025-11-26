import "./globals.css";

export const metadata = {
  title: "Sienna Curry",
  description: "Sienna Curry's personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen p-4 md:p-8">
        {children}
      </body>
    </html>
  );
}
