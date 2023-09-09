import { SectionStyled } from './Section.styled';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <SectionStyled>
      <h2>{title}</h2>
      {children}
    </SectionStyled>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string,
};
