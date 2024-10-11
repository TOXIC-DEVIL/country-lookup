const { readFileSync } = require('fs');
const Fuse = require('fuse.js');
const countries = JSON.parse(readFileSync('./countries.json'));

const fuse = new Fuse(countries, {
  includeScore: true,
  threshold: 0.3,
  keys: [
    'name', 
    'code', 
    'capital', 
    'language.name', 
    'language.code', 
    'region', 
    'currency.name', 
    'currency.code', 
    'currency.symbol'
  ],
});

function getCountryInfo(country) {
  let results = fuse.search(country);
  return results.length > 0 ? results.map(result => result.item) : false;
}

function getCountryInfoByCode(code) {
  let results = fuse.search(code.toUpperCase());
  return results.length > 0 ? results.find(result => result.item.code === code.toUpperCase()).item : false;
}

function getCountryInfoByCapital(city) {
  let results = fuse.search(city);
  return results.length > 0 ? results.find(result => result.item.capital.toLowerCase() === city.toLowerCase()).item : false;
}

function getCountryInfoByLanguage(language) {
  let results = fuse.search(language);
  let filtered = results.filter(result => {
    let lang = result.item.language;
    return lang.name.toLowerCase().includes(language.toLowerCase()) || lang.code.toLowerCase().includes(language.toLowerCase());
  });
  return filtered.length > 0 ? filtered.map(result => result.item) : false;
}

function getCountryInfoByRegion(region) {
  let results = fuse.search(region.slice(0, 2).toUpperCase());
  let filtered = results.filter(result => result.item.region === region.slice(0, 2).toUpperCase());
  return filtered.length > 0 ? filtered[0].item : false;
}

function getCountryInfoByCurrency(currency) {
  let results = fuse.search(currency);
  let filtered = results.filter(result => {
    let curr = result.item.currency;
    return curr.name.toLowerCase().includes(currency.toLowerCase()) || curr.code.toLowerCase().includes(currency.toLowerCase()) || curr.symbol.includes(currency);
  });
  return filtered.length > 0 ? filtered.map(result => result.item) : false;
}

function country(name, key) {
  let results = fuse.search(name);
  let matchedCountry = results.length > 0 ? results[0].item : null;
  return matchedCountry ? (key ? matchedCountry[key] : matchedCountry) : false;
}

module.exports = {
  country,
  getCountryInfo,
  getCountryInfoByCode,
  getCountryInfoByCapital,
  getCountryInfoByCurrency,
  getCountryInfoByLanguage,
  getCountryInfoByRegion
};
