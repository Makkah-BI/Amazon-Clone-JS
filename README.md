# Amazon-Clone-JS

## Key JavaScript Functionality

### Image Slider
- An array of image URLs is stored.  
- `setInterval` updates the `src` attribute of the slider `<img>` every 4 seconds.  
- (Optional) dot indicators or prev/next buttons can be added.

### Testimonial Slider
- An array of testimonial objects: `{ name, photo, text }`.  
- A “Next” button increments an index and injects the new data into the DOM.  
- Loops back to the first testimonial after the last one.

## Future Improvements

- Add “Previous” button for testimonials.  
- Implement a real cart system with `localStorage`.  
- Connect to a backend (Firebase / Node.js) for product data.  
- Add manual navigation buttons for the image slider.

## License

This project is for educational purposes only. All product names, logos, and brands are property of their respective owners.
