import githubData from "./githubData";
import leetcodeData from "./leetcodeData";
import dateGenerator from "./dateGenerator";

export default async function combineData() {
    const allDates = dateGenerator(new Date('2024-10-30'), new Date());
      const [githubDataRes, leetcodeDataRes] = await Promise.all([
        githubData(),
        leetcodeData()
    ]);

    const githubMap = new Map(githubDataRes.map(d => [d.date, d.value]));
    const leetcodeMap = new Map(leetcodeDataRes.map(d => [d.date, d.value]));
    
    return allDates.map((date) => {
        const github = githubMap.get(date) ?? 0;
        const leetcode = leetcodeMap.get(date) ?? 0;

        return {
            date,
            github,
            leetcode,
            total: Number(github) + Number(leetcode)
        };
    })
}