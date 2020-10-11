import React from "react"
import PropTypes from "prop-types"

const BlogCards = ({ posts }) => (
  <div className="row">
    {posts.map(({ node }) => (
      <div className="col-4">
        <div className="card">
          <img
            src={node.feature_image}
            className="card-img-top"
            alt="blog article featured"
          />
          <div className="card-body">
            <h3 className="card-title">{node.title}</h3>
            <p className="card-text">{node.excerpt}</p>
            <a href={node.url}>Read more</a>
          </div>
        </div>
      </div>
    ))}
  </div>
)

BlogCards.defaultProps = {
  posts: [],
}

BlogCards.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
}

export default BlogCards
