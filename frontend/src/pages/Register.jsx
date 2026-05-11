import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setLoading(true);
    try {
      // Using email as username since Django's User model requires a username
      await axios.post('http://127.0.0.1:8000/api/register/', {
        username: formData.email, 
        email: formData.email,
        password: formData.password
      });

      alert("Account created! Please login.");
      navigate('/login');
    } catch (err) {
      const msg = err.response?.data?.username?.[0] || "Registration failed. Email might be taken.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-[#14213d] rounded-2xl shadow-xl p-8 border border-gray-700">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
          <p className="text-gray-400">Join PulseBoard today</p>
        </div>

        {error && <div className="bg-red-500/10 border border-red-500 text-red-500 p-3 rounded-xl mb-4 text-sm text-center">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
            <input
              type="text"
              className="w-full bg-[#1f2f56] border border-gray-600 rounded-xl px-4 py-3 text-white focus:border-purple-500 outline-none"
              placeholder="Aliyu Bin Ahmad"
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
            <input
              type="email"
              className="w-full bg-[#1f2f56] border border-gray-600 rounded-xl px-4 py-3 text-white focus:border-purple-500 outline-none"
              placeholder="bin@example.com"
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              className="w-full bg-[#1f2f56] border border-gray-600 rounded-xl px-4 py-3 text-white focus:border-purple-500 outline-none"
              placeholder="••••••••"
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              required
            />
            <button type="button" className="absolute right-4 top-11 text-gray-400" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Confirm Password</label>
            <input
              type="password"
              className="w-full bg-[#1f2f56] border border-gray-600 rounded-xl px-4 py-3 text-white focus:border-purple-500 outline-none"
              placeholder="••••••••"
              onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
              required
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className={`w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-xl transition-all mt-4 ${loading ? 'opacity-50' : ''}`}
          >
            {loading ? "Creating Account..." : "Register"}
          </button>
        </form>

        <p className="text-center text-gray-400 mt-6">
          Already have an account? <Link to="/login" className="text-purple-400 font-semibold">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;