const colorBox = document.getElementById("colorBox");
const colorCode = document.getElementById("colorCode");
const generateButton = document.getElementById("generateButton");
const copyButton = document.getElementById("copyButton");
const colorHistory = document.getElementById("colorHistory");
const colorHistoryArray = [];

function generateRandomColor() {
    const randomColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
    colorBox.style.backgroundColor = randomColor;
    colorCode.textContent = randomColor.toUpperCase();

    colorHistoryArray.push(randomColor);
    let recentColors = colorHistoryArray.slice(-5);
    colorHistory.innerHTML = recentColors.map(color => 
        `<span style="background-color: ${color}; width: 100px;
        height: 50px; padding: 5px; margin: 2px;
        border-radius: 10px; justify-content: center; 
        align-items: center; display: flex;">
        ${color.toUpperCase()}
        </span>`).join(" ");
    return recentColors;
}
generateButton.addEventListener("click", generateRandomColor);

copyButton.addEventListener("click", () => {
    console.log(colorCode.textContent);
    navigator.clipboard.writeText(colorCode.textContent);
    alert(`Colour Copied`)
});