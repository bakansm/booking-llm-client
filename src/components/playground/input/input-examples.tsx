"use client";

import {
  EyeIcon,
  EyeOffIcon,
  LockIcon,
  MailIcon,
  SearchIcon,
  UserIcon,
} from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function BasicInputExample() {
  return (
    <div>
      <Label
        htmlFor="default-input"
        className="mb-2 block">
        Default Input
      </Label>
      <Input
        id="default-input"
        placeholder="Enter text..."
      />
    </div>
  );
}

export function InputTypesExample() {
  return (
    <div className="grid gap-6">
      <div>
        <Label
          htmlFor="text-input"
          className="mb-2 block">
          Text
        </Label>
        <Input
          id="text-input"
          type="text"
          placeholder="Text input"
        />
      </div>
      <div>
        <Label
          htmlFor="email-input"
          className="mb-2 block">
          Email
        </Label>
        <Input
          id="email-input"
          type="email"
          placeholder="email@example.com"
        />
      </div>
      <div>
        <Label
          htmlFor="password-input"
          className="mb-2 block">
          Password
        </Label>
        <Input
          id="password-input"
          type="password"
          placeholder="Password"
        />
      </div>
      <div>
        <Label
          htmlFor="number-input"
          className="mb-2 block">
          Number
        </Label>
        <Input
          id="number-input"
          type="number"
          placeholder="0"
        />
      </div>
      <div>
        <Label
          htmlFor="date-input"
          className="mb-2 block">
          Date
        </Label>
        <Input
          id="date-input"
          type="date"
        />
      </div>
      <div>
        <Label
          htmlFor="file-input"
          className="mb-2 block">
          File
        </Label>
        <Input
          id="file-input"
          type="file"
        />
      </div>
    </div>
  );
}

export function InputStatesExample() {
  return (
    <div className="grid gap-6">
      <div>
        <Label
          htmlFor="disabled-input"
          className="mb-2 block">
          Disabled
        </Label>
        <Input
          id="disabled-input"
          disabled
          placeholder="Disabled input"
        />
      </div>
      <div>
        <Label
          htmlFor="readonly-input"
          className="mb-2 block">
          Read-only
        </Label>
        <Input
          id="readonly-input"
          readOnly
          value="Read-only value"
        />
      </div>
      <div>
        <Label
          htmlFor="required-input"
          className="mb-2 block">
          Required
        </Label>
        <Input
          id="required-input"
          required
          placeholder="Required field"
        />
      </div>
      <div>
        <Label
          htmlFor="error-input"
          className="text-destructive mb-2 block">
          Error
        </Label>
        <Input
          id="error-input"
          aria-invalid="true"
          placeholder="Invalid input"
          className="border-destructive"
        />
        <p className="text-destructive mt-1 text-xs">This field is required</p>
      </div>
    </div>
  );
}

export function InputSizesExample() {
  return (
    <div className="grid gap-6">
      <div>
        <Label
          htmlFor="sm-input"
          className="mb-2 block">
          Small
        </Label>
        <Input
          id="sm-input"
          className="h-8 px-2 text-xs"
          placeholder="Small input"
        />
      </div>
      <div>
        <Label
          htmlFor="md-input"
          className="mb-2 block">
          Medium (Default)
        </Label>
        <Input
          id="md-input"
          placeholder="Medium input"
        />
      </div>
      <div>
        <Label
          htmlFor="lg-input"
          className="mb-2 block">
          Large
        </Label>
        <Input
          id="lg-input"
          className="h-11 px-4 text-lg"
          placeholder="Large input"
        />
      </div>
    </div>
  );
}

export function InputWithIconsExample() {
  const [searchQuery, setSearchQuery] = useState("");
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (value) {
      setIsEmailValid(validateEmail(value));
    } else {
      setIsEmailValid(true);
    }
  };

  return (
    <div className="grid gap-6">
      <div>
        <Label
          htmlFor="leading-icon-input"
          className="mb-2 block">
          Leading Icon
        </Label>
        <div className="relative">
          <UserIcon className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
          <Input
            id="leading-icon-input"
            className="pl-10"
            placeholder="Username"
          />
        </div>
      </div>
      <div>
        <Label
          htmlFor="trailing-icon-input"
          className="mb-2 block">
          Trailing Icon
        </Label>
        <div className="relative">
          <Input
            id="trailing-icon-input"
            className="pr-10"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <SearchIcon className="text-muted-foreground absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2" />
        </div>
      </div>
      <div>
        <Label
          htmlFor="both-icons-input"
          className="mb-2 block">
          Both Icons
        </Label>
        <div className="relative">
          <MailIcon className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
          <Input
            id="both-icons-input"
            className="px-10"
            placeholder="Email address"
            value={email}
            onChange={handleEmailChange}
            aria-invalid={!isEmailValid}
          />
          {email && (
            <span
              className={`absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 ${isEmailValid ? "text-success" : "text-destructive"}`}>
              {isEmailValid ? "✓" : "✗"}
            </span>
          )}
        </div>
        {email && !isEmailValid && (
          <p className="text-destructive mt-1 text-xs">
            Please enter a valid email address
          </p>
        )}
      </div>
    </div>
  );
}

export function PasswordToggleExample() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <Label
        htmlFor="password-toggle-input"
        className="mb-2 block">
        Password with Toggle
      </Label>
      <div className="relative">
        <LockIcon className="text-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
        <Input
          id="password-toggle-input"
          className="pr-10 pl-10"
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="button"
          variant={"text"}
          icon
          onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? (
            <EyeOffIcon className="h-4 w-4" />
          ) : (
            <EyeIcon className="h-4 w-4" />
          )}
        </Button>
      </div>
    </div>
  );
}

export function InputWithButtonExample() {
  return (
    <div className="grid gap-6">
      <div>
        <Label
          htmlFor="input-with-button"
          className="mb-2 block">
          Search Input
        </Label>
        <div className="flex">
          <Input
            id="input-with-button"
            placeholder="Search..."
            className="rounded-r-none"
          />
          <Button className="rounded-l-none">Search</Button>
        </div>
      </div>
      <div>
        <Label
          htmlFor="subscribe-input"
          className="mb-2 block">
          Subscribe
        </Label>
        <div className="flex">
          <Input
            id="subscribe-input"
            type="email"
            placeholder="Email address"
            className="rounded-r-none"
          />
          <Button
            variant="contained"
            className="rounded-l-none">
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
}
