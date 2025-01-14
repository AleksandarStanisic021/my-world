import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s ~ My World",
    default: "My World",
    absolute: "",
  },
}; // Page title

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header style={{ background: "lightblue", padding: "1rem" }}>
          <p>header</p>
        </header>
        {children}
        <footer style={{ background: "ghostwhite", padding: "1rem" }}>
          <p>footer</p>
        </footer>
      </body>
    </html>
  );
}
