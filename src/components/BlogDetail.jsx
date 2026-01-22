import { useQuery } from "@tanstack/react-query";
import { fetchBlogById } from "@/api/blogApi";
import { Skeleton } from "@/components/ui/skeleton";

export default function BlogDetail({ blogId }) {
  const { data, isLoading } = useQuery({
    queryKey: ["blog", blogId],
    queryFn: () => fetchBlogById(blogId),
    enabled: !!blogId,
  });

  if (!blogId)
    return <p className="text-gray-400">Select a blog to read</p>;

  if (isLoading) return <Skeleton className="h-96 w-full" />;

  return (
    <div className="space-y-4">
      <img
        src={data.coverImage}
        alt={data.title}
        className="rounded-xl w-full h-60 object-cover"
      />

      <p className="text-sm text-blue-600 font-semibold">
        {data.category?.join(" • ")}
      </p>

      <h1 className="text-2xl font-bold">{data.title}</h1>

      <p className="text-gray-500 text-sm">
        {new Date(data.date).toDateString()}
      </p>

      <p className="leading-relaxed text-gray-700 whitespace-pre-line">
        {data.content}
      </p>
    </div>
  );
}
