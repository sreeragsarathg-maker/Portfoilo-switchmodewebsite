import { useState, useEffect } from 'react';
import BootSequence from './BootSequence';
import ShadowHUD from './ShadowHUD';
import { useJarvisAudio } from '../hooks/useJarvisAudio';
import '../styles/shadow-mode.css';

const BOOT_DONE_KEY = 'shadow-boot-completed-session';

export default function ShadowMode({ onToggleTheme, theme }) {
  const [bootCompleted, setBootCompleted] = useState(() => {
    // Check if user has already seen the boot sequence in this session
    try {
      return sessionStorage.getItem(BOOT_DONE_KEY) === 'true';
    } catch {
      return false;
    }
  });

  const {
    isMuted,
    isTtsMuted,
    isSpeaking,
    playSound,
    speak,
    toggleMute,
    toggleTts
  } = useJarvisAudio();

  const handleBootComplete = () => {
    setBootCompleted(true);
    try {
      sessionStorage.setItem(BOOT_DONE_KEY, 'true');
    } catch {
      // sessionStorage catch
    }
  };

  return (
    <div className="shadow-mode-root" data-theme="ghost">
      {/* Cinematic One-Time Boot Sequence */}
      {!bootCompleted ? (
        <BootSequence
          onComplete={handleBootComplete}
          playSound={playSound}
        />
      ) : (
        <ShadowHUD
          onToggleTheme={onToggleTheme}
          playSound={playSound}
          speak={speak}
          isSpeaking={isSpeaking}
          isTtsMuted={isTtsMuted}
          toggleTts={toggleTts}
          isMuted={isMuted}
          toggleMute={toggleMute}
        />
      )}
    </div>
  );
}
