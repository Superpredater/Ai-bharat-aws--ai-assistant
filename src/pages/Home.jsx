import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="app-container">
      <div className="header">
        <h1>🚀 AI Learning Assistant</h1>
        <p>Learn faster, work smarter, become more productive</p>
      </div>
      
      <div className="space-selector">
        <Link to="/technical" className="space-card">
          <div className="space-icon">💻</div>
          <h2>Technical Space</h2>
          <p>
            Master programming, debugging, and development workflows. 
            Get code explanations, documentation help, and technical guidance.
          </p>
          <ul style={{ marginTop: '1rem', color: '#888' }}>
            <li>Code explanation & debugging</li>
            <li>Documentation assistant</li>
            <li>Architecture guidance</li>
            <li>Best practices & patterns</li>
          </ul>
        </Link>

        <Link to="/non-technical" className="space-card">
          <div className="space-icon">📚</div>
          <h2>Non-Technical Space</h2>
          <p>
            Learn any subject, simplify complex concepts, and build new skills. 
            Your personal tutor for everything beyond code.
          </p>
          <ul style={{ marginTop: '1rem', color: '#888' }}>
            <li>Concept simplification</li>
            <li>Subject tutoring</li>
            <li>Knowledge organization</li>
            <li>Skill building</li>
          </ul>
        </Link>
      </div>
    </div>
  );
}

export default Home;
