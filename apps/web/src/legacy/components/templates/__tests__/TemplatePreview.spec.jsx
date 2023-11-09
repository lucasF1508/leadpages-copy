import React from 'react'
import {
  renderWithTheme,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react'
import { TemplateKind } from '../../../constants/templates'
import TemplatePreview from '../TemplatePreview'
import { getTrialId } from '../../../utils/trials'

jest.mock('gatsby', () => {
  const originalModule = jest.requireActual('gatsby')
  return {
    __esModule: true,
    ...originalModule,
    graphql: jest.fn().mockReturnValue({}),
    useStaticQuery: jest.fn().mockReturnValue({
      planData: {
        trialPlans: {
          month: {
            pro: {
              id: 'fake-plan-id-123',
            },
          },
        },
      },
    }),
  }
})

describe('TemplatePreview', () => {
  let props

  beforeEach(() => {
    props = {
      template: {
        template: {
          name: 'My Wedding Template',
          previewUrl: 'https://my-preview-url.com/id-1',
          fullPageScreenshotUrlWebp:
            'https://storage.googleapis.com/lp-template-assets-test/screenshots/test-fullpage.webp',
          fullPageScreenshotUrlWebpAltText: 'Capturing leads',
        },
        _meta: {
          id: 'id-1',
        },
        kind: TemplateKind.LandingPage,
      },
      goBack: jest.fn(),
    }
  })

  it('should render the template name', async () => {
    renderWithTheme(<TemplatePreview {...props} />)

    expect(screen.getByText('My Wedding Template')).toBeInTheDocument()
  })

  it("should render a CTA button to 'Use This Template'", async () => {
    delete window.location
    window.location = { assign: jest.fn() }
    renderWithTheme(<TemplatePreview {...props} />)
    fireEvent.click(screen.getByRole('button', { name: 'Use this Template' }))
    const trialId = getTrialId()
    await waitFor(() =>
      expect(window.location.assign).toHaveBeenCalledWith(
        `https://my.leadpages.com/order-leadpages/fake-plan-id-123/t/${trialId}/?lp_template_data=page-id-1`
      )
    )
  })

  it('should render a back button', () => {
    renderWithTheme(<TemplatePreview {...props} />)

    fireEvent.click(
      screen.getByRole('button', { name: 'Back to All Templates' })
    )
    expect(props.goBack).toHaveBeenCalled()
  })

  it('should render the template preview', () => {
    renderWithTheme(<TemplatePreview {...props} />)
    expect(screen.getByTitle('Preview')).toHaveAttribute(
      'src',
      props.template.previewUrl
    )
  })

  it('should render the template full page screenshot image', async () => {
    renderWithTheme(<PreviewTemplate {...props} />)
    const imgElement = screen.getByTestId('fullPageScreenshotUrlWebp')

    expect(imgElement).toBeInTheDocument()
    expect(imgElement).toHaveAttribute(
      'src',
      props.template.template.fullPageScreenshotUrlWebp
    )
    expect(imgElement).toHaveAttribute(
      'alt',
      props.template.template.fullPageScreenshotUrlWebpAltText
    )
  })

  it('should provide a toggle to go from desktop to mobile preview', () => {
    renderWithTheme(<TemplatePreview {...props} />)

    const desktop = screen.getByText('Desktop')
    const mobile = screen.getByText('Mobile')
    expect(desktop.parentElement).toHaveAttribute('aria-selected', 'true')
    expect(mobile.parentElement).toHaveAttribute('aria-selected', 'false')

    fireEvent.click(mobile)
    expect(desktop.parentElement).toHaveAttribute('aria-selected', 'false')
    expect(mobile.parentElement).toHaveAttribute('aria-selected', 'true')
  })
})
