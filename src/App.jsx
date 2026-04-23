import React from 'react';

export default function App() {
  return (
    <div>
      <h3>📦 Remote App Component</h3>
      <p>
        This is the <strong>Remote Application</strong> (port 3001).
      </p>
      <p>
        It works as a <strong>standalone app</strong> when you visit{' '}
        <a href="http://localhost:3001" target="_blank" rel="noopener noreferrer">
          localhost:3001
        </a>
      </p>
      <p>
        It's also <strong>exposed via Module Federation</strong> and can be loaded 
        into the Hub App without iframes!
      </p>
      <p style={{ 
        marginTop: '20px', 
        padding: '15px', 
        background: '#dcfce7', 
        borderRadius: '4px',
        border: '1px solid #22c55e'
      }}>
        ✅ Module Federation is working if you can see this inside the Hub!
      </p>
    </div>
  );
}
