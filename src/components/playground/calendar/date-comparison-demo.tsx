"use client";

import { differenceInCalendarMonths, differenceInDays, format } from "date-fns";
import * as React from "react";

import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function DateComparisonDemo() {
  const [startDate, setStartDate] = React.useState<Date | undefined>(
    new Date(),
  );
  const [endDate, setEndDate] = React.useState<Date | undefined>(undefined);

  const daysDifference = React.useMemo(() => {
    if (!startDate || !endDate) return null;
    return differenceInDays(endDate, startDate);
  }, [startDate, endDate]);

  const monthsDifference = React.useMemo(() => {
    if (!startDate || !endDate) return null;
    return differenceInCalendarMonths(endDate, startDate);
  }, [startDate, endDate]);

  return (
    <div className="flex w-full max-w-2xl flex-col gap-4">
      <h3 className="text-md font-medium">Date Comparison</h3>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Start Date</CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={startDate}
              onSelect={setStartDate}
              className="rounded-md"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">End Date</CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={endDate}
              onSelect={setEndDate}
              className="rounded-md"
            />
          </CardContent>
        </Card>
      </div>

      <Card className="mt-2">
        <CardContent className="pt-6">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Selected Start:</span>
              <Badge variant="outlined">
                {startDate ? format(startDate, "PPP") : "Not selected"}
              </Badge>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Selected End:</span>
              <Badge variant="outlined">
                {endDate ? format(endDate, "PPP") : "Not selected"}
              </Badge>
            </div>

            {startDate && endDate && (
              <>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Days Difference:</span>
                  <Badge color="secondary">
                    {daysDifference} day{daysDifference !== 1 ? "s" : ""}
                  </Badge>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">
                    Months Difference:
                  </span>
                  <Badge color="secondary">
                    {monthsDifference} month{monthsDifference !== 1 ? "s" : ""}
                  </Badge>
                </div>
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
