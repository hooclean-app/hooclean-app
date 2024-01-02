import Link from 'next/link';

export default function Header() {
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
        <div className="header__menu">
          <ul>
            <li className="nav__link">
              <Link href="#how__works">How it works</Link>
            </li>
            <li className="nav__link">
              <Link href="#services">Services</Link>
            </li>
            <li className="nav__link">
              <Link href="#pricing">Pricing</Link>
            </li>
            <li className="nav__link">
              <Link href="#contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="header__cta">
          <Link href="/auth/login">
            <button>Sign in </button>
          </Link>
          <Link href="/auth/register-client">
            <button>Sign up</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
