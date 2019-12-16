import React, { Component } from 'react';
import FormItem from '../FormItem/FormItem';



class MainForm extends Component {

      render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;

            return (
                <FormItem 
                    key={featureHash}
                    feature={feature}
                    options={this.props.features[feature]}
                    selected={this.props.selected}
                    handleUpdate={this.props.handleUpdate}/>
            );
          });

          return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                {features}
            </form>
          )
      }
}

export default MainForm;