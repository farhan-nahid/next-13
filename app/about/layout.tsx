export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <p>About Page</p>
      <body>{children}</body>
    </>
  );
}
