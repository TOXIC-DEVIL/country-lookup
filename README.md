# country-lookup
Lookup country information with fast and fuzzy search functionalities.

### Installation
```bash
npm install @toxicdevil/countrylookup@latest
```

### Usage 
**Example:**
```js
const {
  country,
  getCountryInfo,
  getCountryInfoByCode,
  getCountryInfoByCapital,
  getCountryInfoByCurrency,
  getCountryInfoByLanguage,
  getCountryInfoByRegion
 } = require('@toxicdevil/countrylookup');

let info = country('India');
console.log(info);
```
**Output:**
```js
{
  name: "India",
  code: "IN",
  capital: "New Delhi",
  region: "Asia",
  currency: {
    code: "INR",
    name: "Indian rupee",
    symbol":"₹"
  },
  language: {
    code: "hi",
    name: "Hindi"
  },
  flag: "https://flagcdn.com/w320/in.png",
  calling_code: "+91"
}
```

### `country(name, key)` :
country() takes name and key as parameters. (name-key - value-key)

### `getCountryInfo(name)` :
getCountryInfo() takes a parameter which is a country's name. Returns the best matched data.

### `getCountryInfoByCode(code)` :
getCountryInfoByCode() takes a parameter which is a country's code (e.g, IN => India, US => United States of America, etc.).

### `getCountryInfoByCapital(city)` :
getCountryInfoByCapital() takes a parameter which is a country's capital city (e.g, New Delhi => India, Washington, D.C => United States of America, etc.). Returns the best matched data.

### `getCountryInfoByCurrency(currency)` :
getCountryInfoByCurrency() takes a parameter which is a country's currency code, currency symbol or its name. (e.g, ₹ => India, Afghan Afghani => Afghanistan, JMD => Jameica, etc.).

### `getCountryInfoByLanguage(lang)` :
getCountryInfoByLanguage() takes a parameter which is a the language spoken in the country (language code can also be passed). (e.g, Hindi => India, IT => Italy, etc.). Returns the best matched data.

### `getCountryInfoByRegion(region)` :
getCountryInfoByRegion() takes a parameter which is a the continent. Returns the list of countries belonging to the region.

## License
This project is licensed under the [MIT License](https://github.com/TOXIC-DEVIL/country-lookup/blob/master/LICENSE).
