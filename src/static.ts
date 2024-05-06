import Cookies from "cookies-js";

export const themes = {
  light: [
    { property: '--background', value: '#FFFFFF' },
    { property: '--background-secondary', value: '#F8F8F8' },
    { property: '--background-alternate', value: '#eeeeee' },
    { property: '--background-light-darkened', value: '#c7c7c7' },
    { property: '--border-light', value: '#e7e7e7' },
    { property: '--special-primary', value: '#5E12FF' },
    { property: '--special-secondary', value: '#AA82FF' },
    { property: '--special-extra', value: '#3800AF' },
    { property: '--text-primary', value: '#141414' },
    { property: '--text-secondary', value: '#646464' },
    { property: '--text-light', value: '#AAAAAA' },
    { property: '--text-hover', value: '#303030' },
    { property: '--text-label-dark', value: '#c2c2c2' },
    { property: '--color-white', value: '#FFFFFF' },
    { property: '--color-black', value: '#000000' },
    { property: '--color-red', value: '#ff3e3e' },
    { property: '--label-highlight', value: '#262626' },
    { property: '--card-blur', value: '0, 0, 0' },
  ],
  dark: [
    { property: '--background', value: '#161616' },
    { property: '--background-secondary', value: '#232323' },
    { property: '--background-alternate', value: '#111111' },
    { property: '--background-light-darkened', value: '#282828' },
    { property: '--border-light', value: '#323232' },
    { property: '--special-primary', value: '#5E12FF' },
    { property: '--special-secondary', value: '#AA82FF' },
    { property: '--special-extra', value: '#3800AF' },
    { property: '--text-primary', value: '#ebebeb' },
    { property: '--text-secondary', value: '#bfbfbf' },
    { property: '--text-light', value: '#AAAAAA' },
    { property: '--text-hover', value: '#4f4f4f' },
    { property: '--text-label-dark', value: '#333333' },
    { property: '--color-white', value: '#FFFFFF' },
    { property: '--color-black', value: '#000000' },
    { property: '--color-red', value: '#ff3e3e' },
    { property: '--label-highlight', value: '#efefef' },
    { property: '--card-blur', value: '255, 255, 255' },
  ]
}

export const API_URL = () => {
  if (window.location.href.includes('ma-cloud')) {
    return 'https://30472.hosts1.ma-cloud.nl/php-dash'
  } else {
    return 'http://127.0.0.1'
  }
};

export const hexToRgb = (hex: any) => {
  return hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
    , (m: any, r: any, g: any, b: any) => '#' + r + r + g + g + b + b)
    .substring(1).match(/.{2}/g)
    .map((x: any) => parseInt(x, 16))
}

export const themeGet = () => {
  if (Cookies.get('theme')) { return Cookies.get('theme'); }
  else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    Cookies.set('theme', 'dark');
    return 'dark';
  }
  else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    Cookies.set('theme', 'light');
    return 'light';
  }
  else { return 'dark'; }
}