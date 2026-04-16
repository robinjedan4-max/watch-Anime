import { useState, useEffect } from 'react';
import { FiArrowLeft, FiPlayCircle, FiVideo, FiStar, FiThumbsUp, FiThumbsDown, FiMessageCircle } from 'react-icons/fi';

const animeShows = [
  {
    id: 'solo-leveling',
    title: 'Solo Leveling',
    subtitle: 'Action | Fantasy',
    description: 'Solo Leveling Live Action: Sung Jinwoo S-RANK AWAKENING | Ai Short Film',
    video: 'https://www.youtube.com/watch?v=rI7MByLIbI8',
    watchUrl: 'https://www.youtube.com/watch?v=rI7MByLIbI8',
    accent: 'rgba(162, 114, 255, 0.18)',
  },
  {
    id: 'attack-on-titan',
    title: 'Attack on Titan',
    subtitle: 'Dark Fantasy | Drama',
    description: 'ALL Attack On Titan Trailers (Season 1 ~ Season 4 P4) | UPDATED',
    video: 'https://www.youtube.com/watch?v=OGwetqH93zM',
    watchUrl: 'https://www.youtube.com/watch?v=OGwetqH93zM',
    accent: 'rgba(255, 102, 102, 0.16)',
  },
  {
    id: 'naruto',
    title: 'Naruto',
    subtitle: 'Shonen | Adventure',
    description: 'Join Naruto on his journey to become Hokage and unlock the power of friendship.',
    video: 'https://www.youtube-nocookie.com/embed/FCzu3-WzJZU',
    watchUrl: 'https://www.youtube.com/watch?v=FCzu3-WzJZU',
    accent: 'rgba(255, 182, 87, 0.18)',
  },
  {
    id: 'demon-slayer',
    title: 'Demon Slayer',
    subtitle: 'Dark Fantasy | Supernatural',
    description: 'Demon Slayer: Kimetsu no Yaiba Infinity Castle | VS TRAILER 2',
    video: 'https://www.youtube.com/watch?v=U_K1va_xWCc',
    watchUrl: 'https://www.youtube.com/watch?v=U_K1va_xWCc',
    accent: 'rgba(255, 134, 121, 0.18)',
  },
  {
    id: 'one-piece',
    title: 'One Piece',
    subtitle: 'Adventure | Epic',
    description: 'ONE PIECE | Official Trailer | Netflix',
    video: 'https://www.youtube.com/watch?v=Ades3pQbeh8',
    watchUrl: 'https://www.youtube.com/watch?v=Ades3pQbeh8',
    accent: 'rgba(100, 221, 255, 0.18)',
  },
  {
    id: 'my-hero-academia',
    title: 'My Hero Academia',
    subtitle: 'Superhero | Action',
    description: 'My Hero Academia FINAL SEASON | English Dub Trailer | Crunchyrolll',
    video: 'https://www.youtube.com/watch?v=FwE87GX3dEc',
    watchUrl: 'https://www.youtube.com/watch?v=FwE87GX3dEc',
    accent: 'rgba(143, 199, 255, 0.18)',
  },
  {
    id: 'jiujutsu-kaisen',
    title: 'Jujutsu Kaisen',
    subtitle: 'Occult | Action',
    description: 'JUJUTSU KAISEN Season 3 The Culling Game Part 1 | Official Trailer | Netflix Anime',
    video: 'https://www.youtube.com/watch?v=OogqtP3BvJY',
    watchUrl: 'https://www.youtube.com/watch?v=OogqtP3BvJY',
    accent: 'rgba(180, 138, 255, 0.18)',
  },
  {
    id: 'chainsaw-man',
    title: 'Chainsaw Man',
    subtitle: 'Horror | Action',
    description: 'Chainsaw Man | MAIN TRAILER',
    video: 'https://www.youtube.com/watch?v=j9sSzNmB5po',
    watchUrl: 'https://www.youtube.com/watch?v=j9sSzNmB5po',
    accent: 'rgba(255, 143, 178, 0.18)',
  },
  {
    id: 'death-note',
    title: 'Death Note',
    subtitle: 'Psychological | Thriller',
    description: 'Death Note | OFFICIAL TRAILER',
    video: 'https://www.youtube.com/watch?v=NlJZ-YgAt-c',
    watchUrl: 'https://www.youtube.com/watch?v=NlJZ-YgAt-c',
    accent: 'rgba(145, 145, 255, 0.18)',
  },
  {
    id: 'spy-x-family',
    title: 'Spy x Family',
    subtitle: 'Comedy | Spy',
    description: 'SPY x FAMILY | MAIN TRAILER crunchyroll',
    video: 'https://www.youtube.com/watch?v=ofXigq9aIpo',
    watchUrl: 'https://www.youtube.com/watch?v=ofXigq9aIpo',
    accent: 'rgba(255, 205, 123, 0.18)',
  },
  {
    id: 'bleach',
    title: 'Bleach',
    subtitle: 'Supernatural | Action',
    description: 'TVアニメ『BLEACH 千年血戦篇-禍進譚-』ティザーPV｜2026.07 ON AIR',
    video: 'https://www.youtube.com/watch?v=W99Ef2LkyOg',
    watchUrl: 'https://www.youtube.com/watch?v=W99Ef2LkyOg',
    accent: 'rgba(255, 217, 102, 0.18)',
  },
  {
    id: 'fullmetal-alchemist',
    title: 'Fullmetal Alchemist',
    subtitle: 'Dark Fantasy | Sci-Fi',
    description: 'Fullmetal Alchemist The Revenge of Scar / The Final Alchemy | Official Trailer | Netflix',
    video: 'https://www.youtube.com/watch?v=cqj4u6eyDq8',
    watchUrl: 'https://www.youtube.com/watch?v=cqj4u6eyDq8',
    accent: 'rgba(218, 165, 32, 0.18)',
  },
  {
    id: 'vinland-saga',
    title: 'Vinland Saga',
    subtitle: 'Historical | Drama',
    description: 'Vinland Saga| Official Trailer | MAPPA',
    video: 'https://www.youtube.com/watch?v=f8JrZ7Q_p-8',
    watchUrl: 'https://www.youtube.com/watch?v=f8JrZ7Q_p-8',
    accent: 'rgba(205, 92, 92, 0.18)',
  },
  {
    id: 'demon-slayer-kny',
    title: 'Demon Slayer: Hashira Training',
    subtitle: 'Action | Supernatural',
    description: 'The Calm Before the FINAL WAR! – Demon Slayer Season 4 Recap (EVERYTHING Explained in 6 Mins!)',
    video: 'https://www.youtube.com/watch?v=2A7kZwM2OK0',
    watchUrl: 'https://www.youtube.com/watch?v=2A7kZwM2OK0',
    accent: 'rgba(255, 69, 0, 0.18)',
  },
  {
    id: 'mob-psycho',
    title: 'Mob Psycho 100',
    subtitle: 'Comedy | Supernatural',
    description: 'Mob Psycho 100 | Official Trailer | Crunchyroll',
    video: 'https://www.youtube.com/watch?v=fAwGv0AJ7UI',
    watchUrl: 'https://www.youtube.com/watch?v=fAwGv0AJ7UI',
    accent: 'rgba(138, 43, 226, 0.18)',
  },
  {
    id: 'tokyo-ghoul',
    title: 'Tokyo Ghoul',
    subtitle: 'Horror | Dark Fantasy',
    description: 'Tokyo Ghoul | Official Trailer | Funimation',
    video: 'https://www.youtube.com/watch?v=vGuQeQsoRgU',
    watchUrl: 'https://www.youtube.com/watch?v=vGuQeQsoRgU',
    accent: 'rgba(220, 20, 60, 0.18)',
  },
  {
    id: 'code-geass',
    title: 'Code Geass',
    subtitle: 'Mecha | Psychological',
    description: 'Code Geass Lelouch of the Rebellion | Official Trailer',
    video: 'https://www.youtube.com/watch?v=qLBT9dQzaK0',
    watchUrl: 'https://www.youtube.com/watch?v=qLBT9dQzaK0',
    accent: 'rgba(75, 0, 130, 0.18)',
  },
  {
    id: 'neon-genesis',
    title: 'Neon Genesis Evangelion',
    subtitle: 'Mecha | Psychological',
    description: 'Neon Genesis Evangelion Rebuild | Official Trailer | Netflix',
    video: 'https://www.youtube.com/watch?v=RYz6CtZ6chs',
    watchUrl: 'https://www.youtube.com/watch?v=RYz6CtZ6chs',
    accent: 'rgba(64, 224, 208, 0.18)',
  },
  {
    id: 'steins-gate',
    title: 'Steins;Gate',
    subtitle: 'Sci-Fi | Thriller',
    description: 'Steins Gate | Official Trailer | Funimation',
    video: 'https://www.youtube.com/watch?v=2u7cxXP7XHw',
    watchUrl: 'https://www.youtube.com/watch?v=2u7cxXP7XHw',
    accent: 'rgba(30, 144, 255, 0.18)',
  },
  {
    id: 'dragon-ball-super',
    title: 'Dragon Ball Super',
    subtitle: 'Action | Adventure',
    description: 'Dragon Ball Super | Official Trailer | Crunchyroll',
    video: 'https://www.youtube.com/watch?v=xJaHAQfuBFA',
    watchUrl: 'https://www.youtube.com/watch?v=xJaHAQfuBFA',
    accent: 'rgba(255, 165, 0, 0.18)',
  },
  {
    id: 'attack-on-titan-final',
    title: 'Attack on Titan: The Final Chapters',
    subtitle: 'Dark Fantasy | Conclusion',
    description: 'Attack on Titan Final Season Part 2 | Official Trailer | Crunchyroll',
    video: 'https://www.youtube.com/watch?v=gOmE-F-qPW8',
    watchUrl: 'https://www.youtube.com/watch?v=gOmE-F-qPW8',
    accent: 'rgba(178, 34, 34, 0.18)',
  },
];

