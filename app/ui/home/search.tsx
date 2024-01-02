'use client';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default function Search() {
  const handleClick = () => {
    console.log('clicked');
    redirect('#pricing');
  };
  return (
    <div className="home__search">
      <input
        type="text"
        placeholder="Search"
        className="search__input"
      />
      <Link href="/auth/register-user">
        <button
          className="search__button"
          onChange={handleClick}
        >
          Search
        </button>
      </Link>
    </div>
  );
}
