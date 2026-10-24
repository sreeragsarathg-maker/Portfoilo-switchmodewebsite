import { useState, useRef, useEffect, useCallback } from 'react';
import { executeShadowCommand } from '../data/shadowCommands';

export default function JarvisAssistant({
  onNavigate,
  playSound,
  speak,
  isSpeaking,
  isTtsMuted,
  toggleTts,
  isMuted,
  toggleMute
}) {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    {
      sender: 'jarvis',
      text: 'ERICSXA Online. Systems operating at 100% capacity. Awaiting directive — speak via microphone, ask conversational questions, or type "help".'
    }
  ]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(false);

  const logEndRef = useRef(null);
  const recognitionRef = useRef(null);

  // Check Web Speech Recognition support
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognition) {
        setSpeechSupported(true);
      }
    }
  }, []);

  // Auto scroll assistant log to bottom
  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history, isTyping]);

  // Core directive processing function
  const processDirective = useCallback((rawQuery) => {
    const query = (rawQuery || '').trim();
    if (!query) return;

    playSound?.('select');

    // Add user message to log
    const userMsg = { sender: 'user', text: query };
    setHistory(prev => [...prev, userMsg]);
    setCommandHistory(prev => [query, ...prev]);
    setHistoryIdx(-1);
    setInputVal('');
    setIsTyping(true);

    // Process command with realistic cyber computation delay
    setTimeout(() => {
      setIsTyping(false);
      const result = executeShadowCommand(query, {
        setActiveSection: onNavigate
      });

      if (!result) return;

      if (result.type === 'clear') {
        setHistory([
          { sender: 'jarvis', text: 'Assistant buffer flushed. Standby for directives.' }
        ]);
        return;
      }

      const responseText = result.output ? result.output.join('\n') : 'Directive processed.';
      setHistory(prev => [
        ...prev,
        {
          sender: 'jarvis',
          text: responseText,
          isError: result.type === 'error',
          sectionChange: result.sectionChange
        }
      ]);

      if (result.type === 'error') {
        playSound?.('alert');
      } else {
        playSound?.('access');
      }

      // Voice response if TTS enabled
      if (result.output && result.output.length > 0) {
        // Speak first meaningful sentence
        const firstLine = result.output.find(l => l && !l.startsWith('╔') && !l.startsWith('•') && !l.startsWith('---')) || result.output[0];
        speak?.(firstLine);
      }
    }, 400);
  }, [onNavigate, playSound, speak]);

  const handleSubmit = (e) => {
    e.preventDefault();
    processDirective(inputVal);
  };

  // Toggle Voice Recognition (Microphone)
  const toggleListening = () => {
    if (!speechSupported) {
      alert('Speech recognition is not supported in this browser. Try Google Chrome or Microsoft Edge.');
      return;
    }

    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
      playSound?.('blip');
      return;
    }

    try {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = true;
      recognition.lang = 'en-US';

      recognition.onstart = () => {
        setIsListening(true);
        playSound?.('access');
      };

      recognition.onresult = (event) => {
        let transcript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          transcript += event.results[i][0].transcript;
        }
        setInputVal(transcript);

        if (event.results[0].isFinal) {
          setIsListening(false);
          processDirective(transcript);
        }
      };

      recognition.onerror = () => {
        setIsListening(false);
        playSound?.('alert');
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
      recognition.start();
    } catch {
      setIsListening(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0 && historyIdx + 1 < commandHistory.length) {
        const nextIdx = historyIdx + 1;
        setHistoryIdx(nextIdx);
        setInputVal(commandHistory[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx > 0) {
        const nextIdx = historyIdx - 1;
        setHistoryIdx(nextIdx);
        setInputVal(commandHistory[nextIdx]);
      } else if (historyIdx === 0) {
        setHistoryIdx(-1);
        setInputVal('');
      }
    }
  };

  const handleQuickChip = (cmdText) => {
    processDirective(cmdText);
  };

  const SUGGESTIONS = [
    'who is sreerag',
    'skills',
    'projects',
    'why physics?',
    'scan',
    'decrypt',
    'contact',
    'help'
  ];

  return (
    <div className="jarvis-assistant-panel" aria-label="ERICSXA Assistant Console">
      {/* Assistant Header */}
      <div className="assistant-header-bar">
        <div className="assistant-status">
          <span className="jarvis-ai-badge">AI // ERICSXA</span>
          <span className={`live-status-pill ${isSpeaking ? 'speaking' : ''}`}>
            {isSpeaking ? '⚡ VOCALIZING...' : isListening ? '🎙️ LISTENING...' : 'INTERACTIVE ASSISTANT'}
          </span>
        </div>
        <div className="assistant-audio-toggles">
          {speechSupported && (
            <button
              type="button"
              className={`audio-toggle-btn mic-btn ${isListening ? 'listening' : ''}`}
              onClick={toggleListening}
              title={isListening ? 'Click to stop listening' : 'Speak via microphone'}
              aria-label="Toggle voice microphone input"
            >
              {isListening ? '🔴 LISTENING...' : '🎙️ MIC'}
            </button>
          )}
          <button
            type="button"
            className={`audio-toggle-btn ${!isTtsMuted ? 'active' : ''}`}
            onClick={toggleTts}
            title={!isTtsMuted ? 'Voice Speech Enabled' : 'Voice Speech Muted'}
            aria-label="Toggle voice feedback"
          >
            {!isTtsMuted ? 'VOICE: ON' : 'VOICE: OFF'}
          </button>
          <button
            type="button"
            className={`audio-toggle-btn ${!isMuted ? 'active' : ''}`}
            onClick={toggleMute}
            title={!isMuted ? 'Synthesized Audio Enabled' : 'Synthesized Audio Muted'}
            aria-label="Toggle synthesized audio"
          >
            {!isMuted ? 'AUDIO: ON' : 'AUDIO: OFF'}
          </button>
        </div>
      </div>

      {/* Assistant Chat Message Stream */}
      <div className="assistant-conversation-stream">
        {history.map((msg, idx) => (
          <div key={idx} className={`assistant-bubble ${msg.sender} ${msg.isError ? 'error' : ''}`}>
            <div className="bubble-tag">
              {msg.sender === 'jarvis' ? 'ERICSXA AI:' : 'OPERATOR:'}
            </div>
            <pre className="bubble-text">{msg.text}</pre>
            {msg.sectionChange && (
              <button
                type="button"
                className="bubble-action-btn"
                onClick={() => onNavigate?.(msg.sectionChange)}
              >
                ACCESS {msg.sectionChange.toUpperCase()} VIEWPORT →
              </button>
            )}
          </div>
        ))}

        {isTyping && (
          <div className="assistant-bubble jarvis typing">
            <span className="bubble-tag">ERICSXA AI:</span>
            <span className="typing-dots">
              <span>.</span><span>.</span><span>.</span>
            </span>
            <span className="typing-label">ANALYZING DIRECTIVE</span>
          </div>
        )}
        <div ref={logEndRef} />
      </div>

      {/* Quick Suggestion Chips */}
      <div className="assistant-quick-chips">
        <span className="chips-label">PROMPTS:</span>
        {SUGGESTIONS.map(c => (
          <button
            key={c}
            type="button"
            className="suggestion-chip"
            onClick={() => handleQuickChip(c)}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Input Field */}
      <form onSubmit={handleSubmit} className="assistant-input-form">
        <div className="input-prompt-label">&gt;</div>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={isListening ? 'Listening to your voice...' : 'Ask ERICSXA (e.g. "who is sreerag", "skills", "scan localhost", "help")...'}
          className="assistant-text-input"
          autoComplete="off"
          spellCheck="false"
        />
        {speechSupported && (
          <button
            type="button"
            className={`mic-inline-btn ${isListening ? 'active' : ''}`}
            onClick={toggleListening}
            title="Speak into microphone"
            aria-label="Voice input"
          >
            🎙️
          </button>
        )}
        <button type="submit" className="assistant-send-btn" aria-label="Send directive">
          EXECUTE
        </button>
      </form>
    </div>
  );
}
