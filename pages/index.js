import Head from 'next/head'
import '../styles/Home.module.css'
import { useEffect } from 'react'
// import Phaser from 'phaser';

export default function Home() {

  useEffect(() => {
    async function initPhaser() {
      const Phaser = await import('phaser');
      const Loader = (await import('../scenes/Loader')).default;
      const MainMenu = (await import('../scenes/MainMenu')).default;

      const phaserGame = new Phaser.Game({
        type: Phaser.AUTO,
        title: "project-c",
        width: window.innerWidth * 2,
        height: window.innerHeight * 2,
        parent: "gameWindow",
        scene: [Loader, MainMenu],
        scale: {
          // fullscreenTarget: 'gameWindow',
          parent: Phaser.Scale.PARENT,
          zoom: 0.5,
        },
        physics: {
          arcade: {
            gravity: { y: 0 },
          },
          default: 'arcade',
        }
      });
      console.log(phaserGame.scene.isActive(Loader));
      window.game = phaserGame;
      console.log(phaserGame.getFrame())
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
      // Start the game
      phaserGame.scene.start(Loader);
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
