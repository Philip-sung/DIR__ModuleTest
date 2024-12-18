import React, { Component } from 'react'
import { withPosts } from '../providers/index.js';
import { PostList, PostForm } from '../components/index.js';

import { Container, Row, Col } from 'reactstrap';
import '../styles/styles.css';

/**
 * Wrap a component using the withPosts provider
 * to get data retrieved with GraphQL.
 */
class PostRoot extends Component {
  render() {
    const { posts, postsLoading } = this.props;

    return (
      <Container>
        <h2 className="posts-title">Posts Module</h2>
            <hr />
        <Row>
          <Col>
            <PostList postsLoading={postsLoading} posts={posts} />
          </Col>
          <Col>
            <PostForm />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default withPosts(PostRoot);