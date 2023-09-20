import Head from "next/head";

interface HeaderProps {
	title: string;
	description: string;
}

export const Header = (props: HeaderProps): JSX.Element => (
	<Head>
		<title>{props.title}</title>
		<meta content={props.description} name="description" />
		<meta
			content="minimum-scale=1, initial-scale=1, width=device-width"
			name="viewport"
		/>
		<link
			href="/favicons/apple-icon-57x57.png"
			rel="apple-touch-icon"
			sizes="57x57"
		/>
		<link
			href="/favicons/apple-icon-60x60.png"
			rel="apple-touch-icon"
			sizes="60x60"
		/>
		<link
			href="/favicons/apple-icon-72x72.png"
			rel="apple-touch-icon"
			sizes="72x72"
		/>
		<link
			href="/favicons/apple-icon-76x76.png"
			rel="apple-touch-icon"
			sizes="76x76"
		/>
		<link
			href="/favicons/apple-icon-114x114.png"
			rel="apple-touch-icon"
			sizes="114x114"
		/>
		<link
			href="/favicons/apple-icon-120x120.png"
			rel="apple-touch-icon"
			sizes="120x120"
		/>
		<link
			href="/favicons/apple-icon-144x144.png"
			rel="apple-touch-icon"
			sizes="144x144"
		/>
		<link
			href="/favicons/apple-icon-152x152.png"
			rel="apple-touch-icon"
			sizes="152x152"
		/>
		<link
			href="/favicons/apple-icon-180x180.png"
			rel="apple-touch-icon"
			sizes="180x180"
		/>
		<link
			href="/favicons/android-icon-192x192.png"
			rel="icon"
			sizes="192x192"
			type="image/png"
		/>
		<link
			href="/favicons/favicon-32x32.png"
			rel="icon"
			sizes="32x32"
			type="image/png"
		/>
		<link
			href="/favicons/favicon-96x96.png"
			rel="icon"
			sizes="96x96"
			type="image/png"
		/>
		<link
			href="/favicons/favicon-16x16.png"
			rel="icon"
			sizes="16x16"
			type="image/png"
		/>
		<link href="/favicons/manifest.json" rel="manifest" />
		<meta content="#ffffff" name="msapplication-TileColor" />
		<meta content="/ms-icon-144x144.png" name="msapplication-TileImage" />
		<meta content="#ffffff" name="theme-color" />
	</Head>
);
