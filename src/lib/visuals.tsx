import type { LucideIcon } from "lucide-react";
import {
  Award,
  BookOpen,
  Building2,
  Compass,
  Files,
  Globe2,
  GraduationCap,
  Handshake,
  Landmark,
  Layers,
  Leaf,
  LineChart,
  MapPinned,
  Newspaper,
  Radio,
  Rocket,
  Scale,
  Search,
  Sun,
  Wind,
} from "lucide-react";
import { values } from "@/content/site";

export type PracticeSlug =
  | "corporate-ma-investment"
  | "due-diligence-local-counsel"
  | "land-rights"
  | "startup-investor"
  | "climate-energy"
  | "company-secretarial";

export const practiceVisuals: Record<
  PracticeSlug,
  { Icon: LucideIcon; short: string }
> = {
  "corporate-ma-investment": { Icon: Handshake, short: "Deals" },
  "due-diligence-local-counsel": { Icon: Search, short: "Local counsel" },
  "land-rights": { Icon: Landmark, short: "Land" },
  "startup-investor": { Icon: Rocket, short: "Start-ups" },
  "climate-energy": { Icon: Sun, short: "Climate" },
  "company-secretarial": { Icon: Files, short: "Secretarial" },
};

export function practiceVisual(slug: string) {
  return (
    practiceVisuals[slug as PracticeSlug] ?? {
      Icon: Layers,
      short: "Practice",
    }
  );
}

const valueIcons = {
  Responsiveness: Radio,
  Rigour: Scale,
  "Commercial Understanding": Compass,
  "Local Knowledge": MapPinned,
  "Global Perspective": Globe2,
} as const satisfies Record<(typeof values)[number]["label"], LucideIcon>;

export const valueVisuals = values.map((v) => ({
  ...v,
  Icon: valueIcons[v.label],
}));

export const navVisuals: Record<string, LucideIcon> = {
  "/": Leaf,
  "/about": Building2,
  "/expertise": Layers,
  "/people": BookOpen,
  "/insights": Newspaper,
  "/contact": Handshake,
};

export const insightVisuals: Record<string, LucideIcon> = {
  "Mail & Guardian": Newspaper,
  "Business Daily Africa": LineChart,
  "Power Shift Africa": Wind,
};

export const credentialVisuals: { label: string; Icon: LucideIcon }[] = [
  { label: "LL.M., University of Cape Town", Icon: GraduationCap },
  { label: "ENS / DLA Piper background", Icon: Building2 },
  { label: "Power Shift Africa", Icon: Wind },
  { label: "Katiba Institute litigation credentials", Icon: Landmark },
  { label: "Legal 500 recognition", Icon: Award },
];

export const orbitIcons = [
  practiceVisuals["corporate-ma-investment"].Icon,
  practiceVisuals["due-diligence-local-counsel"].Icon,
  practiceVisuals["land-rights"].Icon,
  practiceVisuals["startup-investor"].Icon,
  practiceVisuals["climate-energy"].Icon,
  practiceVisuals["company-secretarial"].Icon,
] as const;
