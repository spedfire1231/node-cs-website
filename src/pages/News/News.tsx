import React, { useState, useEffect } from 'react';
import { NewsItem } from '../../types';
import './News.css';

const News: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  useEffect(() => {
    // Загрузка новостей из JSON
    loadNews();
  }, []);

  const loadNews = async () => {
    try {
      const newsData = await import('../../data/news.json');
      const publishedNews = newsData.default.filter(item => item.published)
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      setNews(publishedNews);
    } catch (error) {
      console.error('Ошибка загрузки новостей:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  if (loading) {
    return <div className="news-loading">Загрузка новостей...</div>;
  }

  if (selectedNews) {
    return (
      <div className="news-detail">
        <button className="back-btn" onClick={() => setSelectedNews(null)}>
          ← Назад к новостям
        </button>
        
        <article className="news-article">
          <header className="news-header">
            <h1>{selectedNews.title}</h1>
            <div className="news-meta">
              <span className="news-author">👤 {selectedNews.author}</span>
              <span className="news-date">📅 {formatDate(selectedNews.createdAt)}</span>
            </div>
            <div className="news-tags">
              {selectedNews.tags.map(tag => (
                <span key={tag} className="news-tag">#{tag}</span>
              ))}
            </div>
          </header>
          
          {selectedNews.image && (
            <img src={selectedNews.image} alt={selectedNews.title} className="news-image" />
          )}
          
          <div className="news-content">
            {selectedNews.content.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </article>
      </div>
    );
  }

  return (
    <div className="news">
      <div className="news-header">
        <h1>Новости сервера</h1>
        <p>Будьте в курсе последних событий</p>
      </div>

      <div className="news-grid">
        {news.length === 0 ? (
          <div className="no-news">
            <h3>Новостей пока нет</h3>
            <p>Загляните позже!</p>
          </div>
        ) : (
          news.map(item => (
            <article key={item.id} className="news-card" onClick={() => setSelectedNews(item)}>
              {item.image && (
                <div className="news-card-image">
                  <img src={item.image} alt={item.title} />
                </div>
              )}
              <div className="news-card-content">
                <h3>{item.title}</h3>
                <p className="news-card-excerpt">{item.excerpt}</p>
                <div className="news-card-footer">
                  <span className="news-date">{formatDate(item.createdAt)}</span>
                  <span className="read-more">Читать далее →</span>
                </div>
              </div>
            </article>
          ))
        )}
      </div>
    </div>
  );
};

export default News;