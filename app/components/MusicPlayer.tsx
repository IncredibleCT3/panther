import React from 'react'

const MusicPlayer = () => {
  function toggleTheme() {
    const root = document.documentElement;

    if (root.hasAttribute("data-theme")) {
      root.removeAttribute("data-theme"); // dark
    } else {
      root.setAttribute("data-theme", "light");
    }
  }

  return (
    <main style={{ padding: 24 }}>
      <button className="y2k-btn" onClick={toggleTheme}>
        Toggle Theme
      </button>

      <div className="y2k-card2" style={{ marginTop: 24 }}>
        <h1>Next.js Dark / Light</h1>
        <p className="y2k-muted">
          Same CSS file. No re-render. No flicker.
        </p>
      </div>
    </main>
  );
}

export default MusicPlayer;