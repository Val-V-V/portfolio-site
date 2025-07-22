const githubToken = process.env.GITHUB_TOKEN

export default async function githubData() {
    const query = `
        query {
            user(login: "Val-V-V") {
                contributionsCollection(from: "2024-10-30T00:00:00Z", to: "${new Date().toISOString()}") {
                    contributionCalendar {
                        weeks {
                            contributionDays {
                            date
                            contributionCount
                            }
                        }
                    }
                }
            }
        }
    `;


    const res = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${githubToken}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ query }),
        next: { revalidate: 3600 },
    })

    const json = await res.json();

    if (!json.data || json.errors) {
        console.error("GitHub API Error:", json.errors);
        throw new Error("Failed to fetch GitHub contributions");
    }

    const days = json.data.user.contributionsCollection.contributionCalendar.weeks
        .flatMap(w => w.contributionDays)

    return days.map(d => ({
        date: (new Date(d.date)).toISOString().split('T')[0],
        value: d.contributionCount
    }))
};