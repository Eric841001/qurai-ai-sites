import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://qurai.ai";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/#platform`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/#usecases`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/#architecture`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/#security`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/#consulting`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];
}
