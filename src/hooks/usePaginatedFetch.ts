import { useState, useEffect, useMemo, useCallback } from "react";
import { apiService } from "../services/api";
import type { Product } from "../models/Product";

interface UsePaginatedFetchState {
  displayData: Product[];
  loading: boolean;
  error: string | null;
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
}

interface UsePaginatedFetchActions {
  goToPage: (page: number) => void;
  setItemsPerPage: (items: number) => void;
}

export function usePaginatedFetch(
  initialItemsPerPage: number = 10
): UsePaginatedFetchState & UsePaginatedFetchActions {
  const [allData, setAllData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(initialItemsPerPage);

  // Calculate derived state
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Get current page data for display
  const displayData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return allData.slice(startIndex, endIndex);
  }, [allData, currentPage, itemsPerPage]);

  // Load initial data
  useEffect(() => {
    const loadInitialData = async () => {
      setLoading(true);
      setError(null);

      try {
        const allProducts = await apiService.fetchAllProducts();
        setAllData(allProducts);
        setTotalItems(allProducts.length);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Failed to fetch initial data";
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    loadInitialData();
  }, []);

  // Go to specific page
  const goToPage = useCallback(
    (page: number) => {
      if (page < 1 || page > totalPages) return;
      setCurrentPage(page);
    },
    [totalPages]
  );

  // Update items per page
  const setItemsPerPageHandler = useCallback((items: number) => {
    setItemsPerPage(items);
    setCurrentPage(1);
  }, []);

  return {
    displayData,
    loading,
    error,
    currentPage,
    totalPages,
    totalItems,
    itemsPerPage,
    goToPage,
    setItemsPerPage: setItemsPerPageHandler,
  };
}
