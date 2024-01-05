export function fetchAllProduct() {
  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:8080/products') 
    const data = await response.json()
    resolve({data})
  }
  );
}
export function fetchCategories() {
  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:8080/categories') 
    const data = await response.json()
    resolve({data})
  }
  );
}
export function fetchBrands() {
  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:8080/brands') 
    const data = await response.json()
    resolve({data})
  }
  );
}
export function fetchProductByFilter(filter, sort, pagination) {
  let query = '';
  for(let key in filter) {
    const categoryValues = filter[key];
    if(categoryValues.length > 0) {
      const lastCategoryValue = categoryValues[categoryValues.length - 1]
      query += `${key}=${lastCategoryValue}&`
    }
  }
  for(let key in sort) {
    query += `${key}=${sort[key]}&`
  }
  for(let key in pagination) {
    query += `${key}=${pagination[key]}&`
  }
  
  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:8080/products?'+query) 
    const data = await response.json()
    const totalItems = await response.headers.get("X-Total-Count")
    resolve({data: {product: data, totalItems}})
  }
  );
}

export function fetchProductById(id) {
  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:8080/products/' + id) 
    const data = await response.json()
    resolve({data})
  }
  );
}
