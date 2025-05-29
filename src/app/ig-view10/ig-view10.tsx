import { IgrIconButton, IgrIconButtonModule, IgrNavbar, IgrNavbarModule, IgrNavDrawer, IgrNavDrawerItem, IgrNavDrawerModule, IgrRipple, IgrRippleModule } from 'igniteui-react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import styles from './ig-view10.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

IgrIconButtonModule.register();
IgrNavbarModule.register();
IgrNavDrawerModule.register();
IgrRippleModule.register();

export default function IgView10() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const navigate = useNavigate();
  const navDrawer = useRef<IgrNavDrawer>(null);

  return (
    <>
      <div className={classes("column-layout container")}>
        <IgrNavbar className={classes("navbar")}>
          <div style={{display: 'contents'}} slot="start" key={uuid()}>
            <IgrIconButton variant="flat" onClick={() => navDrawer?.current?.toggle()} className={classes("icon-button")}>
              <span className={classes("material-icons icon")} key={uuid()}>
                <span key={uuid()}>menu</span>
              </span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrIconButton>
          </div>
          <div className={classes("row-layout group")} key={uuid()}>
            <h6 className={classes("h6")}>
              <span>除外商品登録</span>
            </h6>
          </div>
        </IgrNavbar>
        <div className={classes("row-layout group_1")}>
          <IgrNavDrawer open={true} position="relative" ref={navDrawer} className={classes("nav-drawer")}>
            <div style={{display: 'contents'}} onClick={() => navigate(`/ig-view/ig-view1`)} key={uuid()}>
              <IgrNavDrawerItem>
                <span slot="icon" key={uuid()}>
                  <span className={classes("material-icons icon_1")} key={uuid()}>
                    <span key={uuid()}>add_shopping_cart</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </span>
                <div slot="content" key={uuid()}>発注</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{display: 'contents'}} onClick={() => navigate(`/ig-view/ig-view2`)} key={uuid()}>
              <IgrNavDrawerItem>
                <span slot="icon" key={uuid()}>
                  <span className={classes("material-icons icon_1")} key={uuid()}>
                    <span key={uuid()}>settings</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </span>
                <div slot="content" key={uuid()}>マスタ</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{display: 'contents'}} onClick={() => navigate(`/ig-view/ig-view3`)} key={uuid()}>
              <IgrNavDrawerItem>
                <span slot="icon" key={uuid()}>
                  <span className={classes("imx-icon imx-calculator icon_1")} key={uuid()}></span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </span>
                <div slot="content" key={uuid()}>予測</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{display: 'contents'}} onClick={() => navigate(`/ig-view/ig-view4`)} key={uuid()}>
              <IgrNavDrawerItem>
                <span slot="icon" key={uuid()}>
                  <span className={classes("material-icons icon_1")} key={uuid()}>
                    <span key={uuid()}>trending_up</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </span>
                <div slot="content" key={uuid()}>販促</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{display: 'contents'}} onClick={() => navigate(`/ig-view/ig-view5`)} key={uuid()}>
              <IgrNavDrawerItem>
                <span slot="icon" key={uuid()}>
                  <span className={classes("material-icons icon_1")} key={uuid()}>
                    <span key={uuid()}>restore</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </span>
                <div slot="content" key={uuid()}>履歴</div>
              </IgrNavDrawerItem>
            </div>
            <IgrNavDrawerItem key={uuid()}>
              <span slot="icon" key={uuid()}>
                <span className={classes("material-icons icon_1")} key={uuid()}>
                  <span key={uuid()}>login</span>
                </span>
                <IgrRipple key={uuid()}></IgrRipple>
              </span>
              <div slot="content" key={uuid()}>ログアウト</div>
            </IgrNavDrawerItem>
          </IgrNavDrawer>
          <div className={classes("view-container")}>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  );
}
