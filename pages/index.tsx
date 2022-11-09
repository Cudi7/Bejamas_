import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { handleFetchByFilter } from "../helpers/products.api";
import { Product } from "../interfaces/product.interface";
import Actions from "./components/Actions";
import Featured from "./components/Featured";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

const Home: NextPage = ({ data }) => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [currentData, setCurrentData] = useState(null);
  const [currentFilters, setCurrentFilters] = useState<string[]>([]);

  useEffect(() => {
    if (!products) {
      setProducts(data.data);
    }
    if (!currentData) {
      setCurrentData(data);
    }
  }, [data]);

  useEffect(() => {
    const handleFetch = async () => {
      setProducts(await handleFetchByFilter(currentFilters));
    };

    if (currentFilters.length) handleFetch();
  }, [currentFilters]);

  const handleFilters = (filter: string, isChecked: boolean) => {
    if (isChecked) {
      setCurrentFilters([...currentFilters, filter]);
    }
    if (!isChecked) {
      const newFilters = currentFilters.filter((tag) => tag !== filter);

      setCurrentFilters(newFilters);
    }
  };

  const featuredProduct: Product[] | undefined = products?.filter(
    (el) => el.featured
  );

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
        <Hero featuredProduct={featuredProduct} />
        <Featured featuredProduct={featuredProduct} />
        <div id="divier" className="  border-b-4 bg-[#E4E4E4] px-0"></div>
        <section>
          <Header />
          <div className="mt-[27px] flex  lg:mt-[69px]">
            <Actions handleFilters={handleFilters} />
            <Products products={products} />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;

export async function getStaticProps(): Promise<unknown> {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const fetchResponse: Response = await fetch(
      "https://technical-frontend-api.bokokode.com/api/products",
      options
    );
    const { data } = await fetchResponse.json();

    return {
      props: { data },
    };
  } catch (e) {
    return e;
  }
}
