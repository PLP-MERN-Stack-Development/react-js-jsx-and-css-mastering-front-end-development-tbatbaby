import React, { useState, useEffect } from 'react';
import Button from './Button';

const ApiData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const fetchData = async (pageNum = 1) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${pageNum}&_limit=5`
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      
      const result = await response.json();
      
      if (pageNum === 1) {
        setData(result);
      } else {
        setData(prev => [...prev, ...result]);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  const loadMore = () => {
    setPage(prev => prev + 1);
  };

  return (
    <div className="bg-white rounded-xl shadow-xs border border-gray-200 p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">API Data from JSONPlaceholder</h2>

      {loading && data.length === 0 && (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading posts...</p>
        </div>
      )}

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-4">
          <p>Error: {error}</p>
          <Button variant="danger" size="sm" onClick={() => fetchData(1)} className="mt-2">
            Retry
          </Button>
        </div>
      )}

      <div className="space-y-4">
        {data.map((post) => (
          <div key={post.id} className="border border-gray-200 rounded-lg p-4 bg-white hover:shadow-xs transition-all duration-200">
            <h3 className="font-semibold text-lg mb-2 text-gray-900">{post.title}</h3>
            <p className="text-gray-600">{post.body}</p>
            <div className="mt-2 text-sm text-gray-500">
              Post ID: {post.id} • User: {post.userId}
            </div>
          </div>
        ))}
      </div>

      {page < 4 && (
        <div className="text-center mt-6">
          <Button
            variant="primary"
            onClick={loadMore}
            disabled={loading}
            className="shadow-xs"
          >
            {loading ? 'Loading...' : 'Load More'}
          </Button>
        </div>
      )}

      {data.length > 0 && (
        <div className="mt-4 text-sm text-gray-500 text-center">
          Showing {data.length} posts
        </div>
      )}
    </div>
  );
};

export default ApiData;