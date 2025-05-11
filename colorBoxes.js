//selecting all the boxes
let boxes = document.querySelectorAll('.box');

//Random color generator
const getRandomColor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const hexColor = randomNumber.toString(16);
    return '#' + hexColor;
};
boxes.forEach(box => {
    const textColor = getRandomColor();


    const backgroundColor = getRandomColor();

    box.style.color = textColor;
    box.style.backgroundColor = backgroundColor;
});
