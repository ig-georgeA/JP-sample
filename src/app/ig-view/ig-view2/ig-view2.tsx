import { IgrAvatar, IgrAvatarModule, IgrCard, IgrCardHeader, IgrCardModule } from 'igniteui-react';
import { useNavigate } from 'react-router-dom';
import styles from './ig-view2.module.css';
import createClassTransformer from '../../style-utils';
import '/src/app/base-view-styles.css';

IgrAvatarModule.register();
IgrCardModule.register();

export default function IgView2() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const navigate = useNavigate();

  return (
    <>
      <div className={classes("row-layout container")}>
        <div className={classes("column-layout group")}>
          <div className={classes("row-layout group_1")}>
            <div style={{display: 'contents'}} onClick={() => navigate(`/ig-view12`)}>
              <IgrCard elevated={true} className={classes("card")}>
                <IgrCardHeader key={uuid()}>
                  <div slot="thumbnail" key={uuid()}>
                    <IgrAvatar shape="circle" className={classes("avatar")} key={uuid()}>
                      <span className={classes("material-icons")} key={uuid()}>
                        <span key={uuid()}>auto_fix_high</span>
                      </span>
                    </IgrAvatar>
                  </div>
                  <h3 slot="title" key={uuid()}>
                    <span key={uuid()}>基本展開場所</span>
                  </h3>
                  <h5 slot="subtitle" key={uuid()}>
                    <span key={uuid()}></span>
                  </h5>
                </IgrCardHeader>
              </IgrCard>
            </div>
            <IgrCard elevated={true} className={classes("card")}>
              <IgrCardHeader key={uuid()}>
                <div slot="thumbnail" key={uuid()}>
                  <IgrAvatar shape="circle" className={classes("avatar_1")} key={uuid()}>
                    <span className={classes("material-icons")} key={uuid()}>
                      <span key={uuid()}>list_alt</span>
                    </span>
                  </IgrAvatar>
                </div>
                <h3 slot="title" key={uuid()}>
                  <span key={uuid()}>店別展開場所</span>
                </h3>
                <h5 slot="subtitle" key={uuid()}>
                  <span key={uuid()}></span>
                </h5>
              </IgrCardHeader>
            </IgrCard>
            <IgrCard elevated={true} className={classes("card")}>
              <IgrCardHeader key={uuid()}>
                <div slot="thumbnail" key={uuid()}>
                  <IgrAvatar shape="circle" className={classes("avatar")} key={uuid()}>
                    <span className={classes("material-icons")} key={uuid()}>
                      <span key={uuid()}>auto_fix_high</span>
                    </span>
                  </IgrAvatar>
                </div>
                <h3 slot="title" key={uuid()}>
                  <span key={uuid()}>基準在庫</span>
                </h3>
                <h5 slot="subtitle" key={uuid()}>
                  <span key={uuid()}></span>
                </h5>
              </IgrCardHeader>
            </IgrCard>
            <IgrCard elevated={true} className={classes("card")}>
              <IgrCardHeader key={uuid()}>
                <div slot="thumbnail" key={uuid()}>
                  <IgrAvatar shape="circle" className={classes("avatar_1")} key={uuid()}>
                    <span className={classes("material-icons")} key={uuid()}>
                      <span key={uuid()}>list_alt</span>
                    </span>
                  </IgrAvatar>
                </div>
                <h3 slot="title" key={uuid()}>
                  <span key={uuid()}>便振り</span>
                </h3>
                <h5 slot="subtitle" key={uuid()}>
                  <span key={uuid()}></span>
                </h5>
              </IgrCardHeader>
            </IgrCard>
            <div style={{display: 'contents'}} onClick={() => navigate(`/ig-view10`)}>
              <IgrCard elevated={true} className={classes("card")}>
                <IgrCardHeader key={uuid()}>
                  <div slot="thumbnail" key={uuid()}>
                    <IgrAvatar shape="circle" className={classes("avatar")} key={uuid()}>
                      <span className={classes("material-icons")} key={uuid()}>
                        <span key={uuid()}>auto_fix_high</span>
                      </span>
                    </IgrAvatar>
                  </div>
                  <h3 slot="title" key={uuid()}>
                    <span key={uuid()}>除外商品</span>
                  </h3>
                  <h5 slot="subtitle" key={uuid()}>
                    <span key={uuid()}></span>
                  </h5>
                </IgrCardHeader>
              </IgrCard>
            </div>
            <IgrCard elevated={true} className={classes("card")}>
              <IgrCardHeader key={uuid()}>
                <div slot="thumbnail" key={uuid()}>
                  <IgrAvatar shape="circle" className={classes("avatar_1")} key={uuid()}>
                    <span className={classes("material-icons")} key={uuid()}>
                      <span key={uuid()}>list_alt</span>
                    </span>
                  </IgrAvatar>
                </div>
                <h3 slot="title" key={uuid()}>
                  <span key={uuid()}>便振り</span>
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
