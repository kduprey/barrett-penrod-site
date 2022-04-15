import Head from "next/head";
type Props = {
  title: string;
  description: string;
};

const Header = (props: Props) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
    </Head>
  );
};

export default Header;
