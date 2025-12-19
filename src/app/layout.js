import "./globals.css";

export const metadata = {
  title: "Sienna Curry",
  description: "Sienna Curry's personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
          fetchPriority="high"
        />
        <style dangerouslySetInnerHTML={{ __html: `
          body {
            background-color: #3a7cc3;
            background-image: url('/images/windows-xp-bliss.webp');
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
            min-height: 100vh;
            font-family: "Trebuchet MS", "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Tahoma, sans-serif;
          }
          .banner {
            background-color: #4a90c2;
            background-image: url('/images/bubble-tree-banner.webp');
            background-position: center top;
            background-size: cover;
            border: ridge white 10px;
            border-radius: 10px;
            height: 150px;
          }
          .panel {
            border-radius: 10px 10px 0 0;
          }
          .panel-header {
            background: linear-gradient(to bottom, #245edb 0%, #3f8cf3 9%, #245edb 18%, #245edb 92%, #333 100%);
            border: 2px solid #1B44B8;
            border-radius: 10px 10px 0 0;
            padding: 0.5em 1em;
            color: #FFF;
          }
          .panel-body, .panel-body-beige {
            background: #FFF;
            border: 2px solid #1B44B8;
            border-top: none;
            padding: 1em;
          }
        `}} />
      </head>
      <body className="min-h-screen p-4 md:p-8">
        {children}
      </body>
    </html>
  );
}