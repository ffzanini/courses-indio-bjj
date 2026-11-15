"use client";

import { useMessages } from "next-intl";

import type drills from "@/content/courses/pt/drills.json";
import type escapes from "@/content/courses/pt/escapes.json";
import type guardpassing from "@/content/courses/pt/guardpassing.json";
import type halfguard from "@/content/courses/pt/halfguard.json";
import type nogi from "@/content/courses/pt/nogi.json";
import type openguard from "@/content/courses/pt/openguard.json";
import type professor from "@/content/courses/pt/professor.json";

export type CourseMessages = {
  halfguard: typeof halfguard;
  drills: typeof drills;
  nogi: typeof nogi;
  openguard: typeof openguard;
  guardpassing: typeof guardpassing;
  escapes: typeof escapes;
  professor: typeof professor;
  common: {
    nav: Record<string, string>;
    otherCourses: { title: string; subtitle: string };
    buttons: { learnMore: string };
    credibility: string;
  };
};

export function useCourseCopy() {
  const translations = useMessages() as CourseMessages;
  return { translations };
}
