import styles from './movie-complex.module.css';
import createClassTransformer from '../style-utils';

export default function MovieComplex() {
  const classes = createClassTransformer(styles);

  return (
    <>
      <div className={classes("row-layout movie-complex-container")}>
        <div className={classes("column-layout demo-content")}>
          <img src="/src/assets/start-building-dark.svg" className={classes("image")} />
          <h6 className={classes("h6")}>
            <span>Start building!</span>
          </h6>
          <p className={classes("typography__body-2 text")}>
            <span>Remove the "demo-content" container, and add your own content.</span>
          </p>
        </div>
      </div>
    </>
  );
}
