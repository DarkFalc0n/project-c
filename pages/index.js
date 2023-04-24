import Head from 'next/head'
import '../styles/Home.module.css'
import { useEffect } from 'react'
// import Phaser from 'phaser';

export default function Home() {

  useEffect(() => {
    async function initPhaser() {
      const Phaser = await import('phaser');
      const Loader = await import('../scenes/Loader');
      const MainMenu = await import('../scenes/MainMenu');

      const phaserGame = new Phaser.Game({
        type: Phaser.AUTO,
        title: "project-c",
        width: 800,
        height: 450,
        zoom: 1,
        parent: "gameWindow",
        scene: [Loader],
        scale: {
          autoCenter: Phaser.Scale.CENTER_BOTH
        }
      });
      console.log(phaserGame.scene.getScenes(true));
      console.log(phaserGame.scene.scenes);
      console.log(phaserGame.scene.isActive(Loader));
      window.game = phaserGame;
      window.sizeChanged = () => {
        if (window.game.isBooted) {
          setTimeout(() => {
            window.game.scale.resize(window.innerWidth, window.innerHeight); window.game.canvas.setAttribute(
              'style',
              `display: block; width: ${window.innerWidth}px; height: ${window.innerHeight}px;`,
            );
          }, 100);
        }
      };
      window.onresize = () => window.sizeChanged();
      // Render Loader scene
      window.game.scene.start(Loader);
    }
    initPhaser();
  }, [])

  return (
    <div className="game-wrapper">
      <div id="gameWindow" key="gameWindow">
      </div>
    </div>
  )
}
