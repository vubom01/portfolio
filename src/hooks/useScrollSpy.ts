import { useEffect, useState } from 'react';

export default function useScrollSpy(): {
  currentVisible: Record<string, boolean>;
  currentSection?: string;
} {
  const [currentSection, setCurrentSection] = useState<string>();
  const [currentVisible, setCurrentVisible] = useState<Record<string, boolean>>(
    {}
  );

  useEffect(() => {
    const itemElements = document.querySelectorAll<HTMLElement>('[data-ss]');
    if (!itemElements.length) return () => {};

    const observerCallback = (entries: any) => {
      const { target, isIntersecting } = entries[0];
      const slug = target.getAttribute('data-ss') as string;

      setCurrentVisible((prev) => ({
        ...prev,
        [slug]: isIntersecting,
      }));

      if (isIntersecting) {
        setCurrentSection(slug);
      }
    };

    const observers: Array<IntersectionObserver> = [];

    itemElements.forEach((item) => {
      const threshold: number = Number(item.dataset.ssMt) || 0;

      const observer = new IntersectionObserver(observerCallback, {
        rootMargin: `-${threshold}px 0px 0px 0px`,
      });

      observers.push(observer);
      observer.observe(item);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect);
    };
  }, []);

  return {
    currentSection,
    currentVisible,
  };
}
