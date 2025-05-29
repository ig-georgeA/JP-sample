import { IgrAvatar, IgrAvatarModule, IgrCard, IgrCardHeader, IgrCardModule } from 'igniteui-react';
import styles from './ig-view4.module.css';
import createClassTransformer from '../../style-utils';
import '/src/app/base-view-styles.css';

IgrAvatarModule.register();
IgrCardModule.register();

export default function IgView4() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();

  return (
    <>
      <div className={classes("row-layout container")}>
        <div className={classes("column-layout group")}>
          <div className={classes("row-layout group_1")}>
            <IgrCard elevated={true} className={classes("card")}>
              <IgrCardHeader key={uuid()}>
                <div slot="thumbnail" key={uuid()}>
                  <IgrAvatar shape="circle" className={classes("avatar")} key={uuid()}>
                    <span className={classes("material-icons")} key={uuid()}>
                      <span key={uuid()}>calendar_month</span>
                    </span>
                  </IgrAvatar>
                </div>
                <h3 slot="title" key={uuid()}>
                  <span key={uuid()}>販促計画</span>
                </h3>
                <h5 slot="subtitle" key={uuid()}>
                  <span key={uuid()}></span>
                </h5>
              </IgrCardHeader>
            </IgrCard>
          </div>
        </div>
      </div>
    </>
  );
}
