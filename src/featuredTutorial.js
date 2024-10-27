import React from 'react';

const tutorials = [
  { title: 'Tutorial 1', description: 'Description of Tutorial 1' },
  { title: 'Tutorial 2', description: 'Description of Tutorial 2' },
  { title: 'Tutorial 3', description: 'Description of Tutorial 3' },
];

const FeaturedTutorials = () => (
  <div><center>
    <h2>Featured Tutorials</h2>

    {/* Flower Image or Any Other Placeholder */}
    <div className="featured-tutorials-image">
      <img 
        src="images.jpeg"
        alt="Tutorial Image" 
        style={{ width: '40%', height: 'auto' }} 
      />
    </div>
    </center>

    {/* Tutorial Cards */}
    <div className="tutorial-cards" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
      {tutorials.map((tutorial, index) => (
        <div key={index} className="tutorial-card" style={{ flex: '1', margin: '0 10px' }}>
          <img src={`https://picsum.photos/200/150?random=${index + 3}`} alt="Tutorial" />
          <h3>{tutorial.title}</h3>
          <p>{tutorial.description}</p>
        </div>
      ))}
    </div>

    {/* See More Tutorials Button */}
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <button style={{ padding: '10px 20px', backgroundColor: '#ccc', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        See More Tutorials
      </button>
    </div>
  </div>
);

export default FeaturedTutorials;