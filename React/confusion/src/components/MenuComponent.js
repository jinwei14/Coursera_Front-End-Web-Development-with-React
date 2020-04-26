import React, { Component } from 'react';
import { Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle } from 'reactstrap';

//we call this state in the constructor
class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedDish:null
        };
        console.log("Menu constructure is called")
    }

    componentDidMount(){
        console.log("componentDidMount is called")
    }

    onDishSelect(dish){
        this.setState({selectedDish:dish})
    }

    renderDish(dish){
        if (dish!=null){
            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle> {dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        }else{
            return<div></div>
        }
    }

    render() {

        const menu = this.props.dishes.map((dish) => {
            return (
                //key is identify the each item
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={()=>this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />

                        <CardImgOverlay>
                            <CardTitle> {dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });  //map into a list of items by literaing every dish


        console.log("Menu componets render is invoked")
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>

        );
    }
}

export default Menu