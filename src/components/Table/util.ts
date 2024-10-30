export function formatTransactionDate(unixTimestamp: number) {
  const date = new Date(unixTimestamp * 1000);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
