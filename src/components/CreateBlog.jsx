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
      <DialogTrigger asChild>
        <Button className="w-full">+ Create a Blog</Button>
      </DialogTrigger>

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
            onChange={(e) => {
              setForm({ ...form, description: e.target.value });

              e.target.style.height = "auto";
              e.target.style.height = Math.min(e.target.scrollHeight, 160) + "px";
            }}
            className="w-full resize-none overflow-auto min-h-[80px] max-h-[160px]"
          />


          <Textarea
            placeholder="Full Blog Content"
            value={form.content}
            onChange={(e) => {
              setForm({ ...form, content: e.target.value });

              e.target.style.height = "auto";
              e.target.style.height = Math.min(e.target.scrollHeight, 320) + "px";
            }}
            className="w-full resize-none overflow-auto min-h-[120px] max-h-[320px]"
          />

          <Button type="submit" className="w-full">
            Publish Blog
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
