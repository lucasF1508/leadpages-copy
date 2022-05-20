import React, { useState } from 'react';
import { useForm, FormContext } from 'react-hook-form';
import { scroller } from 'react-scroll';
// components
import Grid from '@material-ui/core/Grid';
import {
  ErrorMessage_Main,
  Field_Consent,
  Field_Email,
  Field_Message,
  Field_Name,
  Field_OpenTicket,
  SubmitButton,
} from './FormFields';

const Form_Support = props => {
  const [formHasError, setFormHasError] = useState(null);
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const methods = useForm({ mode: 'onBlur' });

  const scrollToFormTop = () => {
    scroller.scrollTo('formtop', {
      duration: 500,
      delay: 0,
      offset: -50,
      smooth: 'ease',
    });
  };

  const preSubmissionCheck = e => {
    e.preventDefault();
    methods.triggerValidation();
    // this check is here because without it the form still tries to submit to drip
    const requiredFields = ['full_name', 'email', 'open_ticket', 'contact_message'];
    const { fields } = methods.getValues({ nest: true });
    if (fields['open_ticket'] === 'Yes') {
      requiredFields.push('ticket_number');
    }
    if (
      methods.formState.isValid &&
      requiredFields.map(fieldname => fields[fieldname]).every(value => value !== '')
    ) {
      setFormHasError(false);
      setSubmitDisabled(true);
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'contactFormSubmitted',
        formSelection: `Support — ${props.selection}`,
      });
      // sync lead attribution data using attribution-syncer (loaded by GTM)
      if (window.lpAttributionSyncer) {
        window.lpAttributionSyncer.directLeadSync(fields.email);
      }
      document.getElementById('dripform').submit();
    } else {
      setFormHasError(true);
      scrollToFormTop();
    }
  };
  return (
    <FormContext {...methods}>
      <form
        id="dripform"
        action="https://www.getdrip.com/forms/109077396/submissions"
        method="post"
        data-drip-embedded-form="109077396"
      >
        <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={2}>
          {formHasError && <ErrorMessage_Main />}
          <Field_Name />
          <Field_Email parentForm={props.parent} />
          <Field_OpenTicket />
          <Field_Message />
          <Field_Consent />
          <SubmitButton disabled={submitDisabled} preSubmission={preSubmissionCheck} />
        </Grid>
      </form>
    </FormContext>
  );
};

export default Form_Support;
