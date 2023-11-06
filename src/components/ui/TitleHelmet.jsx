import PropTypes from "prop-types"
import { Helmet } from "react-helmet";

const TitleHelmet = ({ title }) => {
    return (
        <Helmet>
            <title>{title}</title>
        </Helmet>
    );
};

TitleHelmet.propTypes = {
    title: PropTypes.string
}

export default TitleHelmet;