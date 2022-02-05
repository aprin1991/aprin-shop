import React, { Component } from "react";
import CollectionPreview from "../../components/collections/CollectionPreview";
import WithSpinner from "./../../components/with-spinner";
import { connect } from "react-redux";
import { fetchCollectionsStart } from "./../../redux/shop/shop.action";
class ShopPage extends Component {
  componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
  }

  render() {
    const { collections, isFetching } = this.props;
    return (
      <div>
        {isFetching ? (
          <WithSpinner isLoading={isFetching} />
        ) : (
          collections?.map(({ id, ...restProps }) => (
            <CollectionPreview key={id} {...restProps} id={id} />
          ))
        )}
      </div>
    );
  }
}
const mapStateToProps = ({ shop: { isFetching, collections } }) => ({
  isFetching,
  collections,
});
const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
