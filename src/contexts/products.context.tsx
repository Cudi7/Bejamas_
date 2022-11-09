import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { fetchNewPage } from "../helpers/products.api";
import { Data, DataEntity, SortBy } from "../interfaces/product.interface";

const initialSortData: SortBy = {
  key: "price",
  type: "ASC",
};

interface currentPageInt {
  oldPage: number;
  newPage: number;
}

const useProductsController = () => {
  const [currentData, setCurrentData] = useState<Data | undefined>();
  const [featuredProduct, setFeaturedProduct] = useState<
    DataEntity[] | undefined
  >();
  const [currentCategory, setCurrentCategory] = useState<string[]>([]);
  const [currentSortBy, setCurrentSortBy] = useState<SortBy>(initialSortData);
  const [currentPage, setCurrentPage] = useState<currentPageInt>({
    oldPage: 1,
    newPage: 1,
  });
  const [cartItems, setCartItems] = useState<DataEntity[]>([]);

  useEffect(() => {
    if (!featuredProduct) {
      setFeaturedProduct(currentData?.data?.filter((el) => el.featured));
    }
  }, [currentData]);

  useEffect(() => {
    const handleFetch = async () => {
      const newPage = await fetchNewPage(
        currentPage.newPage,
        currentCategory,
        currentSortBy
      );

      setCurrentData(newPage);
    };

    if (currentPage.oldPage !== currentPage.newPage) handleFetch();
  }, [currentPage]);

  useEffect(() => {
    const handleFilters = async () => {
      const newPage = await fetchNewPage(
        currentPage.newPage,
        currentCategory,
        currentSortBy
      );

      setCurrentData(newPage);
    };

    handleFilters();
  }, [currentSortBy, currentCategory]);

  const handleNewCartItem = (newCartItem: DataEntity) => {
    setCartItems([...cartItems, newCartItem]);
  };

  const handleClearCartItems = (): void => setCartItems([]);

  const handleCategories = (filter: string, isChecked: boolean) => {
    if (isChecked) {
      setCurrentCategory([...currentCategory, filter]);
    }
    if (!isChecked) {
      const newFilters = currentCategory.filter((tag) => tag !== filter);
      setCurrentCategory(newFilters);
    }
  };

  return {
    setCurrentData,
    currentData,
    featuredProduct,
    handleCategories,
    currentCategory,
    currentSortBy,
    setCurrentPage,
    currentPage,
    setCurrentSortBy,
    handleClearCartItems,
    handleNewCartItem,
    cartItems,
  };
};

const ProductsContext = createContext<ReturnType<typeof useProductsController>>(
  {
    setCurrentData: () => {},
    currentData: undefined,
    featuredProduct: undefined,
    handleCategories: () => {},
    currentCategory: [],
    currentSortBy: initialSortData,
    setCurrentPage: () => {},
    currentPage: { oldPage: 1, newPage: 1 },
    setCurrentSortBy: () => {},
    handleClearCartItems: () => {},
    handleNewCartItem: () => {},
    cartItems: [],
  }
);

export const ProductsProvider = ({ children }: { children: ReactNode }) => (
  <ProductsContext.Provider value={useProductsController()}>
    {children}
  </ProductsContext.Provider>
);

export const useProducts = () => useContext(ProductsContext);
