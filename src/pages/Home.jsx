import { useState } from "react";
import BlogList from "@/components/BlogList";
import BlogDetail from "@/components/BlogDetail";
import CreateBlog from "@/components/CreateBlog";

export default function Home() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Left Panel */}
      <div className="space-y-6">
        <CreateBlog />
        <BlogList 
          onSelect={setSelectedId} 
          selectedId={selectedId} 
          setSelectedId={setSelectedId} 
        />
      </div>

      {/* Right Panel */}
      <div className="md:col-span-2 bg-white rounded-xl p-6 shadow-sm">
        <BlogDetail blogId={selectedId} />
      </div>
    </div>
  );
}
