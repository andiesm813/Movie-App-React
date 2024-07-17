import { IgrAvatar, IgrAvatarModule, IgrButton, IgrButtonModule, IgrCard, IgrCardActions, IgrCardContent, IgrCardHeader, IgrCardMedia, IgrCardModule, IgrIconButton, IgrIconButtonModule, IgrList, IgrListItem, IgrListModule, IgrRipple, IgrRippleModule, IgrSelect, IgrSelectItem, IgrSelectModule, IgrTab, IgrTabPanel, IgrTabs, IgrTabsModule } from '@infragistics/igniteui-react';
import { IgrDatePicker, IgrDatePickerModule } from '@infragistics/igniteui-react-inputs';
import { useState } from 'react';
import { useGetMovieListList, useGetNowPlayingList, useGetShowtimesList, useGetTheatresList, useGetTheatresNearYouList } from '../hooks/movie-app-data-hooks';
import styles from './movies.module.css';
import createClassTransformer from '../style-utils';

IgrAvatarModule.register();
IgrButtonModule.register();
IgrCardModule.register();
IgrDatePickerModule.register();
IgrIconButtonModule.register();
IgrListModule.register();
IgrRippleModule.register();
IgrSelectModule.register();
IgrTabsModule.register();

export default function Movies() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const [value, setValue] = useState<string | undefined>('1');
  const { movieAppDataNowPlaying } = useGetNowPlayingList();
  const { movieAppDataMovieList } = useGetMovieListList();
  const { movieAppDataTheatres } = useGetTheatresList();
  const { movieAppDataShowtimes } = useGetShowtimesList();
  const { movieAppDataTheatresNearYou } = useGetTheatresNearYouList();

  return (
    <>
      <div className={classes("row-layout movies-container")}>
        <div className={classes("column-layout group")}>
          <h5 className={classes("content")}>
            <span>Movie Premieres</span>
          </h5>
          <div className={classes("row-layout group_1")}>
            <div className={classes("column-layout group_2")}>
              <div className={classes("column-layout group_3")}>
                <h5 className={classes("h5_1")}>
                  <span>MoviePlex Metropolis</span>
                </h5>
                <IgrButton size="large" className={classes("button button_2")}>
                  <span key={uuid()}>SHOW SCHEDULE</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
              </div>
            </div>
          </div>
          <IgrTabs className={classes("tabs")}>
            <IgrTab selected="true" key={uuid()}>
              <span key={uuid()}>Now Playing</span>
            </IgrTab>
            <IgrTabPanel className={classes("row-layout tab-item-content")} key={uuid()}>
              {movieAppDataNowPlaying?.map((item) => (
                <IgrCard elevated="true" className={classes("card")} key={uuid()}>
                  <IgrCardMedia className={classes("media-content")} key={uuid()}>
                    <img src={item.MoviePoster} className={classes("image")} key={uuid()} />
                  </IgrCardMedia>
                  <IgrCardHeader key={uuid()}>
                    <h3 slot="title" key={uuid()}>
                      <span key={uuid()}>{item.Name}</span>
                    </h3>
                    <h5 slot="subtitle" key={uuid()}>
                      <span key={uuid()}>{item.Genre}</span>
                    </h5>
                  </IgrCardHeader>
                  <IgrCardContent className={classes("body-content")} key={uuid()}>
                    <p className={classes("typography__body-1 content")} key={uuid()}>
                      <span>{item.Description}</span>
                    </p>
                  </IgrCardContent>
                  <IgrCardActions className={classes("actions-content")} key={uuid()}>
                    <div style={{display: 'contents'}} slot="start" key={uuid()}>
                      <IgrButton variant="flat" size="large" className={classes("button button_3")}>
                        <span key={uuid()}>More</span>
                        <IgrRipple key={uuid()}></IgrRipple>
                      </IgrButton>
                    </div>
                    <div style={{display: 'contents'}} slot="end" key={uuid()}>
                      <IgrIconButton variant="flat" className={classes("icon-button")}>
                        <span className={classes("material-icons icon")} key={uuid()}>
                          <span key={uuid()}>favorite</span>
                        </span>
                        <IgrRipple key={uuid()}></IgrRipple>
                      </IgrIconButton>
                    </div>
                    <div style={{display: 'contents'}} slot="end" key={uuid()}>
                      <IgrIconButton variant="flat" className={classes("icon-button")}>
                        <span className={classes("material-icons icon")} key={uuid()}>
                          <span key={uuid()}>bookmark</span>
                        </span>
                        <IgrRipple key={uuid()}></IgrRipple>
                      </IgrIconButton>
                    </div>
                    <div style={{display: 'contents'}} slot="end" key={uuid()}>
                      <IgrIconButton variant="flat" className={classes("icon-button")}>
                        <span className={classes("material-icons icon")} key={uuid()}>
                          <span key={uuid()}>share</span>
                        </span>
                        <IgrRipple key={uuid()}></IgrRipple>
                      </IgrIconButton>
                    </div>
                  </IgrCardActions>
                </IgrCard>
              ))}
            </IgrTabPanel>
            <IgrTab disabled="true" key={uuid()}>
              <span key={uuid()}>Opening This Week</span>
            </IgrTab>
            <IgrTabPanel className={classes("row-layout tab-item-content_1")} key={uuid()}>
              <div className={classes("row-layout demo-content")} key={uuid()}>
                <img src="/src/assets/start-building-dark.svg" className={classes("image_1")} />
                <p className={classes("typography__body-2 text")}>
                  <span>Remove the "demo-content" container, and add your own content.</span>
                </p>
              </div>
            </IgrTabPanel>
            <IgrTab disabled="true" key={uuid()}>
              <span key={uuid()}>Coming Soon</span>
            </IgrTab>
            <IgrTabPanel className={classes("row-layout tab-item-content_1")} key={uuid()}>
              <div className={classes("row-layout demo-content")} key={uuid()}>
                <img src="/src/assets/start-building-dark.svg" className={classes("image_1")} />
                <p className={classes("typography__body-2 text")}>
                  <span>Remove the "demo-content" container, and add your own content.</span>
                </p>
              </div>
            </IgrTabPanel>
          </IgrTabs>
        </div>
        <div className={classes("column-layout group_4")}>
          <div className={classes("column-layout buy-tickets")}>
            <p className={classes("typography__subtitle-2 title")}>
              <span>BUY TICKETS</span>
            </p>
            <IgrSelect outlined="false" label="Pick a Movie" placeholder="Select Movie Title" value={value} change={(_c, e) => setValue(e.detail.value)} className={classes("select")}>
              <span slot="prefix" key={uuid()}>
                <span className={classes("material-icons icon_1")} key={uuid()}>
                  <span key={uuid()}>movie</span>
                </span>
              </span>
              {movieAppDataMovieList?.map((item) => (
                <IgrSelectItem value="1" key={uuid()}>
                  <span key={uuid()}>{item.Name}</span>
                </IgrSelectItem>
              ))}
            </IgrSelect>
            <IgrSelect outlined="false" label="Theatres" placeholder="Select a Movie Complex" value={value} change={(_c, e) => setValue(e.detail.value)} className={classes("select")}>
              <span slot="prefix" key={uuid()}>
                <span className={classes("material-icons icon_1")} key={uuid()}>
                  <span key={uuid()}>location_on</span>
                </span>
              </span>
              {movieAppDataTheatres?.map((item) => (
                <IgrSelectItem value="1" key={uuid()}>
                  <span key={uuid()}>{item.Theatres}</span>
                </IgrSelectItem>
              ))}
            </IgrSelect>
            <div className={classes("group_5")}>
              <IgrDatePicker label="Date"></IgrDatePicker>
            </div>
            <IgrSelect outlined="false" label="Show Time" value={value} change={(_c, e) => setValue(e.detail.value)} className={classes("select_1")}>
              <span slot="prefix" key={uuid()}>
                <span className={classes("material-icons icon_1")} key={uuid()}>
                  <span key={uuid()}>access_time</span>
                </span>
              </span>
              {movieAppDataShowtimes?.map((item) => (
                <IgrSelectItem value="1" key={uuid()}>
                  <span key={uuid()}>{item.Showtimes}</span>
                </IgrSelectItem>
              ))}
            </IgrSelect>
            <IgrButton size="large" className={classes("button button_4")}>
              <span key={uuid()}>GET TICKETS NOW</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
          </div>
          <div className={classes("column-layout theatres-near-you")}>
            <p className={classes("typography__subtitle-2 text_1")}>
              <span>THEATRES NEAR YOU</span>
            </p>
            <IgrList className={classes("list")}>
              {movieAppDataTheatresNearYou?.map((item) => (
                <IgrListItem key={uuid()}>
                  <div style={{display: 'contents'}} slot="start" key={uuid()}>
                    <IgrAvatar initials={item.Initials} shape="circle" className={classes("avatar")}></IgrAvatar>
                  </div>
                  <div slot="title" key={uuid()}>{item.Theatre}</div>
                  <div slot="subtitle" key={uuid()}>{item.Address}</div>
                </IgrListItem>
              ))}
            </IgrList>
            <IgrButton size="large" className={classes("button_1 button_1_1")}>
              <span key={uuid()}>Change Location</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
          </div>
        </div>
      </div>
    </>
  );
}
