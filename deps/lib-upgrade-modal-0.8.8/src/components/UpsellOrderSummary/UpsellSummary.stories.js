import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { storiesOf } from '@storybook/react';
import { MarketingThemeProvider } from '@lp/ui';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs';

import UpsellOrderSummary from './index.jsx';
import { UPSELLS } from '../../constants';

const useStyles = makeStyles(theme => ({
  bottomMenu: {
    borderTop: '1px solid #C3C2C1',
    position: 'fixed',
    bottom: 0,
    left: 0,
    margin: 0,
    maxWidth: '100%',
    padding: theme.spacing(0, 9),
    width: `calc(100% - ${theme.spacing(18)}px)`,
  },
  paper: {
    marginBottom: 0,
  },
}));

const stories = storiesOf('Components/Upsell Product Order Summary', module);
stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <MarketingThemeProvider>
    <UpsellOrderSummary
      confirmModalTitle="Buy Now to Unlock Your Course"
      product={UPSELLS.convertedECourse}
      handleBuy={() => alert('Thank you for buying the course!')}
      handleDecline={() => alert('On to subdomain selection!')}
    />
  </MarketingThemeProvider>
));

const OrderSummaryBottomMenu = () => {
  const classes = useStyles();
  return (
    <MarketingThemeProvider>
      <UpsellOrderSummary
        hideFinePrint
        hideLineItems
        className={classes.bottomMenu}
        confirmModalTitle="Buy Now to Unlock Your Course"
        product={UPSELLS.convertedECourse}
        handleBuy={() => alert('Thank you for buying the course!')}
        handleDecline={() => alert('On to subdomain selection!')}
        PaperProps={{
          elevation: 0,
          className: classes.paper,
        }}
      />
    </MarketingThemeProvider>
  );
};

stories.add('No line items (Mobile Menu)', () => <OrderSummaryBottomMenu />);

stories.add('With Knobs', () => {
  const product1title = text('Product 1 name', 'The main thing');
  const product1price = number('Product 1 price', 100.2);
  const product1discount = number('Product 1 discounted price', 25.99);

  const product2title = text(
    'Product 2 name',
    'Something you get for free with it',
  );
  const product2price = number('Product 2 price', 200.89);
  const product2discount = number('Product 2 discounted price', 0);

  const product3title = text('Product 3 name', 'A third thing?');
  const product3price = number('Product 3 price', 10.9);
  const product3discount = number('Product 3 discounted price', 5);
  const isBilledNow = boolean('Is billed now?', true);
  const finePrint = text(
    'Fine print',
    'Course link will be delivered via email. Retain lifetime course access whether you keep your Leadpages account or cancel.',
  );

  const hasFetchedTax = boolean('Has fetched tax? ', true);
  const tax = number('Tax', 3.0);

  const upsellWithKnobs = {
    isBilledNow,
    finePrint: [finePrint],
    lineItems: [
      {
        price: product1price,
        discountedPrice: product1discount,
        title: product1title,
      },
      {
        price: product2price,
        discountedPrice: product2discount,
        title: product2title,
      },
      {
        price: product3price,
        discountedPrice: product3discount,
        title: product3title,
      },
      {
        price: hasFetchedTax ? tax : null,
        title: 'Plus Tax',
      },
    ],
  };

  return (
    <MarketingThemeProvider>
      <UpsellOrderSummary
        product={upsellWithKnobs}
        handleBuy={() => alert('Thanks!')}
        handleDecline={() => alert('No problem!')}
      />
    </MarketingThemeProvider>
  );
});
