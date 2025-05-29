import { IgrButton, IgrButtonModule, IgrCheckbox, IgrCheckboxModule, IgrRipple, IgrRippleModule } from 'igniteui-react';
import { IgrColumn, IgrGrid, IgrGridModule } from 'igniteui-react-grids';
import { useGetEmployees } from '../../hooks/northwind-hooks';
import 'igniteui-react-grids/grids/combined.js';
import styles from './ig-view11.module.css';
import createClassTransformer from '../../style-utils';
import '/src/app/base-view-styles.css';

IgrButtonModule.register();
IgrCheckboxModule.register();
IgrGridModule.register();
IgrRippleModule.register();

export default function IgView11() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const { northwindEmployees } = useGetEmployees();

  const columnHeaderTemplate = () => {
    return (
      <>
        <IgrCheckbox labelPosition="after" className={classes("checkbox")}></IgrCheckbox>
      </>
    )
  }

  const columnBodyTemplate = () => {
    return (
      <>
        <IgrCheckbox labelPosition="after" className={classes("checkbox")}></IgrCheckbox>
      </>
    )
  }

  const columnInlineEditorTemplate = () => {
    return (
      <>
      </>
    )
  }

  const columnBodyTemplate1 = () => {
    return (
      <>
      </>
    )
  }

  const columnBodyTemplate2 = () => {
    return (
      <>
      </>
    )
  }

  const columnInlineEditorTemplate1 = () => {
    return (
      <>
      </>
    )
  }

  const columnBodyTemplate3 = () => {
    return (
      <>
      </>
    )
  }

  const columnInlineEditorTemplate2 = () => {
    return (
      <>
      </>
    )
  }

  const columnBodyTemplate4 = () => {
    return (
      <>
      </>
    )
  }

  const columnInlineEditorTemplate3 = () => {
    return (
      <>
      </>
    )
  }

  const columnBodyTemplate5 = () => {
    return (
      <>
      </>
    )
  }

  const columnInlineEditorTemplate4 = () => {
    return (
      <>
      </>
    )
  }

  const columnBodyTemplate6 = () => {
    return (
      <>
      </>
    )
  }

  const columnInlineEditorTemplate5 = () => {
    return (
      <>
      </>
    )
  }

  return (
    <>
      <div className={classes("column-layout container")}>
        <div className={classes("row-layout group")}>
          <div className={classes("row-layout group_1")}>
            <p className={classes("typography__body-1 text")}>
              <span>選択個所：0件</span>
            </p>
          </div>
          <div className={classes("row-layout group_2")}>
            <p className={classes("typography__body-1 text")}>
              <span>選択個所：0件</span>
            </p>
            <div className={classes("row-layout group_3")}>
              <div className={classes("row-layout group_4")}>
                <p className={classes("typography__caption text_1")}>
                  <span>&lt;</span>
                </p>
              </div>
              <div className={classes("row-layout group_4")}>
                <p className={classes("typography__caption text_1")}>
                  <span>&gt;</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <IgrGrid data={northwindEmployees} primaryKey="employeeID" allowFiltering={true} filterMode="excelStyleFilter" className={classes("ig-typography ig-scrollbar grid")} key={uuid()}>
          <IgrColumn field="lastName" dataType="string" header="No" width="53px" headerTemplate={columnHeaderTemplate} bodyTemplate={columnBodyTemplate} inlineEditorTemplate={columnInlineEditorTemplate} filterable={false} selectable={false}></IgrColumn>
          <IgrColumn field="employeeID" dataType="number" header="No" width="48px" filterable={false} selectable={false}></IgrColumn>
          <IgrColumn field="firstName" dataType="string" header="中分類" sortable={true} bodyTemplate={columnBodyTemplate1} selectable={false}></IgrColumn>
          <IgrColumn field="title" dataType="string" header="商品" bodyTemplate={columnBodyTemplate2} inlineEditorTemplate={columnInlineEditorTemplate1} filterable={false} selectable={false}></IgrColumn>
          <IgrColumn field="titleOfCourtesy" dataType="string" header="除外種別" bodyTemplate={columnBodyTemplate3} inlineEditorTemplate={columnInlineEditorTemplate2} filterable={false} selectable={false}></IgrColumn>
          <IgrColumn field="birthDate" dataType="date" header="開始日" bodyTemplate={columnBodyTemplate4} inlineEditorTemplate={columnInlineEditorTemplate3} filterable={false} selectable={false}></IgrColumn>
          <IgrColumn field="hireDate" dataType="date" header="終了日" bodyTemplate={columnBodyTemplate5} inlineEditorTemplate={columnInlineEditorTemplate4} filterable={false} selectable={false}></IgrColumn>
          <IgrColumn field="address.street" dataType="string" header="店舗数" bodyTemplate={columnBodyTemplate6} inlineEditorTemplate={columnInlineEditorTemplate5} filterable={false} selectable={false}></IgrColumn>
        </IgrGrid>
        <div className={classes("row-layout footer_button")}>
          <IgrButton type="button" className={classes("button button_2")}>
            <span key={uuid()}>終了</span>
            <IgrRipple key={uuid()}></IgrRipple>
          </IgrButton>
          <IgrButton type="button" className={classes("button button_3")}>
            <span key={uuid()}>戻る</span>
            <IgrRipple key={uuid()}></IgrRipple>
          </IgrButton>
          <IgrButton type="button" className={classes("button button_4")}>
            <span key={uuid()}>取消</span>
            <IgrRipple key={uuid()}></IgrRipple>
          </IgrButton>
          <IgrButton disabled type="button" className={classes("button button_5")}>
            <IgrRipple key={uuid()}></IgrRipple>
          </IgrButton>
          <IgrButton type="button" className={classes("button button_6")}>
            <span key={uuid()}>除外削除</span>
            <IgrRipple key={uuid()}></IgrRipple>
          </IgrButton>
          <IgrButton disabled type="button" className={classes("button button_7")}>
            <IgrRipple key={uuid()}></IgrRipple>
          </IgrButton>
          <IgrButton type="button" className={classes("button_1 button_1_1")}>
            <span key={uuid()}>期間変更</span>
            <IgrRipple key={uuid()}></IgrRipple>
          </IgrButton>
          <IgrButton type="button" className={classes("button button_8")}>
            <span key={uuid()}>店舗変更</span>
            <IgrRipple key={uuid()}></IgrRipple>
          </IgrButton>
          <IgrButton disabled type="button" className={classes("button button_9")}>
            <IgrRipple key={uuid()}></IgrRipple>
          </IgrButton>
          <IgrButton type="button" className={classes("button button_10")}>
            <span key={uuid()}>新規追加</span>
            <IgrRipple key={uuid()}></IgrRipple>
          </IgrButton>
          <IgrButton disabled type="button" className={classes("button button_11")}>
            <IgrRipple key={uuid()}></IgrRipple>
          </IgrButton>
          <IgrButton type="button" className={classes("button button_12")}>
            <span key={uuid()}>確定</span>
            <IgrRipple key={uuid()}></IgrRipple>
          </IgrButton>
        </div>
      </div>
    </>
  );
}