const toEmbedUrl = (url) => {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([A-Za-z0-9_-]{11})/);
  return match ? `https://www.youtube-nocookie.com/embed/${match[1]}` : url;
};

export default function AnimeLibrary({ onLogout, onExplore }) {
  const [activeId, setActiveId] = useState(animeShows[0].id);
  const [likes, setLikes] = useState({});
  const [dislikes, setDislikes] = useState({});
  const [globalLikes, setGlobalLikes] = useState({});
  const [globalDislikes, setGlobalDislikes] = useState({});
  const [comments, setComments] = useState({});
  const [commentText, setCommentText] = useState({});
  const [showComments, setShowComments] = useState({});
  const activeShow = animeShows.find((show) => show.id === activeId);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedLikes = localStorage.getItem('globalLikes');
    const savedDislikes = localStorage.getItem('globalDislikes');
    const savedComments = localStorage.getItem('comments');
    
    if (savedLikes) setGlobalLikes(JSON.parse(savedLikes));
    if (savedDislikes) setGlobalDislikes(JSON.parse(savedDislikes));
    if (savedComments) setComments(JSON.parse(savedComments));
  }, []);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('globalLikes', JSON.stringify(globalLikes));
  }, [globalLikes]);

  useEffect(() => {
    localStorage.setItem('globalDislikes', JSON.stringify(globalDislikes));
  }, [globalDislikes]);

  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  const toggleLike = (id) => {
    setLikes((prev) => ({ ...prev, [id]: !prev[id] }));
    if (dislikes[id]) {
      setDislikes((prev) => ({ ...prev, [id]: false }));
      setGlobalDislikes((prev) => ({ ...prev, [id]: Math.max(0, (prev[id] || 0) - 1) }));
    }
    setGlobalLikes((prev) => ({ 
      ...prev, 
      [id]: likes[id] ? Math.max(0, (prev[id] || 0) - 1) : ((prev[id] || 0) + 1)
    }));
  };

  const toggleDislike = (id) => {
    setDislikes((prev) => ({ ...prev, [id]: !prev[id] }));
    if (likes[id]) {
      setLikes((prev) => ({ ...prev, [id]: false }));
      setGlobalLikes((prev) => ({ ...prev, [id]: Math.max(0, (prev[id] || 0) - 1) }));
    }
    setGlobalDislikes((prev) => ({ 
      ...prev, 
      [id]: dislikes[id] ? Math.max(0, (prev[id] || 0) - 1) : ((prev[id] || 0) + 1)
    }));
  };

  const addComment = (id) => {
    if (!commentText[id]?.trim()) return;
    
    setComments((prev) => ({
      ...prev,
      [id]: [...(prev[id] || []), {
        text: commentText[id],
        time: new Date().toLocaleString(),
        id: Date.now()
      }]
    }));
    setCommentText((prev) => ({ ...prev, [id]: '' }));
  };

  return (
    <section className="anime-page">
      <div className="background-glow" aria-hidden="true">
        <span className="float-dot dot-1" />
        <span className="float-dot dot-2" />
        <span className="float-dot dot-3" />
        <span className="float-dot dot-4" />
      </div>

      <div className="anime-card animate-entry">
        <div className="page-header">
          <div className="nav-buttons">
            <button type="button" className="nav-back" onClick={onExplore}>
              <FiArrowLeft /> AI Futures
            </button>
            <button type="button" className="logout-btn" onClick={onLogout}>
              Logout
            </button>
          </div>

          <div>
            <p className="eyebrow">World Anime Library</p>
            <h2>Explore anime from every corner of the world.</h2>
            <p>Discover a global catalog of top series, from classic heroes to modern fantasy epics and high-impact action.</p>
          </div>
        </div>

        <div className="video-gallery">
          {animeShows.map((show) => (
            <article key={show.id} className="video-card">
              <div className="video-card-top">
                <div>
                  <p className="eyebrow">{show.subtitle}</p>
                  <h3>{show.title}</h3>
                  <p>{show.description}</p>
                </div>
                <FiPlayCircle className="video-card-icon" />
              </div>

              <div className="video-frame">
                <iframe
                  src={`${toEmbedUrl(show.video)}?rel=0&modestbranding=1&playsinline=1`}
                  title={`Watch ${show.title}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  frameBorder="0"
                  style={{ width: '100%', height: '100%' }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="video-unavailable" style={{ display: 'none' }}>
                  <p>Video unavailable</p>
                  <small>Tap "Watch on YouTube" to view</small>
                </div>
              </div>

              <div className="video-cta-row">
                <a href={show.watchUrl} target="_blank" rel="noreferrer" className="visit-link">
                  Watch on YouTube
                </a>
                <div className="reaction-buttons">
                  <button
                    type="button"
                    className={`like-button ${likes[show.id] ? 'liked' : ''}`}
                    onClick={() => toggleLike(show.id)}
                    aria-label="Like this video"
                  >
                    <FiThumbsUp />
                    <span>{globalLikes[show.id] || 0}</span>
                  </button>
                  <button
                    type="button"
                    className={`dislike-button ${dislikes[show.id] ? 'disliked' : ''}`}
                    onClick={() => toggleDislike(show.id)}
                    aria-label="Dislike this video"
                  >
                    <FiThumbsDown />
                    <span>{globalDislikes[show.id] || 0}</span>
                  </button>
                  <button
                    type="button"
                    className="comments-button"
                    onClick={() => setShowComments((prev) => ({ ...prev, [show.id]: !prev[show.id] }))}
                    aria-label="View comments"
                  >
                    <FiMessageCircle />
                    <span>{(comments[show.id] || []).length}</span>
                  </button>
                </div>
              </div>

              <div className="video-footer video-footer-card">
                <div>
                  <FiVideo />
                  <span>Preview available</span>
                </div>
                <div>
                  <FiStar />
                  <span>World anime catalog</span>
                </div>
              </div>

              {showComments[show.id] && (
                <div className="comments-section">
                  <div className="comments-header">
                    <h4>Comments ({(comments[show.id] || []).length})</h4>
                  </div>

                  <div className="comments-list">
                    {(comments[show.id] || []).map((comment) => (
                      <div key={comment.id} className="comment-item">
                        <p className="comment-text">{comment.text}</p>
                        <small className="comment-time">{comment.time}</small>
                      </div>
                    ))}
                  </div>

                  <div className="comment-form">
                    <input
                      type="text"
                      className="comment-input"
                      placeholder="Add a comment..."
                      value={commentText[show.id] || ''}
                      onChange={(e) => setCommentText((prev) => ({ ...prev, [show.id]: e.target.value }))}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          addComment(show.id);
                        }
                      }}
                    />
                    <button
                      type="button"
                      className="comment-submit"
                      onClick={() => addComment(show.id)}
                    >
                      Post
                    </button>
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
