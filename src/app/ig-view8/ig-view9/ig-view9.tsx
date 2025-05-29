import { IgrButton, IgrButtonModule, IgrDialog, IgrDialogModule, IgrInput, IgrInputModule, IgrRipple, IgrRippleModule } from 'igniteui-react';
import { useRef } from 'react';
import styles from './ig-view9.module.css';
import createClassTransformer from '../../style-utils';
import '/src/app/base-view-styles.css';

IgrButtonModule.register();
IgrDialogModule.register();
IgrInputModule.register();
IgrRippleModule.register();

export default function IgView9() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const dialog = useRef<IgrDialog>(null);

  return (
    <>
      <div className={classes("row-layout container")}>
        <IgrButton type="button" onClick={() => dialog?.current?.toggle()} className={classes("button")}>
          <span key={uuid()}>Button</span>
          <IgrRipple key={uuid()}></IgrRipple>
        </IgrButton>
        <IgrDialog closeOnOutsideClick={true} ref={dialog}>
          <h5 slot="title" key={uuid()}>
            <span>詳細</span>
          </h5>
          <div className={classes("column-layout group")} key={uuid()}>
            <form className={classes("column-layout form")}>
              <div className={classes("row-layout group_1")}>
                <div className={classes("row-layout group_2")}>
                  <p className={classes("typography__body-1 text")}>
                    <span>日付</span>
                  </p>
                </div>
                <IgrInput placeholder="2020/01/01" outlined={true} className={classes("input")}></IgrInput>
              </div>
              <div className={classes("row-layout group_3")}>
                <div className={classes("row-layout group_2")}>
                  <p className={classes("typography__body-1 text")}>
                    <span>中分類</span>
                  </p>
                </div>
                <IgrInput placeholder="1111" outlined={true} className={classes("input_1")}></IgrInput>
                <IgrInput placeholder="ヨーグルト" outlined={true} className={classes("input_1")}></IgrInput>
              </div>
              <div className={classes("row-layout group_1")}>
                <div className={classes("row-layout group_2")}>
                  <p className={classes("typography__body-1 text")}>
                    <span>修正前中分類予測数</span>
                  </p>
                </div>
                <IgrInput placeholder="000" outlined={true} className={classes("input")}></IgrInput>
              </div>
              <div className={classes("row-layout group_1")}>
                <div className={classes("row-layout group_2")}>
                  <p className={classes("typography__body-1 text")}>
                    <span>修正前中分類予測数</span>
                  </p>
                </div>
                <IgrInput placeholder="000" outlined={true} className={classes("input")}></IgrInput>
              </div>
              <div className={classes("row-layout group_1")}>
                <div className={classes("row-layout group_2")}>
                  <p className={classes("typography__body-1 text")}>
                    <span>学習除外</span>
                  </p>
                </div>
                <IgrInput placeholder="あり" outlined={true} className={classes("input")}></IgrInput>
              </div>
              <div className={classes("row-layout group_1")}>
                <div className={classes("row-layout group_2")}>
                  <p className={classes("typography__body-1 text")}>
                    <span>発注停止</span>
                  </p>
                </div>
                <IgrInput placeholder="あり" outlined={true} className={classes("input")}></IgrInput>
              </div>
              <div className={classes("row-layout group_1")}>
                <div className={classes("row-layout group_2")}>
                  <p className={classes("typography__body-1 text")}>
                    <span>最終予測日</span>
                  </p>
                </div>
                <IgrInput placeholder="2020/01/01" outlined={true} className={classes("input")}></IgrInput>
              </div>
              <IgrButton type="submit" onClick={() => dialog?.current?.toggle()} className={classes("button_1 button_1_1")}>
                <span key={uuid()}>閉じる</span>
                <IgrRipple key={uuid()}></IgrRipple>
              </IgrButton>
            </form>
          </div>
          <div slot="footer" key={uuid()}>
            <IgrButton variant="flat" type="button" className={classes("button_2")} key={uuid()}>
              <span key={uuid()}>Button</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
          </div>
        </IgrDialog>
      </div>
    </>
  );
}
