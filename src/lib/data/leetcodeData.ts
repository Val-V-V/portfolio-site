const leetUrl = process.env.LEETCODE_API_URL

export default async function leetcodeData() {
  const res = await fetch(`${leetUrl}`, {
    next: { revalidate: 86400 },
  });

  const json = await res.json();

  const jsonParse = JSON.parse(json.submissionCalendar)

  const results = Object.entries(jsonParse)
    .map(([timestamp, submissions]) => {
      const ts = parseInt(timestamp);

      if (isNaN(ts)) return null;

      const date = new Date(ts * 1000);
      if (isNaN(date.getTime())) return null;

      const isoDate = date.toISOString().split('T')[0];

      return {
        date: isoDate,
        value: submissions,
      };
    })
    .filter(Boolean); 

  return results;
}
