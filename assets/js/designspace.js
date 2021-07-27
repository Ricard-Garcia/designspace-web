let designSpace = $("#designspace");
let testWord = $("#testWord");

let fontWeight;
let fontWidth;

// Weight
let minWeight = 15;
let maxWeight = 145;
let weightStep = (maxWeight - minWeight) / 100;

// Weight
let minWidth = 70;
let maxWidth = 200;
let widthStep = (maxWidth - minWidth) / 100;

let designSpWidth = designSpace.outerWidth();
let designSpHeight = designSpace.outerHeight();
let designSpPosition = designSpace.position();

console.log("Top: ", designSpPosition.top, ". Left: ", designSpPosition.left);

// 293.625;
function returnVariations(x, y) {
  let newY = y - designSpPosition.top;
  let newX = x - designSpPosition.left;

  //   ??????
  fontWeight = ((maxWeight - minWeight) * newY) / designSpHeight + minWeight;
  fontWidth = ((maxWidth - minWidth) * newX) / designSpWidth + minWidth;
  // fontWidth = (minWidth * x) / designSpPosition.left;
  //   ??????

  fontVariation = {
    "font-variation-settings": "'wght' " + fontWeight + ", 'wdth' " + fontWidth,
  };
  return fontVariation;
}

designSpace.on("mouseover", function () {
  $(this).on("mousemove", function (e) {
    let variationsResult = returnVariations(e.pageX, e.pageY);
    testWord.css(variationsResult);
  });
});
