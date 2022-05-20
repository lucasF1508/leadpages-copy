// Note: currently only supports instagram and twitter, though additional integrations could be added in the future
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import InstagramEmbed from 'react-instagram-embed';
import { TwitterTweetEmbed } from 'react-twitter-embed';

const OuterContainer = styled.div`
  display: block;
  width: 90%;
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 6rem;
  @media (max-width: 1200px) {
    width: 95%;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
`;

const FlexRowContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  max-width: 1140px;
  @media (max-width: 768px) {
    display: block;
    width: 95%;
    min-width: 330px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FlexColumnLeft = styled(FlexColumn)`
  width: 40%;
  margin: 1rem;
  @media (max-width: 900px) {
    width: 45%;
  }
  @media (max-width: 768px) {
    width: 80%;
    margin: 2rem auto;
    min-width: 330px;
  }
  @media (max-width: 600px) {
    width: 330px;
    margin: 0rem auto;
    padding: 0;
  }
`;
const FlexColumnRight = styled(FlexColumn)`
  width: 55%;
  margin: 1rem;
  @media (max-width: 900px) {
    width: 50%;
  }
  @media (max-width: 768px) {
    width: 80%;
    margin: 2rem auto;
    min-width: 330px;
  }
  @media (max-width: 600px) {
    width: 330px;
    margin: 0rem auto;
    padding: 0;
  }
`;

const TweetHolder = styled.div`
  margin: 1rem auto;
  width: 100%;
  @media (max-width: 768px) {
    justify-content: center;
    max-width: 500px;
  }
  @media (max-width: 600px) {
    &.hideOnMobile {
      display: none;
    }
  }
`;

const GramHolder = styled.div`
  margin: 1rem auto;
  width: 100%;
  @media (max-width: 768px) {
    max-width: 500px;
    justify-content: center;
  }
  @media (max-width: 600px) {
    max-width: 330px;
    &.hideOnMobile {
      display: none;
    }
  }
`;

const SocialPosts = ({ socialPostsObject }) => (
  <OuterContainer>
    <FlexRowContainer>
      <FlexColumnLeft>
        {/* post renderer */}
        {socialPostsObject.leftColumn.map((post, index) => {
          const { type, src, shouldHideOnMobile } = post;
          if (type === 'twitter')
            return (
              <TweetHolder key={index}>
                <TwitterTweetEmbed tweetId={src} />
              </TweetHolder>
            );
          else if (type === 'instagram')
            return (
              <GramHolder key={index}>
                <InstagramEmbed url={src} hideCaption={true} />
              </GramHolder>
            );
        })}
      </FlexColumnLeft>
      <FlexColumnRight>
        {/* post renderer */}
        {socialPostsObject.rightColumn.map((post, index) => {
          const { type, src, shouldHideOnMobile } = post;
          if (type === 'twitter')
            return (
              <TweetHolder key={index}>
                <TwitterTweetEmbed tweetId={src} />
              </TweetHolder>
            );
          else if (type === 'instagram')
            return (
              <GramHolder key={index} className={shouldHideOnMobile ? 'hideOnMobile' : ''}>
                <InstagramEmbed
                  style={{ width: '100%', height: '100%' }}
                  url={src}
                  hideCaption={true}
                />
              </GramHolder>
            );
        })}
      </FlexColumnRight>
    </FlexRowContainer>
  </OuterContainer>
);

SocialPosts.defaultProps = {
  socialPostsObject: {},
};

SocialPosts.propTypes = {
  socialPostsObject: PropTypes.object,
};

export default SocialPosts;
