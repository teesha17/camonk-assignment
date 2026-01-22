import { Card, CardContent } from "@/components/ui/card";
import clsx from "clsx";

export default function BlogCard({ blog, onClick, isSelected }) {
  return (
    <Card
      onClick={onClick}
      className={clsx(
        "cursor-pointer transition border hover:shadow-md",
        isSelected
          ? "border-blue-500 bg-blue-50 shadow-sm"
          : "border-gray-200 hover:bg-gray-50"
      )}
    >
      <CardContent className="p-4 space-y-2">
        <p className="text-xs text-blue-600 font-semibold">
          {blog.category?.join(" • ")}
        </p>

        <h3 className="font-semibold">{blog.title}</h3>

        <p className="text-sm text-gray-500 line-clamp-2">
          {blog.description}
        </p>
      </CardContent>
    </Card>
  );
}
