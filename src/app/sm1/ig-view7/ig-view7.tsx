import { IgrBadge, IgrBadgeModule, IgrButton, IgrButtonModule, IgrCheckbox, IgrCheckboxModule, IgrRipple, IgrRippleModule } from 'igniteui-react';
import { IgrColumn, IgrGrid, IgrGridModule } from 'igniteui-react-grids';
import { useGetEmployees } from '../../hooks/northwind-hooks';
import 'igniteui-react-grids/grids/combined.js';
import styles from './ig-view7.module.css';
import createClassTransformer from '../../style-utils';
import '/src/app/base-view-styles.css';

IgrBadgeModule.register();
IgrButtonModule.register();
IgrCheckboxModule.register();
IgrGridModule.register();
IgrRippleModule.register();

export default function IgView7() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const { northwindEmployees } = useGetEmployees();

  const columnHeaderTemplate = () => {
    return (
      <>
        <div className={classes("column-layout group_4")}>
          <IgrCheckbox className={classes("checkbox")}></IgrCheckbox>
        </div>
      </>
    )
  }

  const columnBodyTemplate = () => {
    return (
      <>
      </>
    )
  }

  const columnInlineEditorTemplate = () => {
    return (
      <>
        <div className={classes("row-layout group_5")}>
          <IgrCheckbox className={classes("checkbox")}></IgrCheckbox>
        </div>
      </>
    )
  }

  const columnHeaderTemplate1 = () => {
    return (
      <>
        <IgrCheckbox labelPosition="after" className={classes("checkbox")}>
          <span key={uuid()}>9月26日</span>
        </IgrCheckbox>
      </>
    )
  }

  const columnBodyTemplate1 = () => {
    return (
      <>
        <div className={classes("column-layout group_6")}>
          <div className={classes("row-layout group_7")}>
            <IgrCheckbox className={classes("checkbox")}></IgrCheckbox>
            <span className={classes("material-icons icon")}>
              <span key={uuid()}>mail</span>
            </span>
            <div className={classes("group_8")}></div>
          </div>
          <p className={classes("typography__body-1 text_1")}>
            <span>900</span>
          </p>
          <div className={classes("row-layout group_9")}>
            <IgrBadge variant="info" className={classes("badge")}>
              <span key={uuid()}>字除</span>
            </IgrBadge>
            <IgrBadge variant="danger" className={classes("badge")}>
              <span key={uuid()}>発停</span>
            </IgrBadge>
          </div>
        </div>
      </>
    )
  }

  const columnHeaderTemplate2 = () => {
    return (
      <>
        <div className={classes("column-layout group_10")}>
          <IgrCheckbox labelPosition="after" className={classes("checkbox")}>
            <span key={uuid()}>9/27</span>
          </IgrCheckbox>
        </div>
      </>
    )
  }

  const columnBodyTemplate2 = () => {
    return (
      <>
        <div className={classes("column-layout group_6")}>
          <div className={classes("row-layout group_7")}>
            <IgrCheckbox className={classes("checkbox")}></IgrCheckbox>
            <span className={classes("material-icons icon")}>
              <span key={uuid()}>mail</span>
            </span>
            <div className={classes("group_8")}></div>
          </div>
          <div className={classes("row-layout group_9")}>
            <IgrBadge variant="info" className={classes("badge")}>
              <span key={uuid()}>字除</span>
            </IgrBadge>
            <IgrBadge variant="danger" className={classes("badge")}>
              <span key={uuid()}>発停</span>
            </IgrBadge>
          </div>
        </div>
      </>
    )
  }

  const columnInlineEditorTemplate1 = () => {
    return (
      <>
      </>
    )
  }

  const columnHeaderTemplate3 = () => {
    return (
      <>
      </>
    )
  }

  const columnBodyTemplate3 = () => {
    return (
      <>
        <div className={classes("row-layout group_11")}>
          <IgrCheckbox labelPosition="after" className={classes("checkbox")}>
            <span key={uuid()}>1</span>
          </IgrCheckbox>
        </div>
      </>
    )
  }

  const columnInlineEditorTemplate2 = () => {
    return (
      <>
      </>
    )
  }

  return (
    <>
      <div className={classes("row-layout container")}>
        <div className={classes("column-layout group")}>
          <div className={classes("row-layout group_1")}>
            <div className={classes("row-layout group_2")}>
              <p className={classes("typography__body-1 text")}>
                <span>選択個所：0件</span>
              </p>
            </div>
            <div className={classes("row-layout group_3")}>
              <p className={classes("typography__body-1 text")}>
                <span>200件中 1 ～ 100件目</span>
              </p>
              <IgrButton type="button" className={classes("button")}>
                <span key={uuid()}>＜</span>
                <IgrRipple key={uuid()}></IgrRipple>
              </IgrButton>
              <IgrButton type="button" className={classes("button")}>
                <span key={uuid()}>＞</span>
                <IgrRipple key={uuid()}></IgrRipple>
              </IgrButton>
            </div>
          </div>
          <IgrGrid data={northwindEmployees} primaryKey="employeeID" allowFiltering={true} filterMode="excelStyleFilter" className={classes("ig-typography ig-scrollbar grid")} key={uuid()}>
            <IgrColumn width="65px" headerTemplate={columnHeaderTemplate} bodyTemplate={columnBodyTemplate} inlineEditorTemplate={columnInlineEditorTemplate} filterable={false} selectable={false} key="4e34cfc2-08e4-4cbd-a8b5-c542bf0b7f68"></IgrColumn>
            <IgrColumn field="employeeID" dataType="number" header="No" width="49px" filterable={false} selectable={false}></IgrColumn>
            <IgrColumn field="lastName" dataType="string" header="lastName" headerTemplate={columnHeaderTemplate1} bodyTemplate={columnBodyTemplate1} filterable={false} selectable={false}></IgrColumn>
            <IgrColumn field="firstName" dataType="string" header="firstName" headerTemplate={columnHeaderTemplate2} bodyTemplate={columnBodyTemplate2} inlineEditorTemplate={columnInlineEditorTemplate1} filterable={false} selectable={false}></IgrColumn>
            <IgrColumn field="title" dataType="string" header="title" sortable={true} headerTemplate={columnHeaderTemplate3} bodyTemplate={columnBodyTemplate3} inlineEditorTemplate={columnInlineEditorTemplate2} selectable={false}></IgrColumn>
            <IgrColumn field="titleOfCourtesy" dataType="string" header="titleOfCourtesy" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="birthDate" dataType="date" header="birthDate" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="hireDate" dataType="date" header="hireDate" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="address.street" dataType="string" header="address street" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="address.city" dataType="string" header="address city" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="address.region" dataType="string" header="address region" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="address.postalCode" dataType="string" header="address postalCode" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="address.country" dataType="string" header="address country" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="address.phone" dataType="string" header="address phone" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="managerID" dataType="number" header="managerID" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="notes" dataType="string" header="notes" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="avatarUrl" dataType="string" header="avatarUrl" sortable={true} selectable={false}></IgrColumn>
          </IgrGrid>
        </div>
      </div>
    </>
  );
}
