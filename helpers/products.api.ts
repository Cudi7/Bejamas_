const fetchNewPage = async (newPage: number) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const fetchResponse: Response = await fetch(
      `https://technical-frontend-api.bokokode.com/api/products?page=${newPage}`,
      options
    );
    const { data } = await fetchResponse.json();
    return data.data?.filter((el: { featured: any }) => !el.featured);
  } catch (e) {
    console.error(e);
  }
};

const handleFetchByFilter = async (filters: string[]) => {
  //todo comprobar que pasacuando filters esta vacío, si está vacío hacer un fetch de todo
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      categories: filters,
    }),
  };

  try {
    const fetchResponse: Response = await fetch(
      `https://technical-frontend-api.bokokode.com/api/products`,
      options
    );
    const { data } = await fetchResponse.json();

    return data.data;

    // return data.data?.filter((el: { featured: any }) => !el.featured);
  } catch (e) {
    console.error(e);
  }
};

export { fetchNewPage, handleFetchByFilter };
