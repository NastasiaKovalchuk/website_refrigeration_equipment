import style from "./About.module.scss";
export const About = () => {
  return (
    <section className={style.about}>
      <div className={style.about__info}>
        <h1 className={style.about__title}>About</h1>
        <p className={style.about__text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
      </div>
      <div className={style.about__card}>
        <div className={style.about__content}>
          <h2 className={style.about__title}>About</h2>
        </div>
      </div>
    </section>
  );
};
