import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import FullWidthImage from "../components/FullWidthImage";
import twitter from "../img/social/twitter.svg";
import discord from "../img/discord-icon.svg";

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
      <div className="column">
        <div className="column is-10 is-offset-1">
          <h1 className="title">
          「ヴィジルスの孤立」ウォーハンマーストア神保町キャンペーン
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
      </div>

      <FullWidthImage img={heroImage} title="キャンペーン参加者" subheading={subheading} id="members" />
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="columns">
                    <div className="column is-12">
                      <h3 className="has-text-weight-semibold is-size-2" id="rules">
                        {heading}
                      </h3>
                      {/* <p>{description}</p> */}
                    </div>
                  </div>
                  <Features gridItems={intro.blurbs} />
                  {/* <div className="columns">
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/products">
                        See all products
                      </Link>
                    </div>
                  </div> */}
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      進歩報告とバトルレポート
                    </h3>
                    <BlogRoll />
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

      <div className="content has-text-centered has-text-white">
        <h3 id="ability">戦域アビリティ</h3>
      </div>

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
