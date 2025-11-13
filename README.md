# 🎵 Chinese Meme Soundboard

A fun and interactive React Native soundboard app featuring popular Chinese memes and viral sounds. Tap buttons to play hilarious audio clips with a clean, intuitive interface.

## Features

- 🎤 Collection of iconic Chinese meme sounds
- 🚀 Smooth and responsive UI built with React Native
- 📱 Works on iOS and Android
- 🎯 Simple one-tap playback
- ⚡ Built with Expo for rapid development

### Current Sounds

- Bald Dance
- Bing Chilling
- Ching Cheng
- Eggman
- Monkey Singing
- Oohooh
- Rising Sun
- Superidol

## Getting Started

### Prerequisites

- Node.js and npm installed
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/AnikethReddy18/chinese-meme-soundboard.git
   cd chinese-meme-soundboard
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Start the development server

   ```bash
   npx expo start
   ```

4. Open the app on your device:
   - Press `i` for iOS Simulator
   - Press `a` for Android Emulator
   - Scan the QR code with Expo Go app on your phone

## Tech Stack

- **React Native** - Cross-platform mobile development
- **Expo** - Development platform and SDK
- **Expo AV** - Audio playback

## Project Structure

```
├── app/                    # App screens and routing
│   ├── _layout.tsx        # Root layout
│   └── index.tsx          # Main soundboard screen
├── components/            # Reusable components
│   └── meme.jsx          # Meme sound button component
├── assets/               # Static assets
│   └── data/            # Sound files organized by name
└── package.json         # Dependencies and scripts
```

## Roadmap & TODOs

- [ ] Implement stop playing when other audio plays (exclusive playback)
- [ ] Add more Chinese meme sounds
- [ ] Add sound categories/tabs
- [ ] Sound effect animations

## Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License.

## Author

Created by [AnikethReddy18](https://github.com/AnikethReddy18)

---

Enjoy the memes! 😄
