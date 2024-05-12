
export const getProducts = async () => {
  const response = await fetch('https://fakerapi.it/api/v1/products?_quantity=1&_taxes=12&_categories_type=uuid');
  const data = await response.json();
  return data.data;
};

