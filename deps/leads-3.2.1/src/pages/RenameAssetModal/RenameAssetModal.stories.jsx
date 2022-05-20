import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import Button from '../../atoms/Button';
import Option from '../../atoms/Option';
import { StoryHeader } from '../../../story-helpers';
import RenameAssetModal from '../RenameAssetModal';
import withColor, { colors } from '../../theme/Color';
import { types, TypographyComponent } from '../../theme/Typography';

const ColorType = withColor(TypographyComponent);

const slugMessage = () => {
  if (Math.random() > 0.5) {
    return (
      <ColorType
        type={types.supportContent}
        color={colors.green}
      >
        This slug is ok
      </ColorType>
    );
  }
  return (
    <ColorType
      type={types.supportContent}
      color={colors.redDark}
    >
      This slug is bad
    </ColorType>
  );
};

export default class RenameAssetModalStories extends Component {
  constructor(props) {
    super(props);

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleRenameOnChange = this.handleRenameOnChange.bind(this);
    this.handleSlugOnChange = this.handleSlugOnChange.bind(this);
    this.setSelectedUrl = this.setSelectedUrl.bind(this);
    this.openModalError = this.openModalError.bind(this);
    this.closeModalError = this.closeModalError.bind(this);
    this.setSelectedUrlError = this.setSelectedUrlError.bind(this);

    this.state = {
      modal1Open: false,
      modal2Open: false,
      modal3Open: false,
      selectedUrl: 'bar',
      isOpenError: false,
      selectedUrlError: 'bar',
      renameValue: 'My Current Name',
    };
  }

  setSelectedUrl({ value }) {
    this.setState(() => ({ selectedUrl: value }));
  }

  setSelectedUrlError({ value }) {
    this.setState(() => ({ selectedUrlError: value }));
  }

  openModal(modal) {
    const openModals = {
      modal1Open: modal === 1,
      modal2Open: modal === 2,
      modal3Open: modal === 3,
    };
    this.setState(() => openModals);
  }

  openModalError() {
    this.setState(() => ({ isOpenError: true }));
  }

  closeModal() {
    this.setState(() => ({
      modal1Open: false,
      modal2Open: false,
      modal3Open: false,
    }));
  }

  closeModalError() {
    this.setState(() => ({ isOpenError: false }));
  }

  handleRenameOnChange({ target }) {
    this.setState(() => ({
      renameValue: target.value,
    }));
  }

  handleSlugOnChange({ target }) {
    this.setState(() => ({
      slugValue: target.value,
    }));
  }

  render() {
    const {
      modal1Open,
      modal2Open,
      modal3Open,
    } = this.state;

    return (
      <div>
        <StoryHeader>Rename Modal</StoryHeader>
        <Button onClick={() => this.openModal(1)}>Rename Modal</Button>
        <RenameAssetModal
          isOpen={modal1Open}
          assetType="Funnel"
          assetName={this.state.renameValue}
          slugValue={this.state.slugValue}
          onClose={this.closeModal}
          handleOnChange={this.handleRenameOnChange}
          onSlugChange={this.handleSlugOnChange}
          onSave={() => {}}
          selectOptions={[
            <Option key="1" primaryText="my Option 1" value="foo" selected={this.state.selectedUrl === 'foo'} />,
            <Option key="2" primaryText="my Option 2" value="bar" selected={this.state.selectedUrl === 'bar'} />,
            <Option key="3" primaryText="my Option 3" value="baz" selected={this.state.selectedUrl === 'baz'} />,
          ]}
          onSelectChange={this.setSelectedUrl}
          selectValue={this.state.selectedUrl}
        />
        <StoryHeader>Rename Modal Error</StoryHeader>
        <Button onClick={() => this.openModal(2)}>Rename Modal Error</Button>
        <RenameAssetModal
          isOpen={modal2Open}
          assetType="Funnel"
          assetName={this.state.renameValue}
          slugValue={this.state.slugValue}
          onClose={() => this.closeModal()}
          handleOnChange={this.handleRenameOnChange}
          onSlugChange={this.handleSlugOnChange}
          onSave={() => {}}
          selectOptions={[
            <Option key="1" primaryText="my Option 1" value="foo" selected={this.state.selectedUrlError === 'foo'} />,
            <Option key="2" primaryText="my Option 2" value="bar" selected={this.state.selectedUrlError === 'bar'} />,
            <Option key="3" primaryText="my Option 3" value="baz" selected={this.state.selectedUrlError === 'baz'} />,
          ]}
          onSelectChange={this.setSelectedUrl}
          selectValue={this.state.selectedUrlError}
          renameError="Funnel name is already in use."
          slugMessage={slugMessage}
          slugHasError
        />

        <StoryHeader>Rename Modal Busy</StoryHeader>
        <Button onClick={() => this.openModal(3)}>Rename Modal Error</Button>
        <RenameAssetModal
          loadingState="loading"
          isOpen={modal3Open}
          assetType="Funnel"
          assetName={this.state.renameValue}
          onClose={() => this.closeModal()}
          handleOnChange={this.handleRenameOnChange}
          onSave={() => { console.log('should never log, loading disables clicking on save button'); }}
        />
      </div>
    );
  }
}

const stories = storiesOf('Pages/RenameAssetModal', module);
stories.addDecorator(withKnobs);
stories.add(
  'Overview',
  withInfo(`
    Description or documentation about aaaa (supports markdown).
  `)(() => (
    <RenameAssetModalStories />
  ))
);
