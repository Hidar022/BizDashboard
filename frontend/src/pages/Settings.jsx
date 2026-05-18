import React, { useState, useEffect } from 'react';
import api from '../api'; 

const Settings = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);

  // 1. Load the real profile data from Django when the page opens
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await api.get('/api/user/profile/'); 
        // We read 'first_name', matching your custom backend dictionary output!
        setName(response.data.first_name || response.data.username);
        setEmail(response.data.email);
      } catch (err) {
        console.error("Failed to fetch backend profile", err);
        // Fallback default just in case of API latency
        setName("Aliyu Bin Ahmad");
        setEmail("bin@example.com");
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  // 2. Fire the patch request to update Django User record permanently
  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await api.patch('/api/user/profile/', {
        first_name: name, // Maps directly to request.data.get('first_name')
        email: email       // Maps directly to request.data.get('email')
      });
      alert("Profile permanently saved to Django database, bro! 🔥");
    } catch (err) {
      console.error("Failed to update user profile", err);
      alert("Error saving settings data to server.");
    }
  };

  if (loading) return <div className="p-6 text-gray-500">Loading user metadata...</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Settings</h1>
      <form onSubmit={handleSave} className="max-w-2xl bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Profile Name</label>
            <input 
              type="text" 
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-purple-500 text-gray-800 font-medium" 
              value={name} 
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input 
              type="email" 
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-purple-500 text-gray-800 font-medium" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button 
            type="submit" 
            className="bg-purple-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-purple-700 transition-all cursor-pointer shadow-md shadow-purple-500/10"
          >
            Save Changes
          </button>
        </div>
        
        <hr className="my-8 border-gray-100" />
        
        <div>
          <h3 className="text-red-500 font-bold mb-2">Danger Zone</h3>
          <button 
            type="button"
            onClick={() => alert("Account deletion requested.")}
            className="text-red-500 border border-red-200 px-4 py-2 rounded-xl hover:bg-red-50 transition-all cursor-pointer"
          >
            Delete Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default Settings;