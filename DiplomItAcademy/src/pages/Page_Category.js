import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchGoods } from "../redux/actions";


const withRouter = Component => props => {
    const params = useParams();
    return <Component {...props} params={params} />;
};
class PageCategory extends React.PureComponent {

    componentDidMount() {
        this.props.fetchGoods();
    }
    render() {
        console.log(this.props);

        if (this.props.goods.isLoading) {
            return (
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            );
        }

        return (

            <div>PageCategory {this.props.params.id}</div>
        )
    }
};

const mapStateToProps = state => {
    return {
        goods: state.goods
    }
};

const mapDispatchToProps = dispatch => ({
    fetchGoods: () => {
        dispatch(fetchGoods());
    }
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PageCategory));