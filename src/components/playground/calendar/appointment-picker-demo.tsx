"use client";

import { format } from "date-fns";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { Clock } from "lucide-react";

interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

export function AppointmentPickerDemo() {
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(
    undefined,
  );
  const [selectedTimeSlot, setSelectedTimeSlot] = React.useState<string | null>(
    null,
  );

  // Sample time slots for demonstration
  const timeSlots: TimeSlot[] = [
    { id: "1", time: "09:00 AM", available: true },
    { id: "2", time: "10:00 AM", available: true },
    { id: "3", time: "11:00 AM", available: false },
    { id: "4", time: "12:00 PM", available: false },
    { id: "5", time: "01:00 PM", available: true },
    { id: "6", time: "02:00 PM", available: true },
    { id: "7", time: "03:00 PM", available: true },
    { id: "8", time: "04:00 PM", available: false },
    { id: "9", time: "05:00 PM", available: true },
  ];

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    // Reset time slot when a new date is selected
    setSelectedTimeSlot(null);
  };

  const handleTimeSlotSelect = (slotId: string) => {
    setSelectedTimeSlot(slotId);
  };

  const getAppointmentSummary = () => {
    if (!selectedDate || !selectedTimeSlot) return "Select a date and time";

    const slot = timeSlots.find((slot) => slot.id === selectedTimeSlot);
    if (!slot) return "Invalid selection";

    return `Appointment: ${format(selectedDate, "EEE, MMM d, yyyy")} at ${slot.time}`;
  };

  return (
    <div className="flex max-w-md flex-col gap-4">
      <h3 className="text-md mb-2 font-medium">Appointment Scheduler</h3>

      <div className="flex flex-col gap-6 sm:flex-row">
        <div>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={handleDateSelect}
            className="rounded-md border"
          />
        </div>

        {selectedDate && (
          <div className="flex flex-col">
            <div className="mb-3 flex items-center gap-2">
              <Clock className="text-primary h-4 w-4" />
              <span className="font-medium">Available Time Slots</span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {timeSlots.map((slot) => (
                <Button
                  key={slot.id}
                  variant="outlined"
                  className={cn(
                    "h-auto justify-start py-2 text-sm",
                    selectedTimeSlot === slot.id && "border-primary",
                    !slot.available && "cursor-not-allowed opacity-50",
                  )}
                  disabled={!slot.available}
                  onClick={() => handleTimeSlotSelect(slot.id)}>
                  {slot.time}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="bg-primary/5 mt-4 rounded-md border p-2 text-sm">
        {getAppointmentSummary()}
      </div>
    </div>
  );
}
