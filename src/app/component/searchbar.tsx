import React, { useState, useCallback } from "react";
import { createClient } from "next-sanity";
import { useRouter } from "next/navigation";
import { FaSearch, FaTimes } from "react-icons/fa";
import Image from "next/image";

const client = createClient({
  projectId: "15hm7ok6",
  dataset: "production",
  apiVersion: "2024-01-20",
  useCdn: false,
});

type Product = {
  _id: string;
  title: string;
  price: number;
  discountedPrice: number;
  description: string;
  imageUrl: string;
};

const SearchBar = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [isSearchFocused, setIsSearchFocused] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Debounce function
  const debounce = (func: (query: string) => void, wait: number): ((query: string) => void) => {
    let timeout: ReturnType<typeof setTimeout>;
    return (query: string) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(query), wait);
    };
  };

  // Actual search function
  const performSearch = async (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }
    setIsLoading(true);
    try {
      const sanityQuery = `*[_type == "product" && (title match "*${query}*" || description match "*${query}*")] | order(_createdAt desc)[0...10] {
        _id,
        title,
        price,
        discountedPrice,
        description,
        "imageUrl": productImage.asset->url
      }`;
      const results: Product[] = await client.fetch(sanityQuery);
      setSearchResults(results);
    } catch (error) {
      console.error("Search error:", error);
      setSearchResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  // Debounced search function using useCallback
  const debouncedSearch = useCallback(debounce(performSearch, 300), []);

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    debouncedSearch(query);
  };

  // Handle search form submission
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  // Clear search
  const clearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
  };

  return (
    <div className="relative flex-1 max-w-full sm:max-w-xs mx-4 sm:mx-6">
      <form onSubmit={handleSearchSubmit} className="relative">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
          onFocus={() => setIsSearchFocused(true)}
          className="w-full px-4 py-2 pl-8 pr-10 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500 transition-colors"
        />
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        {searchQuery && (
          <button
            type="button"
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <FaTimes />
          </button>
        )}
      </form>
      {isSearchFocused && (searchResults.length > 0 || isLoading) && (
        <div className="absolute w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
          {isLoading ? (
            <div className="p-4 text-center text-gray-500">Loading...</div>
          ) : (
            searchResults.map((product) => (
              <div
                key={product._id}
                onClick={() => router.push(`/product/${product._id}`)}
                className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b last:border-b-0"
              >
                <div className="flex items-center gap-3">
                  {product.imageUrl && (
                    <Image
                      src={product.imageUrl}
                      alt={product.title}
                      width={48}
                      height={48}
                      className="w-12 h-12 object-cover rounded"
                      priority
                    />
                  )}
                  <div>
                    <h4 className="font-medium text-gray-900">{product.title}</h4>
                    <p className="text-sm text-gray-500 line-clamp-1">{product.description}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;