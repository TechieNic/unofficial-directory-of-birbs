var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var birdList;

var ListElement = function (_React$Component) {
  _inherits(ListElement, _React$Component);

  function ListElement() {
    _classCallCheck(this, ListElement);

    return _possibleConstructorReturn(this, (ListElement.__proto__ || Object.getPrototypeOf(ListElement)).apply(this, arguments));
  }

  _createClass(ListElement, [{
    key: "render",

    //Creates the list items
    value: function render() {
      return React.createElement(
        "li",
        null,
        React.createElement(
          "h3",
          null,
          this.props.name
        ),
        React.createElement("img", { src: this.props.source }),
        React.createElement(
          "p",
          null,
          this.props.text
        )
      );
    }
  }]);

  return ListElement;
}(React.Component);

//Creates array to hold all list items and loops through props to add to list items


var BirdPage = function (_React$Component2) {
  _inherits(BirdPage, _React$Component2);

  function BirdPage(props) {
    _classCallCheck(this, BirdPage);

    var _this2 = _possibleConstructorReturn(this, (BirdPage.__proto__ || Object.getPrototypeOf(BirdPage)).call(this, props));

    _this2.state = {
      pageNo: 1,
      birdItems: []
    };
    _this2.newPage = _this2.newPage.bind(_this2);
    _this2.indexList = _this2.initIndex();
    return _this2;
  }

  _createClass(BirdPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initPage();
    }
  }, {
    key: "initPage",
    value: function initPage() {
      console.log("Initializing Page");
      var lis = [];
      for (var i = 0; i < 5; i++) {
        lis.push(React.createElement(ListElement, { name: i + 1 + ". " + dict[i].title, source: dict[i].url, text: dict[i].description, key: dict[i].key }));
      }

      this.setState({
        birdItems: lis
      });
    }
  }, {
    key: "initIndex",
    value: function initIndex() {
      var _this3 = this;

      console.log("Initializing Index");
      var pList = [];
      for (var i = 0; i < Math.ceil(dict.length / 5); i++) {
        pList.push(React.createElement(
          "p",
          { className: "pageItem", index: i, key: i, onClick: function onClick() {
              return _this3.newPage(Number(event.target.getAttribute('index')) + 1);
            } },
          i + 1
        ));
      }
      return pList;
    }
  }, {
    key: "newPage",
    value: function newPage(pageIndex) {
      console.log("Creating New Page");
      console.log(pageIndex);

      var lis = [];
      var pageStart = 5 * (pageIndex - 1);

      for (var i = 0; i < 5; i++) {
        if (dict[pageStart + i] != null) {
          lis.push(React.createElement(ListElement, { name: pageStart + i + 1 + ". " + dict[pageStart + i].title, source: dict[pageStart + i].url, text: dict[pageStart + i].description, key: dict[pageStart + i].key }));
        }
      }

      this.setState({
        birdItems: lis,
        pageNo: pageIndex
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        React.Fragment,
        null,
        React.createElement(
          "ul",
          null,
          this.state.birdItems
        ),
        React.createElement(
          "div",
          null,
          React.createElement(
            "strong",
            null,
            this.indexList
          )
        )
      );
    }
  }]);

  return BirdPage;
}(React.Component);

//Renders Elements


ReactDOM.render(React.createElement(BirdPage, null), document.getElementById('root'));