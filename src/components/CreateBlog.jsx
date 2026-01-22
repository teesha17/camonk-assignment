import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBlog } from "@/api/blogApi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function CreateBlog() {
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    coverImage: "",
    content: "",
  });

  const mutation = useMutation({
    mutationFn: createBlog,
    onSuccess: () => {
      queryClient.invalidateQueries(["blogs"]);
      setOpen(false);
      setForm({
        title: "",
        description: "",
        category: "",
        coverImage: "",
        content: "",
      });
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    mutation.mutate({
      ...form,
      category: form.category.split(","),
      date: new Date().toISOString(),
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* Button on Home Page */}
      <DialogTrigger asChild>
        <Button className="w-full">+ Create a Blog</Button>
      </DialogTrigger>

      {/* Modal Overlay */}
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Create New Blog</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-3">
          <Input
            placeholder="Blog Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            required
          />

          <Input
            placeholder="Categories (comma separated)"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
          />

          <Input
            placeholder="Cover Image URL"
            value={form.coverImage}
            onChange={(e) => setForm({ ...form, coverImage: e.target.value })}
          />

          <Textarea
            placeholder="Short Description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />

          <Textarea
            placeholder="Full Blog Content"
            rows={6}
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
          />

          <Button type="submit" className="w-full">
            Publish Blog
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
