const { JSDOM } = require('jsdom');
const { window } = new JSDOM();

global.window = window;
global.document = window.document;

const changeTheme = require('./script'); 
const calculate = require('./script'); 

test('Change Theme Function', () => {
   
    const theme = document.createElement('link');
    theme.setAttribute('href', 'styles/dark.css');
    const themeIcon = document.createElement('img');
    themeIcon.setAttribute('src', 'assets/MoonIcon.svg');
    const toast = document.createElement('div');
    toast.setAttribute('id', 'toast');
    document.body.appendChild(theme);
    document.body.appendChild(themeIcon);
    document.body.appendChild(toast);
  
    changeTheme();
  
    setTimeout(() => {
      
      expect(theme.getAttribute('href')).toBe('styles/light.css');
  
      document.body.removeChild(theme);
      document.body.removeChild(themeIcon);
      document.body.removeChild(toast);

      done();
    }, 1500); 
  });

  test('Calculate Function', () => {
  
    const res = document.createElement('input');
    res.setAttribute('id', 'result');
    document.body.appendChild(res);
  
    const testInput = '2+3';
    calculate(testInput, res);
  
    setTimeout(() => {
      
      expect(res.value).toEqual('5'); 

      done();
    }, 1300); 
  });