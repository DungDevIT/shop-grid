import { Link } from "react-router-dom";

function BlogCarts({ blogs, currentPage, pageSize }) {
  const filterBlogs = blogs.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="grid mdl:grid-cols-3 sml:grid-cols-2 grid-cols-1 gap-8">
      {filterBlogs.map((blog) => {
        return (
          <Link key={blog.id} className="p-5 shadow-lg rounded cursor-pointer">
            <div>
              <img src={blog.image} alt={blog.title} className="w-full " />
            </div>
            <h3 className="mt-4 mb-2 font-semibold text-primeColor hover:text-blue-600 cursor-pointer">
              {blog.title}
            </h3>
            <p className="mb-2 text-sm text-gray-600">
              <i className="fa-solid fa-user inline-flex items-center mr-2"></i>
              {blog.author}
            </p>
            <p className="text-sm text-gray-500">
              Published: {blog.published_date}
            </p>
          </Link>
        );
      })}
    </div>
  );
}

export default BlogCarts;
