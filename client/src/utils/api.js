const BASE_URL = "/api";

// Helper function to handle fetch responses
const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json().catch(() => ({
      message: "An error occurred",
    }));
    throw new Error(error.message || "Network response was not ok");
  }
  return response.json();
};

// Helper function to build request options
const createRequestOptions = (method, data = null) => {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  const token = localStorage.getItem("token");
  if (token) {
    options.headers.Authorization = `Bearer ${token}`;
  }

  if (data) {
    options.body = JSON.stringify(data);
  }

  return options;
};

// API methods
const api = {
  get: (endpoint) =>
    fetch(`${BASE_URL}${endpoint}`, createRequestOptions("GET")).then(handleResponse),

  post: (endpoint, data) =>
    fetch(`${BASE_URL}${endpoint}`, createRequestOptions("POST", data)).then(handleResponse),

  patch: (endpoint, data) =>
    fetch(`${BASE_URL}${endpoint}`, createRequestOptions("PATCH", data)).then(handleResponse),

  delete: (endpoint) =>
    fetch(`${BASE_URL}${endpoint}`, createRequestOptions("DELETE")).then(handleResponse),
};

export default api; 