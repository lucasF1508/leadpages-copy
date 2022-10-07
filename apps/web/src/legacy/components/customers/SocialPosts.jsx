// Note: currently only supports instagram and twitter, though additional integrations could be added in the future
import React from 'react'
import { styled } from '@design'
import PropTypes from 'prop-types'
import InstagramEmbed from 'react-instagram-embed'
import { TwitterTweetEmbed } from 'react-twitter-embed'

const OuterContainer = styled('div', {
  display: 'block',
  width: '90%',
  maxWidth: '1140px',
  mx: 'auto',
  marginBottom: '6rem',

  '@media (max-width: 768px)': {
    width: '100%',
  },

  '@media (max-width: 1200px)': {
    width: '95%',
  },
})

const FlexRowContainer = styled('div', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  maxWidth: '1140px',

  '@media (max-width: 768px)': {
    display: 'block',
    width: '95%',
    minWidth: '330px',
    mx: 'auto',
  },
})

const FlexColumn = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

const FlexColumnLeft = styled(FlexColumn, {
  width: '40%',
  margin: '1rem',

  '@media (max-width: 900px)': {
    width: '45%',
  },

  '@media (max-width: 768px)': {
    width: '80%',
    margin: '2rem auto',
    minWidth: '330px',
  },

  '@media (max-width: 600px)': {
    width: '330px',
    margin: '0rem auto',
    padding: 0,
  },
})
const FlexColumnRight = styled(FlexColumn, {
  width: '55%',
  margin: '1rem',

  '@media (max-width: 900px)': {
    width: '50%',
  },

  '@media (max-width: 768px)': {
    width: '80%',
    margin: '2rem auto',
    minWidth: '330px',
  },

  '@media (max-width: 600px)': {
    width: '330px',
    margin: '0rem auto',
    padding: 0,
  },
})

const TweetHolder = styled('div', {
  margin: '1rem auto',
  width: '100%',

  '@media (max-width: 768px)': {
    justifyContent: 'center',
    maxWidth: '500px',
  },

  '@media (max-width: 600px)': {
    '&.hideOnMobile': {
      display: 'none',
    },
  },
})

const GramHolder = styled('div', {
  margin: '1rem auto',
  width: '100%',

  '@media (max-width: 768px)': {
    maxWidth: '500px',
    justifyContent: 'center',
  },

  '@media (max-width: 600px)': {
    maxWidth: '330px',

    '&.hideOnMobile': {
      display: 'none',
    },
  },
})

const SocialPosts = ({ socialPostsObject }) => (
  <OuterContainer>
    <FlexRowContainer>
      <FlexColumnLeft>
        {/* post renderer */}
        {socialPostsObject.leftColumn.map(
          ({ type, src, shouldHideOnMobile }, index) => {
            if (type === 'twitter')
              return (
                <TweetHolder key={index}>
                  <TwitterTweetEmbed tweetId={src} />
                </TweetHolder>
              )
            if (type === 'instagram')
              return (
                <GramHolder key={index}>
                  <InstagramEmbed url={src} hideCaption={true} />
                </GramHolder>
              )
            return null
          }
        )}
      </FlexColumnLeft>
      <FlexColumnRight>
        {/* post renderer */}
        {socialPostsObject.rightColumn.map(
          ({ type, src, shouldHideOnMobile }, index) => {
            if (type === 'twitter')
              return (
                <TweetHolder key={index}>
                  <TwitterTweetEmbed tweetId={src} />
                </TweetHolder>
              )
            if (type === 'instagram')
              return (
                <GramHolder
                  key={index}
                  className={shouldHideOnMobile ? 'hideOnMobile' : ''}
                >
                  <InstagramEmbed
                    style={{ width: '100%', height: '100%' }}
                    url={src}
                    hideCaption={true}
                  />
                </GramHolder>
              )
            return null
          }
        )}
      </FlexColumnRight>
    </FlexRowContainer>
  </OuterContainer>
)

SocialPosts.defaultProps = {
  socialPostsObject: {},
}

SocialPosts.propTypes = {
  socialPostsObject: PropTypes.object,
}

export default SocialPosts
