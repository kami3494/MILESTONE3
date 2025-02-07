'use client';

import React, { useState, useEffect } from 'react';
import {
  BarChart3,
  ShoppingCart,
  Package,
  Users,
  DollarSign,
  Bell,
  Search,
  Menu,
  X,
  LogOut,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/index'; // Importing Card, CardContent, CardHeader, CardTitle from UI components
import axios from 'axios'; // Axios for API calls

const Dashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  interface Product {
    _id: string;
    title: string;
    price: number;
    stock: number;
  }

  const [products, setProducts] = useState<Product[]>([]);
  const [, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get('/api/getProducts')
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));

    axios
      .get('/api/getOrders')
      .then((response) => setOrders(response.data))
      .catch((error) => console.log(error));
  }, []);

  const metrics = [
    { title: 'Total Revenue', value: '$12,426', icon: DollarSign, trend: '+12%' },
    { title: 'Total Orders', value: '156', icon: ShoppingCart, trend: '+8%' },
    { title: 'Total Products', value: '89', icon: Package, trend: '+5%' },
    { title: 'Total Customers', value: '2,845', icon: Users, trend: '+15%' },
  ];

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username && password) {
      setIsLoggedIn(true);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
        <Card className="w-96 bg-white shadow-lg rounded-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-indigo-600">Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="mt-1 block w-full rounded-md border border-indigo-300 px-3 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full rounded-md border border-indigo-300 px-3 py-2"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
              >
                Sign In
              </button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 rounded-md hover:bg-gray-100 transition duration-300"
            >
              {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <h1 className="ml-4 text-2xl font-semibold text-indigo-700">Admin Dashboard</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="hidden md:block w-64 px-4 py-2 rounded-md border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
            </div>
            <button className="p-2 rounded-md hover:bg-gray-100 relative transition duration-300">
              <Bell size={24} />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>
            <button onClick={() => setIsLoggedIn(false)} className="p-2 rounded-md hover:bg-gray-100">
              <LogOut size={24} />
            </button>
          </div>
        </div>
      </header>

      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        {isSidebarOpen && (
          <aside className="md:w-64 bg-white h-full md:h-screen shadow-md fixed md:relative z-10">
            <nav className="p-4 space-y-3">
              <a href="#" className="flex items-center space-x-3 p-3 rounded-md bg-indigo-50 text-indigo-600">
                <BarChart3 size={20} />
                <span>Dashboard</span>
              </a>
              <a href="#" className="flex items-center space-x-3 p-3 rounded-md hover:bg-gray-50 transition duration-300">
                <ShoppingCart size={20} />
                <span>Orders</span>
              </a>
              <a href="#" className="flex items-center space-x-3 p-3 rounded-md hover:bg-gray-50 transition duration-300">
                <Package size={20} />
                <span>Products</span>
              </a>
              <a href="#" className="flex items-center space-x-3 p-3 rounded-md hover:bg-gray-50 transition duration-300">
                <Users size={20} />
                <span>Customers</span>
              </a>
            </nav>
          </aside>
        )}

        {/* Main Content */}
        <main className="flex-1 md:ml-64 p-6 mt-16 md:mt-0">
          {/* Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {metrics.map((metric, index) => (
              <Card key={index} className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                      <h3 className="text-2xl font-semibold mt-1">{metric.value}</h3>
                      <p className="text-sm text-green-600 mt-1">{metric.trend} from last month</p>
                    </div>
                    <metric.icon size={24} className="text-gray-400" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Products List */}
          <Card className="mb-6 bg-white shadow-md rounded-lg">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-indigo-700">Products</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-indigo-100">
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Product</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Price</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Stock</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => (
                      <tr key={product._id} className="border-b">
                        <td className="px-6 py-4 text-sm">{product.title}</td>
                        <td className="px-6 py-4 text-sm">${product.price}</td>
                        <td className="px-6 py-4 text-sm">{product.stock}</td>
                        <td className="px-6 py-4 text-sm">
                          <button className="text-indigo-600 hover:text-indigo-700">Edit</button> |{' '}
                          <button className="text-red-600 hover:text-red-700">Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
