/**
 * Datos de ejemplo para la página component-testing.
 * Solo Integrations en versión light.
 */

export const componentTestingData = {
  integrationsLight: {
    _key: 'integrations-light',
    _type: 'integrationsBlock',
    variant: 'light',
    cta: [{ _type: 'link', condition: 'internal', hasIcon: false, label: 'View Integrations', url: '/integrations' }],
    heading: 'Wired Into The Tools You Already Use.',
    image: null,
    label: '90+ integrations. Zero Zapier tax on the ones that matter most.',
    overline: 'INTEGRATIONS',
    subheading:
      'Connect leads directly to your CRM, email platform, or ad account. Leadpages integrates natively with HubSpot, Klaviyo, Mailchimp, Slack, and dozens more.',
  },
}

/**
 * Array de componentes para la página component-testing (solo Integrations light).
 */
export const componentTestingComponents = [componentTestingData.integrationsLight]
