import { useState } from 'react';
import { Events } from '../components/templates/tracker';

export default function usePreviewTemplate(navigate) {
  const [previewTemplate, setPreviewTemplate] = useState(null);

  const handlePreviewTemplate = template => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: Events.templatePreviewed,
      previewedTemplateName: `${template.template.name} (${template._meta.id})`,
    });
    setPreviewTemplate(template);
    navigate(`preview/${template._meta.id}`);
  };

  return [previewTemplate, handlePreviewTemplate];
}
