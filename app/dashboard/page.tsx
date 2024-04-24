"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Chart from "chart.js/auto";
import Navbar from "@/app/components/navbar";
import Image from "next/image";

interface Product {
  title: string;
  description: string;
  price: number;
  category: string;
  rating: number;
  brand: string;
  stock: number;
  thumbnail: string;
}

const Dashboard = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [averageRating, setAverageRating] = useState<number>(0);
  const [categoryFilter, setCategoryFilter] = useState<string>("");
  const [brandFilter, setBrandFilter] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredProducts = products.filter((product) => {
    debugger;
    const categoryMatch =
      !categoryFilter || product.category === categoryFilter;
    const brandMatch = !brandFilter || product.brand === brandFilter;
    const searchMatch =
      !searchQuery ||
      product.title.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && brandMatch && searchMatch;
  });

  const getUniqueCategories = () => {
    const categories = products.map((product) => product.category);
    return Array.from(new Set(categories));
  };

  const getUniqueBrands = () => {
    const brands = products.map((product) => product.brand);
    return Array.from(new Set(brands));
  };

  useEffect(() => {
    debugger;
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        const products: Product[] = response.data.products;
        setProducts(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    debugger;
    if (products.length != 0) {
      const ratings = products.map((product) => product.rating);
      const avg =
        ratings.reduce((acc, rating) => acc + rating, 0) / ratings.length;
      setAverageRating(avg);
    }
  }, [products]);

  useEffect(() => {
    if (products.length === 0) return;

    const categories: { [key: string]: number } = {};
    products.forEach((product) => {
      if (categories[product.category]) {
        categories[product.category]++;
      } else {
        categories[product.category] = 1;
      }
    });

    const chartData = {
      labels: Object.keys(categories),
      datasets: [
        {
          label: "Products by Category",
          data: Object.values(categories),
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
        },
      ],
    };

    const ctx = document.getElementById("productChart") as HTMLCanvasElement;
    new Chart(ctx, {
      type: "bar",
      data: chartData,
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, [products]);

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Dashboard Overview</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">
            Average Rating: {averageRating.toFixed(2)}
          </h2>
          <div className="flex flex-col md:flex-row">
            {" "}
            {/* Flex container */}
            <div className="w-full md:w-1/2 lg:pr-4">
              {" "}
              {/* Left column */}
              <canvas
                id="productChart"
                className="h-32"
                style={{ width: "100%" }}
              ></canvas>
            </div>
            <div
              className="w-full md:w-1/2 lg:pl-4 mt-4 md:mt-0"
              style={{ overflowY: "scroll", maxHeight: "589px" }}
            >
              {" "}
              {/* Right column */}
              <input
                className="border border-gray-500 rounded-md p-1"
                type="text"
                placeholder="Search by title"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />{" "}
              <select
                className="border border-gray-500 rounded-md p-1"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                <option value="">All Categories</option>
                {getUniqueCategories().map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>{" "}
              <select
                className="border border-gray-500 rounded-md p-1"
                value={brandFilter}
                onChange={(e) => setBrandFilter(e.target.value)}
              >
                <option value="">All Brands</option>
                {getUniqueBrands().map((category, ind) => (
                  <option key={ind} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Title
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Description
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Category
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Brand
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Stock
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Thumbnail
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((product, index) => (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0
                          ? "bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                          : "bg-gray-100 border-b dark:bg-gray-900 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700"
                      }`}
                    >
                      <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                        {product.title}
                      </td>
                      <td className="px-6 py-4 w-3/5">{product.description}</td>
                      <td className="px-6 py-4">{product.price}</td>
                      <td className="px-6 py-4">{product.category}</td>
                      <td className="px-6 py-4">{product.brand}</td>
                      <td className="px-6 py-4">{product.stock}</td>
                      <td className="px-6 py-4">
                        {/* <img src={product.thumbnail} alt="img" /> */}
                        <Image src={product.thumbnail} 
                        alt="img" 
                        width={100}
                        height={100}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
