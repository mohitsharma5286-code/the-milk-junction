```javascript
// The Milk Junction Website

console.log("The Milk Junction website loaded successfully!");

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function() {
        console.log("Navigation clicked");
    });
});
```
