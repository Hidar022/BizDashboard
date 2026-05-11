import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login/', {
        username: email, // Django SimpleJWT uses 'username' field
        password: password
      });

      // Save the JWT tokens to LocalStorage
      localStorage.setItem('access_token', response.data.access);
      localStorage.setItem('refresh_token', response.data.refresh);

      // Successfully logged in, move to Dashboard
      navigate('/');
    } catch (err) {
      setError("Invalid email or password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-[#14213d] rounded-2xl shadow-xl p-8 border border-gray-700">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-white mb-2">PulseBoard</h1>
          <p className="text-gray-400">Welcome back! Please sign in.</p>
        </div>

        {error && <div className="bg-red-500/10 border border-red-500 text-red-500 p-3 rounded-xl mb-6 text-sm text-center">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
            <input
              type="email"
              className="w-full bg-[#1f2f56] border border-gray-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500"
              placeholder="name@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
            <input
              type="password"
              className="w-full bg-[#1f2f56] border border-gray-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-xl transition-all ${loading ? 'opacity-50' : ''}`}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="text-center text-gray-400 mt-8">
          Don't have an account? <Link to="/register" className="text-purple-400 font-semibold ml-1">Create one</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;