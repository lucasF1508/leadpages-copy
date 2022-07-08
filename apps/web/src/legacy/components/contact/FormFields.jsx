import React, { useState, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
// components
import { PhoneInput } from '@lp/ui';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Collapse from '@material-ui/core/Collapse';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import TextField from '@material-ui/core/TextField';
// styling
import styled from 'styled-components';
// images
import errorSVG from '../../assets/images/global/error.svg';

export const DRIP_FIELDS = {
  NAME: 'fields[full_name]',
  EMAIL: 'fields[email]',
  PHONE: 'fields[phone_number]',
  OPEN_TICKET: 'fields[open_ticket]',
  TICKET_NUMBER: 'fields[ticket_number]',
  SUBJECT: 'fields[subject]',
  MESSAGE: 'fields[contact_message]',
  JOB_TITLE: 'fields[job_title]',
  COMPANY_NAME: 'fields[company_name]',
  COMPANY_WEBSITE: 'fields[company_website]',
  TOOLS: 'fields[tools]',
  STRATEGY: 'fields[strategy]',
  GOALS: 'fields[goals]',
  CONSENT: 'fields[eu_consent]',
};

export const ErrorMessage_Main = () => {
  const Container = styled.div`
    height: 4.5rem;
    display: flex;
    align-items: center;
    background-color: #ffe5de;
  `;
  const Icon = styled.img`
    margin-left: 2rem;
    margin-right: 1.25rem;
  `;
  const Text = styled.p`
    font-size: 16px;
    color: #575452;
  `;
  return (
    <Grid item xs={12}>
      <Container>
        <Icon src={errorSVG} alt="error icon" />
        <Text>Oops! Please fix the issues below.</Text>
      </Container>
    </Grid>
  );
};

export const Field_CompanyName = props => {
  const { register, errors } = useFormContext();
  const hasError =
    props.parentForm === 'partnerships' && errors.fields && errors.fields.company_name;
  return (
    <Grid item xs={12}>
      <TextField
        name={DRIP_FIELDS.COMPANY_NAME}
        label={`Company name` + `${props.parentForm === 'partnerships' ? '*' : ''}`}
        placeholder="Your company name"
        fullWidth
        inputRef={
          props.parentForm === 'partnerships'
            ? register({
                required: true,
              })
            : null
        }
        error={!!hasError}
        helperText={!!hasError ? 'This field is required' : ''}
      />
    </Grid>
  );
};

export const Field_CompanyWebsite = () => (
  <Grid item xs={12}>
    <TextField
      name={DRIP_FIELDS.COMPANY_WEBSITE}
      label="Company website"
      placeholder="Your company website"
      fullWidth
    />
  </Grid>
);

export const Field_Consent = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = e => {
    setIsChecked(e.target.checked);
  };
  return (
    <Grid item xs={12}>
      <FormControlLabel
        label={
          <p>
            Send me cool marketing info and offers by email or Facebook. (
            <a href="https://www.leadpages.com/privacy">Privacy Policy</a>)
          </p>
        }
        control={
          <Checkbox
            id="drip-eu-consent"
            name={DRIP_FIELDS.CONSENT}
            value={isChecked ? 'granted' : 'denied'}
            onChange={handleCheckboxChange}
          />
        }
      />
    </Grid>
  );
};

export const Field_Email = props => {
  const { register, errors } = useFormContext();
  const hasError = errors.fields && errors.fields.email;
  return (
    <Grid item xs={12}>
      <TextField
        name={DRIP_FIELDS.EMAIL}
        label="Email address*"
        placeholder={
          props.parentForm === 'legal' || props.parentForm === 'consideringleadpages'
            ? 'Your email address'
            : 'Your Leadpages email address'
        }
        fullWidth
        inputRef={register({
          required: true,
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,20}$/i,
          },
        })}
        error={!!hasError}
        helperText={!!hasError ? 'Enter a valid email address' : ''}
      />
    </Grid>
  );
};

export const Field_JobTitle = () => {
  const { register, errors } = useFormContext();
  const hasError = errors.fields && errors.fields.job_title;
  return (
    <Grid item xs={12}>
      <TextField
        name={DRIP_FIELDS.JOB_TITLE}
        label="Job title*"
        placeholder="Your job title"
        fullWidth
        inputRef={register({
          required: true,
        })}
        error={!!hasError}
        helperText={!!hasError ? 'This field is required' : ''}
      />
    </Grid>
  );
};

export const Field_MarketingGoals = () => (
  <Grid item xs={12}>
    <TextField
      name={DRIP_FIELDS.GOALS}
      label="What are your marketing goals?"
      placeholder="Perhaps lead generation, sales, or something else"
      fullWidth
      multiline
      rows={4}
    />
  </Grid>
);

