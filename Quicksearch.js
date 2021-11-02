import React, { Component } from 'react'
import Quick from './Quick'

export default class Quicksearch extends Component {
    render() {
        const { mealtypes } = this.props;
        return (
            <React.Fragment>
                <div className="bottomSection">
                    <h2 className="qs-heading">Quick Searches</h2>
                    <h4 className="qs-subheading">Discover restaurants by type of meal</h4>
                    {
                        mealtypes.map((item, index) => {
                            return <Quick key={index}  title={item.name}  imgSrc={item.image} disp={item.content} mealType={item.meal_type} />
                        })
                    }
                </div>
            </React.Fragment>
        )
    }
}

          {/* <Quick
            imgScr={require("../assets/breakfast.png").default}
            title={"Breakfast"}
            disp={"Start your daywith exclusive Breakfast option"}
          />{" "}

          imgSrc={require("../" + item.image).default}
          <Quick
            imgScr={require("../assets/lunch.png").default}
            title={"Lunch"}
            disp={"Start your daywith exclusive Lunch option"}
          />{" "}
          <Quick
            imgScr={require("../assets/dinner.png").default}
            title={"Dinner"}
            disp={"Start your daywith exclusive Dinner option"}
          />{" "}
          <Quick
            imgScr={require("../assets/snacks.png").default}
            title={"Snacks"}
            disp={"Start your daywith exclusive Snacks option"}
          />{" "}
          <Quick
            imgScr={require("../assets/drinks.png").default}
            title={"Drinks"}
            disp={"Start your daywith exclusive Drinks option"}
          />{" "}
          <Quick
            imgScr={require("../assets/night.png").default}
            title={"NightLife"}
            disp={"Start your daywith exclusive Night life option"}
          />{" "} */}
//         </div>{" "}
//       </div>
//     );
//   }
// }
