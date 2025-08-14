import ActivityHeatmap from '@/components/ActivityHeatmap';
import combineData from '@/lib/data/combineData';
import styles from './AboutMe.module.scss';

export default async function Page() {
  // const data = await combineData();

  return (
    <section className={styles.about}>
      <h2>Hi, I’m Valeria!</h2>
      <p>
        I’m a junior developer passionate about automation and efficiency.
        Most of my personal projects start as solutions to problems I face — 
        tools I wish existed.
      </p>
      <p>
        Outside of coding, you’ll probably find me in my favorite place in the 
        world: the gym (or at the bakery next door). I love building apps that make 
        everyday tasks simpler, so I can spend more time on what I truly enjoy — 
        lifting weights and eating good food.
      </p>

      {/* <ActivityHeatmap data={data} /> */}
    </section>
  );
}
