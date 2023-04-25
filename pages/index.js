import Head from 'next/head'
import '../styles/Home.module.css'
import { useEffect, useState } from 'react'
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
          parent: Phaser.Scale.RESIZE,
          zoom: 0.5,
        },
        render: {
          antialias: false,
        },
        physics: {
          arcade: {
            gravity: { y: 0 },
          },
          fit: {
            mode: Phaser.Scale.FIT,
          },
          physics: {
            arcade: {
              gravity: { y: 0 },
            },
            default: 'arcade',
          },
          fps: {
            target: 30,
            forceSetTimeOut: true,
            
          }
        }
      });
      console.log(phaserGame.scene.isActive(Loader));
      window.game = phaserGame;
      console.log(phaserGame.getFrame());
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
