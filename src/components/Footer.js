import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer content has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: "100vw" }} className="columns">
              <div className="column is-4">
                <h3 className="has-text-weight-semibold is-size-2" id="ability" style={{
                          backgroundColor: "rgb(255, 68, 0)",
                          color: "white",
                          padding: "0.25rem",
                          marginTop: "0.5rem",
                        }}>
                        戦域と現在の戦況
                </h3>
                {/* <h3 className="has-text-weight-semibold" id="ability" style={{
                            backgroundColor: "rgb(255, 68, 0)",
                            color: "white",
                            padding: "0.25rem",
                          }}>
                  戦域アビリティ
                </h3> */}
              </div>
              <div className="column is-8">
                <p>「ヴィジルスの孤立」のバトルにおいて、戦域を選ぶ必要があります。各戦域の戦況はキャンペーンのフェイズごとに更新され、ここやウォーハンマーストア神保町の星系図で確認できます。<span className="is-underlined">プレイヤーが合意すれば、以下の戦域アビリティも使用できます</span>。詳しくは「ヴィジルスの孤立」52-53ページを参考にしてください。</p>
              </div>
            </div>
            <div style={{ maxWidth: "100vw" }} className="columns">

              <div className="column is-4">
                <StaticImage src="../img/Mortwaldlandscape.png" />
                <section>


                  <p className="has-text-white has-text-centered is-size-4">
                  <h3 className="has-text-white-ter"><br />ハースラック戦域</h3>

                    <StaticImage src="../img/status-3.png" width={80} height={80} />
                    <br />
                    現在の戦況：拮抗
                  </p>


                  <p className="is-italic">
                    ネメンドガスト産業惑星を回る黄金の衛星ハースラックはまるで宝珠のように空を飛び、その優美な姿は帝国のしもべにとって信仰心と純粋さの象徴になっていた。
                  </p>
                  <p className="has-text-weight-bold">戦域アビリティ</p>
                  <ul>
                    <li>
                      <b>聖なる高揚感：</b> 帝国同盟ユニットが行う戦闘損耗テストは、結果に＋１の修正を受ける。
                    </li>
                    <li>
                      <b>捨て身の強​​奪：</b> 混沌同盟ユニットがキャラクターに対して行う攻撃は、ヒットロール結果に＋１の修正を受ける。
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
              <StaticImage src="../img/StorvahlLandscape2.png" />

              <section>
                <p className="has-text-white has-text-centered is-size-4">
                  <h3 className="has-text-white-ter"><br />ストルヴァル戦域</h3>

                    <StaticImage src="../img/status-3.png" width={80} height={80} />
                    <br />
                    現在の戦況：拮抗
                  </p>
              <p className="is-italic">
                かつてアデプトゥスメカニカスに管理されたいた穀倉地帯ストルヴァルの溶岩地帯にディーモンの絶叫が響くことはなくなったが、製造指令ヴォルシュの偉大なる策略によって、荒廃した大地は不安定な地殻エネルギーで揺れ動いている。
              </p>
              <p className="has-text-weight-bold">戦域アビリティ</p>

                  <ul>
                    <li>
                    <b>地殻不安定：</b> この戦域アビリティを使用する場合、「戦場構築」のステップの最後に、プレイヤーは下の地図のように２組のマーカーを１から6まで配置し、これを帝国（緑）と混沌（赤）の地殻ロケーションと呼ぶ。各バトルラウンド開始時、先攻プレイヤーはD6をロールし、出目５⁺で地殻イベントが発生する：各プレイヤーはD6で地殻ロケーションを決めて、双方の地殻ロケーションを線で結ぶ。この線が通過するミニチュアのユニット（航空機以外）はD3致命的ダメージを受け、次のバトルラウンド開始時まで移動力が半分になる。
                                        <br />
                  <StaticImage src="../img/map3.png" width={220} align="right" />
</li>
                  </ul>

                </section>
              </div>
              <div className="column is-4">
              <StaticImage src="../img/DontoriaLandscape2.png" />

                <section>
                <p className="has-text-white has-text-centered is-size-4">
                  <h3 className="has-text-white-ter"><br />ドントリア戦域</h3>

                    <StaticImage src="../img/status-3.png" width={80} height={80} />
                    <br />
                    現在の戦況：拮抗
                  </p>
                  
                  <p className="is-italic">
                    多層都市圏のなかで唯一、ドントリアは不気味な沈黙を保っており、惑星全体を巻き込んだ戦争の騒乱のなかで、その運命は不明のままだった。最後の連隊が全滅したと記録されて以来、広大な大陸には疫病の霧がかかっており、防衛線の維持を任された兵士の間では、感染した怪物によって拡散される不自然な疫病の噂が広まっている。
                  </p>

                  <p className="has-text-weight-bold">戦域アビリティ</p>

                  <ul>
                    <li>
                      <b>燃える信念：</b> １ターンにつき１回、敵ユニットの６mv以内にいる帝国同盟ユニットが射撃や白兵戦を宣言した場合、そのユニット内の兵が行う攻撃は、ヒットロールとウーンズロールを何個でもリロールできる。
                    </li> 
                    <li>
                      <b>蔓延する腐食：</b> １ターンにつき１回、混沌同盟プレイヤー側指揮フェイズ中に、操作側プレイヤーの初期配置ゾーン内に居ない帝国同盟ユニットを１つ選び、D6を１個ロールしても良い。出目２＋でそのユニットが１ポイントの致命的ダメージと、混沌同盟プレイヤーの次のターン開始時まで指揮統制値−２の修正を受ける。
                    </li>
                  </ul>
              </section>
              </div>
            </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
