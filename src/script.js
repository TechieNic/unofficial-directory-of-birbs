var birdList;

class ListElement extends React.Component {
  //Creates the list items
  render () {
  return (
    <li>
      <h3>{this.props.name}</h3>
      <img src={this.props.source} />
      <p>{this.props.text}</p>
    </li>
  );
}
}

//Creates array to hold all list items and loops through props to add to list items
class BirdPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pageNo: 1,
      birdItems: []
    };
    this.newPage = this.newPage.bind(this);
    this.indexList = this.initIndex();
  }

  componentDidMount() {
    this.initPage();
  }

  initPage() {
  console.log("Initializing Page");
  var lis = [];
  for (var i = 0; i < 5; i++) {
    lis.push(<ListElement name={(i + 1 ) + ". " + dict[i].title} source={dict[i].url} text={dict[i].description} key={dict[i].key}/>);
  }

  this.setState({
    birdItems: lis
  });
}

  initIndex() {
    console.log("Initializing Index");
    var pList = [];
  for (var i = 0; i < Math.ceil(dict.length / 5); i++) {
    pList.push(<p className="pageItem" index={i} key={i} onClick={() => this.newPage(Number(event.target.getAttribute('index')) + 1)}>{i + 1}</p>);
  }
  return pList;
}

  newPage(pageIndex) {
    console.log("Creating New Page");
    console.log(pageIndex);

    var lis = [];
    var pageStart = 5 * (pageIndex - 1);

    for (var i = 0; i < 5; i++) {
      if (dict[pageStart + i] != null) {
        lis.push(<ListElement name={((pageStart + i) + 1 ) + ". " + dict[pageStart + i].title} source={dict[pageStart + i].url} text={dict[pageStart + i].description} key={dict[pageStart + i].key}/>);
    }
    }

    this.setState({
      birdItems: lis,
      pageNo: pageIndex
    });
  }

  render () {
    return (
      <React.Fragment>
        <ul>{this.state.birdItems}</ul>
        <div><strong>{this.indexList}</strong></div>
      </React.Fragment>
    );
  }
}

//Renders Elements
ReactDOM.render(
    <BirdPage />
, document.getElementById('root'));
