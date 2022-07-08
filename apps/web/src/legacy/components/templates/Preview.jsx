import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MandrelApi from '@lp/template-gallery/dist/mandrel-api';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import ReadyToGrow from '../product/ReadyToGrow';
import Footer from '../footer/Footer';
import TemplatePreview from './TemplatePreview';
import PreviewBackdrop from './PreviewBackdrop';

import { TemplateShape, templatesBaseUrl } from '../../constants/templates';

const mandrelApi = new MandrelApi({ baseUrl: templatesBaseUrl });
const Preview = ({ templateId, galleryRoot, previewTemplate, navigate }) => {
  const showFooter = useMediaQuery(theme => theme.breakpoints.up('sm'));
  const [selectedTemplate, setSelectedTemplate] = useState(previewTemplate);

  useEffect(() => {
    async function fetchPreviewTemplate(id) {
      try {
        const template = await mandrelApi.getTemplateById(id);
        setSelectedTemplate(template);
      } catch {
        navigate(galleryRoot, { replace: true });
      }
    }

    if (templateId && !selectedTemplate) {
      fetchPreviewTemplate(templateId);
    } else if (!templateId && selectedTemplate) {
      setSelectedTemplate(null);
    }
  }, [templateId, selectedTemplate]);

  const historyLengthRef = React.useRef(window.history.length);

  const goBack = () => {
    // If the preview template is available, template has been selected on the gallery page (vs deeplink)
    // Use native history.back here over navigate function, because @reach/router's scroll restoration
    // for nested routes does not work in this case
    if (!previewTemplate) {
      navigate(galleryRoot);
    } else {
      try {
        // Navigating between site routes in the iframe adds an entry to the history stack. This determines the correct
        // pointer location for the gallery. We use window.history.go whenever possible for scroll restoration.
        const pagesViewed = window.history.length - historyLengthRef.current;
        window.history.go(-1 - pagesViewed);
      } catch {
        navigate(galleryRoot);
      }
    }
  };

  return (
    <>
      <PreviewBackdrop>
        {selectedTemplate && (
          <>
            <TemplatePreview template={selectedTemplate} templateId={templateId} goBack={goBack} />
            {showFooter && (
              <div>
                <ReadyToGrow />
                <Footer />
              </div>
            )}
          </>
        )}
      </PreviewBackdrop>

      <style type="text/css">
        {`
          .no-scroll {
            position:relative;
            overflow: hidden !important;
          }
    `}
      </style>
    </>
  );
};

Preview.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  path: PropTypes.string.isRequired, // (https://reach.tech/router/api/RouteComponent)
  navigate: PropTypes.func.isRequired,
  previewTemplate: TemplateShape,
  galleryRoot: PropTypes.string.isRequired,
};

Preview.defaultProps = { previewTemplate: null };

export default Preview;
