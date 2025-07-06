import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  {name: "Check Budget Alerts "},
  { cron: "0 */6 * * *"},
  async({step}) => {
    const budget = await step.run("fetch-budget", async () => {
        return await db.budget.findMany
    })
  }
);
