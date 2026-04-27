import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogsData } from '../data/blogsData';
import Newsletter from '../components/Newsletter';

const Blog = () => {

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">Dental Health Blog</h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Expert insights, tips, and advice for maintaining optimal oral health
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to={`/blog/${blogsData[0].slug}`} className="card hover:scale-[1.02] transition-transform cursor-pointer block">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-9xl text-center">{blogsData[0].image}</div>
              <div>
                <span className="inline-block bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  Featured
                </span>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{blogsData[0].title}</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{blogsData[0].shortDescription}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-500 mb-6">
                  <span className="flex items-center">
                    <User size={16} className="mr-1" />
                    {blogsData[0].author}
                  </span>
                  <span className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    {blogsData[0].date}
                  </span>
                </div>
                <span className="text-primary-600 dark:text-primary-400 font-semibold flex items-center hover:underline">
                  Read More <ArrowRight size={20} className="ml-2" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogsData.slice(1).map((post) => (
              <Link key={post.id} to={`/blog/${post.slug}`} className="card hover:scale-105 transition-transform cursor-pointer block">
                <div className="text-6xl mb-4 text-center">{post.image}</div>
                <span className="inline-block bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{post.shortDescription}</p>
                <div className="flex items-center space-x-3 text-xs text-gray-500 dark:text-gray-500 mb-4">
                  <span className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {post.date}
                  </span>
                </div>
                <span className="text-primary-600 dark:text-primary-400 font-semibold flex items-center hover:underline text-sm">
                  Read More <ArrowRight size={16} className="ml-2" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
};

export default Blog;
