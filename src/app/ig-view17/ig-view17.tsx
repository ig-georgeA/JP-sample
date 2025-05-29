import { IgrAvatar, IgrAvatarModule, IgrButton, IgrButtonModule, IgrCard, IgrCardActions, IgrCardHeader, IgrCardModule, IgrDialog, IgrDialogModule, IgrIconButton, IgrIconButtonModule, IgrList, IgrListItem, IgrListModule, IgrRipple, IgrRippleModule, IgrSnackbar, IgrSnackbarModule, IgrSwitch, IgrSwitchModule } from 'igniteui-react';
import { RvRevealView } from 'reveal-sdk-wrappers-react';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { RevealViewOptions } from 'reveal-sdk-wrappers';
import styles from './ig-view17.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

IgrAvatarModule.register();
IgrButtonModule.register();
IgrCardModule.register();
IgrDialogModule.register();
IgrIconButtonModule.register();
IgrListModule.register();
IgrRippleModule.register();
IgrSnackbarModule.register();
IgrSwitchModule.register();

export default function IgView17() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const navigate = useNavigate();
  const dialog = useRef<IgrDialog>(null);
  const snackbar = useRef<IgrSnackbar>(null);
  $.ig.RevealSdkSettings.setBaseUrl('https://samples.revealbi.io/upmedia-backend/reveal-api/');

  const dashboardOptions: RevealViewOptions = {
    visualizations: {
      menu: {
        copy: false,
        duplicate: false
      }
    }
  };

  return (
    <>
      <div className={classes("row-layout container")}>
        <div className={classes("column-layout group")}>
          <IgrButton type="button" onClick={() => navigate(`/ig-view17`)} className={classes("button")}>
            <span key={uuid()}>Button</span>
            <IgrRipple key={uuid()}></IgrRipple>
          </IgrButton>
          <IgrCard className={classes("card")}>
            <IgrCardHeader key={uuid()}>
              <h3 slot="title" key={uuid()}>
                <span key={uuid()}>Title goes here...</span>
              </h3>
              <h5 slot="subtitle" key={uuid()}>
                <span key={uuid()}>Subtitle goes here...</span>
              </h5>
            </IgrCardHeader>
            <IgrCardActions className={classes("actions-content")} key={uuid()}>
              <div style={{display: 'contents'}} slot="start" key={uuid()}>
                <IgrButton variant="flat" type="button" className={classes("button")}>
                  <span key={uuid()}>Button</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
              </div>
              <div slot="end" key={uuid()}>
                <IgrIconButton variant="flat" key={uuid()}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>favorite</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrIconButton>
                <IgrIconButton variant="flat" key={uuid()}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>bookmark</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrIconButton>
                <IgrIconButton variant="flat" key={uuid()}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>share</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrIconButton>
              </div>
            </IgrCardActions>
          </IgrCard>
          <IgrSwitch className={classes("switch")}>
            <span key={uuid()}>Label</span>
          </IgrSwitch>
          <IgrList className={classes("list")}>
            <IgrListItem key={uuid()}>
              <div slot="start" key={uuid()}>
                <IgrAvatar shape="circle" className={classes("avatar")} key={uuid()}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>person</span>
                  </span>
                </IgrAvatar>
              </div>
              <div slot="title" key={uuid()}>Title goes here</div>
              <div slot="subtitle" key={uuid()}>Subtitle...</div>
              <div key={uuid()}>
                <div className={classes("group_1")} key={uuid()}>
                  <RvRevealView dashboard="Sales" options={dashboardOptions}></RvRevealView>
                </div>
              </div>
              <span slot="end" className={classes("material-icons icon")} key={uuid()}>
                <span key={uuid()}>star</span>
              </span>
            </IgrListItem>
          </IgrList>
          <IgrDialog closeOnOutsideClick={true} ref={dialog}>
            <h5 slot="title" key={uuid()}>
              <span>Confirmation</span>
            </h5>
            <p key={uuid()}>Are you sure you want to do this?</p>
            <div slot="footer" key={uuid()}>
              <IgrButton variant="flat" onClick={() => dialog?.current?.toggle()} key={uuid()}>
                <span key={uuid()}>Cancel</span>
                <IgrRipple key={uuid()}></IgrRipple>
              </IgrButton>
              <IgrButton variant="flat" onClick={() => dialog?.current?.toggle()} key={uuid()}>
                <span key={uuid()}>OK</span>
                <IgrRipple key={uuid()}></IgrRipple>
              </IgrButton>
            </div>
          </IgrDialog>
        </div>
        <div className={classes("column-layout group_2")}>
          <IgrSnackbar actionText="Action" action={() => snackbar?.current?.toggle()} ref={snackbar} className={classes("snackbar")}>
            <span key={uuid()}>This is a message</span>
          </IgrSnackbar>
          <IgrCard className={classes("card")}>
            <IgrCardHeader key={uuid()}>
              <h3 slot="title" key={uuid()}>
                <span key={uuid()}>Title goes here...</span>
              </h3>
              <h5 slot="subtitle" key={uuid()}>
                <span key={uuid()}>Subtitle goes here...</span>
              </h5>
            </IgrCardHeader>
            <IgrCardActions className={classes("actions-content")} key={uuid()}>
              <div style={{display: 'contents'}} slot="start" key={uuid()}>
                <IgrButton variant="flat" type="button" className={classes("button")}>
                  <span key={uuid()}>Button</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
              </div>
              <div slot="end" key={uuid()}>
                <IgrIconButton variant="flat" key={uuid()}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>favorite</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrIconButton>
                <IgrIconButton variant="flat" key={uuid()}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>bookmark</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrIconButton>
                <IgrIconButton variant="flat" key={uuid()}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>share</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrIconButton>
              </div>
            </IgrCardActions>
          </IgrCard>
          <p className={classes("typography__body-1 content")}>
            <span>Body 1</span>
          </p>
          <p className={classes("typography__body-2 content")}>
            <span>Body 2</span>
          </p>
          <p className={classes("typography__caption content")}>
            <span>caption</span>
          </p>
          <p className={classes("typography__overline content")}>
            <span>overlaine</span>
          </p>
          <h1 className={classes("content")}>
            <span>Heading</span>
          </h1>
          <h2 className={classes("content")}>
            <span>Heading</span>
          </h2>
          <h3 className={classes("content")}>
            <span>Heading</span>
          </h3>
          <h4 className={classes("content")}>
            <span>Heading</span>
          </h4>
          <h5 className={classes("content")}>
            <span>Heading</span>
          </h5>
        </div>
      </div>
    </>
  );
}
