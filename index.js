var input = document.getElementById("colorVal");
input.addEventListener("keyup", (event) => {
  let regEx = /^[0-9a-fA-F]+$/;
  let isHex = regEx.test(event.target.value.toString());
  if (!isHex) {
    // if not hex, check if valid color
    if (isValidColor(input.value)) {
      document.querySelector(".wrapper-100").style.backgroundColor =
        input.value;
    }
  } else {
    // if hex, convert to color
    if (input.value.length <= 6) {
      document.querySelector(".wrapper-100").style.backgroundColor =
        "#" + input.value;
    }

    //   console.log("Hex value" + input.value);
  }
});
function isValidColor(strColor) {
  var s = new Option().style;
  s.color = strColor;

  // return 'false' if color wasn't assigned
  return s.color == strColor.toLowerCase();
}
