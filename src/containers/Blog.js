import React from 'react';
import Article from '../components/Article';
import Middleware from '../redux/Middleware';
import { Store } from '../redux/Store';
import Actions from '../redux/Actions';
import Carousel from '../components/Carousel';
import { StyledFadeInDiv } from '../components/Stylings';

export default class Blog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedBlog: Store.getState().selectedBlog,
      markdown: Store.getState().markdown,
    };
  }

  componentDidMount() {
    this.unsubscribe = Store.subscribe(() => {
      this.setState({
        selectedBlog: Store.getState().selectedBlog,
        markdown: Store.getState().markdown,
      });
    });

    Store.dispatch(Middleware.fetchBlog(this.props.match.params.id));
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.selectedBlog.id !== prevState.selectedBlog.id) {
      Store.dispatch(Middleware.fetchMarkdown(this.state.selectedBlog.source));
    }
  }

  componentWillUnmount() {
    this.unsubscribe();
    Store.dispatch(Actions.setSelectedBlog({}));
    Store.dispatch(Actions.setMarkdown(''));
  }

  render() {
    return (
      <StyledFadeInDiv>
        <Carousel images={this.state.selectedBlog.images}/>
        <Article
          title={this.state.selectedBlog.title}
          src={this.state.selectedBlog.source}
          markdown={this.state.markdown}
        />
      </StyledFadeInDiv>
    );
  }
}
