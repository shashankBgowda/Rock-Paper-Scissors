# Rock-Paper-Scissors
Rock-Paper-Scissors game is built with HTML, CSS and JS.
# Rock-Paper-Scissors Game

A simple Rock-Paper-Scissors game built using **HTML, CSS, and JavaScript**. This game allows users to play against the computer in a fun and interactive way.

## 🚀 Features

- Interactive UI with images for rock, paper, and scissors.
- Randomized computer moves for a fair game.
- Score tracking for both player and AI.
- Engaging UI feedback for wins, losses, and ties.

## 🛠️ Technologies Used

- **HTML**: Structure of the game.
- **CSS**: Styling and layout.
- **JavaScript**: Game logic and interactivity.

## 🎮 How to Play

1. Click on **Rock**, **Paper**, or **Scissors**.
2. The computer will randomly select one of the three options.
3. The result will be displayed:
   - ✅ **You Win** – Your choice beats the computer's.
   - ❌ **You Lose** – The computer's choice beats yours.
   - 🤝 **It's a Draw** – Both choices are the same.
4. Scores will be updated accordingly.
5. Play again to improve your score!

## 📂 Project Structure

```
Rock-Paper-Scissors-Game/
│── index.html       # Main HTML file
│── style.css        # Styling file
│── app.js           # JavaScript game logic
│── images/          # Folder for game images (Add images here)
└── README.md        # Project documentation
```

## 🖥️ Setup and Usage

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/Rock-Paper-Scissors-Game.git
   ```
2. Open the `index.html` file in any modern web browser.

## 🔧 Fixing Broken Image Paths

Currently, the images in `index.html` and `style.css` are set to an absolute local path. To fix this:

- Move your images to a local `images/` folder inside the project directory.
- Update the image paths in `htmlfile.html` and `style.css`, for example:
  ```html
  <img src="images/rock.png" alt="Rock">
  ```
  ```css
  background-image: url('images/background-img.webp');
  ```

## 📌 Improvements to Consider

- Adding animations for a better user experience.
- Allowing users to set their names.
- Implementing a best-of-three or best-of-five mode.

## 🏆 Author

Developed by **Shashank B G**.

Enjoy the game and feel free to contribute! 🎉

