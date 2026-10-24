import { useState, useEffect, useRef, useCallback } from 'react';

const AUDIO_MUTE_KEY = 'shadow-jarvis-muted';
const TTS_MUTE_KEY = 'shadow-jarvis-tts-muted';

export function useJarvisAudio() {
  const [isMuted, setIsMuted] = useState(() => {
    try { return localStorage.getItem(AUDIO_MUTE_KEY) === 'true'; }
    catch { return false; }
  });

  const [isTtsMuted, setIsTtsMuted] = useState(() => {
    try { return localStorage.getItem(TTS_MUTE_KEY) === 'true'; }
    catch { return true; } // default speech off so it doesn't disturb unexpectedly
  });

  const audioCtxRef = useRef(null);

  // Initialize or resume AudioContext safely upon user interaction
  const getAudioContext = useCallback(() => {
    if (typeof window === 'undefined') return null;
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        audioCtxRef.current = new AudioCtx();
      }
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume().catch(() => {});
    }
    return audioCtxRef.current;
  }, []);

  // Cyber sound synthesized waveforms
  const playSound = useCallback((type = 'blip') => {
    if (isMuted) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.connect(gain);
      gain.connect(ctx.destination);

      if (type === 'blip') {
        // High-tech subtle UI hover blip
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1200, now);
        osc.frequency.exponentialRampToValueAtTime(1800, now + 0.04);
        gain.gain.setValueAtTime(0.04, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
        osc.start(now);
        osc.stop(now + 0.04);
      } else if (type === 'select') {
        // High-tech confirmation tone
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(880, now);
        osc.frequency.exponentialRampToValueAtTime(1320, now + 0.08);
        gain.gain.setValueAtTime(0.07, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
        osc.start(now);
        osc.stop(now + 0.08);
      } else if (type === 'access') {
        // Futuristic double-chirp for section unlock
        osc.type = 'sine';
        osc.frequency.setValueAtTime(600, now);
        osc.frequency.setValueAtTime(1200, now + 0.05);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
        osc.start(now);
        osc.stop(now + 0.12);
      } else if (type === 'alert') {
        // Warning chirp
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.setValueAtTime(330, now + 0.08);
        gain.gain.setValueAtTime(0.06, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);
        osc.start(now);
        osc.stop(now + 0.16);
      } else if (type === 'boot') {
        // Low-frequency reactor activation sweep
        osc.type = 'sine';
        osc.frequency.setValueAtTime(110, now);
        osc.frequency.exponentialRampToValueAtTime(440, now + 0.4);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
        osc.start(now);
        osc.stop(now + 0.45);
      } else if (type === 'breach') {
        // Cyber glitch & deep bass breach surge
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(900, now);
        osc.frequency.exponentialRampToValueAtTime(120, now + 0.3);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.38);
        osc.start(now);
        osc.stop(now + 0.38);
      } else if (type === 'restore') {
        // High-tech ascending crystal restore sweep
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(280, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.25);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
        osc.start(now);
        osc.stop(now + 0.3);
      }
    } catch {
      // Audio autoplay policy catch
    }
  }, [isMuted, getAudioContext]);

  const [isSpeaking, setIsSpeaking] = useState(false);

  // Speech synthesis for JARVIS assistant responses
  const speak = useCallback((text) => {
    if (isTtsMuted || typeof window === 'undefined' || !window.speechSynthesis) return;
    try {
      window.speechSynthesis.cancel(); // cancel any active speech
      const cleanText = (text || '').replace(/[[\]{}#*_`~<>|]/g, ' ').slice(0, 180);
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.rate = 1.05;
      utterance.pitch = 0.95; // slightly lower pitch for JARVIS aesthetic
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
    } catch {
      setIsSpeaking(false);
    }
  }, [isTtsMuted]);

  const toggleMute = useCallback(() => {
    setIsMuted(prev => {
      const next = !prev;
      try { localStorage.setItem(AUDIO_MUTE_KEY, String(next)); } catch { /* ignore */ }
      return next;
    });
  }, []);

  const toggleTts = useCallback(() => {
    setIsTtsMuted(prev => {
      const next = !prev;
      try { localStorage.setItem(TTS_MUTE_KEY, String(next)); } catch { /* ignore */ }
      return next;
    });
  }, []);

  return {
    isMuted,
    isTtsMuted,
    isSpeaking,
    playSound,
    speak,
    toggleMute,
    toggleTts
  };
}
