const btn = document.querySelector(".btn");

let count = 0;

const numberToJapanese = (number) => {
  const japaneseNumberTo10 = [
    "いち",
    "にゃ～ん",
    "さん",
    "よん",
    "ご",
    "ろく",
    "なな",
    "はち",
    "きゅう",
    "じゅう",
  ];
  const japaneseNumberTo100 = [
    "じゅう",
    "にゃ～んじゅう",
    "さんじゅう",
    "よんじゅう",
    "ごじゅう",
    "ろくじゅう",
    "ななじゅう",
    "はちじゅう",
    "きゅうじゅう",
    "ひゃく",
  ];

  let japaneseNumber = "";
  const numStr = String(number);

  for (let i = 0; i < numStr.length; i++) {
    const digit = parseInt(numStr[i]);
    switch (numStr.length - i) {
      case 2:
        if (digit === 1) {
          japaneseNumber += "じゅう";
        } else if (digit > 1) {
          japaneseNumber += japaneseNumberTo100[digit - 1];
        }
        break;
      case 1:
        if (digit !== 0) {
          japaneseNumber += japaneseNumberTo10[digit - 1];
        }
        break;
    }
  }
  return japaneseNumber;
  
};

btn.addEventListener("click", () => {
  count += 1;
  if (count >= 100) {
    count = 0;
  }
  document.querySelector("p").textContent = numberToJapanese(count);
  const cat = document.querySelector("p").textContent
  if(cat.includes("にゃ～ん") == true){
    console.log(1);
    const video = document.getElementById('video');
    video.play();
    video.muted = true;
    // const video = document.querySelector('video');
    // video.setAttribute("type","autoplay muted")
  }else{
    video.pause();
    video.currentTime = 0;
  }
  
});




