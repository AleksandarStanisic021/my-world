import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>WELCOME HOME</h1>
      <p>About Home</p>
      <ul style={{ listStyleType: "none" }}>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/products">Products</Link>
        </li>
      </ul>
      <Link href="/articles/news123?lang=en">Read english</Link>
      <Link href="/articles/news123?lang=fr">Read france</Link>
    </>
  );
}
