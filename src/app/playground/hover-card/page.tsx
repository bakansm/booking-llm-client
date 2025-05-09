import { CalendarIcon, InfoIcon } from "lucide-react";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function HoverCardPage() {
  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">Hover Card</h1>
        <p className="text-muted-foreground">
          A card that appears when hovering over a trigger element.
        </p>
      </div>

      <div className="grid gap-10">
        {/* Basic Usage Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Basic Usage</h2>
          <div className="flex flex-wrap gap-8">
            <div className="w-72">
              <p className="text-muted-foreground mb-4 text-sm">
                Hover over the text below to see more information.
              </p>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button
                    variant="text"
                    link>
                    Hover over me
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex flex-col gap-2">
                    <h4 className="text-sm font-semibold">Hover Card</h4>
                    <p className="text-muted-foreground text-sm">
                      This is a basic hover card component that appears when you
                      hover over the trigger element.
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
        </section>

        {/* User Profile Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">User Profile</h2>
          <div className="flex flex-wrap gap-8">
            <div className="w-72">
              <p className="text-muted-foreground mb-4 text-sm">
                Hover over the username to see a profile preview.
              </p>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Link
                    href="#"
                    className="text-primary font-medium">
                    @johndoe
                  </Link>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex justify-between space-x-4">
                    <Avatar>
                      <AvatarImage src="/placeholder-avatar.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">John Doe</h4>
                      <p className="text-muted-foreground text-sm">
                        Product Designer
                      </p>
                      <div className="flex items-center pt-2">
                        <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />
                        <span className="text-muted-foreground text-xs">
                          Joined December 2021
                        </span>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
        </section>

        {/* Information Tooltip Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Information Tooltip</h2>
          <div className="flex flex-wrap gap-8">
            <div className="w-72">
              <p className="text-muted-foreground mb-4 text-sm">
                Using hover card as an enhanced tooltip for information.
              </p>
              <div className="flex items-center gap-2">
                <span>Payment Method</span>
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <InfoIcon className="text-muted-foreground h-4 w-4 cursor-help" />
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="flex flex-col gap-2">
                      <h4 className="text-sm font-semibold">
                        Payment Information
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        We accept various payment methods including credit
                        cards, PayPal, and bank transfers. All payments are
                        securely processed.
                      </p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </div>
            </div>
          </div>
        </section>

        {/* Rich Content Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Rich Content</h2>
          <div className="flex flex-wrap gap-8">
            <div className="w-72">
              <p className="text-muted-foreground mb-4 text-sm">
                Hover cards can contain rich, interactive content.
              </p>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="outlined">Product Preview</Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 p-0">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Premium Plan</CardTitle>
                      <CardDescription className="text-xs">
                        Advanced features for professionals
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-xs">
                      <ul className="space-y-1">
                        <li className="flex items-center">
                          <span className="mr-2">✓</span> Unlimited projects
                        </li>
                        <li className="flex items-center">
                          <span className="mr-2">✓</span> Priority support
                        </li>
                        <li className="flex items-center">
                          <span className="mr-2">✓</span> Advanced analytics
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter className="pt-2">
                      <Button
                        size="sm"
                        className="w-full">
                        Upgrade Now
                      </Button>
                    </CardFooter>
                  </Card>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
        </section>

        {/* Custom Positioning Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Custom Positioning</h2>
          <div className="flex flex-wrap gap-8">
            <div className="w-72">
              <p className="text-muted-foreground mb-4 text-sm">
                Customize the position of the hover card.
              </p>
              <div className="flex gap-4">
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Button
                      variant="outlined"
                      size="sm">
                      Top
                    </Button>
                  </HoverCardTrigger>
                  <HoverCardContent
                    side="top"
                    className="w-60">
                    <p className="text-sm">
                      This card appears above the trigger.
                    </p>
                  </HoverCardContent>
                </HoverCard>

                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Button
                      variant="outlined"
                      size="sm">
                      Right
                    </Button>
                  </HoverCardTrigger>
                  <HoverCardContent
                    side="right"
                    className="w-60">
                    <p className="text-sm">
                      This card appears to the right of the trigger.
                    </p>
                  </HoverCardContent>
                </HoverCard>

                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Button
                      variant="outlined"
                      size="sm">
                      Left
                    </Button>
                  </HoverCardTrigger>
                  <HoverCardContent
                    side="left"
                    className="w-60">
                    <p className="text-sm">
                      This card appears to the left of the trigger.
                    </p>
                  </HoverCardContent>
                </HoverCard>
              </div>
            </div>
          </div>
        </section>

        {/* Team Member Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Team Members</h2>
          <div className="flex flex-wrap gap-8">
            <div className="w-full max-w-md">
              <p className="text-muted-foreground mb-4 text-sm">
                Hover over team members to see their details.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Alex", "Maria", "John", "Sarah"].map((name, i) => (
                  <HoverCard key={name}>
                    <HoverCardTrigger asChild>
                      <Avatar className="cursor-pointer">
                        <AvatarFallback>
                          {name.substring(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="flex space-x-4">
                        <Avatar className="h-12 w-12">
                          <AvatarFallback className="text-lg">
                            {name.substring(0, 2).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div className="space-y-1">
                          <h4 className="text-sm font-semibold">
                            {name} Smith
                          </h4>
                          <p className="text-muted-foreground text-sm">
                            {
                              [
                                "Designer",
                                "Developer",
                                "Product Manager",
                                "Marketing",
                              ][i]
                            }
                          </p>
                          <div className="flex items-center gap-2 pt-2">
                            <Button
                              size="sm"
                              variant="outlined"
                              className="h-7 px-2 text-xs">
                              Message
                            </Button>
                            <Button
                              size="sm"
                              variant="outlined"
                              className="h-7 px-2 text-xs">
                              View Profile
                            </Button>
                          </div>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
