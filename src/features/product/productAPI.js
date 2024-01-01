export function fetchAllProduct() {
  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:8080/products') 
    const data = await response.json()
    resolve({data})
  }
  );
}
export function fetchProductByFilter(filter) {
  let query = '';
  for(let key in filter) {
    query += `${key}=${filter[key]}&`
  }
  console.log(query);
  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:8080/products?'+query) 
    const data = await response.json()
    resolve({data})
  }
  );
}
