import "../styles/globals.scss";
import Head from "next/head";
import { AppProps } from "next/app";
import { MainLayout } from "../components/main-layout/main-layout.module";
import { DefaultRouter } from "../components/default-router/default-router";
import Script from "next/script";

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<DefaultRouter>
			<Script
				strategy="lazyOnload"
				id="mother-dear-google-tag-manager"
				src={`https://www.googletagmanager.com/gtag/js?id=G-5Y4E26L9M6`}
			/>

			<Script strategy="lazyOnload" id="mother-dear-google-analytics-inline">
				{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-5Y4E26L9M6', {
              page_path: window.location.pathname,
              });
          `}
			</Script>
			<Head>
				<title>Zambara</title>
				<link rel="icon" type="image/png" href="/zambara-logo.jpeg" />
				<meta property="og:url" content="https://zambara.co" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Zambara" />
				<meta property="og:description" content={`LLC ZAMBARA`} />
				<meta
					property="og:image"
					content="https://mother-dear.com/images/poster.png"
				/>
			</Head>

			<MainLayout>
				<Component {...pageProps} />
			</MainLayout>
		</DefaultRouter>
	);
};

export default App;
