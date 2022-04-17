import * as React from "react";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer content has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: "100vw" }} className="columns">
              <div className="column is-4">
                <section>
                  <h1 className="has-text-white-ter">ドントリア戦域</h1>
                  <p className="is-italic">
                    多層都市圏のなかで唯一、ドントリアは不気味な沈黙を保っており、惑星全体を巻き込んだ戦争の騒乱のなかで、その運命は不明のままだった。最後の連隊が全滅したと記録されて以来、広大な大陸には疫病の霧がかかっており、防衛線の維持を任された兵士の間では、感染した怪物によって拡散される不自然な疫病の噂が広まっている。
                  </p>
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
              <div className="column is-4">
              <h1 className="has-text-white-ter">ストルヴァル戦域</h1>
              <p className="is-italic">
                ストルヴァルの溶岩地帯にディーモンの絶叫が響くことはなくなったが、製造指令ヴォルシュの偉大なる策略によって、荒廃した大地は不安定な地殻エネルギーで揺れ動いている。
              </p>
                <section>
                  <ul className="menu-list">
                    <li>
                    <b>地殻不安定：</b> この戦域アビリティを使用する場合、「戦場構築」のステップの最後に、プレイヤーは下の地図のように２組のマーカーを１から6まで配置し、これを帝国（緑）と混沌（赤）の地殻ロケーションと呼ぶ。各バトルラウンド開始時、先攻プレイヤーはD6をロールし、出目５⁺で地殻イベントが発生する：各プレイヤーはD6で地殻ロケーションを決めて、双方の地殻ロケーションを線で結ぶ。この線が通貨するミニチュアのユニット（航空機以外）はD3致命的ダメージを受け、次のバトルラウンド開始時まで移動力が半分になる。
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
              <h1 className="has-text-white-ter">ハースラック戦域</h1>
              <p className="is-italic">
                ストルヴァルの溶岩地帯にディーモンの絶叫が響くことはなくなったが、製造指令ヴォルシュの偉大なる策略によって、荒廃した大地は不安定な地殻エネルギーで揺れ動いている。
              </p>
              <ul>
                <li>
                  <b>聖なる高揚感：</b> 帝国同盟ユニットが行う戦闘損耗テストは、結果に＋１の修正を受ける。
                </li>
                <li>
                  <b>捨て身の強​​奪：</b> 混沌同盟ユニットがキャラクターに対して行う攻撃は、ヒットロール結果に＋１の修正を受ける。
                </li>
              </ul>
<p className="is-aligned-left">詳しくは「ヴィジルスの孤立」52-53ページを参考にしてください。</p>
              </div>
            </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
