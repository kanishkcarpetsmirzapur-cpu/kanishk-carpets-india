import "./globals.css";

export const metadata = {
  title: "KANISHK CARPETS",
  description: "Luxury Handmade Rugs & Carpets",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}