import styled from 'styled-components';

export const PageSuperTitle = styled.div`
  opacity: 0.5;
  color: #000000;
  font-family: 'Space Mono';
  font-size: 12px;
  letter-spacing: 2px;
  line-height: 18px;
`;

export const PageTitle = styled.h1`
  color: #0f0c09;
  font-family: 'Value Serif';
  font-size: 40px;
  letter-spacing: -0.5px;
  line-height: 48px;
  margin-top: 0.5rem;
`;

export const ParagraphLarge = styled.p`
  color: #575452;
  font-size: 22px;
  line-height: 36px;
`;

export const ParagraphSmall = styled.p`
  color: #575452;
  font-family: Apercu Pro;
  font-size: 18px;
  line-height: 32px;
  margin: 1rem 0;
  width: 80%;
  @media (max-width: 768px) {
    width: 100%;
    font-size: 18px;
    line-height: 28px;
  }
`;

export const H4 = styled.h4`
  color: #0f0c09;
  font-family: 'Value Serif';
  font-size: 30px;
  letter-spacing: -0.1px;
  line-height: 36px;
`;

export const H5 = styled.h5`
  color: #0f0c09;
  font-family: 'Value Serif';
  font-size: 24px;
  letter-spacing: -0.08px;
  line-height: 36px;
  margin: 0.5rem 0;
`;

export const H6 = styled.h6`
  color: #0f0c09;
  font-size: 22px;
  font-weight: 500;
  line-height: 36px;
  margin: 1rem 0;
`;

export const ParagraphHeader = styled.p`
  color: #0f0c09;
  font-size: 18px;
  font-weight: 500;
  line-height: 30px;
  margin: 1rem 0;
  padding-top: 25px;
`;
