module.exports = {
  "src/**/*.{js,jsx}": [
    "prettier --write"
  ],
  "src/**/*.{ts,tsx}": [
    () => "tsc --skipLibCheck --noEmit", 
    "prettier --write",
  ],   
  "src/**/*.{json,css,scss,md}": [
    "prettier --write"
  ]
}