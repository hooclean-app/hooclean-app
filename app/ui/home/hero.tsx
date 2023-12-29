import Search from '@/app/ui/home/search';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero__text">
        <h1 className="hero__title">HooClean</h1>
        <p className="hero__subtitle">
          The best cleaning service in Charlottesville, Virginia
        </p>
        <Search />
      </div>
      <div className="hero__image__container">
        <div className="hero__image">
          <img
            src="./hero-image.png"
            alt="hero"
          />
        </div>
      </div>
    </div>
  );
}
