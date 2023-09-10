const API_URL = "https://fakestoreapi.com";
export async function fetchProducts() {
    try {
      const response = await fetch(
        `${API_URL}/products`
      );
      const result = await response.json();
      return result;
      
    } catch (err) {
      console.error(err);
    }
  }
  export async function fetchProductById(id) {
    try {
      const response = await fetch(
        `${API_URL}/products/${id}`
      );
      const result = await response.json();
      console.log("Product by id", result)
      return result;
    } catch (err) {
      console.error(err);
    }
  }

  export async function fetchCategory(category) {
    try {
      const response = await fetch(
        `${API_URL}/products/category/${category}`
      );
      const result = await response.json();
    //   console.log("Product by category", result)
      return result;
    } catch (err) {
      console.error(err);
    }
  }
  
