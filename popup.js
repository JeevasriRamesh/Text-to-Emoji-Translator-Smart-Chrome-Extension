const emojiMap = {
  "i": "👁️",
  "love": "❤️",
  "you": "👤",
  "hello": "👋",
  "world": "🌍",

  // Animals
  "dog": "🐶",
  "dogs": "🐶",
  "cat": "🐱",
  "cats": "🐱",
  "bird": "🐦",
  "fish": "🐟",
  "lion": "🦁",
  "tiger": "🐅",
  "bear": "🐻",
  "rabbit": "🐰",
  "dragon": "🐉",

  // Food
  "pizza": "🍕",
  "burger": "🍔",
  "sushi": "🍣",
  "icecream": "🍦",
  "cake": "🍰",
  "coffee": "☕",
  "beer": "🍺",
  "wine": "🍷",
  "apple": "🍎",
  "banana": "🍌",

  // Objects
  "code": "💻",
  "phone": "📱",
  "book": "📖",
  "key": "🔑",
  "money": "💰",
  "clock": "⏰",
  "light": "💡",
  "car": "🚗",
  "plane": "✈️",
  "bike": "🚲",

  // Emotions
  "happy": "😄",
  "sad": "😢",
  "angry": "😠",
  "cool": "😎",
  "laugh": "😂",
  "wink": "😉",
  "sleep": "😴",

  // People
  "baby": "👶",
  "king": "🤴",
  "queen": "👸",

  // Actions
  "run": "🏃",
  "swim": "🏊",
  "dance": "💃",
  "read": "📖",
  "write": "✍️",
  "work": "💼",
  "study": "📚",

  // Nature
  "tree": "🌳",
  "flower": "🌷",
  "sun": "☀️",
  "rain": "🌧️",
  "snow": "❄️",
  "star": "⭐",
  "fire": "🔥",

  // Common words
  "and": "➕",
  "or": "💡",
  "but": "💤",
  "with": "👫",
  "without": "🚫",
  "in": "📍",
  "on": "📌",
  "under": "⬇️",
  "over": "⬆️",
  "to": "➡️",
  "from": "🔙",
  "this": "👇",
  "that": "👈"
};

// 🔥 Improved translator
function translateToEmoji(text) {
  return text
    .toLowerCase()
    .split(' ')
    .map(word => {
      const cleanWord = word.replace(/[^\w]/g, '');
      return emojiMap[cleanWord] || word; // keep original word if not found
    })
    .join(' ');
}

// 🎯 Button click
document.getElementById('translateBtn').addEventListener('click', () => {
  const input = document.getElementById('inputText').value.trim();

  if (!input) {
    document.getElementById('output').textContent = "Type something first!";
    return;
  }

  const translated = translateToEmoji(input);

  // Show result nicely
  document.getElementById('output').textContent =
    `${input} → ${translated}`;

  // 📋 Copy safely
  if (navigator.clipboard) {
    navigator.clipboard.writeText(translated)
      .then(() => console.log("Copied"))
      .catch(() => console.log("Copy failed"));
  }
});