export const Field_MarketingStrategy = () => (
  <Grid item xs={12}>
    <TextField
      name={DRIP_FIELDS.STRATEGY}
      label="What kind of digital marketing do you do?"
      placeholder="Give us a quick overview"
      fullWidth
      multiline
      rows={2}
    />
  </Grid>
);

export const Field_MarketingTools = () => (
  <Grid item xs={12}>
    <TextField
      name={DRIP_FIELDS.TOOLS}
      label="What marketing apps/tools do you use?"
      placeholder="Such as a website or landing page builder, etc."
      fullWidth
      multiline
      rows={2}
    />
  </Grid>
);

export const Field_Message = () => {
  const { register, errors } = useFormContext();
  const hasError = errors.fields && errors.fields.contact_message;
  return (
    <Grid item xs={12}>
      <TextField
        name={DRIP_FIELDS.MESSAGE}
        label="Message*"
        placeholder="How can we help you today?"
        fullWidth
        multiline
        rows={4}
        inputRef={register({
          required: true,
        })}
        error={!!hasError}
        helperText={!!hasError ? 'This field is required' : ''}
      />
    </Grid>
  );
};

export const Field_Name = () => {
  const { register, errors } = useFormContext();
  const hasError = errors.fields && errors.fields.full_name;
  return (
    <Grid item xs={12}>
      <TextField
        name={DRIP_FIELDS.NAME}
        label="Name*"
        placeholder="Your full name"
        fullWidth
        inputRef={register({
          required: true,
        })}
        error={!!hasError}
        helperText={!!hasError ? 'This field is required' : ''}
      />
    </Grid>
  );
};

export const Field_OpenTicket = () => {
  const { register, errors } = useFormContext();
  const groupHasError = errors.fields && errors.fields.open_ticket;
  const [hasOpenTicket, setHasOpenTicket] = useState('');
  const handleRadioChange = e => {
    setHasOpenTicket(e.target.value);
  };

  return (
    <Grid item xs={12}>
      <FormControl component="fieldset" error={!!groupHasError}>
        <FormLabel component="legend">Do you have an open ticket?*</FormLabel>
        <RadioGroup
          name="open-ticket-radio"
          aria-label="open-ticket-radio"
          value={hasOpenTicket}
          onChange={handleRadioChange}
          row
        >
          <FormControlLabel
            name={DRIP_FIELDS.OPEN_TICKET}
            label="Yes"
            value={'Yes'}
            inputRef={register({
              required: true,
            })}
            control={<Radio />}
          />
          <FormControlLabel
            name={DRIP_FIELDS.OPEN_TICKET}
            label="No"
            value={'No'}
            inputRef={register({
              required: true,
            })}
            control={<Radio />}
          />
        </RadioGroup>
        {!!groupHasError && <FormHelperText error>This field is required</FormHelperText>}
      </FormControl>
      <Collapse in={hasOpenTicket === 'Yes'} timeout={300}>
        <Field_TicketNumber hasOpenTicket={hasOpenTicket} />
      </Collapse>
    </Grid>
  );
};

export const Field_PhoneNumber = () => {
  const [phoneNumber, setPhoneNumber] = useState();
  const handleChange = value => {
    setPhoneNumber(value);
  };
  return (
    <Grid item xs={12}>
      <PhoneInput
        name={DRIP_FIELDS.PHONE}
        label="Phone number"
        placeholder="Your phone number"
        variant="filled"
        value={phoneNumber}
        fullWidth
        onChange={handleChange}
        countryCodeEditable={false}
        type="tel"
        autoComplete="off"
      />
    </Grid>
  );
};

export const SubmitButton = props => (
  <Grid item xs={12}>
    <Button type="submit" fullWidth disabled={props.disabled} onClick={e => props.preSubmission(e)}>
      Submit
    </Button>
  </Grid>
);

const Field_TicketNumber = ({ hasOpenTicket }) => {
  const { register, unregister, errors } = useFormContext();
  const hasError = errors.fields && errors.fields.ticket_number;
  useEffect(() => {
    if (hasOpenTicket !== 'No') {
      register(DRIP_FIELDS.TICKET_NUMBER, { required: true });
    } else {
      unregister(DRIP_FIELDS.TICKET_NUMBER);
    }
  }, [hasOpenTicket]);
  const NumberField = styled(TextField)`
    input[type='number']::-webkit-inner-spin-button,
    input[type='number']::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  `;
  return (
    <Grid item xs={12}>
      <NumberField
        name={DRIP_FIELDS.TICKET_NUMBER}
        label="Ticket number*"
        placeholder="Enter your ticket number"
        fullWidth
        inputRef={
          hasOpenTicket !== 'No'
            ? register({
                required: true,
              })
            : null
        }
        error={hasOpenTicket !== 'No' && !!hasError}
        helperText={hasOpenTicket !== 'No' && !!hasError ? 'This field is required' : ''}
        type="number"
      />
    </Grid>
  );
};
