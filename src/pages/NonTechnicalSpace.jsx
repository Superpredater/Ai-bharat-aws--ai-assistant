import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChatInterface from '../components/ChatInterface';

function NonTechnicalSpace() {
  const navigate = useNavigate();
  const [selectedFeature, setSelectedFeature] = useState(null);

  const features = [
    {
      id: 'concept-simplify',
      title: '💡 Concept Simplifier',
      description: 'Break down complex ideas',
      prompt: 'Explain this concept simply'
    },
    {
      id: 'tutor',
      title: '👨‍🏫 Personal Tutor',
      description: 'Learn any subject step-by-step',
      prompt: 'Teach me about'
    },
    {
      id: 'summarizer',
      title: '📝 Knowledge Organizer',
      description: 'Summarize and organize information',
      prompt: 'Help me organize this information'
    },
    {
      id: 'skill-builder',
      title: '🎯 Skill Builder',
      description: 'Create learning paths',
      prompt: 'Help me build this skill'
    }
  ];

  return (
    <div className="app-container learning-space">
      <button className="back-button" onClick={() => navigate('/')}>
        ← Back to Home
      </button>
      
      <div className="header">
        <h1>📚 Non-Technical Learning Space</h1>
        <p>Learn anything with personalized AI guidance</p>
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
            context="non-technical"
          />
        </>
      )}
    </div>
  );
}

export default NonTechnicalSpace;
