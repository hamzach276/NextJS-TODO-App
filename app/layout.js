export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Document</title>
      </head>
      <body>
        <h1>Hamza ToDo App(NextJS 13)</h1>
        {children}
      </body>
    </html>
  );
}
