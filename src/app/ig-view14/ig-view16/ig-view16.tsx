import { IgrButton, IgrButtonModule, IgrRipple, IgrRippleModule } from 'igniteui-react';
import { IgrColumn, IgrGrid, IgrGridModule } from 'igniteui-react-grids';
import { useGetEmployees } from '../../hooks/northwind-hooks';
import 'igniteui-react-grids/grids/combined.js';
import styles from './ig-view16.module.css';
import createClassTransformer from '../../style-utils';
import '/src/app/base-view-styles.css';

IgrButtonModule.register();
IgrGridModule.register();
IgrRippleModule.register();

export default function IgView16() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const { northwindEmployees } = useGetEmployees();

  return (
    <>
      <div className={classes("column-layout container")}>
        <p className={classes("typography__body-1 text")}>
          <span>商品情報</span>
        </p>
        <div className={classes("row-layout group")}>
          <div className={classes("column-layout group_1")}>
            <div className={classes("row-layout group_2")}>
              <div className={classes("row-layout group_3")}>
                <div className={classes("row-layout group_4")}>
                  <p className={classes("typography__caption text_1")}>
                    <span>No</span>
                  </p>
                </div>
                <div className={classes("column-layout group_5")}></div>
              </div>
              <div className={classes("row-layout group_3")}>
                <div className={classes("row-layout group_4")}>
                  <p className={classes("typography__caption text_1")}>
                    <span>商品</span>
                  </p>
                </div>
                <div className={classes("column-layout group_5")}></div>
              </div>
            </div>
            <div className={classes("row-layout group_6")}></div>
            <div className={classes("row-layout group_2")}>
              <div className={classes("row-layout group_3")}>
                <div className={classes("row-layout group_4")}>
                  <p className={classes("typography__caption text_1")}>
                    <span>基準在庫</span>
                  </p>
                </div>
                <div className={classes("column-layout group_5")}></div>
              </div>
              <div className={classes("row-layout group_3")}>
                <div className={classes("row-layout group_4")}>
                  <p className={classes("typography__caption text_1")}>
                    <span>締時刻</span>
                  </p>
                </div>
                <div className={classes("column-layout group_7")}></div>
              </div>
            </div>
            <div className={classes("row-layout group_8")}>
              <div className={classes("row-layout group_4")}>
                <p className={classes("typography__caption text_1")}>
                  <span>使振率</span>
                </p>
              </div>
              <div className={classes("column-layout group_7")}></div>
            </div>
            <div className={classes("row-layout group_8")}>
              <div className={classes("row-layout group_4")}>
                <p className={classes("typography__caption text_1")}>
                  <span>テーマ</span>
                </p>
              </div>
              <div className={classes("column-layout group_7")}></div>
            </div>
            <div className={classes("row-layout group_9")}></div>
            <div className={classes("row-layout group_8")}>
              <div className={classes("row-layout group_4")}>
                <p className={classes("typography__caption text_1")}>
                  <span>特売期間</span>
                </p>
              </div>
              <div className={classes("column-layout group_7")}></div>
            </div>
            <div className={classes("row-layout group_8")}>
              <div className={classes("row-layout group_4")}>
                <p className={classes("typography__caption text_1")}>
                  <span>発注制限</span>
                </p>
              </div>
              <div className={classes("column-layout group_7")}></div>
            </div>
            <div className={classes("row-layout group_10")}>
              <div className={classes("row-layout group_11")}></div>
              <div className={classes("row-layout group_12")}></div>
            </div>
            <div className={classes("row-layout group_2")}>
              <div className={classes("row-layout group_13")}>
                <div className={classes("row-layout group_4")}>
                  <p className={classes("typography__caption text_1")}>
                    <span>客注発注</span>
                  </p>
                </div>
                <div className={classes("column-layout group_5")}></div>
              </div>
              <div className={classes("row-layout group_14")}>
                <div className={classes("column-layout group_15")}></div>
              </div>
            </div>
            <div className={classes("row-layout group_16")}>
              <div className={classes("row-layout group_17")}>
                <p className={classes("typography__caption text_1")}>
                  <span>アラート</span>
                </p>
              </div>
              <div className={classes("column-layout group_7")}></div>
            </div>
          </div>
          <IgrGrid data={northwindEmployees} primaryKey="employeeID" allowFiltering={true} filterMode="excelStyleFilter" width="70%" className={classes("ig-typography ig-scrollbar grid")}>
            <IgrColumn field="employeeID" dataType="number" header="employeeID" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="lastName" dataType="string" header="lastName" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="firstName" dataType="string" header="firstName" sortable={true} selectable={false}></IgrColumn>
            <IgrColumn field="title" dataType="string" header="title" sortable={true} selectable={false}></IgrColumn>
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
        <div className={classes("row-layout group_18")}>
          <div className={classes("column-layout group_19")}>
            <div className={classes("row-layout group_8")}>
              <div className={classes("row-layout group_20")}>
                <p className={classes("typography__body-1 text_1")}>
                  <span>発注数合計</span>
                </p>
              </div>
              <div className={classes("column-layout group_21")}></div>
            </div>
            <div className={classes("row-layout group_8")}>
              <div className={classes("row-layout group_20")}>
                <p className={classes("typography__body-1 text_1")}>
                  <span>発注売価合計</span>
                </p>
              </div>
              <div className={classes("column-layout group_22")}></div>
            </div>
          </div>
          <div className={classes("row-layout group_23")}>
            <div className={classes("column-layout group_24")}>
              <div className={classes("column-layout group_25")}></div>
              <div className={classes("column-layout group_26")}>
                <p className={classes("typography__caption text_1")}>
                  <span>納品数/発注数</span>
                </p>
              </div>
              <div className={classes("column-layout group_26")}>
                <p className={classes("typography__caption text_1")}>
                  <span>ご奉仕数</span>
                </p>
              </div>
            </div>
            <div className={classes("column-layout group_27")}>
              <div className={classes("column-layout group_28")}>
                <p className={classes("typography__caption text_1")}>
                  <span>12/20(水)</span>
                </p>
              </div>
              <div className={classes("column-layout group_29")}></div>
              <div className={classes("column-layout group_29")}>
                <p className={classes("typography__caption text_2")}>
                  <span>2</span>
                </p>
              </div>
            </div>
            <div className={classes("column-layout group_27")}>
              <div className={classes("column-layout group_28")}>
                <p className={classes("typography__caption text_1")}>
                  <span>12/21(木)</span>
                </p>
              </div>
              <div className={classes("column-layout group_29")}>
                <p className={classes("typography__caption text_2")}>
                  <span>150</span>
                </p>
              </div>
              <div className={classes("column-layout group_29")}>
                <p className={classes("typography__caption text_2")}>
                  <span>4</span>
                </p>
              </div>
            </div>
            <div className={classes("column-layout group_27")}>
              <div className={classes("column-layout group_28")}>
                <p className={classes("typography__caption text_1")}>
                  <span>12/22(金)</span>
                </p>
              </div>
              <div className={classes("column-layout group_29")}></div>
              <div className={classes("column-layout group_29")}>
                <p className={classes("typography__caption text_2")}>
                  <span>26</span>
                </p>
              </div>
            </div>
            <div className={classes("column-layout group_27")}>
              <div className={classes("column-layout group_28")}>
                <p className={classes("typography__caption text_1")}>
                  <span>12/23(土)</span>
                </p>
              </div>
              <div className={classes("column-layout group_29")}>
                <p className={classes("typography__caption text_2")}>
                  <span>150</span>
                </p>
              </div>
              <div className={classes("column-layout group_29")}>
                <p className={classes("typography__caption text_2")}>
                  <span>4</span>
                </p>
              </div>
            </div>
            <div className={classes("column-layout group_27")}>
              <div className={classes("column-layout group_28")}>
                <p className={classes("typography__caption text_1")}>
                  <span>12/24(日)</span>
                </p>
              </div>
              <div className={classes("column-layout group_29")}>
                <p className={classes("typography__caption text_2")}>
                  <span>150</span>
                </p>
              </div>
              <div className={classes("column-layout group_29")}>
                <p className={classes("typography__caption text_2")}>
                  <span>4</span>
                </p>
              </div>
            </div>
            <div className={classes("column-layout group_27")}>
              <div className={classes("column-layout group_28")}>
                <p className={classes("typography__caption text_1")}>
                  <span>12/25(月)</span>
                </p>
              </div>
              <div className={classes("column-layout group_29")}></div>
              <div className={classes("column-layout group_29")}>
                <p className={classes("typography__caption text_2")}>
                  <span>26</span>
                </p>
              </div>
            </div>
            <div className={classes("column-layout group_27")}>
              <div className={classes("column-layout group_28")}>
                <p className={classes("typography__caption text_1")}>
                  <span>12/26(火)</span>
                </p>
              </div>
              <div className={classes("column-layout group_29")}></div>
              <div className={classes("column-layout group_29")}>
                <p className={classes("typography__caption text_2")}>
                  <span>26</span>
                </p>
              </div>
            </div>
            <div className={classes("column-layout group_27")}>
              <div className={classes("column-layout group_28")}>
                <p className={classes("typography__caption text_1")}>
                  <span>12/27(水)</span>
                </p>
              </div>
              <div className={classes("column-layout group_29")}></div>
              <div className={classes("column-layout group_29")}>
                <p className={classes("typography__caption text_2")}>
                  <span>26</span>
                </p>
              </div>
            </div>
            <div className={classes("column-layout group_27")}>
              <div className={classes("column-layout group_28")}>
                <p className={classes("typography__caption text_1")}>
                  <span>12/28(木)</span>
                </p>
              </div>
              <div className={classes("column-layout group_29")}></div>
              <div className={classes("column-layout group_29")}>
                <p className={classes("typography__caption text_2")}>
                  <span>26</span>
                </p>
              </div>
            </div>
          </div>
        </div>
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
            <span key={uuid()}>取り消し</span>
            <IgrRipple key={uuid()}></IgrRipple>
          </IgrButton>
          <IgrButton disabled type="button" className={classes("button button_5")}>
            <IgrRipple key={uuid()}></IgrRipple>
          </IgrButton>
          <IgrButton disabled type="button" className={classes("button button_6")}>
            <IgrRipple key={uuid()}></IgrRipple>
          </IgrButton>
          <IgrButton disabled type="button" className={classes("button button_7")}>
            <IgrRipple key={uuid()}></IgrRipple>
          </IgrButton>
          <IgrButton disabled type="button" className={classes("button_1 button_1_1")}>
            <IgrRipple key={uuid()}></IgrRipple>
          </IgrButton>
          <IgrButton disabled type="button" className={classes("button button_8")}>
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
          <IgrButton type="button" className={classes("button button_12")}>
            <span key={uuid()}>確定</span>
            <IgrRipple key={uuid()}></IgrRipple>
          </IgrButton>
        </div>
      </div>
    </>
  );
}
