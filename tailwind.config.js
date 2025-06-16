module.exports = {
  darkMode: 'class',
  content: [
    './index.html', // Adjust to match your HTML file(s)
    './*.html',
    './app.js'
  ],
  theme: {
    extend: {
      colors: {
        'wwm-bg-start': '#f2f2ff',
        'wwm-bg-end': '#e8e8f8',
        'dark-wwm-bg-start': '#2a283e',
        'dark-wwm-bg-end': '#1e1c32',
        'wwm-primary': '#5D5FEF',
        'wwm-green': '#28a745',
        'wwm-orange': '#fd7e14',
        'wwm-blue': '#007bff',
        'wwm-purple': '#6f42c1',
      },
    },
  },
  plugins: [],
};