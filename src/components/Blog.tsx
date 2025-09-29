import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, Calendar, User, ChevronRight, BookOpen, Eye } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  likes: number;
  comments: Comment[];
  views: number;
  category: string;
  readTime: string;
}

interface Comment {
  id: number;
  author: string;
  content: string;
  date: string;
  avatar: string;
}

const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set());
  const [newComment, setNewComment] = useState('');
  const [commentAuthor, setCommentAuthor] = useState('');

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Walking in Faith During Difficult Times",
      excerpt: "Life often presents us with challenges that test our faith. In these moments, we must remember that God's love never wavers, and His plan for us remains perfect...",
      content: "Life often presents us with challenges that test our faith. In these moments, we must remember that God's love never wavers, and His plan for us remains perfect. When we face difficulties, it's natural to question why certain things happen to us. However, these trials are opportunities for spiritual growth and deeper connection with our Creator.\n\nThe Bible tells us in Romans 8:28 that 'all things work together for good to those who love God, to those who are the called according to His purpose.' This doesn't mean that all things are good, but that God can use even our most difficult circumstances for our ultimate benefit and His glory.\n\nAs we navigate through life's storms, let us hold fast to our faith, support one another in love, and trust in God's perfect timing. Remember, you are never alone in your struggles - our church family is here to walk alongside you, and most importantly, God is always with you.",
      author: "Pastor Michael Johnson",
      date: "2025-01-15",
      image: "https://images.pexels.com/photos/8923019/pexels-photo-8923019.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
      likes: 42,
      views: 156,
      category: "Faith & Life",
      readTime: "5 min read",
      comments: [
        {
          id: 1,
          author: "Sarah Williams",
          content: "Thank you Pastor for this encouraging message. It really spoke to my heart during a difficult time.",
          date: "2025-01-16",
          avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
        },
        {
          id: 2,
          author: "David Chen",
          content: "Romans 8:28 has been my anchor verse this year. God is faithful!",
          date: "2025-01-16",
          avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
        }
      ]
    },
    {
      id: 2,
      title: "The Power of Community in Christian Life",
      excerpt: "God designed us for relationship - with Him and with each other. The early church understood this principle deeply, and we can learn much from their example...",
      content: "God designed us for relationship - with Him and with each other. The early church understood this principle deeply, and we can learn much from their example of authentic Christian community.\n\nIn Acts 2:42-47, we see a beautiful picture of believers who 'devoted themselves to the apostles' teaching and to fellowship, to the breaking of bread and to prayer.' They shared their lives, their resources, and their faith journey together.\n\nTrue Christian community goes beyond Sunday morning gatherings. It involves:\n\n• Authentic relationships built on trust and vulnerability\n• Mutual support during both joyful and challenging times\n• Accountability that helps us grow in our faith\n• Shared mission in serving God and others\n• Celebration of God's goodness together\n\nAs we continue to build our church family, I encourage each of you to take steps toward deeper community. Join a small group, volunteer in ministry, or simply reach out to someone you don't know well. God has amazing things in store when His people come together in unity and love.",
      author: "Pastor Michael Johnson",
      date: "2025-01-08",
      image: "https://images.pexels.com/photos/8923057/pexels-photo-8923057.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
      likes: 38,
      views: 203,
      category: "Community",
      readTime: "4 min read",
      comments: [
        {
          id: 3,
          author: "Maria Rodriguez",
          content: "This is exactly what I needed to hear. I've been hesitant to join a small group, but now I'm ready to take that step!",
          date: "2025-01-09",
          avatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
        }
      ]
    },
    {
      id: 3,
      title: "Preparing Our Hearts for Easter",
      excerpt: "As we approach the Easter season, it's important to prepare our hearts to fully experience the wonder of Christ's resurrection...",
      content: "As we approach the Easter season, it's important to prepare our hearts to fully experience the wonder of Christ's resurrection. Easter is not just a single day of celebration, but the culmination of a journey that begins with reflection and repentance.\n\nThe season of Lent traditionally provides us with 40 days to examine our lives, confess our sins, and draw closer to God through prayer, fasting, and acts of service. Even if you don't observe Lent formally, taking time to prepare spiritually for Easter can deepen your appreciation for what Christ accomplished on the cross.\n\nHere are some ways to prepare your heart:\n\n• Spend extra time in prayer and Bible reading\n• Practice gratitude for God's blessings in your life\n• Serve others in your community\n• Forgive those who have hurt you\n• Examine areas where you need God's forgiveness\n\nThe resurrection of Jesus Christ is the cornerstone of our faith. It represents victory over sin and death, and the promise of eternal life for all who believe. Let's prepare our hearts to celebrate this incredible gift with the joy and reverence it deserves.",
      author: "Pastor Michael Johnson",
      date: "2025-01-01",
      image: "https://images.pexels.com/photos/1662770/pexels-photo-1662770.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
      likes: 67,
      views: 289,
      category: "Seasonal",
      readTime: "6 min read",
      comments: [
        {
          id: 4,
          author: "Robert Thompson",
          content: "Beautiful reminder of what Easter truly means. Thank you for helping us focus on the spiritual preparation.",
          date: "2025-01-02",
          avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
        },
        {
          id: 5,
          author: "Jennifer Lee",
          content: "I love the practical suggestions for heart preparation. Starting my Easter journey today!",
          date: "2025-01-02",
          avatar: "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
        }
      ]
    }
  ];

  const handleLike = (postId: number) => {
    setLikedPosts(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(postId)) {
        newLiked.delete(postId);
      } else {
        newLiked.add(postId);
      }
      return newLiked;
    });
  };

  const handleShare = (post: BlogPost) => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const handleAddComment = (postId: number) => {
    if (newComment.trim() && commentAuthor.trim()) {
      // In a real app, this would make an API call
      console.log('Adding comment:', { postId, author: commentAuthor, content: newComment });
      setNewComment('');
      setCommentAuthor('');
      alert('Comment added successfully!');
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (selectedPost) {
    return (
      <section className="py-20 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => setSelectedPost(null)}
            className="mb-8 flex items-center text-purple-600 hover:text-purple-700 transition-colors duration-300"
          >
            ← Back to Blog
          </button>

          <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div 
              className="h-96 bg-cover bg-center relative"
              style={{ backgroundImage: `url('${selectedPost.image}')` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <span className="bg-purple-600 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  {selectedPost.category}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                  {selectedPost.title}
                </h1>
                <div className="flex items-center space-x-6 text-gray-200">
                  <div className="flex items-center">
                    <User className="h-5 w-5 mr-2" />
                    {selectedPost.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2" />
                    {formatDate(selectedPost.date)}
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 mr-2" />
                    {selectedPost.readTime}
                  </div>
                  <div className="flex items-center">
                    <Eye className="h-5 w-5 mr-2" />
                    {selectedPost.views} views
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="prose prose-lg max-w-none mb-8">
                {selectedPost.content.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Engagement Actions */}
              <div className="flex items-center justify-between border-t border-gray-200 pt-6 mb-8">
                <div className="flex items-center space-x-6">
                  <button
                    onClick={() => handleLike(selectedPost.id)}
                    className={`flex items-center space-x-2 transition-colors duration-300 ${
                      likedPosts.has(selectedPost.id) 
                        ? 'text-red-500' 
                        : 'text-gray-600 hover:text-red-500'
                    }`}
                  >
                    <Heart className={`h-6 w-6 ${likedPosts.has(selectedPost.id) ? 'fill-current' : ''}`} />
                    <span className="font-medium">
                      {selectedPost.likes + (likedPosts.has(selectedPost.id) ? 1 : 0)}
                    </span>
                  </button>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <MessageCircle className="h-6 w-6" />
                    <span className="font-medium">{selectedPost.comments.length}</span>
                  </div>
                </div>
                <button
                  onClick={() => handleShare(selectedPost)}
                  className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors duration-300"
                >
                  <Share2 className="h-6 w-6" />
                  <span className="font-medium">Share</span>
                </button>
              </div>

              {/* Comments Section */}
              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Comments ({selectedPost.comments.length})
                </h3>

                {/* Add Comment Form */}
                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Leave a Comment</h4>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <input
                      type="text"
                      placeholder="Your name"
                      value={commentAuthor}
                      onChange={(e) => setCommentAuthor(e.target.value)}
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <textarea
                    placeholder="Share your thoughts..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent mb-4"
                  />
                  <button
                    onClick={() => handleAddComment(selectedPost.id)}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                  >
                    Post Comment
                  </button>
                </div>

                {/* Comments List */}
                <div className="space-y-6">
                  {selectedPost.comments.map((comment) => (
                    <div key={comment.id} className="flex space-x-4">
                      <img
                        src={comment.avatar}
                        alt={comment.author}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="bg-gray-50 rounded-xl p-4">
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="font-semibold text-gray-900">{comment.author}</h5>
                            <span className="text-sm text-gray-500">{formatDate(comment.date)}</span>
                          </div>
                          <p className="text-gray-700">{comment.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Pastor's <span className="text-purple-600">Blog</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Inspiring messages, spiritual insights, and encouragement from Pastor Michael Johnson. 
            Join the conversation and grow in faith together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              <div 
                className="h-48 bg-cover bg-center relative overflow-hidden"
                style={{ backgroundImage: `url('${post.image}')` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:from-black/70 transition-all duration-300" />
                <div className="absolute top-4 left-4">
                  <span className="bg-purple-600 text-white text-sm px-3 py-1 rounded-full font-medium">
                    {post.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 flex items-center text-white text-sm">
                  <Eye className="h-4 w-4 mr-1" />
                  {post.views}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <User className="h-4 w-4 mr-2" />
                  <span className="mr-4">{post.author}</span>
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="mr-4">{formatDate(post.date)}</span>
                  <BookOpen className="h-4 w-4 mr-2" />
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleLike(post.id);
                      }}
                      className={`flex items-center space-x-1 transition-colors duration-300 ${
                        likedPosts.has(post.id) 
                          ? 'text-red-500' 
                          : 'text-gray-500 hover:text-red-500'
                      }`}
                    >
                      <Heart className={`h-5 w-5 ${likedPosts.has(post.id) ? 'fill-current' : ''}`} />
                      <span className="text-sm font-medium">
                        {post.likes + (likedPosts.has(post.id) ? 1 : 0)}
                      </span>
                    </button>
                    <div className="flex items-center space-x-1 text-gray-500">
                      <MessageCircle className="h-5 w-5" />
                      <span className="text-sm font-medium">{post.comments.length}</span>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleShare(post);
                      }}
                      className="text-gray-500 hover:text-purple-600 transition-colors duration-300"
                    >
                      <Share2 className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="flex items-center text-purple-600 font-medium group-hover:text-purple-700">
                    Read More
                    <ChevronRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;