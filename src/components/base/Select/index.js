import React, { useState } from "react";
import "@/components/base/Select/select.scss";

const Select = ({ options, changeValue }) => {
  const [value, setValue] = useState(0);
  const [view, setView] = useState(false);

  const toggle = () => {
    if (view) {
      close();
    } else {
      show();
    }
  };

  const show = () => {
    setView(true);
  };

  const close = () => {
    setView(false);
  };

  const choiceOption = (i) => {
    setValue(i);
    changeValue(i);
  };

  return (
    <div className="select" onClick={toggle}>
      <div className="select__selected">{options[value].text}</div>
      {view && (
        <div className="select__list">
          {options.map((option, i) => {
            return (
              <div
                className="select__option"
                onClick={() => choiceOption(i)}
                key={option.value}
              >
                {option.text}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default Select;
// class Select extends Component {

//   state = {
//     view: false,
//     value: 0
//   }

//   toggle = () => {
//     if(this.state.view) {
//       this.close()
//     } else {
//       this.show()
//     }
//   }

//   show = () => {
//     this.setState({view: true});
//   }

//   close = () => {
//     this.setState({view: false});
//   }

//   choiceOption = (i) => {
//     this.setState({value: i});
//     this.props.changeValue(i);
//   }

//   render() {
//     return (
//       <div className="select" onClick={this.toggle}>
//         <div className="select__selected">{ this.props.options[this.state.value].text }</div>
//         {this.state.view &&
//           (
//             <div className="select__list">
//               {
//                 (this.props.options.map((option, i) => {
//                   return (
//                     <div className="select__option" onClick={() => this.choiceOption(i)} key={option.value}>{ option.text }</div>
//                   )
//                 }))
//               }
//             </div>
//           )
//         }
//       </div>
//     );
//   }
// }
// export default Select;
