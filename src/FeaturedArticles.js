import React from 'react';

const articles = [
  { title: 'Article 1', description: 'Description of Article 1', author: 'Author 1' },
  { title: 'Article 2', description: 'Description of Article 2', author: 'Author 2' },
  { title: 'Article 3', description: 'Description of Article 3', author: 'Author 3' },
];

const FeaturedArticles = () => (
  <div><center>
    <h2>Featured Articles</h2>

    {/* Add the flower image just below the heading */}
    <div className="featured-articles-flower-image">
        
      <img 
        src="flower.jpg.avif" 
        alt="Flower" 
        style={{ width: '10%', height: 'auto' }}  // Ensure the image is responsive
      />
     
    </div>
    </center>
    {/* Article cards displayed below the flower image */}
    <div className="article-cards" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
      {articles.map((article, index) => (
        <div key={index} className="article-card" style={{ flex: '1', margin: '0 10px' }}>
          <img src={`https://picsum.photos/200/150?random=${index}`} alt="Article" />
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          <p><strong>{article.author}</strong></p>
          
        </div>
      ))}
    </div>
     {/* See More Tutorials Button */}
     <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <button style={{ padding: '10px 20px', backgroundColor: '#ccc', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        See More Articles
      </button>
    </div>
  </div>
);
  


export default FeaturedArticles;