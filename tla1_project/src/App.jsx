import { useState } from 'react';
import './App.css'; // Make sure to import the CSS file

function App() {
  // 1. State for the list of categories
  const [categories, setCategories] = useState([]);
  
  // 2. State for the form inputs
  const [catName, setCatName] = useState('');
  const [catDesc, setCatDesc] = useState('');
  
  // 3. State for error handling
  const [error, setError] = useState('');

  // Handle form submission
  const handleAddCategory = (e) => {
    e.preventDefault(); 

    if (!catName.trim() || !catDesc.trim()) {
      setError('Please complete both input fields.');
      return;
    }

    const newCategory = {
      id: crypto.randomUUID(), 
      name: catName.trim(),
      description: catDesc.trim()
    };

    setCategories([...categories, newCategory]);

    setCatName('');
    setCatDesc('');
    setError('');
  };

  // Delete functionality
  const handleDeleteCategory = (id) => {
    setCategories(categories.filter(cat => cat.id !== id));
  };

  return (
    // Changed bg-light to gradient-bg
    <div className="gradient-bg py-5 d-flex align-items-center">
      <main className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            
            {/* Registration Card */}
            <div className="card shadow-lg border-0 mb-4 rounded-4 overflow-hidden">
              {/* Changed bg-primary to gradient-card-header */}
              <div className="card-header gradient-card-header py-3">
                <h1 className="h5 mb-0 fw-bold text-white">Income Category Registration</h1>
              </div>
              <div className="card-body p-4">
                
                {error && (
                  <div className="alert alert-danger py-2" role="alert">
                    {error}
                  </div>
                )}

                <form onSubmit={handleAddCategory}>
                  <div className="mb-3">
                    <label htmlFor="txtCatName" className="form-label fw-semibold">Category Name</label>
                    <input 
                      type="text" 
                      id="txtCatName" 
                      className="form-control form-control-lg bg-light" 
                      placeholder="e.g., Consulting" 
                      value={catName}
                      onChange={(e) => setCatName(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="txtCatDesc" className="form-label fw-semibold">Description</label>
                    <input 
                      type="text" 
                      id="txtCatDesc" 
                      className="form-control form-control-lg bg-light" 
                      placeholder="e.g., Enterprise technical support contract" 
                      value={catDesc}
                      onChange={(e) => setCatDesc(e.target.value)}
                    />
                  </div>
                  {/* Changed btn-primary to gradient-btn */}
                  <button type="submit" id="btnAdd" className="btn gradient-btn btn-lg px-4 fw-semibold">
                    Save Category
                  </button>
                </form>
              </div>
            </div>

            {/* Ledger Table Card */}
            <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
              <div className="card-header bg-white py-3">
                <h2 className="h6 mb-0 text-secondary fw-bold text-uppercase">Registered Categories</h2>
              </div>
              <div className="table-responsive">
                <table className="table table-hover align-middle mb-0">
                  <thead className="table-light">
                    <tr>
                      <th scope="col" className="w-35">Category Name</th>
                      <th scope="col">Description</th>
                      <th scope="col" className="text-end">Actions</th>
                    </tr>
                  </thead>
                  <tbody id="listIncomeCat">
                    {categories.length === 0 ? (
                      <tr>
                        <td colSpan="3" className="text-center text-muted py-5">
                          <em>No categories registered yet. Add one above!</em>
                        </td>
                      </tr>
                    ) : (
                      categories.map((cat) => (
                        <tr key={cat.id}>
                          <td className="fw-semibold text-dark">{cat.name}</td>
                          <td className="text-secondary">{cat.description}</td>
                          <td className="text-end">
                            {/* Changed btn-outline-danger to gradient-btn-danger */}
                            <button 
                              className="btn btn-sm gradient-btn-danger px-3"
                              onClick={() => handleDeleteCategory(cat.id)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

export default App;