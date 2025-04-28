
const sites = ['locations', 'companies'];

const getBaseUrl = (selectedSite) => {
  return `${import.meta.env.VITE_BACK_END_SERVER_URL}/${selectedSite}`;
};

// Example usage:
const selectedSite = 'locations'; // or 'companies', based on user selection
const BASE_URL = getBaseUrl(selectedSite);