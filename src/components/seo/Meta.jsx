import Head from "next/head";

const getTitle = (title) => `${title}TOP BODENSERVICE`;

const Meta = ({ title, description, children }) => {
  return (
    <>
      <Head>
        <title>{getTitle(title)}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="_CowYDKB7ja_wVemnK91hOpDSWvVZBpi2wEFOKuzt1U" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        {description && (
          <>
            <meta name="robots" content="index, follow" />
            <meta name="description" content={description} />
            <meta name="og:title" content={getTitle(title)} />
            <meta name="og:description" content={description} />
          </>
        )}
      </Head>
      {children}
    </>
  );
};

export default Meta;
