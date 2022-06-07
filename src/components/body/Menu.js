import React, { Component } from "react";

import MenuItem from "./MenuItem";
import DishDetail from "./DishDetail";

import { CardColumns, Modal, ModalBody, ModalFooter, Button } from "reactstrap";
import { connect } from "react-redux";

const mapStatetoProps = state =>{
    return{
        dishes: state.dishes,
        comments: state.comments
    }
}

class Menu extends Component {
    state = {

        selectedDish: null,
        modalOpen: false
    }

    onDishSelect = (dish) => {
        console.log(dish);
        this.setState({ 
            selectedDish: dish,
            modalOpen: !this.state.modalOpen
        })
    }

    toogleModal = () =>{
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }

    render() {
        document.title = "Menu";
        const menu = this.props.dishes.map(item => {
            return (
                <MenuItem
                    dish={item}
                    key={item.id}
                    DishSelect={() => this.onDishSelect(item)}
                />
            );
        })

        let dishDetail = null;
        if (this.state.selectedDish != null) {
            const comments = this.props.comments.filter( comment => comment.dishId === this.state.selectedDish.id)
            dishDetail = <DishDetail dish={this.state.selectedDish} comments = {comments} />
        }
        return (
            <div className="container">
                <div className="row">
                    <CardColumns>
                        {menu}
                    </CardColumns>
                    <Modal isOpen={this.state.modalOpen} >
                        <ModalBody>
                            {dishDetail}
                        </ModalBody>
                        <ModalFooter>
                            <Button color="secondary" onClick={this.toogleModal}>Close</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        );
    }
}

export default connect(mapStatetoProps) (Menu);