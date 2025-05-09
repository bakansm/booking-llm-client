"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import { useState } from "react";

export function FormDropdown() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([
    "Prepare project proposal",
    "Review code changes",
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const handleDelete = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outlined">
          Quick Tasks
          <Plus className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-72 p-4">
        <DropdownMenuLabel className="pb-2">Add Task</DropdownMenuLabel>
        <form
          onSubmit={handleSubmit}
          className="space-y-2">
          <Input
            placeholder="Enter new task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="h-8"
          />
          <Button
            type="submit"
            className="h-8 w-full"
            size="sm"
            disabled={!task.trim()}>
            Add
          </Button>
        </form>

        {tasks.length > 0 && (
          <>
            <DropdownMenuSeparator className="my-2" />
            <DropdownMenuLabel className="pb-1">Your Tasks</DropdownMenuLabel>
            <div className="max-h-[160px] overflow-y-auto">
              {tasks.map((t, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-1">
                  <span className="max-w-[180px] truncate text-sm">{t}</span>
                  <Button
                    variant="text"
                    size="sm"
                    className="h-6 px-2"
                    onClick={() => handleDelete(index)}>
                    Delete
                  </Button>
                </div>
              ))}
            </div>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
