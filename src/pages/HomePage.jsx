import React, { useState, useMemo } from 'react';
    import { v4 as uuidv4 } from 'uuid';
    import { useNavigate } from 'react-router-dom';

    const initialRecommendations = [
      {
        id: "1",
        title: "Cozy Cafe",
        imageUrl: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Food",
        keywords: ["coffee", "pastries", "brunch", "cafe", "eat", "breakfast", "lunch", "casual", "sweet", "savory", "budget-friendly"],
        description: "A warm and inviting cafe with a variety of coffee and pastries.",
        location: "123 Main Street",
        reviews: ["Great coffee!", "Love the atmosphere."]
      },
      {
        id: "2",
        title: "Hiking Trail",
        imageUrl: "https://plus.unsplash.com/premium_photo-1677002240252-af3f88114efc?q=80&w=2025&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Activity",
        keywords: ["outdoors", "nature", "exercise", "hike", "what to do", "hiking", "camping", "picnics", "fitness", "workout", "cardio", "fun", "adventurous"],
        description: "A scenic hiking trail with beautiful views.",
        location: "Greenwood Park",
        reviews: ["Amazing views!", "Perfect for a weekend hike."]
      },
      {
        id: "3",
        title: "Art Museum",
        imageUrl: "https://images.unsplash.com/photo-1578163678052-eef169544f75?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Place",
        keywords: ["culture", "art", "exhibit", "museum", "what to do", "attractions", "educational", "historical sites"],
        description: "A museum with a wide range of art exhibits.",
        location: "456 Art Street",
        reviews: ["Impressive collection!", "A must-visit for art lovers."]
      },
      {
        id: "4",
        title: "Italian Restaurant",
        imageUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Food",
        keywords: ["pasta", "pizza", "italian", "dinner", "eat", "italian", "upscale dining", "date night", "savory"],
        description: "An authentic Italian restaurant with delicious pasta and pizza.",
        location: "789 Pasta Lane",
        reviews: ["Best Italian food in town!", "Great for a date night."]
      },
      {
        id: "5",
        title: "Local Park",
        imageUrl: "https://images.unsplash.com/photo-1626456876351-52d28d166aae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Place",
        keywords: ["park", "green", "relax", "outdoors", "what to do", "local park", "travel", "scenic spots", "relaxing"],
        description: "A beautiful local park with walking trails and green spaces.",
        location: "101 Park Avenue",
        reviews: ["Perfect for a relaxing day out!", "Great for families."]
      },
      {
        id: "6",
        title: "Yoga Class",
        imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Activity",
        keywords: ["yoga", "fitness", "wellness", "exercise", "what to do", "indoor", "workout", "zumba", "relaxing", "motivational"],
         description: "A calming yoga class for all levels.",
        location: "222 Yoga Studio",
        reviews: ["Great for beginners!", "Very relaxing."]
      },
       {
        id: "7",
        title: "Comedy Club",
        imageUrl: "https://images.unsplash.com/photo-1683117855296-979f17e62e87?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Entertainment",
         keywords: ["comedy", "funny", "entertainment", "social", "meetup"],
         description: "A night of laughter at the local comedy club.",
        location: "333 Laugh Lane",
        reviews: ["Hilarious!", "Great for a night out."]
      },
       {
        id: "8",
        title: "Beach",
        imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2673&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Travel",
         keywords: ["beach", "summer", "travel", "weekend getaway", "road trip", "scenic spots", "fun", "relaxing"],
         description: "A beautiful beach with white sand and clear water.",
        location: "Sunny Coast",
        reviews: ["Perfect for a summer vacation!", "Amazing sunsets."]
      },
       {
        id: "9",
        title: "Netflix",
        imageUrl: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Streaming",
         keywords: ["netflix", "streaming", "comedy", "horror", "action", "drama", "romance", "sci-fi", "relaxing", "uplifting", "suspenseful"],
         description: "A wide variety of movies and TV shows to stream.",
        location: "Your Home",
        reviews: ["Great for a cozy night in!", "So many options."]
      }
    ];

    function HomePage() {
      const [prompt, setPrompt] = useState('');
      const navigate = useNavigate();
      const [activeCategory, setActiveCategory] = useState('All');

      const filteredRecommendations = useMemo(() => {
        let filtered = initialRecommendations;

        if (prompt) {
          const lowerCasePrompt = prompt.toLowerCase();
          filtered = filtered.filter(recommendation =>
            recommendation.title.toLowerCase().includes(lowerCasePrompt) ||
            recommendation.category.toLowerCase().includes(lowerCasePrompt) ||
            (recommendation.keywords && recommendation.keywords.some(keyword => keyword.includes(lowerCasePrompt)))
          );
        }

        if (activeCategory !== 'All') {
          filtered = filtered.filter(recommendation => recommendation.category === activeCategory);
        }

        return filtered;
      }, [prompt, activeCategory]);


      const handlePromptChange = (event) => {
        setPrompt(event.target.value);
      };

      const handleRecommendationClick = (id) => {
        navigate(`/recommendation/${id}`);
      };

      const handleCategoryFilter = (category) => {
        setActiveCategory(category);
      };

      const categories = ['All', ...new Set(initialRecommendations.map(rec => rec.category))];

      return (
        <div className="container">
          <h1>Decision Maker</h1>
          <div className="prompt-input">
            <input
              type="text"
              placeholder="Enter your prompt..."
              value={prompt}
              onChange={handlePromptChange}
            />
          </div>
          <div className="recommendations">
            <h2>Recommendations</h2>
            <div className="filter-buttons">
              {categories.map(category => (
                <button
                  key={category}
                  className={activeCategory === category ? 'active' : ''}
                  onClick={() => handleCategoryFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="recommendation-grid">
              {filteredRecommendations.map(recommendation => (
                <div
                  key={recommendation.id}
                  className="recommendation-card"
                  onClick={() => handleRecommendationClick(recommendation.id)}
                >
                  <img src={recommendation.imageUrl} alt={recommendation.title} />
                  <h3>{recommendation.title}</h3>
                  <p>Category: {recommendation.category}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    export default HomePage;
