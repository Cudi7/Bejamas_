import { Data, SortBy } from "../interfaces/product.interface";

const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Content-Type", "application/json");

const initialCategoryData = [
  "people",
  "premium",
  "pets",
  "food",
  "landmarks",
  "cities",
  "nature",
];

const fetchInitialData = async () => {
  const options = {
    method: "POST",
    headers: myHeaders,
  };

  try {
    const fetchResponse: Response = await fetch(
      "https://technical-frontend-api.bokokode.com/api/products",
      options
    );
    const { data } = await fetchResponse.json();

    return data;
  } catch (e) {
    return e;
  }
};

const fetchNewPage = async (
  newPage: number,
  categories: string[],
  sort: SortBy
): Promise<any> => {
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({
      sort,
      categories: categories.length ? categories : initialCategoryData,
    }),
  };

  try {
    const fetchResponse: Response = await fetch(
      `https://technical-frontend-api.bokokode.com/api/products?page=${newPage}`,
      requestOptions
    );
    const { data } = await fetchResponse.json();

    return data;
  } catch (e) {
    console.error(e);
  }
};

export { fetchNewPage, fetchInitialData };
