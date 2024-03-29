import Footer from '@/app/ui/home/footer';
import Header from '@/app/ui/home/header';
import Hero from '@/app/ui/home/hero';

export default async function Home() {
  return (
    <>
      <Header />
      <section className="cover">
        <Hero />
      </section>
      <section
        className="how__works"
        id="how__works"
      >
        <h1 className="hero__title">How it works</h1>
        <p className="hero__subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </p>
      </section>
      <section
        className="services"
        id="services"
      >
        <h1 className="hero__title">Services</h1>
        <p className="hero__subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </p>
      </section>
      <section
        className="pricing"
        id="pricing"
      >
        <h1 className="hero__title">Pricing</h1>
        <p className="hero__subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </p>
      </section>
      <section
        className="contact"
        id="contact"
      >
        <h1 className="hero__title">contact</h1>
        <p className="hero__subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </p>
      </section>
      <Footer />
    </>
  );
}
