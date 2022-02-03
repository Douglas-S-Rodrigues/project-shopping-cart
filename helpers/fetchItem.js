const id = document.querySelector('.item_sku');

const fetchItem = async (itemId) => {
  try {
    const endpoint = await fetch(`https://api.mercadolibre.com/items/${itemId}`);
    const data = endpoint.json();
    return data;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
