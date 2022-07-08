import React, { useState } from 'react';
import { useForm, FormContext } from 'react-hook-form';
import { scroller } from 'react-scroll';
// components
import Grid from '@material-ui/core/Grid';
import {
  ErrorMessage_Main,
  Field_CompanyName,
  Field_Consent,
  Field_Email,
  Field_JobTitle,
  Field_Message,
  Field_Name,
  SubmitButton,
} from './FormFields';

const Form_Partnerships = props => {
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
    const requiredFields = ['full_name', 'email', 'job_title', 'company_name', 'contact_message'];
    const { fields } = methods.getValues({ nest: true });
    if (
      methods.formState.isValid &&
      requiredFields.map(fieldname => fields[fieldname]).every(value => value !== '')
    ) {
      setFormHasError(false);
      setSubmitDisabled(true);
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'contactFormSubmitted',
        formSelection: `Partnerships — ${props.selection}`,
        companyName: document.getElementsByName('fields[company_name]')?.[0]?.value || null,
        jobTitle: document.getElementsByName('fields[job_title]')?.[0]?.value || null,
      });
      // sync lead attribution data using attribution syncer (loaded by GTM)
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
        action="https://www.getdrip.com/forms/361097189/submissions"
        method="post"
        data-drip-embedded-form="361097189"
      >
        <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={2}>
          {formHasError && <ErrorMessage_Main />}
          <Field_Name />
          <Field_Email />
          <Field_JobTitle />
          <Field_CompanyName parentForm={props.parent} />
          <Field_Message />
          <Field_Consent />
          <SubmitButton disabled={submitDisabled} preSubmission={preSubmissionCheck} />
        </Grid>
      </form>
    </FormContext>
  );
};

export default Form_Partnerships;
