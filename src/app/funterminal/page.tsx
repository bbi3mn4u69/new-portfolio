"use client";
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal";
import { Input } from "@/components/ui/input";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { avaiableCommands, initialTerminalArray } from "./terminalHelper";

export default function FunTerminal() {
  const [terminalArray, setTerminalArray] = useState(initialTerminalArray);
  const [terminalIndex, setTerminalIndex] = useState(0);
  const terminalScrollRef = useRef<HTMLPreElement | null>(null);

  const onSubmit = (huyInput: string) => {
    const arrayInput = "terminal@huy ~ $ " + huyInput;
    setTerminalArray((prev) => [...prev, arrayInput]);
    const matchedCommand = avaiableCommands.find(
      (command) => command.command === huyInput,
    );

    if (!matchedCommand) {
      setTerminalArray((prev) => [...prev, "Command not found"]);
    } else if (huyInput === "clear") {
      setTerminalArray([]);
    }else if (huyInput === "exit") {
      setTerminalArray((prev) => [...prev, "Exiting terminal..."]);
      r.push("/");
    } else {
      setTerminalArray((prev) => [...prev, matchedCommand.response]);
    }
    setTerminalIndex(terminalIndex + 1);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setTerminalIndex(terminalIndex + 1);
    }, 5000);
    return () => clearTimeout(timer);
  }, [terminalIndex]);

  useEffect(() => {
    const container = terminalScrollRef.current;
    if (!container) return;
    container.scrollTo({
      top: container.scrollHeight,
      behavior: "smooth",
    });
  }, [terminalArray]);

  const r = useRouter();
  return (
    <div className="h-screen w-full">
      <div className="absolute top-3 left-3">
        <Button
          variant="ghost"
          size="icon"
          className="border rounded-xl px-3 py-2 size-10"
          onClick={() => r.push("/")}
        >
          <ArrowLeftIcon className="size-4" />
        </Button>
      </div>
      <div className="absolute top-3 right-3">
        <AnimatedThemeToggler className="border rounded-xl px-3 py-2 size-10" />
      </div>
      <div className="h-full w-full mx-auto pt-12 sm:pt-16 px-3 pb-3">
        <div className="border-border bg-background z-0 h-full w-full rounded-xl border flex flex-col">
          <div className="border-border flex flex-col gap-y-2 border-b py-2 px-3">
            <div className="flex flex-row gap-x-2 items-center">
              <div className="size-4 rounded-full bg-red-500"></div>
              <div className="size-4 rounded-full bg-yellow-500"></div>
              <div className="size-4 rounded-full bg-green-500"></div>
              <code className="text-sm font-normal pl-3 text-gray-500">
                {" "}
                Huy&apos;s Terminal{" "}
              </code>
            </div>
          </div>
          <pre ref={terminalScrollRef} className="p-4 flex-1 min-h-0 overflow-y-auto">
            <code className="grid overflow-auto px-4 text-sm font-normal tracking-tight text-muted-foreground whitespace-pre-wrap break-words text-gray-300">
              to print avaliable commands, type 'help' and press Enter
              {terminalArray.map((item, index) => (
                <span key={index} className="text-green-500">
                  {item}
                </span>
              ))}
              <form
                onSubmit={(e) => e.preventDefault()}
                className="w-full flex flex-row gap-x-2 items-center tracking-tight"
              >
                <label
                  htmlFor="huyInput"
                  className="text-green-500 whitespace-nowrap"
                >
                  terminal@huy ~ $
                </label>
                <Input
                  type="text"
                  id="huyInput"
                  className="h-auto rounded-none min-h-0 leading-tight shadow-none focus-visible:ring-0 text-green-500 caret-green-500 [caret-shape:block] p-0 cursor-default w-full text-left border-none"
                  onKeyDown={(e) => {
                    if (e.key !== "Enter") return;
                    e.preventDefault();
                    const huyInput = e.currentTarget.value.trim();
                    if (!huyInput) return;
                    onSubmit(huyInput);
                    e.currentTarget.form?.reset();
                  }}
                  autoFocus
                  spellCheck={false}
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  name="huyInput"
                />
              </form>
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}
