"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Check, Filter } from "lucide-react";
import { useState } from "react";

interface FilterState {
  status: string[];
  priority: string[];
  assignee: string[];
}

export function FilterDropdown() {
  const [filters, setFilters] = useState<FilterState>({
    status: ["In Progress"],
    priority: [],
    assignee: [],
  });

  const [open, setOpen] = useState(false);

  const statuses = ["Not Started", "In Progress", "Under Review", "Completed"];
  const priorities = ["Low", "Medium", "High", "Urgent"];
  const assignees = ["John", "Sarah", "Mike", "Emily", "Alex"];

  const totalFilters =
    filters.status.length + filters.priority.length + filters.assignee.length;

  const toggleFilter = (key: keyof FilterState, value: string) => {
    setFilters((prev) => {
      const current = prev[key];
      return {
        ...prev,
        [key]: current.includes(value)
          ? current.filter((item) => item !== value)
          : [...current, value],
      };
    });
  };

  const clearFilters = () => {
    setFilters({ status: [], priority: [], assignee: [] });
  };

  return (
    <div className="flex flex-col gap-4">
      <DropdownMenu
        open={open}
        onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outlined"
            className="hover:bg-primary/10 h-8 px-3 lg:px-3">
            <Filter className="mr-2 h-3.5 w-3.5" />
            Filter
            {totalFilters > 0 && (
              <Badge
                className="ml-2 px-1 py-0"
                variant="contained">
                {totalFilters}
              </Badge>
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Filter by</DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <span>Status</span>
                {filters.status.length > 0 && (
                  <Badge
                    className="ml-auto"
                    variant="contained">
                    {filters.status.length}
                  </Badge>
                )}
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  {statuses.map((status) => (
                    <DropdownMenuCheckboxItem
                      key={status}
                      checked={filters.status.includes(status)}
                      onCheckedChange={() => toggleFilter("status", status)}>
                      {status}
                      {filters.status.includes(status) && (
                        <Check className="ml-auto h-4 w-4" />
                      )}
                    </DropdownMenuCheckboxItem>
                  ))}
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>

            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <span>Priority</span>
                {filters.priority.length > 0 && (
                  <Badge
                    className="ml-auto"
                    variant="contained">
                    {filters.priority.length}
                  </Badge>
                )}
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  {priorities.map((priority) => (
                    <DropdownMenuCheckboxItem
                      key={priority}
                      checked={filters.priority.includes(priority)}
                      onCheckedChange={() =>
                        toggleFilter("priority", priority)
                      }>
                      {priority}
                      {filters.priority.includes(priority) && (
                        <Check className="ml-auto h-4 w-4" />
                      )}
                    </DropdownMenuCheckboxItem>
                  ))}
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>

            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <span>Assignee</span>
                {filters.assignee.length > 0 && (
                  <Badge
                    className="ml-auto"
                    variant="contained">
                    {filters.assignee.length}
                  </Badge>
                )}
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  {assignees.map((assignee) => (
                    <DropdownMenuCheckboxItem
                      key={assignee}
                      checked={filters.assignee.includes(assignee)}
                      onCheckedChange={() =>
                        toggleFilter("assignee", assignee)
                      }>
                      {assignee}
                      {filters.assignee.includes(assignee) && (
                        <Check className="ml-auto h-4 w-4" />
                      )}
                    </DropdownMenuCheckboxItem>
                  ))}
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          </DropdownMenuGroup>

          <DropdownMenuSeparator />
          <Button
            variant="text"
            className="h-8 w-full justify-center text-xs"
            onClick={() => {
              clearFilters();
              setOpen(false);
            }}
            disabled={totalFilters === 0}>
            Clear Filters
          </Button>
        </DropdownMenuContent>
      </DropdownMenu>

      {totalFilters > 0 && (
        <div className="flex flex-wrap gap-2">
          {filters.status.map((status) => (
            <Badge
              key={status}
              variant="outlined"
              className="text-xs">
              Status: {status}
              <Button
                variant="text"
                size="sm"
                className="text-foreground/70 hover:text-foreground ml-1 h-auto p-0"
                onClick={() => toggleFilter("status", status)}>
                &times;
              </Button>
            </Badge>
          ))}
          {filters.priority.map((priority) => (
            <Badge
              key={priority}
              variant="outlined"
              className="text-xs">
              Priority: {priority}
              <Button
                variant="text"
                size="sm"
                className="text-foreground/70 hover:text-foreground ml-1 h-auto p-0"
                onClick={() => toggleFilter("priority", priority)}>
                &times;
              </Button>
            </Badge>
          ))}
          {filters.assignee.map((assignee) => (
            <Badge
              key={assignee}
              variant="outlined"
              className="text-xs">
              Assignee: {assignee}
              <Button
                variant="text"
                size="sm"
                className="text-foreground/70 hover:text-foreground ml-1 h-auto p-0"
                onClick={() => toggleFilter("assignee", assignee)}>
                &times;
              </Button>
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
}
