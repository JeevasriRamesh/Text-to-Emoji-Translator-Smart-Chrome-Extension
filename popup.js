const emojiMap = {
  "i": "\u{1F441}\u{FE0F}",      // 👁️
  "love": "\u{2764}\u{FE0F}",    // ❤️ 
  "dogs": "\u{1F436}",           // 🐶
  "a": "\u{1F170}\u{FE0F}",      // 🅰️
  "hair": "\u{1F487}",           // 💇
  "hello": "\u{1F44B}",          // 👋
  "world": "\u{1F30D}" ,          // 🌍
  "cats": "\u{1F431}",     // 🐱
  "pizza": "\u{1F355}",   // 🍕
  "code": "\u{1F4BB}" ,    // 💻
  "dog": "\u{1F436}",       // 🐶
"cat": "\u{1F431}",       // 🐱  
"bird": "\u{1F426}",      // 🐦
"fish": "\u{1F41F}",      // 🐟
"lion": "\u{1F981}",      // 🦁
"tiger": "\u{1F405}",     // 🐅
"bear": "\u{1F43B}",      // 🐻
"rabbit": "\u{1F430}",    // 🐰
"dragon": "\u{1F409}",    // 🐉
"tree": "\u{1F333}",      // 🌳
"flower": "\u{1F337}",    // 🌷
"sun": "\u{2600}\u{FE0F}",// ☀️
"pizza": "\u{1F355}",     // 🍕
"burger": "\u{1F354}",    // 🍔
"sushi": "\u{1F363}",     // 🍣
"icecream": "\u{1F366}",  // 🍦
"cake": "\u{1F370}",      // 🍰
"coffee": "\u{2615}",     // ☕
"beer": "\u{1F37A}",      // 🍺
"wine": "\u{1F377}",      // 🍷
"apple": "\u{1F34E}",     // 🍎
"banana": "\u{1F34C}",    // 🍌
"code": "\u{1F4BB}",      // 💻
"phone": "\u{1F4F1}",     // 📱
"book": "\u{1F4D6}",      // 📖
"key": "\u{1F511}",       // 🔑
"money": "\u{1F4B0}",     // 💰
"clock": "\u{23F0}",      // ⏰
"light": "\u{1F4A1}",     // 💡
"car": "\u{1F697}",       // 🚗
"plane": "\u{2708}\u{FE0F}", // ✈️
"bike": "\u{1F6B2}",      // 🚲
"happy": "\u{1F604}",     // 😄
"sad": "\u{1F622}",       // 😢
"angry": "\u{1F620}",     // 😠
"love": "\u{2764}\u{FE0F}", // ❤️
"cool": "\u{1F60E}",      // 😎
"laugh": "\u{1F602}",     // 😂
"wink": "\u{1F609}",      // 😉
"baby": "\u{1F476}",      // 👶
"king": "\u{1F60E}",      // 🤴
"queen": "\u{1F478}",     // 👸
"game": "\u{1F3AE}",      // 🎮
"music": "\u{1F3B5}",     // 🎵
"dance": "\u{1F483}",     // 💃
"swim": "\u{1F3CA}",      // 🏊
"run": "\u{1F3C3}",       // 🏃
"sleep": "\u{1F634}",     // 😴
"read": "\u{1F4D6}",      // 📖
"write": "\u{270D}\u{FE0F}", // ✍️
"work": "\u{1F4BC}",      // 💼
"study": "\u{1F4DA}",     // 📚
"star": "\u{2B50}",       // ⭐
"fire": "\u{1F525}",      // 🔥
"rain": "\u{1F327}\u{FE0F}", // 🌧️
"snow": "\u{2744}\u{FE0F}", // ❄️
"heart": "\u{2764}\u{FE0F}", // ❤️
"warning": "\u{26A0}\u{FE0F}", // ⚠️
"check": "\u{2705}",      // ✅
"flag": "\u{1F3C1}",      // 🏁
"gift": "\u{1F381}",      // 🎁
"magic": "\u{1F9D9}",     // 🧙
"i": "\u{1F441}\u{FE0F}",       // 👁️ 
"you": "\u{1F464}",             // 👤 
"he": "\u{1F468}",              // 👨
"she": "\u{1F469}",             // 👩
"we": "\u{1F465}",              // 👥
"they": "\u{1F46A}",            // 👪
"me": "\u{1F933}",              // 🤳
"your": "\u{1F4AD}",            // 💭 
"my": "\u{1F4AC}",              // 💬 
"our": "\u{1F30E}",             // 🌎 
"to": "\u{27A1}\u{FE0F}",       // ➡️
"from": "\u{1F519}",            // 🔙
"in": "\u{1F4CD}",              // 📍
"on": "\u{1F4CC}",              // 📌
"under": "\u{2B07}\u{FE0F}",    // ⬇️
"over": "\u{2B06}\u{FE0F}",     // ⬆️
"beside": "\u{2194}\u{FE0F}",   // ↔️
"between": "\u{1F5D6}\u{FE0F}", // 🗖 
"with": "\u{1F46B}",            // 👫
"without": "\u{1F6AB}",         // 🚫
"and": "\u{2795}",              // ➕
"or": "\u{1F4A1}",              // 💡 
"but": "\u{1F4A4}",             // 💤
"the": "\u{1F3AF}",             // 🎯 
"a": "\u{1F170}\u{FE0F}",       // 🅰️
"an": "\u{1F171}\u{FE0F}",      // 🅱️
"for": "\u{1F4B0}",             // 💰
"so": "\u{1F4A8}",              // 💨 
"because": "\u{2753}",          // ❓
"if": "\u{1F4A9}",              // 💩 
"this": "\u{1F447}",            // 👇
"that": "\u{1F448}",            // 👈
"these": "\u{1F449}",           // 👉
"those": "\u{1F446}",           // 👆

};
function translateToEmoji(text) {
  return text.toLowerCase().split(' ').map(word => 
    emojiMap[word] || "❓"  // Show for untranslated words
  ).join(' ');
}

document.getElementById('translateBtn').addEventListener('click', () => {
  const input = document.getElementById('inputText').value;
  const translated = translateToEmoji(input);
  document.getElementById('output').textContent = translated;
  
  // Optional: Copy to clipboard
  navigator.clipboard.writeText(translated).then(() => {
    console.log('Copied to clipboard');
  });
});