export const siteVisitIncrement = async () => {
  let date = new Date().toISOString().split("T")[0]; // Get current date in YYYY-MM-DD format
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/analytics/site-visits`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date,
        }),
      },
    );
    return response.json();
  } catch (error: any) {
    throw new Error(error.message || "Failed to increment site visit");
  }
};
