async function fetchCountryData() {
  try {
    const response = await axios.get('https://restcountries.com/v3.1/name/mauritania');
    const data = response.data[0];
    if (data && document.getElementById('api-population')) {
      document.getElementById('api-population').textContent = (data.population || 4618974).toLocaleString();
    }
    if (data && document.getElementById('api-capital')) {
      document.getElementById('api-capital').textContent = data.capital?.[0] || 'Nouakchott';
    }
    if (data && document.getElementById('api-region')) {
      document.getElementById('api-region').textContent = data.region || 'Afrique';
    }
    if (data && document.getElementById('api-area')) {
      document.getElementById('api-area').textContent = (data.area || 1030700).toLocaleString() + ' km²';
    }
    if (data && document.getElementById('api-currency')) {
      const currency = Object.values(data.currencies || {})[0];
      document.getElementById('api-currency').textContent = currency?.name || 'Ouguiya';
    }
    return data;
  } catch (error) {
    return null;
  }
}

async function fetchRandomQuote() {
  try {
    const response = await axios.get('https://api.quotable.io/random');
    const data = response.data;
    const el = document.getElementById('quote-text');
    const authorEl = document.getElementById('quote-author');
    if (el && data) {
      el.textContent = `"${data.content}"`;
      if (authorEl) authorEl.textContent = `— ${data.author}`;
    }
  } catch (error) {
    // fallback: silent
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('api-population') || document.getElementById('api-capital')) {
    fetchCountryData();
  }
  if (document.getElementById('quote-text')) {
    fetchRandomQuote();
  }
});
