import { IgrButton, IgrButtonModule, IgrDateTimeInput, IgrDateTimeInputModule, IgrInput, IgrInputModule, IgrRipple, IgrRippleModule, IgrSelect, IgrSelectItem, IgrSelectModule } from 'igniteui-react';
import styles from './ig-view13.module.css';
import createClassTransformer from '../../style-utils';
import '/src/app/base-view-styles.css';

IgrButtonModule.register();
IgrDateTimeInputModule.register();
IgrInputModule.register();
IgrRippleModule.register();
IgrSelectModule.register();

export default function IgView13() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();

  return (
    <>
      <div className={classes("row-layout container")}>
        <form className={classes("column-layout form")}>
          <h5 className={classes("h5")}>
            <span>検索条件</span>
          </h5>
          <div className={classes("row-layout group")}>
            <div className={classes("column-layout group_1")}>
              <div className={classes("row-layout group")}>
                <div className={classes("row-layout group_2")}>
                  <p className={classes("typography__body-1 text")}>
                    <span>部門</span>
                  </p>
                </div>
                <IgrInput required outlined={true} className={classes("input")}>
                  <p slot="value-missing" key={uuid()}>This field is required</p>
                </IgrInput>
                <IgrSelect outlined={true} placeholder="部門選択(必須)" required className={classes("select")}>
                  <IgrSelectItem value="Option" key="a45c51ca-a1e2-475d-bd68-d6f618f40afc">
                    <span key={uuid()}>Option</span>
                  </IgrSelectItem>
                </IgrSelect>
              </div>
              <div className={classes("row-layout group")}>
                <div className={classes("row-layout group_2")}>
                  <p className={classes("typography__body-1 text")}>
                    <span>テーマ週</span>
                  </p>
                </div>
                <IgrInput required outlined={true} className={classes("input")}>
                  <p slot="value-missing" key={uuid()}>This field is required</p>
                </IgrInput>
                <IgrSelect outlined={true} placeholder="部門選択(必須)" required className={classes("select")}>
                  <IgrSelectItem value="Option" key="cce2283c-1ac7-4c21-9df2-0784daeef065">
                    <span key={uuid()}>Option</span>
                  </IgrSelectItem>
                </IgrSelect>
              </div>
              <div className={classes("row-layout group_3")}>
                <div className={classes("row-layout group_2")}>
                  <p className={classes("typography__body-1 text")}>
                    <span>特売テーマ</span>
                  </p>
                </div>
                <IgrInput required outlined={true} className={classes("input")}>
                  <p slot="value-missing" key={uuid()}>This field is required</p>
                </IgrInput>
                <div className={classes("row-layout group")}></div>
              </div>
            </div>
            <div className={classes("column-layout group_1")}>
              <div className={classes("row-layout group")}>
                <div className={classes("row-layout group_2")}>
                  <p className={classes("typography__body-1 text")}>
                    <span>AU</span>
                  </p>
                </div>
                <IgrInput outlined={true} className={classes("input")}></IgrInput>
                <IgrSelect outlined={true} placeholder="AU選択" required className={classes("select")}>
                  <IgrSelectItem value="Option" key="078b8641-c285-4744-a0f4-d138d01e262a">
                    <span key={uuid()}>Option</span>
                  </IgrSelectItem>
                </IgrSelect>
              </div>
              <div className={classes("row-layout group")}>
                <div className={classes("row-layout group_2")}>
                  <p className={classes("typography__body-1 text")}>
                    <span>カテゴリ</span>
                  </p>
                </div>
                <IgrInput outlined={true} className={classes("input")}></IgrInput>
                <IgrSelect outlined={true} placeholder="カテゴリ選択" required className={classes("select")}>
                  <IgrSelectItem value="Option" key="556af6c6-6c0c-4d9c-a55f-182a6ed25093">
                    <span key={uuid()}>Option</span>
                  </IgrSelectItem>
                </IgrSelect>
              </div>
              <div className={classes("row-layout group")}>
                <div className={classes("row-layout group_2")}>
                  <p className={classes("typography__body-1 text")}>
                    <span>中分類</span>
                  </p>
                </div>
                <IgrInput outlined={true} className={classes("input")}></IgrInput>
                <IgrSelect outlined={true} placeholder="中分類選択" required className={classes("select")}>
                  <IgrSelectItem value="Option" key="424353c5-429e-45f6-8b41-07b48a6b1e71">
                    <span key={uuid()}>Option</span>
                  </IgrSelectItem>
                </IgrSelect>
              </div>
            </div>
          </div>
          <div className={classes("row-layout group_4")}>
            <div className={classes("row-layout group_5")}>
              <p className={classes("typography__body-1 text")}>
                <span>期間*</span>
              </p>
            </div>
            <IgrDateTimeInput placeholder="必須" required outlined="true" inputFormat="yyyy/MM/dd" displayFormat="shortDate" spinLoop={true} className={classes("date-time-input")}>
              <p slot="value-missing" key={uuid()}>This field is required</p>
            </IgrDateTimeInput>
            <p className={classes("typography__body-1 text_1")}>
              <span>~</span>
            </p>
            <IgrDateTimeInput placeholder="必須" required outlined="true" inputFormat="yyyy/MM/dd" displayFormat="shortDate" spinLoop={true} className={classes("date-time-input_1")}>
              <p slot="value-missing" key={uuid()}>This field is required</p>
            </IgrDateTimeInput>
          </div>
          <div className={classes("row-layout group_6")}>
            <IgrButton type="button" className={classes("button button_1")}>
              <span key={uuid()}>終了</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrButton type="button" className={classes("button button_2")}>
              <span key={uuid()}>取消</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrButton type="button" className={classes("button button_3")}>
              <span key={uuid()}>CSV出力</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrButton type="button" className={classes("button button_4")}>
              <span key={uuid()}>確定</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
          </div>
        </form>
      </div>
    </>
  );
}
