import { connect } from "react-redux";
import { changeCategory } from "../../store/categories/actions/changeCategory";

import "./categories.scss";
const Categories = (props) => {
    return (
        <div className="categoriesContainer">
            {props.categoriesArr.map((category) => {
                console.log("categoriesArr >>> ", props.categoriesArr);
                return (
                    <button key={category} onClick={() => props.changeCategory(category)} type="button">
                        {category}
                    </button>
                );
            })}
        </div>
    );
};

const mapStateToProps = (state) => ({
    categoriesArr: state.categories.categories,
});

const mapDispatchToProps = { changeCategory };

// const mapDispatchToProps = {
//     increment: () => dispatch(increment()),
//     increment: () => dispatch(increment()),
//     increment: () => dispatch(increment()),
//  };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
