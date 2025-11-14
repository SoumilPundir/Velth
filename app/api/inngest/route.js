import { inngest } from "@/lib/inngest/client";
import { checkBudgetAlerts, generateMonthlyReports, processRecurringTransaction, triggerRecurringTransaction } from "@/lib/inngest/functions";
import { serve } from "inngest/next";

// Create an API that serves functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    checkBudgetAlerts,
    triggerRecurringTransaction,
    processRecurringTransaction,
    generateMonthlyReports
  ],
});