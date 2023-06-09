import Head from "next/head";

const getTitle = (title) => `${title} TOP BODENSERVICE`;

const Meta = ({ title, description, children }) => {
  return (
    <>
      <Head>
        <title>{getTitle(title)}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {description ? (
          <>
            <meta name="description" content={description} />
            <meta name="og:title" content={getTitle(title)} />
            <meta name="og:description" content={description} />
          </>
        ) : (
          <>
            <meta name="robots" content="noindex, nofollow" />
          </>
        )}
      </Head>
      {children}
    </>
  );
};

export default Meta;
