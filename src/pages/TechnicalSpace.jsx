import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChatInterface from '../components/ChatInterface';

function TechnicalSpace() {
  const navigate = useNavigate();
  const [selectedFeature, setSelectedFeature] = useState(null);

  const features = [
    {
      id: 'code-explain',
      title: '🔍 Code Explainer',
      description: 'Understand any code snippet',
      prompt: 'Explain this code to me'
    },
    {
      id: 'debug-helper',
      title: '🐛 Debug Assistant',
      description: 'Find and fix bugs faster',
      prompt: 'Help me debug this issue'
    },
    {
      id: 'doc-helper',
      title: '📖 Documentation Helper',
      description: 'Generate or understand docs',
      prompt: 'Help me with documentation'
    },
    {
      id: 'architecture',
      title: '🏗️ Architecture Guide',
      description: 'Design better systems',
      prompt: 'Guide me on system architecture'
    }
  ];

  return (
    <div className="app-container learning-space">
      <button className="back-button" onClick={() => navigate('/')}>
        ← Back to Home
      </button>
      
      <div className="header">
        <h1>💻 Technical Learning Space</h1>
        <p>Master development skills with AI assistance</p>
      </div>

      {!selectedFeature ? (
        <div className="features">
          {features.map(feature => (
            <div
              key={feature.id}
              className="feature-card"
              onClick={() => setSelectedFeature(feature)}
            >
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <>
          <button 
            className="back-button" 
            onClick={() => setSelectedFeature(null)}
            style={{ marginTop: '1rem' }}
          >
            ← Choose Different Feature
          </button>
          <ChatInterface 
            feature={selectedFeature}
            context="technical"
          />
        </>
      )}
    </div>
  );
}

export default TechnicalSpace;
