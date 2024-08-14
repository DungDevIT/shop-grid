import { useEffect, useState } from "react";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import BlogCarts from "../../components/BlogCarts/BlogCarts";
import Pagination from "../../components/pageProps/blogPage/Pagination";
import Blogs from "../../assets/images/Blogs";

function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 12;

  useEffect(() => {
    setBlogs(Blogs);
  }, [blogs]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Blog Page" />
      <div>
        <BlogCarts
          blogs={blogs}
          currentPage={currentPage}
          pageSize={pageSize}
        />
      </div>

      <div>
        <Pagination
          onPageChange={handlePageChange}
          currentPage={currentPage}
          blogs={blogs}
          pageSize={pageSize}
        />
      </div>
    </div>
  );
}

export default BlogPage;
