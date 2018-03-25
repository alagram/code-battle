var React = require('react');

class Popular extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      selectedLanguage: 'All'
    };

    this.updatedLanguage = this.updatedLanguage.bind(this);
  }

  updatedLanguage(lang) {
    this.setState(function (){
      return {
        selectedLanguage: lang
      }
    });
  }

  render() {
    var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']

    return (
      <ul className='languages'>
        {languages.map(function(lang) {
          return (
            <li
              style={lang === this.state.selectedLanguage ? { color: '#d0021b' } : null}
              onClick={this.updatedLanguage.bind(null, lang)}
              key={lang}>
              {lang}
            </li>
          )
        }, this)}
      </ul>
    )
  }
}

module.exports = Popular;
