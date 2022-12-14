import type { InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { useProducts } from "../src/contexts/products.context";
import { fetchInitialData } from "../src/helpers/products.api";
import { Data } from "../src/interfaces/product.interface";
import Actions from "../src/components/Actions";
import Featured from "../src/components/Featured";
import Header from "../src/components/Header";
import Hero from "../src/components/Hero";
import Navbar from "../src/components/Navbar";
import Products from "../src/components/Products";

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (
  props
) => {
  const { setCurrentData } = useProducts();

  useEffect(() => {
    setCurrentData(props);
  }, []);

  return (
    <div className="container mx-auto  max-w-[1291px] ">
      <Head>
        <title>Bejamas_</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className=" h-[5.5rem] w-full px-[33px] xl:h-[7.5rem] xl:px-0">
        <Navbar />
      </header>
      <div id="divier" className="  border-b-4 bg-[#E4E4E4] px-0"></div>
      <main className="px-[15px] xl:px-0">
        <Hero />
        <Featured />
        <div id="divier" className="  border-b-4 bg-[#E4E4E4] px-0"></div>
        <section>
          <Header />
          <div className="mt-[27px] flex  lg:mt-[69px]">
            <Actions />
            <Products />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const dataProps: Data = await fetchInitialData();

  return {
    props: dataProps,
  };
}
