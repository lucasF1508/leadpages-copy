// Note: Gatsby preprocesses all GraphQL queries when compiling, so all fragments defined here can be accessed by name from any other GraphQL query. See https://www.gatsbyjs.org/docs/using-graphql-fragments/

import { graphql } from 'gatsby';

/* eslint-disable import/prefer-default-export */
export const FragmentDefinitions = graphql`
  # PLAN FRAGMENTS #
  fragment generalPlans on PlanData {
    generalPlans {
      month {
        advanced {
          billingFrequency
          buttonText
          description
          equivalentKeys
          heading
          id
          label
          monthlyPrice
          period
          planLevel
          price
        }
        pro {
          billingFrequency
          buttonText
          description
          equivalentKeys
          heading
          id
          label
          monthlyPrice
          period
          planLevel
          price
        }
        standard {
          billingFrequency
          buttonText
          description
          equivalentKeys
          heading
          id
          label
          monthlyPrice
          period
          planLevel
          price
        }
      }
      year {
        advanced {
          billingFrequency
          buttonText
          description
          equivalentKeys
          heading
          id
          label
          monthlyPrice
          period
          planLevel
          price
        }
        pro {
          billingFrequency
          buttonText
          description
          equivalentKeys
          heading
          id
          label
          monthlyPrice
          period
          planLevel
          price
        }
        standard {
          billingFrequency
          buttonText
          description
          equivalentKeys
          heading
          id
          label
          monthlyPrice
          period
          planLevel
          price
        }
      }
    }
  }
  fragment trialPlans on PlanData {
    trialPlans {
      month {
        pro {
          billingFrequency
          buttonText
          description
          equivalentKeys
          heading
          id
          label
          monthlyPrice
          period
          planLevel
          price
        }
        standard {
          billingFrequency
          buttonText
          description
          equivalentKeys
          heading
          id
          label
          monthlyPrice
          period
          planLevel
          price
        }
      }
      year {
        pro {
          billingFrequency
          buttonText
          description
          equivalentKeys
          heading
          id
          label
          monthlyPrice
          period
          planLevel
          price
        }
        standard {
          billingFrequency
          buttonText
          description
          equivalentKeys
          heading
          id
          label
          monthlyPrice
          period
          planLevel
          price
        }
      }
    }
  }
  fragment compareTrialPlans on PlanData {
    trialPlans {
      month {
        advanced {
          billingFrequency
          buttonText
          description
          equivalentKeys
          heading
          id
          label
          monthlyPrice
          period
          planLevel
          price
        }
        pro {
          billingFrequency
          buttonText
          description
          equivalentKeys
          heading
          id
          label
          monthlyPrice
          period
          planLevel
          price
        }
        standard {
          billingFrequency
          buttonText
          description
          equivalentKeys
          heading
          id
          label
          monthlyPrice
          period
          planLevel
          price
        }
      }
      year {
        advanced {
          billingFrequency
          buttonText
          description
          equivalentKeys
          heading
          id
          label
          monthlyPrice
          period
          planLevel
          price
        }
        pro {
          billingFrequency
          buttonText
          description
          equivalentKeys
          heading
          id
          label
          monthlyPrice
          period
          planLevel
          price
        }
        standard {
          billingFrequency
          buttonText
          description
          equivalentKeys
          heading
          id
          label
          monthlyPrice
          period
          planLevel
          price
        }
      }
    }
  }
  fragment variantTrialPlans on PlanData {
    variantTrialPlans {
      month {
        pro {
          billingFrequency
          buttonText
          description
          equivalentKeys
          heading
          id
          label
          monthlyPrice
          period
          planLevel
          price
        }
        standard {
          billingFrequency
          buttonText
          description
          equivalentKeys
          heading
          id
          label
          monthlyPrice
          period
          planLevel
          price
        }
      }
      year {
        pro {
          billingFrequency
          buttonText
          description
          equivalentKeys
          heading
          id
          label
          monthlyPrice
          period
          planLevel
          price
        }
        standard {
          billingFrequency
          buttonText
          description
          equivalentKeys
          heading
          id
          label
          monthlyPrice
          period
          planLevel
          price
        }
      }
    }
  }
  # IMAGE FRAGMENTS #
  # Image defaults are defined under gatsby-plugin-sharp in gatsby-config.js. All image fragments use defaults unless overridden.
  fragment full on File {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  fragment constrained on File {
    childImageSharp {
      gatsbyImageData(layout: CONSTRAINED)
    }
  }
  fragment constrainedAuto on File {
    childImageSharp {
      gatsbyImageData(layout: CONSTRAINED, formats: [AUTO])
    }
  }
  fragment fixed on File {
    childImageSharp {
      gatsbyImageData(layout: FIXED)
    }
  }
`;
