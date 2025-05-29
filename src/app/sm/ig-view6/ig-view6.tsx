import { IgrButton, IgrButtonModule, IgrInput, IgrInputModule, IgrRadio, IgrRadioGroup, IgrRadioGroupModule, IgrRadioModule, IgrRipple, IgrRippleModule, IgrSelect, IgrSelectItem, IgrSelectModule } from 'igniteui-react';
import { useState } from 'react';
import styles from './ig-view6.module.css';
import createClassTransformer from '../../style-utils';
import '/src/app/base-view-styles.css';

IgrButtonModule.register();
IgrInputModule.register();
IgrRadioGroupModule.register();
IgrRadioModule.register();
IgrRippleModule.register();
IgrSelectModule.register();

export default function IgView6() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const [value, setValue] = useState<any | undefined>(1);

  return (
    <>
      <div className={classes("row-layout container")}>
        <form className={classes("column-layout form")}>
          <div className={classes("row-layout group")}>
            <div className={classes("row-layout group_1")}>
              <p className={classes("typography__body-1 text")}>
                <span>検索</span>
              </p>
            </div>
            <IgrRadioGroup alignment="horizontal" value={value} change={(_c, e) => setValue(e.detail.value)} className={classes("radio-group")}>
              <IgrRadio value="1" key="397f8162-add6-4695-9c54-6640817a1865">
                <span key={uuid()}>店舗</span>
              </IgrRadio>
              <IgrRadio value="2" key="d159d333-1e9c-4ffa-bc46-9f24141472c7">
                <span key={uuid()}>店舗グループ</span>
              </IgrRadio>
            </IgrRadioGroup>
          </div>
          <div className={classes("row-layout group")}>
            <div className={classes("row-layout group_1")}>
              <p className={classes("typography__body-1 text")}>
                <span>店舗</span>
              </p>
            </div>
            <IgrSelect outlined={true} placeholder="店舗選択(必須)" required className={classes("select")}>
              <IgrSelectItem value="Option" key="94854a55-2df0-4a87-abbc-62cb61ce9627">
                <span key={uuid()}>Option</span>
              </IgrSelectItem>
            </IgrSelect>
          </div>
          <div className={classes("row-layout group_2")}>
            <div className={classes("row-layout group_3")}>
              <p className={classes("typography__body-1 text")}>
                <span>検索</span>
              </p>
            </div>
            <IgrInput placeholder="必須" required outlined={true} className={classes("input")}>
              <p slot="value-missing" key={uuid()}>This field is required</p>
            </IgrInput>
            <p className={classes("typography__body-1 text_1")}>
              <span>年</span>
            </p>
            <IgrInput placeholder="必須" required outlined={true} className={classes("input")}>
              <p slot="value-missing" key={uuid()}>This field is required</p>
            </IgrInput>
            <p className={classes("typography__body-1 text_2")}>
              <span>月</span>
            </p>
          </div>
          <div className={classes("row-layout group_4")}>
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
