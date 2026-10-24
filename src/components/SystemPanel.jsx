import { useEffect, useRef } from 'react';

export default function SystemPanel({ activeSection, onNavigate, playSound }) {
  const canvasRef = useRef(null);

  // Animated network connection node constellation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 260);
    let height = (canvas.height = 140);

    const handleResize = () => {
      if (canvas.parentElement) {
        width = canvas.width = canvas.parentElement.clientWidth;
        height = canvas.height = 140;
      }
    };
    window.addEventListener('resize', handleResize);

    // Create 18 network nodes
    const nodes = Array.from({ length: 18 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      radius: 1.5 + Math.random() * 2
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connection lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 65) {
            ctx.strokeStyle = `rgba(0, 229, 255, ${0.4 * (1 - dist / 65)})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        ctx.fillStyle = '#00ff88';
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const recentActivities = [
    { time: '10m ago', event: 'Sahaayi AI platform documentation updated' },
    { time: '1h ago', event: 'Linux systemd daemon isolation lab verified' },
    { time: '3h ago', event: 'TCP 3-way handshake packet trace reviewed' },
    { time: '1d ago', event: 'OXIFINZ loan workflow validation tested' }
  ];

  return (
    <aside className="shadow-right-panel" aria-label="System Intelligence Telemetry">
      {/* Network Node Topology */}
      <div className="intel-card network-node-card">
        <div className="intel-card-header">
          <span className="intel-tag">[ NET-TOPOLOGY ]</span>
          <span className="live-pulse-dot" />
        </div>
        <h4 className="intel-title">NETWORK TOPOLOGY SIMULATION</h4>
        <div className="canvas-wrapper">
          <canvas ref={canvasRef} className="network-canvas" />
        </div>
        <div className="canvas-footer-stat">
          <span>NODES: 18 ACTIVE</span>
          <span className="green">LATENCY: 12ms (SIMULATED)</span>
        </div>
      </div>

      {/* Interface Status Card */}
      <div className="intel-card">
        <div className="intel-card-header">
          <span className="intel-tag">[ TELEMETRY ]</span>
          <span className="status-label green">ACTIVE</span>
        </div>
        <h4 className="intel-title">INTERFACE DIAGNOSTICS</h4>

        <div className="telemetry-rows">
          <div className="t-row">
            <span className="t-label">CURRENT VIEW:</span>
            <span className="t-val cyan">{activeSection.toUpperCase()}</span>
          </div>
          <div className="t-row">
            <span className="t-label">CLEARANCE LEVEL:</span>
            <span className="t-val">TIER 1 (RESEARCHER)</span>
          </div>
          <div className="t-row">
            <span className="t-label">SIMULATION MODE:</span>
            <span className="t-val green">LAB ENFORCED</span>
          </div>
          <div className="t-row">
            <span className="t-label">SECURITY PROTOCOL:</span>
            <span className="t-val">STRICT DEFENSIVE</span>
          </div>
        </div>
      </div>

      {/* Operator Technical Interests */}
      <div className="intel-card">
        <div className="intel-card-header">
          <span className="intel-tag">[ SPECIALIZATION ]</span>
        </div>
        <h4 className="intel-title">OPERATOR FOCUS VECTORS</h4>

        <div className="focus-vectors-list">
          <div className="vector-pill">
            <span className="v-bullet">▶</span>
            <span>Linux Internals & Kali</span>
          </div>
          <div className="vector-pill">
            <span className="v-bullet">▶</span>
            <span>TCP/IP & Packet Analysis</span>
          </div>
          <div className="vector-pill">
            <span className="v-bullet">▶</span>
            <span>Python & Shell Automation</span>
          </div>
          <div className="vector-pill">
            <span className="v-bullet">▶</span>
            <span>Full-Stack Web (React/Node)</span>
          </div>
          <div className="vector-pill">
            <span className="v-bullet">▶</span>
            <span>Authorized CTF Challenges</span>
          </div>
        </div>
      </div>

      {/* Recent Activity Log */}
      <div className="intel-card">
        <div className="intel-card-header">
          <span className="intel-tag">[ ACTIVITY STREAM ]</span>
          <span className="stream-count">REAL-TIME</span>
        </div>
        <h4 className="intel-title">AUDIT LOG // TIMELINE</h4>

        <div className="audit-activity-list">
          {recentActivities.map((act, idx) => (
            <div key={idx} className="audit-item">
              <span className="audit-time font-mono">{act.time}</span>
              <span className="audit-text">{act.event}</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
