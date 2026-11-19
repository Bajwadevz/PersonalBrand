export const agencyEmail = "shahzo@bajwaa.dev";
export const teamSizes = ["Just me", "2–10", "11–50", "51–200", "201+"] as const;
export const campaignKeys = ["utm_source", "utm_medium", "utm_campaign"] as const;

export function campaignValue(value: unknown): string {
  return typeof value === "string" && /^[a-z0-9 _.-]{1,100}$/i.test(value) ? value : "";
}
