# 🎨 Color the Boxes

This simple project assigns a random text color and a random background color to five boxes using JavaScript and DOM concepts.

## 📁 Files Included

- `jsColortheboxes.html` – HTML structure and basic styling of the boxes.
- `colorBoxes.js` – JavaScript logic to apply random colors to each box.
- `README.md` – Project overview and instructions.

## 🚀 How It Works

1. The HTML page includes five `<div>` elements with the class `box`.
2. Each box is styled with borders and dimensions using CSS.
3. When the page loads:
   - JavaScript selects all boxes using `document.querySelectorAll`.
   - A random color is generated using a simple function.
   - Both text color and background color are applied to each box.

## 🛠️ How to Use

1. Make sure `colorBoxes.js` is correctly linked in the `<head>` of `jsColortheboxes.html`.
2. Open `jsColortheboxes.html` in any modern web browser.
3. You will see five boxes with random colors applied each time the page loads.

> 🔄 If the colors are not applying, move the `<script src="colorBoxes.js"></script>` tag to just before the closing `</body>` tag.

## 📚 Concepts Demonstrated

- DOM Selection (`document.querySelectorAll`)
- Random color generation using `Math.random()` and `.toString(16)`
- Applying styles using `element.style.color` and `element.style.backgroundColor`

---

Enjoy experimenting with random colors! 🎉
