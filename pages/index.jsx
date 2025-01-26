import Head from "next/head";
import Image from "next/image";
import "tailwindcss/tailwind.css";
import Home from "./home";
import Header from "./components/layout/Header";



export default function Index() {
  return (
    <>
      <div className="">
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header/>
        <Home />
        
      </div>
    </>
  );
}
