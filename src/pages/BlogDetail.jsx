import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { blogsData } from '../data/blogsData';

const BlogDetail = () => {
  const { slug } = useParams();
  const blog = blogsData.find(b => b.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">Blog not found</p>
          <Link to="/blog" className="btn-primary">
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline mb-6">
            <ArrowLeft size={20} className="mr-2" />
            Back to Blogs
          </Link>
          <span className="inline-block bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 px-3 py-1 rounded-full text-sm font-semibold mb-4">
            {blog.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">{blog.title}</h1>
          <div className="flex items-center space-x-6 text-gray-600 dark:text-gray-400">
            <span className="flex items-center">
              <User size={18} className="mr-2" />
              {blog.author}
            </span>
            <span className="flex items-center">
              <Calendar size={18} className="mr-2" />
              {blog.date}
            </span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-white dark:bg-gray-800 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-9xl text-center bg-gradient-to-br from-primary-50 to-blue-100 dark:from-gray-700 dark:to-gray-800 rounded-2xl py-16">
            {blog.image}
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="bg-white dark:bg-gray-800 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="prose prose-lg dark:prose-invert max-w-none
              prose-headings:text-gray-900 dark:prose-headings:text-white
              prose-p:text-gray-700 dark:prose-p:text-gray-300
              prose-strong:text-gray-900 dark:prose-strong:text-white
              prose-ul:text-gray-700 dark:prose-ul:text-gray-300
              prose-ol:text-gray-700 dark:prose-ol:text-gray-300
              prose-li:text-gray-700 dark:prose-li:text-gray-300"
            dangerouslySetInnerHTML={{ __html: blog.fullContent }}
          />
        </div>
      </section>

      {/* Back Button */}
      <section className="bg-gray-50 dark:bg-gray-900 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link to="/blog" className="btn-primary inline-flex items-center">
            <ArrowLeft size={20} className="mr-2" />
            Back to All Blogs
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;
