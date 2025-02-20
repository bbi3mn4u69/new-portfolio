"use client";

import { cn } from "@/lib/utils";
import { motion, MotionProps } from "motion/react";
import { useEffect, useRef, useState } from "react";
import * as React from "react";
import { Button, ButtonHandle } from "@progress/kendo-react-buttons";
import { arrowsMoveIcon } from "@progress/kendo-svg-icons";

import {
  useDraggable,
  SvgIcon,
  NormalizedDragEvent,
} from "@progress/kendo-react-common";

interface AnimatedSpanProps extends MotionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const AnimatedSpan = ({
  children,
  delay = 0,
  className,
  ...props
}: AnimatedSpanProps) => (
  <motion.div
    initial={{ opacity: 0, y: -5 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: delay / 1000 }}
    className={cn("grid text-sm font-normal tracking-tight", className)}
    {...props}
  >
    {children}
  </motion.div>
);

interface TypingAnimationProps extends MotionProps {
  children: string;
  className?: string;
  duration?: number;
  delay?: number;
  as?: React.ElementType;
}

export const TypingAnimation = ({
  children,
  className,
  duration = 60,
  delay = 0,
  as: Component = "span",
  ...props
}: TypingAnimationProps) => {
  if (typeof children !== "string") {
    throw new Error("TypingAnimation: children must be a string. Received:");
  }

  const MotionComponent = motion.create(Component, {
    forwardMotionProps: true,
  });

  const [displayedText, setDisplayedText] = useState<string>("");
  const [started, setStarted] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, delay);
    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < children.length) {
        setDisplayedText(children.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [children, duration, started]);

  return (
    <MotionComponent
      ref={elementRef}
      className={cn("text-sm font-normal tracking-tight", className)}
      {...props}
    >
      {displayedText}
    </MotionComponent>
  );
};

interface TerminalProps {
  children: React.ReactNode;
  className?: string;
  setTerminalOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  isTerminalOpen?: boolean;
}

export const Terminal = ({
  children,
  className,
  setTerminalOpen,
  isTerminalOpen,
}: TerminalProps) => {
  const preRef = useRef<HTMLPreElement>(null);
  const centerX = (window.innerWidth - 512) / 2;
  const centerY = (window.innerHeight - 700) / 2;
  const [position, setPosition] = React.useState({ x: centerX, y: centerY });
  const [pressed, setPressed] = React.useState<boolean>(false);
  const [dragged, setDragged] = React.useState<boolean>(false);
  const [initial, setInitial] = React.useState<{ x: number; y: number } | null>(
    null
  );
  const dragHandle = React.useRef<HTMLDivElement | null>(null);

  const handlePress = React.useCallback(() => {
    setPressed(true);
  }, []);

  const handleDragStart = React.useCallback(
    (event: NormalizedDragEvent) => {
      setDragged(true);
      setInitial({
        x: event.clientX - position.x,
        y: event.clientY - position.y,
      });
    },
    [position.x, position.y]
  );

  const handleDrag = React.useCallback(
    (event: NormalizedDragEvent) => {
      if (!initial) {
        return;
      }

      setPosition({
        x: event.clientX - initial.x,
        y: event.clientY - initial.y,
      });
    },
    [initial]
  );

  const handleDragEnd = React.useCallback(() => {
    setDragged(false);
    setInitial(null);
  }, []);

  const handleRelease = React.useCallback(() => {
    setPressed(false);
  }, []);

  useDraggable(dragHandle, {
    onPress: handlePress,
    onDragStart: handleDragStart,
    onDrag: handleDrag,
    onDragEnd: handleDragEnd,
    onRelease: handleRelease,
  });

  useEffect(() => {
    const initialScrollTimeout = setTimeout(() => {
      const intervalId = setInterval(() => {
        if (preRef.current) {
          preRef.current.scrollTo({
            top: preRef.current.scrollHeight,
            behavior: "smooth",
          });
        }
      }, 2000);
      return () => {
        clearInterval(intervalId);
      };
    }, 7000);

    return () => {
      clearTimeout(initialScrollTimeout);
    };
  }, [children]);

  return (
    <div
      style={{
        position: "absolute",
        left: position.x,
        top: position.y,
        userSelect: "none",
      }}
      className={cn(
        "z-0 h-[500px] w-full max-w-lg rounded-xl border border-border bg-background",
        className
      )}
    >
      <div
        ref={dragHandle}
        className="flex flex-col gap-y-2 border-b border-border p-4 cursor-pointer"
      >
        <div className="flex flex-row gap-x-2">
          <div
            className="h-3 w-3 rounded-full bg-red-500 cursor-pointer"
            onClick={() => setTerminalOpen && setTerminalOpen(!isTerminalOpen)}
          ></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500 cursor-pointer"></div>
          <div className="h-3 w-3 rounded-full bg-green-500 cursor-pointer"></div>
        </div>
      </div>
      <pre ref={preRef} className="p-4 h-[450px] overflow-y-auto scroll-smooth">
        <code className="grid gap-y-1 pl-3">{children}</code>
      </pre>
    </div>
  );
};
