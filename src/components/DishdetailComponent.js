import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';

class DishDetail extends Component{
    constructor(props){
        super(props)

        this.state = {
            comments: null
        }
    }

    onDishSelect(dish) {
        this.setState({ comments: dish.comments });
    }

    renderDish(dish){
        if(dish != null){
            return(
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            )
        }
        else {
            return(
                <div></div>
            )
        }
        
    }

    renderComments(dish){
        if (dish != null) {
            const comnt = dish.comments.map((comnt) => {
                return(
                    <li key={comnt.id} >
                        <div>
                            <p>{comnt.comment}</p>
                            <p>--{comnt.author}, {new Intl.DateTimeFormat('en-us', {year: 'numeric', month: 'short', date: '2-digit'}).format(new Date(Date.parse(comnt.date)))}</p>
                        </div>
                    </li>
                )
            })
            return(
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comnt}
                    </ul>
                </div>
            )
        }
        else{
            return(
                <div></div>
            )
        }
    }

    render(){
        const dish = this.props.dish;
        const dishItem = this.renderDish(dish);
        const dishComment = this.renderComments(dish);
        if (dish != null){
            return (
                <div className='container'>
                    <div className='row'>
                        <div>
                            {dishItem}
                            {dishComment}
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return(
                <div></div>
            )
        }
    }
}

export default DishDetail