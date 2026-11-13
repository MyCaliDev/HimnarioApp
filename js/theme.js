function applyAppTheme(isLightMode) {
  document.documentElement.classList.toggle('dark-mode', isLightMode);
  document.querySelector('meta[name="theme-color"]')
    .setAttribute('content', isLightMode ? '#fdfdfd' : '#121212');
}

try {
  applyAppTheme(localStorage.getItem('darkMode') === 'enabled');
} catch (error) {
  applyAppTheme(false);
}
