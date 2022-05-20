import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import anime from 'animejs';
import isEqual from 'lodash/isEqual';
import paging from './paging';
import DrawerCard from './DrawerCard';
import DrawerHeader from './DrawerHeader';
import DrawerFooter from './DrawerFooter';
import Button from '../../atoms/Button';
import Tooltip from '../../molecules/Tooltip';
import styles from './Drawer.css';

function animateOpen(drawer, drawerContent, height) {
  anime
    .timeline()
    .add({
      targets: drawer,
      offset: 0,
      height: [
        {
          value: 0,
          duration: 50,
          delay: 0,
          elasticity: 0,
          easing: 'easeOutExpo'
        },
        { value: height, duration: 500, delay: 0, elasticity: 0 }
      ]
    })
    .add({
      targets: drawerContent,
      offset: 0,
      translateY: [
        { value: -250, duration: 0, delay: 0, elasticity: 0 },
        { value: 0, duration: 500, delay: 0, elasticity: 0 }
      ]
    });
}

function animateClose(drawer, drawerContent, callback) {
  anime({
    targets: drawer,
    complete: callback,
    height: [
      {
        value: 0,
        duration: 500,
        delay: 0,
        elasticity: 0,
        easing: 'easeOutExpo'
      }
    ]
  });
}

class Drawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: props.isOpen,
      isPaged: props.isPaged,
      templates: [],
      hasNoItems: props.getHasNoItems(),
      openHeight: null
    };

    if (props.isPaged) {
      const pages = paging(props.items);
      this.state.items = pages.start();
      this.state.pages = pages;
    } else {
      this.state.items = props.items;
      this.state.hasNoItems = props.getHasNoItems();
    }

    this.closeDrawer = this.closeDrawer.bind(this);
    this.openDrawer = this.openDrawer.bind(this);
    this.getNext = this.getNext.bind(this);
    this.getPrevious = this.getPrevious.bind(this);
    this.setOpenHeight = this.setOpenHeight.bind(this);
  }

  componentDidMount() {
    this.setOpenHeight();
    /*
      This event listener was added to reset the
      hieght if the use adjusted window size.
      If the drawer is open it currently will not
      resize until being closed then open.
    */
    window.addEventListener('resize', this.setOpenHeight.bind(this, true));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isOpen !== this.props.isOpen) {
      if (nextProps.isOpen) {
        this.openDrawer();
      } else {
        this.closeDrawer();
      }
    }

    // If new items come in we want to reload the pages.
    if (!isEqual(nextProps.items, this.props.items)) {
      if (nextProps.isPaged) {
        const pages = paging(nextProps.items);
        this.setState(() => ({
          items: pages.start(),
          pages
        }));
      } else {
        this.setState(() => ({
          items: nextProps.items,
          hasNoItems: nextProps.getHasNoItems()
        }));
      }
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setOpenHeight(this, true));
  }

  getNext() {
    this.setState(() => ({
      items: this.state.pages.next()
    }));
  }

  getPrevious() {
    this.setState(() => ({
      items: this.state.pages.previous()
    }));
  }

  setOpenHeight() {
    this.setState((state, props) => {
      let openHeight = 0;
      if (this.drawer) {
        // setting the drawer height to auto
        // so we can get the animate to hieght
        const currentHeight = this.drawer.style.height;
        this.drawer.style.height = 'auto';

        // to get the true height we need the
        // images to load to thier height
        // but we can't wait for them to load
        const currentImageHeight = this.imageElement.style.height;
        this.imageElement.style.height = `${this.imageElement.clientWidth}px`;
        openHeight = `${this.drawer.clientHeight}px`;
        this.drawer.style.height = props.isOpen ? currentHeight : 0;
        this.imageElement.style.height = currentImageHeight;
      }

      return {
        openHeight
      };
    });
  }

  closeDrawer(e) {
    animateClose(this.drawer, this.drawerContent, this.props.onClose());
  }

  openDrawer(e) {
    animateOpen(this.drawer, this.drawerContent, this.state.openHeight);
    this.props.onOpen();
  }

  render() {
    const { isPaged, items } = this.state;
    const {
      header,
      subheader,
      closeTip,
      footerText,
      footerHref,
      footerLink
    } = this.props;

    return (
      <div
        ref={drawer => {
          this.drawer = drawer;
        }}
        className={classnames(styles.templateDrawer)}
      >
        <div
          ref={drawerContent => {
            this.drawerContent = drawerContent;
          }}
          className={styles.templateDrawerContent}
        >
          <div className={styles.closeButton}>
            {closeTip && (
              <Tooltip left tip={closeTip}>
                <Button
                  className={styles.button}
                  icon="close"
                  noBackground
                  onClick={this.closeDrawer}
                />
              </Tooltip>
            )}
            {!closeTip && (
              <Button
                className={styles.button}
                icon="close"
                noBackground
                onClick={this.closeDrawer}
              />
            )}
          </div>
          <DrawerHeader {...{ header, subheader }} />
          <div className={styles.templates}>
            {isPaged ? (
              <Button
                className={styles.button}
                icon="left_angle"
                noBackground
                onClick={this.getPrevious}
              />
            ) : null}
            <div className={styles.templatesWrapper}>
              {items.length !== 0 ? (
                items.map((item, i) => (
                  <div style={{ width: '32%', maxWidth: '367px' }}>
                    <item.type
                      {...item.props}
                      key={item.id}
                      imageRef={
                        i === 0
                          ? el => {
                              this.imageElement = el;
                            }
                          : null
                      }
                    />
                  </div>
                ))
              ) : (
                <DrawerCard
                  item={{}}
                  key="123"
                  imageRef={el => {
                    this.imageElement = el;
                  }}
                />
              )}
            </div>
            {isPaged ? (
              <Button
                className={styles.button}
                icon="right_angle"
                noBackground
                onClick={this.getNext}
              />
            ) : null}
          </div>
          <DrawerFooter>
            <Button
              onClick={this.closeDrawer}
              isSecondary
              href={footerHref}
              to={footerLink}
            >
              {footerText}
            </Button>
          </DrawerFooter>
        </div>
      </div>
    );
  }
}

Drawer.propTypes = {
  isOpen: PropTypes.bool,
  isPaged: PropTypes.bool,
  header: PropTypes.string,
  subheader: PropTypes.string,
  closeTip: PropTypes.string,
  footerText: PropTypes.string,
  footerHref: PropTypes.string,
  footerLink: PropTypes.string,
  getHasNoItems: PropTypes.func,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

Drawer.defaultProps = {
  isOpen: false,
  isPaged: false,
  header: '',
  subheader: '',
  closeTip: null,
  footerText: null,
  footerHref: null,
  footerLink: null,
  getHasNoItems: () => {},
  onClose: () => {},
  onOpen: () => {}
};

export default Drawer;
