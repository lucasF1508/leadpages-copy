import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Fade, Button, Chip } from '@material-ui/core';
import { ShadowBox } from '@lp/ui';
import clsx from 'clsx';

import { TemplateKind } from '../types/mandrel';
import SiteLoading from '../svg/SiteLoading.svg';
import LandingPageLoading from '../svg/LandingPageLoading.svg';
import { UiTemplate } from '../lib/template-ui-helpers';
import supportsWebP from '../lib/supports-webp';

const useStyles = makeStyles(
  ({ breakpoints, spacing, transitions }) => ({
    thumbnail: {
      [breakpoints.between(414, 1025)]: {
        maxWidth: '50%', // Material UI does not support adding custom grid keys, so we need to override a subset
        flexBasis: '50%',
      },
      [breakpoints.up(1920)]: {
        maxWidth: '25%', // Material UI does not support adding custom grid keys, so we need to override a subset
        flexBasis: '25%',
      },
    },
    templateName: {
      margin: `${spacing(1.5)}px 0`,
      color: '#090c12', // This color is currently only defined in the product theme
    },
    item: ({ templateKind }: { templateKind: string }) => ({
      padding: 0,
      width: '100%',
      position: 'relative',
      paddingBottom: templateKind === TemplateKind.Leadpage ? '63%' : '111%',
      overflow: 'visible',
    }),
    itemInner: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
    },
    itemInnerLoaded: { opacity: 1 },
    imgContainer: { overflow: 'hidden', height: '100%', width: '100%' },
    img: {
      width: '100%',
      zIndex: -1,
    },
    overlay: {
      position: 'absolute',
      opacity: 0,
      top: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(255,255,255,0.8)',

      '&:hover': {
        opacity: 1,
      },

      transition: transitions.create('opacity', {
        easing: transitions.easing.sharp,
        duration: transitions.duration.shortest,
      }),
    },
    actions: {
      height: '100%',
      '& button:not(:last-child)': {
        marginBottom: spacing(1.5),
      },
    },
    newFlag: {
      position: 'absolute',
      top: spacing(1.5),
      right: spacing(-1),
      boxShadow: '0 10px 20px -5px rgba(0,0,0,0.08)',
      textTransform: 'uppercase',
    },

    isLoading: {
      opacity: 1,
    },
  }),
  { classNamePrefix: 'TemplateThumbnail' },
);

export type TemplateThumbailProps = {
  template: UiTemplate;
  onPreviewTemplate: (template: UiTemplate) => void;
  onSelectTemplate?: (template: UiTemplate) => void;
};

const getImageSrc = (template: UiTemplate): string => {
  if (template.ui.isPlaceholder) {
    return '';
  }

  const webPThumb = template.template.thumbnailUrlWebp || '';
  return webPThumb && supportsWebP() ? webPThumb : template.template.thumbnailUrl || '';
};

const TemplateThumbnail: React.FC<TemplateThumbailProps> = ({
  template,
  onPreviewTemplate,
  onSelectTemplate,
}) => {
  const classes = useStyles({ templateKind: template.kind });
  const [hasLoaded, setHasLoaded] = useState(false);
  const isNew = template.template.tags && template.template.tags.includes('new');

  const showPlaceholder = template.ui.isPlaceholder || !hasLoaded;

  const handleImgLoad = () => {
    setHasLoaded(true);
  };

  return (
    <Grid key={template._meta.id} item xs={12} sm={6} md={4} className={classes.thumbnail}>
      <ShadowBox raised="hover" className={classes.item}>
        <div className={classes.itemInner}>
          <div className={classes.imgContainer}>
            <img
              className={classes.img}
              alt={template.template.name}
              onLoad={handleImgLoad}
              src={getImageSrc(template)}
              data-qa-selector="template-thumbnail-image"
            />
            <div className={clsx(classes.overlay, showPlaceholder && classes.isLoading)}>
              <div className={classes.imgContainer}>
                <img
                  className={classes.img}
                  src={template.kind === TemplateKind.Leadpage ? LandingPageLoading : SiteLoading}
                  alt="Loading"
                />
              </div>
            </div>
          </div>
          {hasLoaded && (
            <div className={classes.overlay}>
              <Grid
                container
                direction="column"
                alignItems="center"
                justify="center"
                className={classes.actions}
              >
                {onSelectTemplate && (
                  <Button
                    id={`select-template-${template.ui.guid}`}
                    onClick={() => onSelectTemplate(template)}
                  >
                    Start Building
                  </Button>
                )}
                <Button
                  id={`preview-template-${template.ui.guid}`}
                  variant={onSelectTemplate ? 'text' : 'contained'}
                  onClick={() => onPreviewTemplate(template)}
                  data-qa-selector="overlaid-preview-button"
                >
                  Preview
                </Button>
              </Grid>
            </div>
          )}
          {isNew && (
            <Fade in={hasLoaded} timeout={{ enter: 300, exit: 0 }}>
              <div>
                <Chip className={classes.newFlag} color="secondary" label="New" />
              </div>
            </Fade>
          )}
        </div>
      </ShadowBox>
      <Typography variant="body1" className={classes.templateName} style={{ minHeight: '24px' }}>
        {!showPlaceholder && template.template.name}
      </Typography>
    </Grid>
  );
};

export default TemplateThumbnail;
