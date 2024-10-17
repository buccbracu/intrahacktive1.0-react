import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-blue-500 text-white py-4">
      <div className="container mx-auto text-center">
        <p>
          Copyright &copy; 2024
          <Link
            className="text-white text-decoration-none"
            href="https://bracucc.org"
          >
            {" "}
            BUCC
          </Link>{" "}
          | All rights reserved.
        </p>
      </div>
    </footer>
  );
}
