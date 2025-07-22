import ActivityHeatmap from '@/components/ActivityHeatmap';
import combineData from '@/lib/data/combineData';

export default async function Page() {
  const data = await combineData();

  return <ActivityHeatmap data={data}/>;
}
