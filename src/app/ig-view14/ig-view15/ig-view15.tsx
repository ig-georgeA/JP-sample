import { IgrButton, IgrButtonModule, IgrInput, IgrInputModule, IgrRipple, IgrRippleModule, IgrTextarea, IgrTextareaModule } from 'igniteui-react';
import { IgrCellTemplateContext, IgrColumn, IgrGrid, IgrGridModule } from 'igniteui-react-grids';
import { useGetEmployees } from '../../hooks/northwind-hooks';
import 'igniteui-react-grids/grids/combined.js';
import styles from './ig-view15.module.css';
import createClassTransformer from '../../style-utils';
import '/src/app/base-view-styles.css';

IgrButtonModule.register();
IgrGridModule.register();
IgrInputModule.register();
IgrRippleModule.register();
IgrTextareaModule.register();

export default function IgView15() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const { northwindEmployees } = useGetEmployees();

  const columnBodyTemplate = (ctx: { dataContext: IgrCellTemplateContext }) => {
    return (
      <>
        <IgrButton type="button" className={classes("button_2")}>
          <span key={uuid()}>{ctx.dataContext.cell.value}</span>
          <IgrRipple key={uuid()}></IgrRipple>
        </IgrButton>
      </>
    )
  }

  const columnInlineEditorTemplate = () => {
    return (
      <>
      </>
    )
  }

  return (
    <>
      <div className={classes("column-layout container")}>
        <div className={classes("row-layout group")}>
          <div className={classes("column-layout group_1")}>
            <p className={classes("typography__body-1 text")}>
              <span>商品情報</span>
            </p>
            <div className={classes("column-layout group_2")}>
              <div className={classes("row-layout group_3")}>
                <div className={classes("row-layout group_4")}>
                  <div className={classes("row-layout group_5")}>
                    <p className={classes("typography__body-2 text_1")}>
                      <span>No</span>
                    </p>
                  </div>
                  <p className={classes("typography__body-1 text")}>
                    <span>Body 1</span>
                  </p>
                </div>
                <div className={classes("row-layout group_4")}>
                  <div className={classes("row-layout group_6")}>
                    <p className={classes("typography__body-2 text_2")}>
                      <span>商品</span>
                    </p>
                  </div>
                  <IgrInput outlined={true} className={classes("input")}></IgrInput>
                </div>
              </div>
              <IgrTextarea label="Label/Placeholder" outlined={true} className={classes("user-input")}></IgrTextarea>
              <div className={classes("row-layout group_7")}>
                <div className={classes("row-layout group_4")}>
                  <div className={classes("row-layout group_5")}>
                    <p className={classes("typography__body-2 text_3")}>
                      <span>基準在庫</span>
                    </p>
                  </div>
                  <IgrInput outlined={true} className={classes("input_1")}></IgrInput>
                </div>
                <div className={classes("row-layout group_4")}>
                  <div className={classes("row-layout group_6")}>
                    <p className={classes("typography__body-2 text_4")}>
                      <span>締時刻</span>
                    </p>
                  </div>
                  <IgrInput outlined={true} className={classes("input")}></IgrInput>
                </div>
              </div>
              <div className={classes("row-layout group_8")}>
                <div className={classes("row-layout group_5")}>
                  <p className={classes("typography__body-2 text_4")}>
                    <span>使振率</span>
                  </p>
                </div>
                <IgrInput outlined={true} className={classes("input_2")}></IgrInput>
              </div>
              <div className={classes("row-layout group_8")}>
                <div className={classes("row-layout group_5")}>
                  <p className={classes("typography__body-2 text_4")}>
                    <span>テーマ</span>
                  </p>
                </div>
                <IgrInput outlined={true} className={classes("input_2")}></IgrInput>
              </div>
              <IgrInput label="Label" outlined={true} className={classes("user-input")}></IgrInput>
              <div className={classes("row-layout group_8")}>
                <div className={classes("row-layout group_5")}>
                  <p className={classes("typography__body-2 text_4")}>
                    <span>特売期間</span>
                  </p>
                </div>
                <IgrInput outlined={true} className={classes("input_2")}></IgrInput>
              </div>
              <div className={classes("row-layout group_8")}>
                <div className={classes("row-layout group_5")}>
                  <p className={classes("typography__body-2 text_4")}>
                    <span>発注制限</span>
                  </p>
                </div>
                <IgrInput outlined={true} className={classes("input_2")}></IgrInput>
              </div>
              <div className={classes("row-layout group_7")}>
                <div className={classes("row-layout group_4")}>
                  <IgrInput outlined={true} className={classes("input_1")}></IgrInput>
                </div>
                <div className={classes("row-layout group_4")}>
                  <IgrInput outlined={true} className={classes("input")}></IgrInput>
                </div>
              </div>
              <div className={classes("row-layout group_7")}>
                <div className={classes("row-layout group_5")}>
                  <p className={classes("typography__body-2 text_3")}>
                    <span>客注発注</span>
                  </p>
                </div>
                <div className={classes("row-layout group_3")}>
                  <IgrInput outlined={true} className={classes("input_3")}></IgrInput>
                  <IgrInput outlined={true} className={classes("input_4")}></IgrInput>
                </div>
              </div>
              <div className={classes("row-layout group_8")}>
                <div className={classes("row-layout group_5")}>
                  <p className={classes("typography__body-2 text_4")}>
                    <span>アラート</span>
                  </p>
                </div>
                <IgrInput outlined={true} className={classes("input_2")}></IgrInput>
              </div>
            </div>
          </div>
          <div className={classes("column-layout group_9")}>
            <div className={classes("row-layout group_10")}>
              <div className={classes("row-layout group_11")}>
                <p className={classes("typography__body-2 text")}>
                  <span>選択個所：0件</span>
                </p>
              </div>
              <div className={classes("row-layout group_12")}>
                <p className={classes("typography__body-1 text")}>
                  <span>選択個所：0件</span>
                </p>
                <div className={classes("row-layout group_2")}>
                  <div className={classes("row-layout group_13")}>
                    <p className={classes("typography__caption text_4")}>
                      <span>&lt;</span>
                    </p>
                  </div>
                  <div className={classes("row-layout group_13")}>
                    <p className={classes("typography__caption text_4")}>
                      <span>&gt;</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <IgrGrid data={northwindEmployees} primaryKey="employeeID" allowFiltering={true} filterMode="excelStyleFilter" className={classes("ig-typography ig-scrollbar grid")} key={uuid()}>
              <IgrColumn field="employeeID" dataType="number" header="employeeID" sortable={true} selectable={false}></IgrColumn>
              <IgrColumn field="lastName" dataType="string" header="lastName" sortable={true} selectable={false}></IgrColumn>
              <IgrColumn field="firstName" dataType="string" header="firstName" sortable={true} selectable={false}></IgrColumn>
              <IgrColumn field="title" dataType="string" header="title" sortable={true} bodyTemplate={columnBodyTemplate} inlineEditorTemplate={columnInlineEditorTemplate} selectable={false}></IgrColumn>
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
        <div className={classes("row-layout group_14")}>
          <div className={classes("column-layout group_1")}>
            <div className={classes("column-layout group_2")}>
              <div className={classes("row-layout group_8")}>
                <div className={classes("row-layout group_15")}>
                  <p className={classes("typography__body-2 text_4")}>
                    <span>発注数合計</span>
                  </p>
                </div>
                <IgrInput outlined={true} className={classes("input_2")}></IgrInput>
              </div>
              <div className={classes("row-layout group_8")}>
                <div className={classes("row-layout group_15")}>
                  <p className={classes("typography__body-2 text_4")}>
                    <span>発注売価合計</span>
                  </p>
                </div>
                <IgrInput outlined={true} className={classes("input_2")}></IgrInput>
              </div>
            </div>
          </div>
          <div className={classes("column-layout group_16")}>
            <IgrGrid data={northwindEmployees} primaryKey="employeeID" allowFiltering={true} filterMode="excelStyleFilter" className={classes("ig-typography ig-scrollbar grid_1")}>
              <IgrColumn field="employeeID" dataType="number" header="employeeID" sortable={true} selectable={false}></IgrColumn>
              <IgrColumn field="lastName" dataType="string" header="lastName" sortable={true} selectable={false}></IgrColumn>
              <IgrColumn field="firstName" dataType="string" header="firstName" sortable={true} selectable={false}></IgrColumn>
              <IgrColumn field="title" dataType="string" header="title" sortable={true} selectable={false}></IgrColumn>
              <IgrColumn field="birthDate" dataType="date" header="birthDate" sortable={true} selectable={false}></IgrColumn>
              <IgrColumn field="titleOfCourtesy" dataType="string" header="titleOfCourtesy" sortable={true} selectable={false}></IgrColumn>
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
        <div className={classes("row-layout footer_button")}>
          <IgrButton type="button" className={classes("button button_3")}>
            <span key={uuid()}>終了</span>
            <IgrRipple key={uuid()}></IgrRipple>
          </IgrButton>
          <IgrButton type="button" className={classes("button button_4")}>
            <span key={uuid()}>戻る</span>
            <IgrRipple key={uuid()}></IgrRipple>
          </IgrButton>
          <IgrButton type="button" className={classes("button button_5")}>
            <span key={uuid()}>取り消し</span>
            <IgrRipple key={uuid()}></IgrRipple>
          </IgrButton>
          <IgrButton disabled type="button" className={classes("button button_6")}>
            <IgrRipple key={uuid()}></IgrRipple>
          </IgrButton>
          <IgrButton disabled type="button" className={classes("button button_7")}>
            <IgrRipple key={uuid()}></IgrRipple>
          </IgrButton>
          <IgrButton disabled type="button" className={classes("button button_8")}>
            <IgrRipple key={uuid()}></IgrRipple>
          </IgrButton>
          <IgrButton disabled type="button" className={classes("button_1 button_1_1")}>
            <IgrRipple key={uuid()}></IgrRipple>
          </IgrButton>
          <IgrButton disabled type="button" className={classes("button button_9")}>
            <IgrRipple key={uuid()}></IgrRipple>
          </IgrButton>
          <IgrButton disabled type="button" className={classes("button button_10")}>
            <IgrRipple key={uuid()}></IgrRipple>
          </IgrButton>
          <IgrButton disabled type="button" className={classes("button button_11")}>
            <IgrRipple key={uuid()}></IgrRipple>
          </IgrButton>
          <IgrButton disabled type="button" className={classes("button button_12")}>
            <IgrRipple key={uuid()}></IgrRipple>
          </IgrButton>
          <IgrButton type="button" className={classes("button button_13")}>
            <span key={uuid()}>確定</span>
            <IgrRipple key={uuid()}></IgrRipple>
          </IgrButton>
        </div>
      </div>
    </>
  );
}
