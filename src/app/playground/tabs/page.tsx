import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TabsPage() {
  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">Tabs</h1>
        <p className="text-muted-foreground">
          A set of layered sections of content—known as tab panels—that display
          one panel at a time.
        </p>
      </div>

      <div className="grid gap-10">
        {/* Basic Usage Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Basic Usage</h2>
          <Tabs
            defaultValue="account"
            className="w-full max-w-3xl">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            <TabsContent
              value="account"
              className="mt-2 rounded-md border p-4">
              <h3 className="text-lg font-medium">Account</h3>
              <p className="text-muted-foreground text-sm">
                Make changes to your account here. Click save when you&apos;re
                done.
              </p>
            </TabsContent>
            <TabsContent
              value="password"
              className="mt-2 rounded-md border p-4">
              <h3 className="text-lg font-medium">Password</h3>
              <p className="text-muted-foreground text-sm">
                Change your password here. After saving, you&apos;ll be logged
                out.
              </p>
            </TabsContent>
            <TabsContent
              value="settings"
              className="mt-2 rounded-md border p-4">
              <h3 className="text-lg font-medium">Settings</h3>
              <p className="text-muted-foreground text-sm">
                Manage your account settings and preferences.
              </p>
            </TabsContent>
          </Tabs>
        </section>

        {/* Examples Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Examples</h2>

          <div className="grid gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium">Form with Tabs</h3>
              <Tabs
                defaultValue="account"
                className="w-full max-w-3xl">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="account">Account</TabsTrigger>
                  <TabsTrigger value="password">Password</TabsTrigger>
                  <TabsTrigger value="notifications">Notifications</TabsTrigger>
                </TabsList>
                <TabsContent
                  value="account"
                  className="mt-2 space-y-4 rounded-md border p-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      defaultValue="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      defaultValue="john.doe@example.com"
                      type="email"
                    />
                  </div>
                  <Button type="submit">Save Changes</Button>
                </TabsContent>
                <TabsContent
                  value="password"
                  className="mt-2 space-y-4 rounded-md border p-4">
                  <div className="space-y-2">
                    <Label htmlFor="current">Current Password</Label>
                    <Input
                      id="current"
                      type="password"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new">New Password</Label>
                    <Input
                      id="new"
                      type="password"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm">Confirm Password</Label>
                    <Input
                      id="confirm"
                      type="password"
                    />
                  </div>
                  <Button type="submit">Change Password</Button>
                </TabsContent>
                <TabsContent
                  value="notifications"
                  className="mt-2 space-y-4 rounded-md border p-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Email Notifications</h3>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between rounded-lg border p-3">
                        <div className="space-y-0.5">
                          <p className="font-medium">Marketing emails</p>
                          <p className="text-muted-foreground text-sm">
                            Receive emails about new products and features.
                          </p>
                        </div>
                        <Button variant="outline">Enabled</Button>
                      </div>
                      <div className="flex items-center justify-between rounded-lg border p-3">
                        <div className="space-y-0.5">
                          <p className="font-medium">Security emails</p>
                          <p className="text-muted-foreground text-sm">
                            Receive emails about your account security.
                          </p>
                        </div>
                        <Button variant="outline">Enabled</Button>
                      </div>
                    </div>
                  </div>
                  <Button type="submit">Save Preferences</Button>
                </TabsContent>
              </Tabs>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium">Vertical Tabs</h3>
              <div className="flex max-w-3xl flex-col gap-4 rounded-md border p-4 md:flex-row">
                <Tabs
                  defaultValue="tab1"
                  className="w-full"
                  orientation="vertical">
                  <div className="flex w-full flex-col gap-4 md:flex-row">
                    <TabsList className="h-full justify-start md:w-[200px] md:flex-col">
                      <TabsTrigger
                        value="tab1"
                        className="w-full justify-start">
                        Overview
                      </TabsTrigger>
                      <TabsTrigger
                        value="tab2"
                        className="w-full justify-start">
                        Features
                      </TabsTrigger>
                      <TabsTrigger
                        value="tab3"
                        className="w-full justify-start">
                        Pricing
                      </TabsTrigger>
                      <TabsTrigger
                        value="tab4"
                        className="w-full justify-start">
                        FAQ
                      </TabsTrigger>
                    </TabsList>
                    <div className="flex-1">
                      <TabsContent
                        value="tab1"
                        className="h-full">
                        <div className="space-y-4">
                          <h3 className="text-xl font-bold">Overview</h3>
                          <p>
                            Our platform provides a comprehensive solution for
                            all your needs. With a focus on usability and
                            performance, we aim to deliver the best experience
                            for our users.
                          </p>
                        </div>
                      </TabsContent>
                      <TabsContent
                        value="tab2"
                        className="h-full">
                        <div className="space-y-4">
                          <h3 className="text-xl font-bold">Features</h3>
                          <ul className="list-disc space-y-2 pl-5">
                            <li>Advanced user management</li>
                            <li>Real-time analytics</li>
                            <li>Secure data storage</li>
                            <li>Customizable workflows</li>
                            <li>Extensive API support</li>
                          </ul>
                        </div>
                      </TabsContent>
                      <TabsContent
                        value="tab3"
                        className="h-full">
                        <div className="space-y-4">
                          <h3 className="text-xl font-bold">Pricing</h3>
                          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div className="rounded-lg border p-4">
                              <h4 className="font-bold">Standard</h4>
                              <div className="mt-2 text-3xl font-bold">
                                $29/mo
                              </div>
                              <p className="text-muted-foreground mt-1 text-sm">
                                For small teams
                              </p>
                            </div>
                            <div className="border-primary rounded-lg border p-4">
                              <h4 className="font-bold">Premium</h4>
                              <div className="mt-2 text-3xl font-bold">
                                $79/mo
                              </div>
                              <p className="text-muted-foreground mt-1 text-sm">
                                For large organizations
                              </p>
                            </div>
                          </div>
                        </div>
                      </TabsContent>
                      <TabsContent
                        value="tab4"
                        className="h-full">
                        <div className="space-y-4">
                          <h3 className="text-xl font-bold">FAQ</h3>
                          <div className="space-y-3">
                            <div>
                              <h4 className="font-medium">
                                How do I get started?
                              </h4>
                              <p className="text-muted-foreground text-sm">
                                Simply sign up for an account and follow the
                                onboarding process.
                              </p>
                            </div>
                            <div>
                              <h4 className="font-medium">
                                Can I cancel my subscription?
                              </h4>
                              <p className="text-muted-foreground text-sm">
                                Yes, you can cancel your subscription at any
                                time without penalty.
                              </p>
                            </div>
                          </div>
                        </div>
                      </TabsContent>
                    </div>
                  </div>
                </Tabs>
              </div>
            </div>
          </div>
        </section>

        {/* Tabs Components Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Tabs Components</h2>
          <div className="overflow-auto">
            <table className="min-w-full border-collapse text-sm">
              <thead>
                <tr>
                  <th className="border-border bg-muted border px-4 py-2 text-left font-medium">
                    Component
                  </th>
                  <th className="border-border bg-muted border px-4 py-2 text-left font-medium">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    Tabs
                  </td>
                  <td className="border-border border px-4 py-2">
                    The root component that contains all tabs parts.
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    TabsList
                  </td>
                  <td className="border-border border px-4 py-2">
                    The container for the tab triggers.
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    TabsTrigger
                  </td>
                  <td className="border-border border px-4 py-2">
                    The button that activates its associated content. Must have
                    a value prop that matches a TabsContent.
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    TabsContent
                  </td>
                  <td className="border-border border px-4 py-2">
                    The content that&apos;s displayed when the associated
                    TabsTrigger is active. Must have a value prop that matches a
                    TabsTrigger.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Props Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Props</h2>
          <div className="overflow-auto">
            <table className="min-w-full border-collapse text-sm">
              <thead>
                <tr>
                  <th className="border-border bg-muted border px-4 py-2 text-left font-medium">
                    Prop
                  </th>
                  <th className="border-border bg-muted border px-4 py-2 text-left font-medium">
                    Type
                  </th>
                  <th className="border-border bg-muted border px-4 py-2 text-left font-medium">
                    Default
                  </th>
                  <th className="border-border bg-muted border px-4 py-2 text-left font-medium">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    defaultValue
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    string
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    -
                  </td>
                  <td className="border-border border px-4 py-2">
                    The value of the tab that should be active when initially
                    rendered.
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    value
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    string
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    -
                  </td>
                  <td className="border-border border px-4 py-2">
                    The controlled value of the tab to activate. Should be used
                    with onValueChange.
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    onValueChange
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    function
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    -
                  </td>
                  <td className="border-border border px-4 py-2">
                    Callback called when the value changes.
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    orientation
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    &quot;horizontal&quot; | &quot;vertical&quot;
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    &quot;horizontal&quot;
                  </td>
                  <td className="border-border border px-4 py-2">
                    The orientation of the component.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
