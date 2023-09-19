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

//get all users
export async function fetchUsers() {
    try {
      const response = await fetch(
        `${API_URL}/users`
      );
      const result = await response.json();
      return result;
      
    } catch (err) {
      console.error(err);
    }
  }

//login
export async function loginFunction(username, password, setError) {
    try {
        const response = await fetch('https://fakestoreapi.com/auth/login',
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({

                    username: username,
                    password: password

                })
            })
        const result = await response.json();
        

        console.log(result.token);
        return result.token


    } catch (error) {
        console.log(error.message)
        setError("Invalid username or password");
        
    }
}
  
