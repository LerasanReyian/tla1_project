import { useState } from 'react';

function App() {
  // 1. State for the list of categories
  const [categories, setCategories] = useState([]);
  
  // 2. State for the form inputs
  const [catName, setCatName] = useState('');
  const [catDesc, setCatDesc] = useState('');
  
  // 3. State for error handling (replaces the alert)
  const [error, setError] = useState('');

  // Handle form submission
  const handleAddCategory = (e) => {
    e.preventDefault(); // Prevents page refresh (Vanilla: event.preventDefault())

    // Guard Clause Validation (Vanilla: if (catName || catDesc))
    if (!catName.trim() || !catDesc.trim()) {
      setError('Please complete both input fields.');
      return;
    }

    // Create new category object
    const newCategory = {
      id: crypto.randomUUID(), // Unique ID for React keys and deletion
      name: catName.trim(),
      description: catDesc.trim()
    };

    // Update state (Vanilla: insertAdjacentHTML)
    setCategories([...categories, newCategory]);

    // Reset inputs & clear error (Vanilla: .value = "")
    setCatName('');
    setCatDesc('');
    setError('');
  };

  // Creative Freedom: Delete functionality
  const handleDeleteCategory = (id) => {
    setCategories(categories.filter(cat => cat.id !== id));
  };

  return (
    <div className="bg-light min-vh-100 py-5">
      <main className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            
            {/* Registration Card */}
            <div className="card shadow-sm border-0 mb-4">
              <div className="card-header bg-primary text-white py-3">
                <h1 className="h5 mb-0 fw-bold">Income Category Registration</h1>
              </div>
              <div className="card-body p-4">
                
                {/* Error Message */}
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
                      className="form-control" 
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
                      className="form-control" 
                      placeholder="e.g., Enterprise technical support contract" 
                      value={catDesc}
                      onChange={(e) => setCatDesc(e.target.value)}
                    />
                  </div>
                  <button type="submit" id="btnAdd" className="btn btn-primary px-4 fw-semibold">
                    Save Category
                  </button>
                </form>
              </div>
            </div>

            {/* Ledger Table Card */}
            <div className="card shadow-sm border-0">
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
                        <td colSpan="3" className="text-center text-muted py-4">
                          No categories registered yet.
                        </td>
                      </tr>
                    ) : (
                      categories.map((cat) => (
                        <tr key={cat.id}>
                          <td className="fw-semibold text-dark">{cat.name}</td>
                          <td className="text-secondary">{cat.description}</td>
                          <td className="text-end">
                            <button 
                              className="btn btn-sm btn-outline-danger"
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