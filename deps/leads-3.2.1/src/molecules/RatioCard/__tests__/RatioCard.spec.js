import React from 'react';
import { shallow } from 'enzyme';

import RatioCard from '../RatioCard';
import styles from '../RatioCard.css';

describe('RatioCard Component', () => {
  let props;
  let ratioCard;

  beforeEach(() => {
    props = {
      thumbnailFullUrl: 'https://mythumbnail.com',
      name: 'cool thumb',
      isActive: false,
      onClick: jest.fn(),
      primary: null,
      secondary: null
    };
    ratioCard = shallow(<RatioCard {...props} />);
    ratioCard.setState({ imageLoadingStatus: 'success' });
  });

  describe('Component', () => {
    it('should not render an active indicator if isActive is false', () => {
      expect(
        ratioCard.find({ 'data-qa-selector': 'active-indicator' }).length
      ).toEqual(0);
    });

    it('should render an active indicator if isActive is true', () => {
      ratioCard.setProps({ isActive: true });
      expect(
        ratioCard.find({ 'data-qa-selector': 'active-indicator' }).length
      ).toEqual(1);
    });

    it('should not render a loading indicator if the image has loaded', () => {
      expect(ratioCard.find('RatioCardLoading').props().isLoading).toEqual(
        false
      );
    });

    it('should render a loading indicator if the image is loading', () => {
      ratioCard.setState({ imageLoadingStatus: 'loading' });
      expect(ratioCard.find('RatioCardLoading').props().isLoading).toEqual(
        true
      );
    });

    it('should render an image with the card thumbnail', () => {
      const { alt, src } = ratioCard
        .find({ 'data-qa-selector': 'thumbnail-image' })
        .props();
      expect(alt).toEqual(props.name);
      expect(src).toEqual(props.thumbnailFullUrl);
    });

    it('should not add the image overlay if the image is loading', () => {
      ratioCard.setState({ imageLoadingStatus: 'loading' });
      expect(
        ratioCard.find({ 'data-qa-selector': 'image-overlay' }).length
      ).toEqual(0);
    });

    it('should add the image overlay if the image is not loading', () => {
      expect(
        ratioCard.find({ 'data-qa-selector': 'image-overlay' }).length
      ).toEqual(1);
    });

    it('should not add the overlayWithOpacity class if there are no primary, secondary, or children props', () => {
      expect(ratioCard.find(`.${styles.overlayWithOpacity}`).length).toEqual(0);
    });

    it('should not add the overlayWithOpacity class if there is a primary prop', () => {
      const primary = {
        text: 'primary-text',
        to: 'primary-to',
        href: 'primary-href'
      };
      ratioCard.setProps({ primary });

      expect(ratioCard.find(`.${styles.overlayWithOpacity}`).length).toEqual(1);
      expect(
        ratioCard.find({ 'data-qa-selector': 'overlay-button-primary' }).length
      ).toEqual(1);
    });

    it('should not add the overlayWithOpacity class if there is a secondary prop', () => {
      const secondary = {
        text: 'secondary-text',
        to: 'secondary-to',
        href: 'secondary-href'
      };
      ratioCard.setProps({ secondary });

      expect(ratioCard.find(`.${styles.overlayWithOpacity}`).length).toEqual(1);
      expect(
        ratioCard.find({ 'data-qa-selector': 'overlay-button-secondary' })
          .length
      ).toEqual(1);
    });
  });
});
