import { useQuery } from "@tanstack/react-query";
import { fetchBlogs } from "@/api/blogApi";
import BlogCard from "./BlogCard";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect } from "react";

export default function BlogList({ onSelect, selectedId, setSelectedId }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
  });

  useEffect(() => {
    if (data?.length && selectedId === null) {
      setSelectedId(data[0].id);
    }
  }, [data, selectedId, setSelectedId]);

  if (isLoading)
    return (
      <div className="space-y-3 h-[520px] overflow-y-auto pr-2">
        <Skeleton className="h-20 w-full" />
        <Skeleton className="h-20 w-full" />
        <Skeleton className="h-20 w-full" />
      </div>
    );

  if (error) return <p>Error loading blogs</p>;

  return (
    <div className="space-y-3 h-[520px] overflow-y-auto pr-2">
      {data.map((blog) => (
        <BlogCard
          key={blog.id}
          blog={blog}
          isSelected={selectedId === blog.id}
          onClick={() => onSelect(blog.id)}
        />
      ))}
    </div>
  );
}
