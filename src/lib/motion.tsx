"use client";

import { useRef, useEffect, ElementType, ReactNode, CSSProperties } from "react";

type MotionProps = {
  as?: ElementType;
  children: ReactNode;
  initial?: Partial<StyleTransform>;
  animate?: Partial<StyleTransform>;
  whileInView?: Partial<StyleTransform>;
  viewport?: {
    once?: boolean;
    threshold?: number;
  };
  transition?: {
    duration?: number;
    delay?: number;
  };
  className?: string;
  style?: CSSProperties;
};

type StyleTransform = {
  opacity?: number;
  x?: number;
  y?: number;
  scale?: number;
};

export const Motion = ({
  as: Tag = "div",
  children,
  initial,
  animate,
  whileInView,
  viewport,
  transition,
  className = "",
  style = {},
}: MotionProps) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const element = ref.current as HTMLElement;

    if (initial) {
      if (initial.opacity !== undefined) element.style.opacity = String(initial.opacity);
      if (initial.y !== undefined) element.style.transform = `translateY(${initial.y}px)`;
      if (initial.x !== undefined) element.style.transform = `translateX(${initial.x}px)`;
      if (initial.scale !== undefined) element.style.transform = `scale(${initial.scale})`;
    }

    const timeoutId = setTimeout(() => {
      if (animate) {
        element.style.transition = `all ${transition?.duration || 0.3}s ease-in-out`;
        if (animate.opacity !== undefined) element.style.opacity = String(animate.opacity);
        if (animate.y !== undefined) element.style.transform = `translateY(${animate.y}px)`;
        if (animate.x !== undefined) element.style.transform = `translateX(${animate.x}px)`;
        if (animate.scale !== undefined) element.style.transform = `scale(${animate.scale})`;
      }
    }, (transition?.delay || 0) * 1000);

    return () => clearTimeout(timeoutId);
  }, [initial, animate, transition]);

  useEffect(() => {
    if (!ref.current || !whileInView) return;
    const element = ref.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.style.transition = `all ${transition?.duration || 0.3}s ease-in-out`;
            if (whileInView.opacity !== undefined) element.style.opacity = String(whileInView.opacity);
            if (whileInView.y !== undefined) element.style.transform = `translateY(${whileInView.y}px)`;
            if (whileInView.x !== undefined) element.style.transform = `translateX(${whileInView.x}px)`;
            if (whileInView.scale !== undefined) element.style.transform = `scale(${whileInView.scale})`;

            if (viewport?.once) observer.disconnect();
          }
        });
      },
      { threshold: viewport?.threshold || 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [whileInView, viewport, transition]);

  return (
    <Tag ref={ref} className={className} style={style}>
      {children}
    </Tag>
  );
};
