import { BasicCalendarDemo } from "@/components/playground/calendar/basic-calendar-demo";
import { BookingRangeExample } from "@/components/playground/calendar/booking-range-example";
import { CalendarProps } from "@/components/playground/calendar/calendar-props";
import { CustomStartWeekDemo } from "@/components/playground/calendar/custom-start-week-demo";
import { CustomStylingDemo } from "@/components/playground/calendar/custom-styling-demo";
import { DatePickerExample } from "@/components/playground/calendar/date-picker-example";
import { DateRangeDemo } from "@/components/playground/calendar/date-range-demo";
import { HideOutsideDaysDemo } from "@/components/playground/calendar/hide-outside-days-demo";
import { MultipleDatesDemo } from "@/components/playground/calendar/multiple-dates-demo";
import { SingleDateDemo } from "@/components/playground/calendar/single-date-demo";

export default function CalendarPage() {
  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">Calendar</h1>
        <p className="text-muted-foreground">
          A date field component with a popover calendar, supporting single,
          multiple, and range selection.
        </p>
      </div>

      <div className="grid gap-10">
        {/* Basic Usage Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Basic Usage</h2>
          <BasicCalendarDemo />
        </section>

        {/* Variants Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Variants</h2>
          <div className="flex flex-wrap gap-8">
            {/* Single */}
            <SingleDateDemo />
            {/* Multiple */}
            <MultipleDatesDemo />
            {/* Range */}
            <DateRangeDemo />
          </div>
        </section>

        {/* Customization Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Customization</h2>
          <div className="flex flex-wrap gap-8">
            {/* Custom Start Week */}
            <CustomStartWeekDemo />
            {/* Hide Outside Days */}
            <HideOutsideDaysDemo />
            {/* Custom ClassName */}
            <CustomStylingDemo />
          </div>
        </section>

        {/* Examples Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Examples</h2>
          <div className="grid gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium">Date Picker with Popover</h3>
              <DatePickerExample />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium">Booking Date Range</h3>
              <BookingRangeExample />
            </div>
          </div>
        </section>

        {/* Props Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Props</h2>
          <CalendarProps />
        </section>
      </div>
    </div>
  );
}
