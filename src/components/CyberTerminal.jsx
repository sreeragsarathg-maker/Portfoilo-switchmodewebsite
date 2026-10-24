import { useState, useRef, useEffect } from 'react';
import { executeShadowCommand } from '../data/shadowCommands';

export default function CyberTerminal({ onNavigate, playSound }) {
  const [inputVal, setInputVal] = useState('');
  const [terminalLogs, setTerminalLogs] = useState([
    {
      id: 1,
      type: 'system',
      lines: [
        'SHADOW CYBERNETIC TERMINAL // EMULATOR v4.2.0',
        'Type "help" to list directives, "clear" to flush console, or "nav <section>" to shift HUD focus.',
        'Session authenticated for SREERAG SARATH. Security boundary: LOCAL SANDBOX.'
      ]
    }
  ]);
  const [history, setHistory] = useState([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [terminalLogs]);

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = inputVal.trim();
    if (!cmd) return;

    playSound?.('select');
    setHistory(prev => [cmd, ...prev]);
    setHistoryIdx(-1);
    setInputVal('');

    const entryId = Date.now();

    if (cmd.toLowerCase() === 'clear' || cmd.toLowerCase() === 'cls') {
      setTerminalLogs([]);
      return;
    }

    const res = executeShadowCommand(cmd, {
      setActiveSection: onNavigate
    });

    const newEntry = {
      id: entryId,
      command: cmd,
      type: res?.type || 'output',
      lines: res?.output || []
    };

    setTerminalLogs(prev => [...prev, newEntry]);

    if (res?.type === 'error') {
      playSound?.('alert');
    } else {
      playSound?.('blip');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length > 0 && historyIdx + 1 < history.length) {
        const nextIdx = historyIdx + 1;
        setHistoryIdx(nextIdx);
        setInputVal(history[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx > 0) {
        const nextIdx = historyIdx - 1;
        setHistoryIdx(nextIdx);
        setInputVal(history[nextIdx]);
      } else if (historyIdx === 0) {
        setHistoryIdx(-1);
        setInputVal('');
      }
    }
  };

  return (
    <div className="cyber-terminal-panel" onClick={() => inputRef.current?.focus()}>
      {/* Terminal Title Bar */}
      <div className="terminal-titlebar">
        <div className="terminal-buttons">
          <span className="term-btn red" />
          <span className="term-btn yellow" />
          <span className="term-btn green" />
        </div>
        <div className="terminal-title">
          <span>root@shadow-core:~# bash --interactive</span>
        </div>
        <div className="terminal-badges">
          <span className="badge-tag">EMULATOR</span>
        </div>
      </div>

      {/* Terminal Output Log */}
      <div className="terminal-viewport">
        {terminalLogs.map((entry) => (
          <div key={entry.id} className="terminal-entry">
            {entry.command && (
              <div className="terminal-cmd-line">
                <span className="term-user">sreerag@shadow</span>
                <span className="term-colon">:</span>
                <span className="term-path">~</span>
                <span className="term-prompt">$</span>
                <span className="term-executed-cmd">{entry.command}</span>
              </div>
            )}
            <div className={`terminal-output-block ${entry.type}`}>
              {entry.lines.map((line, lIdx) => (
                <div key={lIdx} className="terminal-line">{line}</div>
              ))}
            </div>
          </div>
        ))}
        <div ref={terminalEndRef} />

        {/* Active Command Input Line */}
        <form onSubmit={handleCommand} className="terminal-prompt-form">
          <span className="term-user">sreerag@shadow</span>
          <span className="term-colon">:</span>
          <span className="term-path">~</span>
          <span className="term-prompt">$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            className="terminal-real-input"
            autoFocus
            autoComplete="off"
            spellCheck="false"
          />
          <span className="terminal-cursor">█</span>
        </form>
      </div>
    </div>
  );
}
