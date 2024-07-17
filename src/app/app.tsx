import { IgrAvatar, IgrAvatarModule, IgrDropdown, IgrDropdownItem, IgrDropdownItemModule, IgrDropdownModule, IgrIconButton, IgrIconButtonModule, IgrNavDrawer, IgrNavDrawerItem, IgrNavDrawerModule, IgrRipple, IgrRippleModule } from '@infragistics/igniteui-react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import styles from './app.module.css';
import createClassTransformer from './style-utils';

IgrAvatarModule.register();
IgrDropdownItemModule.register();
IgrDropdownModule.register();
IgrIconButtonModule.register();
IgrNavDrawerModule.register();
IgrRippleModule.register();

export default function App() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const navigate = useNavigate();
  const navDrawer = useRef<IgrNavDrawer>(null);
  const dropdown = useRef<IgrDropdown>(null);

  return (
    <>
      <div className={classes("row-layout movie-app-container")}>
        <IgrNavDrawer position="relative" ref={navDrawer} className={classes("nav-drawer")}>
          <div style={{display: 'contents'}} onClick={() => navigate(`/movies`)} key={uuid()}>
            <IgrNavDrawerItem>
              <span slot="icon" key={uuid()}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>movie</span>
                </span>
                <IgrRipple key={uuid()}></IgrRipple>
              </span>
              <div slot="content" key={uuid()}>Movies</div>
            </IgrNavDrawerItem>
          </div>
          <div style={{display: 'contents'}} onClick={() => navigate(`/movie-complex`)} key={uuid()}>
            <IgrNavDrawerItem>
              <span slot="icon" key={uuid()}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>location_on</span>
                </span>
                <IgrRipple key={uuid()}></IgrRipple>
              </span>
              <div slot="content" key={uuid()}>Theatres</div>
            </IgrNavDrawerItem>
          </div>
          <div style={{display: 'contents'}} onClick={() => navigate(`/my-purchases`)} key={uuid()}>
            <IgrNavDrawerItem>
              <span slot="icon" key={uuid()}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>shopping_cart</span>
                </span>
                <IgrRipple key={uuid()}></IgrRipple>
              </span>
              <div slot="content" key={uuid()}>My Purchases</div>
            </IgrNavDrawerItem>
          </div>
          <IgrNavDrawerItem key={uuid()}>
            <span slot="icon" key={uuid()}>
              <span className={classes("material-icons icon")} key={uuid()}>
                <span key={uuid()}>local_offer</span>
              </span>
              <IgrRipple key={uuid()}></IgrRipple>
            </span>
            <div slot="content" key={uuid()}>Promos</div>
          </IgrNavDrawerItem>
          <IgrNavDrawerItem key={uuid()}>
            <span slot="icon" key={uuid()}>
              <span className={classes("material-icons icon")} key={uuid()}>
                <span key={uuid()}>help</span>
              </span>
              <IgrRipple key={uuid()}></IgrRipple>
            </span>
            <div slot="content" key={uuid()}>Help &amp; Support</div>
          </IgrNavDrawerItem>
          <IgrNavDrawerItem key={uuid()}>
            <span slot="icon" key={uuid()}>
              <span className={classes("material-icons icon")} key={uuid()}>
                <span key={uuid()}>chat_bubble</span>
              </span>
              <IgrRipple key={uuid()}></IgrRipple>
            </span>
            <div slot="content" key={uuid()}>Contact Us</div>
          </IgrNavDrawerItem>
        </IgrNavDrawer>
        <div className={classes("column-layout group")}>
          <div className={classes("row-layout header")}>
            <div className={classes("row-layout group_1")}>
              <IgrIconButton variant="flat" clicked={() => navDrawer?.current?.toggle()} className={classes("icon-button")}>
                <span className={classes("material-icons icon_1")} key={uuid()}>
                  <span key={uuid()}>menu</span>
                </span>
                <IgrRipple key={uuid()}></IgrRipple>
              </IgrIconButton>
              <p className={classes("typography__subtitle-1 text")}>
                <span>MOVIE APP</span>
              </p>
            </div>
            <div className={classes("row-layout group_2")}>
              <IgrIconButton variant="flat" className={classes("icon-button_1")}>
                <span className={classes("material-icons icon_1")} key={uuid()}>
                  <span key={uuid()}>search</span>
                </span>
                <IgrRipple key={uuid()}></IgrRipple>
              </IgrIconButton>
              <IgrIconButton variant="flat" className={classes("icon-button_1")}>
                <span className={classes("material-icons icon_1")} key={uuid()}>
                  <span key={uuid()}>favorite</span>
                </span>
                <IgrRipple key={uuid()}></IgrRipple>
              </IgrIconButton>
              <div style={{display: 'contents'}} onClick={(e: any) => dropdown?.current?.toggleTarget(e.target || e.i.nativeElement)}>
                <IgrAvatar src="https://d3cg6cexo8t5ug.cloudfront.net/avatars/avatar8.png" shape="circle" className={classes("avatar")}></IgrAvatar>
              </div>
              <IgrDropdown ref={dropdown} className={classes("dropdown")}>
                <IgrDropdownItem key={uuid()}>
                  <span key={uuid()}>My Profile</span>
                </IgrDropdownItem>
                <IgrDropdownItem key={uuid()}>
                  <span key={uuid()}>Logout</span>
                </IgrDropdownItem>
              </IgrDropdown>
            </div>
          </div>
          <div className={classes("view-container")}>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  );
}
