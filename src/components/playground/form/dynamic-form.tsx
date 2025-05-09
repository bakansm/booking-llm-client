"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

// Base schema that's always required
const baseSchema = z.object({
  requestType: z.enum(["inquiry", "feedback", "support", "feature"], {
    required_error: "Please select a request type.",
  }),
});

// Inquiry schema
const inquirySchema = baseSchema.extend({
  requestType: z.literal("inquiry"),
  subject: z
    .string()
    .min(5, { message: "Subject must be at least 5 characters." }),
  message: z
    .string()
    .min(20, { message: "Message must be at least 20 characters." }),
  preferredContact: z.enum(["email", "phone", "none"], {
    required_error: "Please select a preferred contact method.",
  }),
  email: z
    .string()
    .email({ message: "Please enter a valid email." })
    .optional(),
  phone: z.string().optional(),
});

// Feedback schema
const feedbackSchema = baseSchema.extend({
  requestType: z.literal("feedback"),
  rating: z.enum(["1", "2", "3", "4", "5"], {
    required_error: "Please select a rating.",
  }),
  comments: z
    .string()
    .min(10, { message: "Comments must be at least 10 characters." }),
  wouldRecommend: z.boolean(),
});

// Support schema
const supportSchema = baseSchema.extend({
  requestType: z.literal("support"),
  urgency: z.enum(["low", "medium", "high", "critical"], {
    required_error: "Please select urgency level.",
  }),
  issueDescription: z
    .string()
    .min(30, { message: "Description must be at least 30 characters." }),
  systemInfo: z
    .string()
    .min(10, { message: "System info must be at least 10 characters." }),
  attachmentsAvailable: z.boolean(),
});

// Feature request schema
const featureSchema = baseSchema.extend({
  requestType: z.literal("feature"),
  featureTitle: z
    .string()
    .min(5, { message: "Feature title must be at least 5 characters." }),
  featureDescription: z
    .string()
    .min(50, { message: "Description must be at least 50 characters." }),
  businessImpact: z
    .string()
    .min(20, { message: "Business impact must be at least 20 characters." }),
  priority: z.enum(["low", "medium", "high"], {
    required_error: "Please select a priority level.",
  }),
});

// Combined schema using discriminated union
const formSchema = z.discriminatedUnion("requestType", [
  inquirySchema,
  feedbackSchema,
  supportSchema,
  featureSchema,
]);

type FormValues = z.infer<typeof formSchema>;

export function DynamicFormExample() {
  const [requestType, setRequestType] = useState<string | undefined>();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      requestType: undefined,
    },
    mode: "onChange",
  });

  // Watch for changes to the request type
  const watchedRequestType = form.watch("requestType");

  // Update the local state when the form value changes
  useEffect(() => {
    if (watchedRequestType !== requestType) {
      setRequestType(watchedRequestType);
    }
  }, [watchedRequestType, requestType]);

  function onSubmit(values: FormValues) {
    console.log(values);
    alert(JSON.stringify(values, null, 2));
  }

  function getDefaultValues(type: FormValues["requestType"]): FormValues {
    switch (type) {
      case "inquiry":
        return {
          requestType: "inquiry",
          subject: "",
          message: "",
          preferredContact: "email",
          email: "",
          phone: "",
        };
      case "feedback":
        return {
          requestType: "feedback",
          rating: "5",
          comments: "",
          wouldRecommend: false,
        };
      case "support":
        return {
          requestType: "support",
          urgency: "low",
          issueDescription: "",
          systemInfo: "",
          attachmentsAvailable: false,
        };
      case "feature":
        return {
          requestType: "feature",
          featureTitle: "",
          featureDescription: "",
          businessImpact: "",
          priority: "low",
        };
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6">
        <FormField
          control={form.control}
          name="requestType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Request Type</FormLabel>
              <Select
                onValueChange={(value: FormValues["requestType"]) => {
                  const type = value;
                  field.onChange(type);
                  form.reset(getDefaultValues(type));
                }}
                defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a request type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="inquiry">General Inquiry</SelectItem>
                  <SelectItem value="feedback">Feedback</SelectItem>
                  <SelectItem value="support">Support Request</SelectItem>
                  <SelectItem value="feature">Feature Request</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                Select the type of request you want to submit.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {requestType === "inquiry" && (
          <>
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter subject..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter your message..."
                      className="min-h-24"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="preferredContact"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Preferred Contact Method</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1">
                      <FormItem className="flex items-center space-y-0 space-x-3">
                        <FormControl>
                          <RadioGroupItem value="email" />
                        </FormControl>
                        <FormLabel className="font-normal">Email</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-y-0 space-x-3">
                        <FormControl>
                          <RadioGroupItem value="phone" />
                        </FormControl>
                        <FormLabel className="font-normal">Phone</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-y-0 space-x-3">
                        <FormControl>
                          <RadioGroupItem value="none" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          No contact needed
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {form.watch("preferredContact") === "email" && (
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="email@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            {form.watch("preferredContact") === "phone" && (
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="(123) 456-7890"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
          </>
        )}

        {requestType === "feedback" && (
          <>
            <FormField
              control={form.control}
              name="rating"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Rating</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex space-x-4">
                      {["1", "2", "3", "4", "5"].map((rating) => (
                        <FormItem
                          key={rating}
                          className="flex flex-col items-center space-y-1">
                          <FormControl>
                            <RadioGroupItem value={rating} />
                          </FormControl>
                          <FormLabel className="font-normal">
                            {rating}
                          </FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormDescription>1 = Poor, 5 = Excellent</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="comments"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Comments</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Please share your thoughts..."
                      className="min-h-24"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="wouldRecommend"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-y-0 space-x-3">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Would you recommend us?</FormLabel>
                    <FormDescription>
                      Let us know if you would recommend our product to others.
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
          </>
        )}

        {requestType === "support" && (
          <>
            <FormField
              control={form.control}
              name="urgency"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Urgency</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select urgency level" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="critical">Critical</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="issueDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Issue Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Please describe the issue in detail..."
                      className="min-h-24"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="systemInfo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>System Information</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Browser, OS, Device, etc."
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    This helps us troubleshoot your issue more effectively.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="attachmentsAvailable"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-y-0 space-x-3">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>I have screenshots/attachments</FormLabel>
                    <FormDescription>
                      Check this if you have supporting files to send later.
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
          </>
        )}

        {requestType === "feature" && (
          <>
            <FormField
              control={form.control}
              name="featureTitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Feature Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter a concise title..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="featureDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Feature Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe the feature in detail..."
                      className="min-h-24"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="businessImpact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Business Impact</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="How would this feature benefit users or the business?"
                      className="min-h-16"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="priority"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Priority</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select priority level" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Select the priority level for this feature request.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}

        {requestType && <Button type="submit">Submit Request</Button>}
      </form>
    </Form>
  );
}
