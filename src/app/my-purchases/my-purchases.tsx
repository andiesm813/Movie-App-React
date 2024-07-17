import { IgrButton, IgrButtonModule, IgrList, IgrListItem, IgrListModule, IgrRipple, IgrRippleModule } from '@infragistics/igniteui-react';
import { useGetMyPurchasesList } from '../hooks/movie-app-data-hooks';
import styles from './my-purchases.module.css';
import createClassTransformer from '../style-utils';

IgrButtonModule.register();
IgrListModule.register();
IgrRippleModule.register();

export default function MyPurchases() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const { movieAppDataMyPurchases } = useGetMyPurchasesList();

  return (
    <>
      <div className={classes("row-layout my-purchases-container")}>
        <div className={classes("column-layout group")}>
          <h4 className={classes("h4")}>
            <span>My Purchases</span>
          </h4>
          <IgrList className={classes("list")}>
            {movieAppDataMyPurchases?.map((item) => (
              <IgrListItem key={uuid()}>
                <div key={uuid()}>
                  <div className={classes("row-layout group_1")} key={uuid()}>
                    <img src={item.MoviePoster} className={classes("image")} />
                    <div className={classes("row-layout group_2")}>
                      <div className={classes("row-layout group_3")}>
                        <div className={classes("column-layout group_4")}>
                          <h6 className={classes("h6")}>
                            <span>{item.Name}</span>
                          </h6>
                          <a href="" className={classes("typography__body-2 hyperlink")}>
                            <span>{item.Theatre}</span>
                          </a>
                        </div>
                        <div className={classes("column-layout group_5")}>
                          <p className={classes("typography__body-2 text")}>
                            <span>Purchased</span>
                          </p>
                          <p className={classes("typography__body-2 text_1")}>
                            <span>{item.Purchased}</span>
                          </p>
                        </div>
                      </div>
                      <IgrButton size="large" className={classes("button")}>
                        <span className={classes("material-icons")} key={uuid()}>
                          <span key={uuid()}>cloud_download</span>
                        </span>
                        <span key={uuid()}>Get Tickets</span>
                        <IgrRipple key={uuid()}></IgrRipple>
                      </IgrButton>
                    </div>
                  </div>
                </div>
              </IgrListItem>
            ))}
          </IgrList>
        </div>
      </div>
    </>
  );
}
