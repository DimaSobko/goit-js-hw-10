import './css/styles.css';
import Notiflix from 'notiflix';
import  lodash  from 'lodash.debounce';
// import  fetchCountries  from './fetchCountries';

const DEBOUNCE_DELAY = 300;
const URL = 'https://restcountries.com/v3.1/name';
console.log(URL);