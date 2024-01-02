import Link from 'next/link';

export default function FormHeader() {
  return (
    <nav>
      <div className="header">
        <div className="header__logo">
          <Link href="/">
            <img
              src="./hooclean-logo.png"
              alt="logo"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}
