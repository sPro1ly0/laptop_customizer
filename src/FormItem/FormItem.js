import React, {Component} from "react";
import slugify from 'slugify';
import FormItemOptions from '../FormItemOptions/FormItemOptions'

class FormItem extends Component {
  render() {
    const itemHash = slugify(JSON.stringify(this.props.options));
    return (
        <fieldset className="feature">
            <legend className="feature__name">
                <h3>{this.props.feature}</h3>
            </legend>
            <FormItemOptions
                key={itemHash}
                options={this.props.options}
                feature={this.props.feature}
                selected={this.props.selected}
                handleUpdate={this.props.handleUpdate}/>
        </fieldset>
    );
}
}

export default FormItem;