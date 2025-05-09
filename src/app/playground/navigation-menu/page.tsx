"use client";

import {
  BellIcon,
  CreditCardIcon,
  Settings as GearIcon,
  PersonStandingIcon,
} from "lucide-react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function NavigationMenuPage() {
  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">Navigation Menu</h1>
        <p className="text-muted-foreground">
          A responsive navigation component for site navigation with dropdowns.
        </p>
      </div>

      <div className="grid gap-12">
        {/* Basic Example */}
        <section id="basic">
          <h2 className="mb-4 text-xl font-semibold">Basic</h2>
          <div className="flex justify-center rounded-lg border p-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link
                    href="#basic"
                    passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}>
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link
                    href="#with-content"
                    passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}>
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link
                    href="#custom-styling"
                    passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}>
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </section>

        {/* With Content Example */}
        <section id="with-content">
          <h2 className="mb-4 text-xl font-semibold">With Dropdown Content</h2>
          <div className="flex justify-center rounded-lg border p-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                      <Link
                        href="#with-content"
                        passHref>
                        <NavigationMenuLink className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none select-none focus:shadow-md">
                          <BellIcon className="size-6" />
                          <div className="mt-4 mb-2 text-lg font-medium">
                            Notifications
                          </div>
                          <p className="text-muted-foreground text-sm leading-tight">
                            Stay updated with real-time alerts and messages.
                          </p>
                        </NavigationMenuLink>
                      </Link>
                      <Link
                        href="#with-content"
                        passHref>
                        <NavigationMenuLink className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none select-none focus:shadow-md">
                          <GearIcon className="size-6" />
                          <div className="mt-4 mb-2 text-lg font-medium">
                            Settings
                          </div>
                          <p className="text-muted-foreground text-sm leading-tight">
                            Configure your account and application preferences.
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {features.map((feature) => (
                        <li key={feature.title}>
                          <NavigationMenuLink asChild>
                            <a
                              className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
                              href={feature.href}>
                              <div className="text-sm leading-none font-medium">
                                {feature.title}
                              </div>
                              <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                                {feature.description}
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    href="#with-indicator"
                    passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}>
                      Documentation
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </section>

        {/* With Indicator */}
        <section id="with-indicator">
          <h2 className="mb-4 text-xl font-semibold">With Indicator</h2>
          <div className="flex justify-center rounded-lg border p-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Account</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-3 p-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="hover:bg-accent flex items-center gap-2 rounded-md p-2"
                            href="#with-indicator">
                            <PersonStandingIcon className="size-4" />
                            <span>Profile</span>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="hover:bg-accent flex items-center gap-2 rounded-md p-2"
                            href="#with-indicator">
                            <CreditCardIcon className="size-4" />
                            <span>Billing</span>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="hover:bg-accent flex items-center gap-2 rounded-md p-2"
                            href="#with-indicator">
                            <GearIcon className="size-4" />
                            <span>Settings</span>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link
                    href="#custom-styling"
                    passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}>
                      Help
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
              <NavigationMenuIndicator />
            </NavigationMenu>
          </div>
        </section>

        {/* Custom Styling */}
        <section id="custom-styling">
          <h2 className="mb-4 text-xl font-semibold">Custom Styling</h2>
          <div className="flex justify-center rounded-lg border p-8">
            <NavigationMenu>
              <NavigationMenuList className="gap-2">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground">
                    Primary
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[200px] p-3">
                      <p className="text-sm">Primary menu content</p>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:text-secondary-foreground">
                    Secondary
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[200px] p-3">
                      <p className="text-sm">Secondary menu content</p>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="rounded-full">
                    Rounded
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[200px] p-3">
                      <p className="text-sm">Custom style content</p>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </section>

        {/* Usage Details */}
        <section id="usage-details">
          <h2 className="mb-4 text-xl font-semibold">Usage</h2>
          <div className="bg-muted rounded-lg p-6">
            <div className="space-y-2">
              <h3 className="text-base font-medium">Component Features</h3>
              <ul className="list-disc space-y-1 pl-6 text-sm">
                <li>Keyboard navigation support</li>
                <li>Animated dropdown indicator</li>
                <li>Customizable styling via Tailwind classes</li>
                <li>Accessible dropdown menus</li>
                <li>Mobile-responsive design</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

// Sample features list for the dropdown
const features = [
  {
    title: "Advanced Analytics",
    description:
      "Get detailed insights and statistics about your data usage and patterns.",
    href: "#with-content",
  },
  {
    title: "Team Collaboration",
    description:
      "Work together with your team members in real-time on shared projects.",
    href: "#with-content",
  },
  {
    title: "Integrations",
    description:
      "Connect with your favorite tools and services for a seamless workflow.",
    href: "#with-content",
  },
  {
    title: "API Access",
    description:
      "Build custom solutions with our comprehensive API documentation.",
    href: "#with-content",
  },
];
