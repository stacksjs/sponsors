import { defineConfig, tierPresets } from "sponsorkit";

export default defineConfig({
  // Providers configs
  github: {
    login: "chrisbbreuer",
    type: "user",
  },

  // Rendering configs
  width: 800,
  renderer: "tiers", // or 'circles'
  formats: ["json", "svg", "png", "webp"],
  tiers: [
    // Past sponsors, currently only supports GitHub
    {
      title: "Past Sponsors",
      monthlyDollars: -1,
      preset: tierPresets.xs,
    },

    // Default tier
    {
      title: "Backers",
      preset: tierPresets.base,
    },

    {
      title: "Sponsors",
      monthlyDollars: 50,
      preset: tierPresets.medium,
    },

    {
      title: "Silver Sponsors",
      monthlyDollars: 100,
      preset: tierPresets.large,
    },

    {
      title: "Gold Sponsors",
      monthlyDollars: 250,
      preset: tierPresets.xl,
    },

    {
      title: "Platinum Sponsors",
      monthlyDollars: 1000,
      preset: tierPresets.xl,
    },

    {
      title: "Diamond Sponsors",
      monthlyDollars: 2500,
      preset: tierPresets.xl,
    },

    {
      title: "Ruby Sponsors",
      monthlyDollars: 5000,
      preset: tierPresets.xl,
    },
  ],
});
