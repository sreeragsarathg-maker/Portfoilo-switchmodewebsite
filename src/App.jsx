import { useState, useEffect, useCallback, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ShadowMode from './components/ShadowMode';
import CyberTransition from './components/CyberTransition';
import { useJarvisAudio } from './hooks/useJarvisAudio';
import './styles/global.css';

const THEME_KEY = 'portfolio-theme';
const DEFAULT_THEME = 'professional';

export default function App() {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem(THEME_KEY) || DEFAULT_THEME; }
    catch { return DEFAULT_THEME; }
  });

  const { playSound } = useJarvisAudio();
  const [transitionState, setTransitionState] = useState({
    active: false,
    targetTheme: 'ghost',
    isExiting: false
  });
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);
  const isGhost = theme === 'ghost' || theme === 'shadow';

  /* Sync data-theme attribute to <html> and <body> */
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.body.setAttribute('data-theme', theme);
    document.title = isGhost
      ? 'ERICSXA Shadow Protocol — Sreerag Sarath'
      : 'Sreerag Sarath — Developer & Cybersecurity Enthusiast';
  }, [theme, isGhost]);

  // Ensure video autoplay and seamless infinite looping
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Direct DOM property enforcement (guarantees browser loop & autoplay policies)
    video.muted = true;
    video.defaultMuted = true;
    video.loop = true;

    const playVideo = () => {
      video.play().then(() => setIsPlaying(true)).catch(() => {
        setIsPlaying(false);
      });
    };

    // Fallback event listener in case browser stops on end
    const handleEnded = () => {
      video.currentTime = 0;
      playVideo();
    };

    video.addEventListener('ended', handleEnded);
    playVideo();

    return () => {
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  const toggleTheme = useCallback(() => {
    if (transitionState.active) return;
    const next = theme === 'professional' ? 'ghost' : 'professional';

    // 1. Play futuristic breach sound or restore sweep
    if (next === 'ghost') {
      playSound?.('breach');
    } else {
      playSound?.('restore');
    }

    // 2. Activate full-screen transition overlay
    setTransitionState({
      active: true,
      targetTheme: next,
      isExiting: false
    });

    // 3. Swap the theme at 420ms (during peak overlay coverage)
    setTimeout(() => {
      setTheme(next);
      try { localStorage.setItem(THEME_KEY, next); } catch { /* ignore */ }
    }, 420);

    // 4. Trigger exit wipe animation
    setTimeout(() => {
      setTransitionState(prev => ({ ...prev, isExiting: true }));
    }, 750);

    // 5. Unmount transition overlay
    setTimeout(() => {
      setTransitionState({ active: false, targetTheme: next, isExiting: false });
    }, 1150);
  }, [theme, transitionState.active, playSound]);

  const toggleVideo = useCallback(() => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  }, [isPlaying]);

  return (
    <div className="app" data-theme={theme}>
      {/* ─── FULL-SCREEN CYBER TRANSITION ANIMATION ─────── */}
      {transitionState.active && (
        <CyberTransition
          targetTheme={transitionState.targetTheme}
          isExiting={transitionState.isExiting}
        />
      )}

      {/* ─── AMBIENT BACKGROUND VIDEO SYSTEM ─────────── */}
      <div className="bg-video-container" aria-hidden="true">
        <video
          ref={videoRef}
          className="bg-video-element"
          autoPlay
          loop
          muted
          playsInline
          defaultMuted
          onEnded={(e) => {
            e.currentTarget.currentTime = 0;
            e.currentTarget.play().catch(() => {});
          }}
          poster={isGhost ? '/images/ghost-portrait.jpg' : '/images/sreerag.jpg'}
        >
          <source src="/video_watermark_removed.mp4" type="video/mp4" />
        </video>
        <div className="bg-video-overlay" />
        <div className="bg-video-vignette" />
      </div>

      {/* ─── Ghost grid lines ──────────────────────────── */}
      <div className="ghost-grid" aria-hidden="true" />

      {/* ─── Ambient Video Playback Toggle (Only in Professional Mode) ─── */}
      {!isGhost && (
        <button
          type="button"
          className={`bg-video-toggle ${!isPlaying ? 'paused' : ''}`}
          onClick={toggleVideo}
          aria-label={isPlaying ? 'Pause ambient video motion' : 'Play ambient video motion'}
          title={isPlaying ? 'Pause background motion' : 'Play background motion'}
        >
          <span className="bg-video-toggle-dot" aria-hidden="true" />
          <span>{isPlaying ? 'Ambient Motion' : 'Motion Paused'}</span>
        </button>
      )}

      {/* ─── Custom cursor ─────────────────────────────── */}
      <CustomCursor />

      {/* ─── CONDITIONAL MODE RENDERING ───────────────── */}
      {isGhost ? (
        <ShadowMode onToggleTheme={toggleTheme} theme={theme} />
      ) : (
        <>
          {/* Navigation */}
          <Navbar theme={theme} onToggleTheme={toggleTheme} />

          {/* Main Content */}
          <main id="main-content" role="main">
            <Hero theme={theme} />
            <About theme={theme} />
            <Skills theme={theme} />
            <Projects theme={theme} />
            <Education theme={theme} />
            <Experience theme={theme} />
            <Contact theme={theme} />
          </main>

          {/* Footer */}
          <Footer theme={theme} />
        </>
      )}
    </div>
  );
}
