import { connect } from "react-redux";
import { actions } from "../../store/index";
let { changeCategory } = actions;

import "./categories.scss";
function Categories(props) {
    return (
        <div className="categoriesContainer">
            {props.categoriesArr.map((category) => {
                return <a href="">{category}</a>;
            })}
        </div>
    );
}

const mapStateToProps = (state) => ({
    categoriesArr: state.categories,
});

const mapDispatchToProps = { increment, disable, reset };

// const mapDispatchToProps = {
//     increment: () => dispatch(increment()),
//     increment: () => dispatch(increment()),
//     increment: () => dispatch(increment()),
//  };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
