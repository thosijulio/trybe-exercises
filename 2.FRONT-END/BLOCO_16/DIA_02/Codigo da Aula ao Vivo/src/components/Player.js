import React from 'react';

class Player extendes React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div>
        <h1>
          { movie.title }
        </h1>
        <h3>
          {}
          {}
          -
          {}
          {}
        </h3>
        <section>
          <iframe
            title="trailer"
            width='420'
            src={ movie.link }
          />
        </section>
      </div>
    );
  }
}