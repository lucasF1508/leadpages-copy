import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { cx, css } from 'emotion';
import { TabGroup, TabLink } from '../../molecules/Tabs';
import { Modal, ModalHeader } from '../../templates/Modal';

export const defaultTabs = {
  url: 'URL',
  wordpress: 'Wordpress & HTML',
  template: 'Share'
};

export const campaignTabs = {
  url: 'URL',
  wordpress: 'Wordpress'
};

const modalContentClassName = css`
  min-height: 426px;
`;

export default class PublishOptionsModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tabView: props.tabView
    };

    this.setStateHelper = this.setStateHelper.bind(this);
    this.setTabView = this.setTabView.bind(this);
    this.renderModalTab = this.renderModalTab.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.tabView !== this.state.tabView) {
      this.setTabView(nextProps.tabView);
    }
  }

  setStateHelper(newState) {
    return this.setState(() => ({ ...newState }));
  }

  setTabView(view) {
    this.props.setTabView(view);
    this.setStateHelper({ tabView: view });
    return view;
  }

  renderModalTab(view) {
    return (
      <TabLink
        key={view}
        active={this.state.tabView === view}
        onClick={() => this.setTabView(view)}
      >
        {view}
      </TabLink>
    );
  }

  render() {
    const {
      className,
      children,
      isOpen,
      onAfterOpen,
      onRequestClose,
      tabViews,
      title
    } = this.props;
    const isTabbed = Object.keys(tabViews).length >= 2;

    return (
      <Modal
        isOpen={isOpen}
        onAfterOpen={onAfterOpen}
        onRequestClose={onRequestClose}
        className={cx('publishOptionsModal', className)}
      >
        <ModalHeader tabs={isTabbed} onClose={onRequestClose}>
          <h1>{title}</h1>
          {isTabbed && (
            <TabGroup small>
              {Object.keys(tabViews).map(view =>
                this.renderModalTab(tabViews[view])
              )}
            </TabGroup>
          )}
        </ModalHeader>
        <div className={cx({ [modalContentClassName]: isTabbed })}>
          {children}
        </div>
      </Modal>
    );
  }
}

PublishOptionsModal.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  onAfterOpen: PropTypes.func,
  onRequestClose: PropTypes.func,
  setTabView: PropTypes.func,
  tabView: PropTypes.string,
  tabViews: PropTypes.objectOf(PropTypes.string),
  title: PropTypes.string
};

PublishOptionsModal.defaultProps = {
  className: '',
  children: null,
  isOpen: false,
  onAfterOpen: () => {},
  onRequestClose: () => {},
  setTabView: () => {},
  tabView: '',
  tabViews: defaultTabs,
  title: 'Publishing Options'
};
