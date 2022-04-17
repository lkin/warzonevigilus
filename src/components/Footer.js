import * as React from "react";
import { Link } from "gatsby";

import logo from "../img/logo.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: "100vw" }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li className="is-italic">
    
                    多層都市圏のなかで唯一、ドントリアは不気味な沈黙を保っており、惑星全体を巻き込んだ戦争の騒乱のなかで、その運命は不明のままだった。最後の連隊が全滅したと記録されて以来、広大な大陸には疫病の霧がかかっており、防衛線の維持を任された兵士の間では、感染した怪物によって拡散される不自然な疫病の噂が広まっている。
                    </li>
                    <li className="">
                    戦域アビリティ
                    </li>
                    <li>
                      燃える信念：１ターンにつき１回、敵ユニットの６mv以内にいる帝国同盟ユニットが射撃や白兵戦を宣言した場合、そのユニット内の兵が行う攻撃は、ヒットロールとウーンズロールを何個でもリロールできる。
                    </li> 
                    <li>
                    蔓延する腐食：１ターンにつき１回、混沌同盟プレイヤー側指揮フェイズ中に、操作側プレイヤーの初期配置ゾーン内に居ない帝国同盟ユニットを１つ選び、D6を１個ロールしても良い。出目２＋でそのユニットが１ポイントの致命的ダメージと、混沌同盟プレイヤーの次のターン開始時まで指揮統制値−２の修正を受ける。
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Latest Stories
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
