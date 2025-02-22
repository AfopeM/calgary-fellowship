import Image from "next/image";
import {
  Title,
  SubTitle,
  Accordion,
  BibleQuote,
  PrimaryBtn,
  CardWrapper,
  InfiniteCarousel,
  BusinessLocationMap,
} from "@/components";
import HomePageContent from "@/data/homepage.json";

export default function Home() {
  const heroSection = HomePageContent["hero-section"];
  const aboutSection = HomePageContent["about-section"];
  const quoteSection = HomePageContent["quote-section"];
  const ourValueSection = HomePageContent["our-values-section"];
  const locationSection = HomePageContent["location-section"];

  return (
    <>
      {/* HERO SECTION */}
      <header className="relative flex min-h-screen flex-col items-center justify-center text-center">
        {/* Background Image */}
        <Image
          fill
          priority
          src="/hero.jpg"
          className="object-cover"
          alt="Church gathering with people worshiping"
        />

        {/* Dark Overlay */}
        <div
          className="absolute inset-0 bg-black/55 backdrop-blur-sm"
          aria-hidden="true"
        />

        <section className="z-10 mt-32 flex flex-col gap-4 px-10">
          <h1 className="text-5xl font-black tracking-tight text-white capitalize md:text-6xl">
            {heroSection["title"]}
          </h1>
          <p className="mx-auto mb-10 max-w-md text-lg font-light tracking-wide text-white/75 md:max-w-2xl md:text-2xl">
            {heroSection["sub-title"]}
          </p>
          <div className="flex flex-col items-center justify-center gap-4 lg:flex-row">
            <PrimaryBtn
              link="/"
              isLight
              text="What to Expect"
              aria-label="Learn more about what to expect"
            />
            <PrimaryBtn
              link="/"
              isLight={false}
              text="Join Us"
              aria-label="Join our church community"
            />
          </div>
        </section>
      </header>

      {/* MAIN SECTION */}
      <main>
        {/* CHURCH HIGHLIGHT SECTION */}
        <section aria-labelledby="cards-title" className="w-full bg-black">
          <div className="main-width flex flex-col items-center justify-center gap-6 py-24 text-center lg:flex-row lg:justify-between">
            <div className="lg:text-start">
              <SubTitle text={aboutSection["sub-title"]} />
              <Title text={aboutSection.title} isLight />
            </div>
            <div className="max-w-lg text-lg text-gray-500 md:text-2xl lg:text-end">
              {aboutSection.content}
            </div>
          </div>
          <CardWrapper cards={aboutSection.about} />
        </section>

        {/* BIBLE QUOTES SECTION */}
        <section
          className="bg-black py-24 text-white"
          aria-labelledby="bible-quotes-title"
        >
          <div className="main-width flex flex-col justify-between gap-6 text-center lg:flex-row lg:items-center">
            <div className="lg:self-start lg:text-start">
              <SubTitle text={quoteSection["sub-title"]} />
              <Title text={quoteSection.title} isLight />
            </div>
            <div className="lg:text-end">
              <BibleQuote />
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section
          className="main-width my-24 flex flex-col items-center justify-center gap-4 text-center capitalize"
          aria-labelledby="about-title"
        >
          <div>
            <SubTitle text="About Our Church" />
            <Title text="Consectetur Adipiscing Elit" />
          </div>
          <div className="relative my-2 h-80 w-full md:w-3/4">
            <Image
              fill
              src="/hero.jpg"
              className="rounded object-cover"
              alt="Church community gathering"
            />
          </div>
          <div className="mb-4 flex flex-col justify-between gap-6 md:w-3/4 lg:flex-row lg:text-start">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              ut dapibus nunc. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              ut dapibus nunc. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
          </div>
        </section>

        {/* VALUES SECTION */}
        <section
          className="w-full bg-black py-24 text-white"
          aria-labelledby="values-title"
        >
          <div className="main-width flex flex-col items-center gap-4 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
            <div className="mb-6 max-w-lg text-center lg:text-start">
              <SubTitle text={ourValueSection["sub-title"]} />
              <Title text={ourValueSection.title} isLight />
              <p className="mt-4 text-lg text-gray-500">
                {ourValueSection.content}
              </p>
            </div>
            <Accordion accordion={ourValueSection.values} />
          </div>
        </section>

        {/* LOCATION AND TIME SECTION */}
        <section
          className="brand-bg-color flex w-full flex-col gap-8 pb-8"
          aria-labelledby="location-title"
        >
          <h2 id="location-title" className="sr-only">
            Our Fellowship Location
          </h2>
          <BusinessLocationMap />
          <div className="main-width flex flex-col items-center gap-2 text-center lg:flex-row lg:justify-between lg:gap-8">
            <div className="lg:text-start">
              <SubTitle text={locationSection["sub-title"]} isLight isSmall />
              <Title text={locationSection.title} isSmall />
            </div>
            <p className="max-w-md text-2xl font-light text-gray-500 capitalize lg:text-end lg:text-3xl">
              {locationSection.address}
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
