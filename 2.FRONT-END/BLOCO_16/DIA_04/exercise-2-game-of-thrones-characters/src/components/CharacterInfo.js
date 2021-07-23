import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class CharacterInfo extends React.Component {
  render() {
    const { character, error, loading } = this.props;

    if (!loading && character) {
      return (
        <ul>
          <li>Name: {character.name}</li>
          <li>Gender: {character.gender}</li>
          <li>Aliases: {character.aliases.map((alias, index) => <p key={`${alias}-${index}`}>{alias}</p>)}</li>
          <li>Books: {character.books.map((book, index) => <p key={`${book}-${index}`}>{book}</p>)}</li>
        </ul>
      )
    }
    if (error) { return <div>{error}</div>; }
    if (loading) { return <div>Loading...</div>; }
    return <div>Type a character name and click to search!</div>;
  }
};

const mapStateToProps = ({ characterReducer: { character, error, loading } }) => ({
  character,
  error,
  loading,
})

export default connect(mapStateToProps, null)(CharacterInfo);

CharacterInfo.propTypes = {
  character: PropTypes.shape({
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    culture: PropTypes.string.isRequired,
    born: PropTypes.string.isRequired,
    died: PropTypes.string.isRequired,
    titles: PropTypes.arrayOf(PropTypes.string.isRequired),
    aliases: PropTypes.arrayOf(PropTypes.string.isRequired),
    father: PropTypes.string.isRequired,
    mother: PropTypes.string.isRequired,
    spouse: PropTypes.string.isRequired,
    allegiances: PropTypes.arrayOf(PropTypes.string.isRequired),
    books: PropTypes.arrayOf(PropTypes.string.isRequired),
    povBooks: PropTypes.arrayOf(PropTypes.string.isRequired),
    tvSeries: PropTypes.arrayOf(PropTypes.string.isRequired),
    playedBy: PropTypes.arrayOf(PropTypes.string.isRequired),
  }).isRequired,
  error: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
}
