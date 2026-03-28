import React, { useEffect, useState } from 'react';
import './index.css';

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // The Light-Follow Signature Interaction
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="app-wrapper">
      <div className="bg-nebula" />
      
      {/* Interactive Cursor Light Leak */}
      <div 
        className="cursor-glow"
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: '600px', height: '600px',
          background: 'radial-gradient(circle, rgba(0, 245, 255, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          transform: `translate(${mousePos.x - 300}px, ${mousePos.y - 300}px)`,
          pointerEvents: 'none',
          zIndex: 1,
          transition: 'transform 0.1s ease-out'
        }}
      />

      {/* Floating Nano Navigation */}
      <nav style={{ 
        position: 'fixed', width: '100%', top: 0, zIndex: 50, 
        padding: '1.5rem 0', display: 'flex', justifyContent: 'center' 
      }}>
        <div className="glass-panel" style={{ 
          display: 'flex', gap: '3rem', padding: '1rem 3rem', borderRadius: '50px' 
        }}>
          <span className="text-label" style={{ color: 'var(--primary)', fontWeight: 'bold' }}>OPENCLAW.</span>
          <a href="#setup" className="text-label" style={{ textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color='var(--primary)'} onMouseOut={e => e.target.style.color='var(--text-secondary)'}>Setup</a>
          <a href="#agents" className="text-label" style={{ textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color='var(--primary)'} onMouseOut={e => e.target.style.color='var(--text-secondary)'}>Agents</a>
          <a href="#infra" className="text-label" style={{ textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color='var(--primary)'} onMouseOut={e => e.target.style.color='var(--text-secondary)'}>Infra</a>
        </div>
      </nav>

      <main className="layout-container" style={{ position: 'relative', zIndex: 10, paddingTop: '15vh' }}>
        
        {/* Extreme Kinetic Hero */}
        <section style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', maxWidth: '1000px' }}>
          <p className="text-label" style={{ color: 'var(--primary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ width: '8px', height: '8px', background: 'var(--primary)', borderRadius: '50%', display: 'inline-block', boxShadow: '0 0 10px var(--primary)' }}/>
            System Online
          </p>
          <h1 className="text-display" style={{ marginBottom: '2rem' }}>
            Hyper-Intelligence <br/>
            via <span style={{ color: 'transparent', WebkitTextStroke: '2px var(--primary)', position: 'relative' }}>
              OpenClaw.
              <span style={{ position: 'absolute', left: 0, top: 0, color: 'var(--primary)', filter: 'blur(8px)', zIndex: -1 }}>OpenClaw.</span>
            </span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px', marginBottom: '3rem' }}>
            Transform your business with autonomous algorithmic agents. We deploy, train, and host extreme intelligence nodes wrapped in military-grade sandboxes.
          </p>
          <button className="btn-liquid">
            INITIALIZE DEPLOYMENT
          </button>
        </section>

        {/* SETUP SECTION */}
        <section id="setup" style={{ padding: '8rem 0', minHeight: '60vh' }}>
          <div style={{ maxWidth: '600px', marginBottom: '4rem' }}>
            <h3 className="text-label" style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Initialization</h3>
            <h2 className="text-display" style={{ fontSize: '3rem', lineHeight: '1.2' }}>Secure Setup.<br/>Zero Friction.</h2>
          </div>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <div className="glass-panel" style={{ flex: 1, padding: '3rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(0,245,255,0.1)', border: '1px solid var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'var(--primary)' }}>1</div>
                <div>
                  <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', fontFamily: 'var(--font-tech)' }}>Audit & Architecture</h4>
                  <p style={{ color: 'var(--text-secondary)' }}>We analyze your proprietary workflows to build a custom OpenClaw neural matrix.</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(0,245,255,0.1)', border: '1px solid var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'var(--primary)' }}>2</div>
                <div>
                  <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', fontFamily: 'var(--font-tech)' }}>Sandboxed Deployment</h4>
                  <p style={{ color: 'var(--text-secondary)' }}>Agents run inside isolated containers ensuring absolute data sovereignty.</p>
                </div>
              </div>
            </div>
            {/* Mock Terminal Card */}
            <div className="glass-panel" style={{ flex: 1, padding: '2rem', height: '300px', fontFamily: 'var(--font-tech)', fontSize: '0.9rem', color: 'var(--primary)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'var(--primary)', boxShadow: '0 0 15px var(--primary)' }} />
              <p style={{ color: 'var(--text-secondary)' }}>$ openclaw init --secure --sandbox=true</p>
              <p style={{ marginTop: '1rem', color: '#d0bcff' }}>&gt; Authenticating node...</p>
              <p style={{ color: '#d0bcff' }}>&gt; Constructing neural pathways...</p>
              <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>[SUCCESS] Deployment Live.</p>
            </div>
          </div>
        </section>

        {/* AGENTS SECTION */}
        <section id="agents" style={{ padding: '8rem 0', minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h3 className="text-label" style={{ color: 'var(--primary)', marginBottom: '1rem' }}>The Fleet</h3>
            <h2 className="text-display" style={{ fontSize: '3rem' }}>Specialized Agent Nodes</h2>
          </div>
          <div style={{ display: 'flex', gap: '2rem', position: 'relative' }}>
            {/* Back Glass Plane */}
            <div className="glass-panel" style={{ flex: 1, padding: '4rem', transform: 'translateY(40px) translateZ(-50px)', position: 'relative' }}>
              <h3 className="text-label" style={{ marginBottom: '1rem' }}>Module 01</h3>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem', fontFamily: 'var(--font-tech)' }}>CRM Automation</h2>
              <p style={{ color: 'var(--text-secondary)' }}>Agents that don't just log data—they predict closes, draft contracts, and execute outreach loops entirely autonomously.</p>
            </div>
            
            {/* Forward Glass Plane (Overlapping) */}
            <div className="glass-panel" style={{ flex: 1, padding: '4rem', transform: 'translateY(-20px) translateZ(50px)', zIndex: 2, borderTopColor: 'var(--primary)' }}>
              <h3 className="text-label" style={{ marginBottom: '1rem', color: 'var(--primary)' }}>Module 02</h3>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem', fontFamily: 'var(--font-tech)' }}>Agent Training</h2>
              <p style={{ color: 'var(--text-secondary)' }}>We don't provide off-the-shelf bots. Our OpenClaw setup trains neural networks strictly on your actual historical data.</p>
            </div>
            
            {/* Side Glass Plane */}
            <div className="glass-panel" style={{ flex: 1, padding: '4rem', transform: 'translateY(60px) translateZ(-100px)' }}>
              <h3 className="text-label" style={{ marginBottom: '1rem' }}>Module 03</h3>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem', fontFamily: 'var(--font-tech)' }}>Growth Loops</h2>
              <p style={{ color: 'var(--text-secondary)' }}>Continuously scraping, analyzing, and adapting your marketing pipelines without human intervention.</p>
            </div>
          </div>
        </section>

        {/* INFRA SECTION */}
        <section id="infra" style={{ padding: '8rem 0 12rem 0', minHeight: '60vh' }}>
          <div style={{ maxWidth: '600px', marginBottom: '4rem' }}>
            <h3 className="text-label" style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Backend Power</h3>
            <h2 className="text-display" style={{ fontSize: '3rem', lineHeight: '1.2' }}>Bare-Metal <br/>Infrastructure.</h2>
          </div>
          <div className="glass-panel" style={{ padding: '4rem', display: 'flex', gap: '3rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <div style={{ flex: 1, minWidth: '300px' }}>
              <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'var(--font-tech)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ display: 'inline-block', width: '12px', height: '12px', background: '#32CD32', borderRadius: '50%', boxShadow: '0 0 10px #32CD32' }}></span>
                Zero Rate Limits
              </h4>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>We host your models on dedicated high-performance clusters. Eliminate API caps and compute bottlenecks forever.</p>
              
              <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'var(--font-tech)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ display: 'inline-block', width: '12px', height: '12px', background: 'var(--primary)', borderRadius: '50%', boxShadow: '0 0 10px var(--primary)' }}></span>
                Military Grade
              </h4>
              <p style={{ color: 'var(--text-secondary)' }}>Air-gapped server options with full SOC2 compliance specifically engineered for proprietary AI workloads.</p>
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ background: 'rgba(0,0,0,0.5)', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <h5 className="text-label" style={{ marginBottom: '0.5rem' }}>Network Latency</h5>
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '1rem' }}>
                  <span style={{ fontSize: '2.5rem', fontFamily: 'var(--font-tech)', color: 'var(--primary)', lineHeight: 1 }}>14</span>
                  <span style={{ color: 'var(--text-secondary)', paddingBottom: '0.4rem' }}>ms avg.</span>
                </div>
              </div>
              <div style={{ background: 'rgba(0,0,0,0.5)', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <h5 className="text-label" style={{ marginBottom: '0.5rem' }}>Compute Nodes</h5>
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '1rem' }}>
                  <span style={{ fontSize: '2.5rem', fontFamily: 'var(--font-tech)', color: '#d0bcff', lineHeight: 1 }}>2048</span>
                  <span style={{ color: 'var(--text-secondary)', paddingBottom: '0.4rem' }}>active cores</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

export default App;
