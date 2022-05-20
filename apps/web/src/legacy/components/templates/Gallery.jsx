import React from 'react'
import PropTypes from 'prop-types'
import NoSsr from '@material-ui/core/NoSsr'
import Link from 'next/link'
import styled from 'styled-components'
// Components
import HeadlineSection from '../layout/HeadlineSection'
import Layout from '../Layout'
import ReadyToGrow from '../product/ReadyToGrow'
import Templates from './Templates'
// Constants
import {
  TemplateState,
  TemplateActions,
  TemplateKind,
} from '../../constants/templates'

const TabLink = styled(Link)`
  font-family: 'Apercu Pro';
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.75rem;
  text-decoration: none;
  color: #0f0c09;
  opacity: 0.35;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  &.active-template {
    opacity: 1;
    color: #603eff;
    border-bottom: 3px solid #603eff;
  }
`

const TabHeadingContainer = styled.div`
  z-index: 1600;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  @media (min-width: 1025px) {
    padding-top: 2.5rem;
  }
`

const TabHeadingFlexbox = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
`

const FallbackDiv = styled.div`
  height: 100vh;
  width: 100%;
  background-color: rgb(247, 247, 247);
  padding: 24px;
`

const HeadlineContainer = styled.div`
  & [class*='HeadlineSection__Caption'] {
    @media (max-width: 479px) {
      display: none;
    }
  }
`

const Gallery = ({
  state,
  actions,
  hideBar,
  SEO,
  kind,
  children,
  handlePreviewTemplate,
  isPreviewing,
}) => {
  return (
    <Layout hideBar={hideBar}>
      {children && <NoSsr>{children}</NoSsr>}
      {SEO}
      <HeadlineContainer>
        <HeadlineSection
          title="Choose a template you love."
          caption="Grow your business faster when you start with a high-converting, mobile-responsive template."
        />
      </HeadlineContainer>
      <TabHeadingContainer name="tab-toolbar">
        <TabHeadingFlexbox>
          <TabLink
            partiallyActive
            href="/templates"
            activeClassName="active-template"
          >
            Landing Pages
          </TabLink>
          <TabLink
            partiallyActive
            href="/website-templates"
            activeClassName="active-template"
          >
            Websites
          </TabLink>
        </TabHeadingFlexbox>
      </TabHeadingContainer>
      <NoSsr fallback={<FallbackDiv />}>
        <Templates
          state={state}
          actions={actions}
          kind={kind}
          onPreviewTemplate={handlePreviewTemplate}
          isPreviewing={isPreviewing}
        />
      </NoSsr>
      <ReadyToGrow zIndex={1200} />
    </Layout>
  )
}

Gallery.propTypes = {
  state: TemplateState.isRequired,
  actions: TemplateActions.isRequired,
  hideBar: PropTypes.bool,
  SEO: PropTypes.node,
  kind: PropTypes.oneOf([TemplateKind.LandingPage, TemplateKind.Site])
    .isRequired,
  handlePreviewTemplate: PropTypes.func.isRequired,
  children: PropTypes.node,
  isPreviewing: PropTypes.bool.isRequired,
}

Gallery.defaultProps = { hideBar: false, SEO: null, children: null }

export default Gallery
