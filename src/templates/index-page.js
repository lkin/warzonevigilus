import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import FullWidthImage from "../components/FullWidthImage";
import twitter from "../img/social/twitter.svg";
import discord from "../img/discord-icon.svg";
import { AnchorLink } from "gatsby-plugin-anchor-links";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => {
  const heroImage = getImage(image) || image;

  return (
    <div>
        <div className="column is-10 is-offset-1">
          <h1 className="title">
          「ヴィジルスの孤立」ウォーハンマーストア神保町キャンペーンへようこそ
          </h1>
          <h3 className="subtitle">
           ウォーハンマー40,000のの設定においてヴィジルス城塞惑星は戦略的に重要な場所で、物語の中心的な舞台にもなってきました。その物語の最新話である「ヴィジルスの孤立」を一緒に体験しませんか？
            <br />途中参加も大歓迎ですので、キャンペーン参加希望の方は気軽に<a
                href="https://discord.gg/yeKNeRNN"
                target="_blank"
                rel="noopener noreferrer"
              >
              <span className="icon">
                <img src={discord} />
              </span>ディスコードに登録する</a>か、<a
                href="https://twitter.com/maskopism"
                target="_blank"
                rel="noopener noreferrer"
              ><span className="icon">
                  <img src={twitter} />
                </span>キャンペーンマスター</a>までご連絡ください！
          </h3>
      </div>

      <FullWidthImage img={heroImage} title="キャンペーン参加者" subheading={subheading} id="members" />
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-12">
                <div className="content">
                  <div className="columns">
                      <h3 className="has-text-weight-semibold is-size-2" id="rules" style={{
                          backgroundColor: "rgb(255, 68, 0)",
                          color: "white",
                          padding: "0.25rem",
                          marginTop: "0.5rem",
                        }}>
                        {heading}
                      </h3>
                      {/* <p>{description}</p> */}
                  </div>

                  {/* MANUAL ENTRIES */}

                  <div className="columns is-multiline">

                  <div className="column is-6">
                      <section className="section">

                        <h3>アーミー編成</h3>
                        <p>
                          クルセイドは勝ち負けだけではなく、ストーリーやユニットの成長を楽しむゲームです。最強の組み合わせというよりも自分で使ってみたいミニチュアや、「その場にいそうな」 ユニットを編成した方が、より楽しめるゲームになるでしょう。 
                        </p>
                        <p>  
                          今回のキャンペーンはパワーレベル（PL）で行います。キャンペーン参加者はまず５０PLの戦闘序列表を作り、帝国側か混沌側か決めてください。戦闘序列表とクルセイドカードは必ずディスコードやツイッターで公開しましょう。
                        </p>
                        <p>
                          ゲームをするにはまず敵対する同盟のプレイヤーを誘いましょう！キャンペーンマスターがマッチアップすることもあります。基本的に<span className="is-underlined">戦闘序列表から２５PL以下（コンバットパトロール）のロスターを編成し、対戦相手に渡しましょう。</span>
                        </p>
                        <p>  
                          バトル開始時に編成したロスターのクルセイドポイントを比較し、少ない方のプレイヤーに差分の半分を（切り捨て）CPとして与えます。８以上の差は出来るだけ避けましょう。
                        </p>  
                      </section>
                    </div>

                    <div className="column is-6">
                      <section className="section">

                        <h3>ミッションの選択</h3>
                        <ol>
                          <li>
                            ミッションはできればお持ちのミッションパックから選びましょう！ミッションパック固有の思惑やルールに関してはお相手と話し合い、適用するかどうか決めましょう。  
                            <i>例えば、ミッションパック「ビヨンドヴェール」からミッションを選んでゲームをした場合、各プレイヤーは調査ポイントを取得しても良い。ただし、ミッションパック「カタストロフ」からミッションを選んでも3人以上でのゲームはできません。</i>
                          </li>
                          <li>
                            ミッションパックがお手元になければ、「オープンウォー」や「テンペストオブウォー」のカード、又はコアルールのクルセイドミッションを使いましょう。
                            <br />
                            <i>
                              クルセイド以外のミッションでは、コアルールのクルセイドミッションからD6振って勝者の報酬を決めてください。
                            </i>
                          </li>
                          <li>
                          選択した戦域の伝説的会戦を選ぶこともできます。詳しくは「ヴィジルスの孤立」54-59ページを参照するか、キャンペーンマスターにお尋ねください。
                          </li>
                        </ol>
                        片方のプレイヤーが不利になりそうな場合は、攻撃・防御側、或いは先攻・後攻をそのプレイヤーから選びましょう。 
                      </section>
                    </div>
                    <div className="column is-6">
                      <section className="section">
                        <h3>戦域アビリティ</h3>
                        「ヴィジルスの孤立」において、各バトルはどの戦域で行われるかを対戦相手と決めましょう。プレイヤーが合意すれば、<AnchorLink to="#ability">その戦域の戦域アビリティ</AnchorLink>も使用できます。
                      </section>
                    </div>
                    <div className="column is-6">
                      <section className="section">
                        <h3>思惑の選択</h3>
                        コンバットパトロールのゲームは２つ、インカージョンのゲームは３つというふうに、思惑は一つ多く選択しても良いです。                      </section>
                    </div>
                    <div className="column is-6">
                      <section className="section">

                        <h3>ポイント計算と負傷ロール</h3>
                        <p>
                        必ずしも第５ラウンドまでゲーム進めなくても大丈夫です。時間が無くなりそうな時はキリの良いところで終了し、できるだけ対戦相手の前で勝利ポイント計算、負傷ロールとクルセイドカードの処理をお願いします。ゲーム終了時に、以下のように勝利ポイントを追加しても良いです。
                        </p>
                        <ul>
                          <li>
                          時間通り到着した（VP+5）                           </li>
                          <li>
                          遅刻してもお相手に連絡した（VP+5）
                          </li>
                          <li>
                          ゲームに必要なもの（メジャー、ダイス、コデックス）を持ってきた（VP+5）
                          </li>
                          <li>
                          お相手にロスターを渡した（VP+5） 
                          </li>
                          <li>
                            バトルレディのアーミーを使った（VP+5） 
                          </li>
                          <li>
                            バトルレポートを書いた（補給PT+1） 
                          </li>
                        </ul> 
                        <p>
                        </p>
                      </section>
                    </div>
                    <div className="column is-6">
                      <section className="section">
                        <p>採点したら、勝敗の結果はキャンペーンマスターまでお知らせください。ウォーハンマーストア神保町に掲示しているヴィジルスの星域図に反映させます。キャンペーンが終わるとき、ヴィジルスを掌握しているのは帝国側でしょうか、それとも混沌側でしょうか？そしてどのような最高の物語が紡ぎあげるのでしょう？</p>
                        <h3>一番大事なルール</h3>
                        <p>楽しくやりましょう！ルールの解釈はストアマネージャーに聞いてみて、意見の相違があればダイスロールで解決して残りのゲームを楽しみましょう。もし気になることやトラブルがあれば、気軽にキャンペーンマスターまでご連絡ください</p>
                      </section>
                    </div>

                  </div>

                  {/* <Features gridItems={intro.blurbs} /> */}
                  {/* <div className="columns">
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/products">
                        See all products
                      </Link>
                    </div>
                  </div> */}
                  <div className="column is-7">
                    <h3 className="has-text-weight-semibold is-size-2" id="blog" style={{
                          backgroundColor: "rgb(255, 68, 0)",
                          color: "white",
                          padding: "0.25rem",
                          marginTop: "0.5rem",
                        }}>
                      進歩報告とバトルレポート
                    </h3>
                    更新中
                    {/* <BlogRoll /> */}
                    {/* <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/blog">
                        前の
                      </Link>
                    </div> */}
                  </div>

                  
                </div>
              
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
            title
            text
          }
          heading
          description
        }
      }
    }
  }
`;
