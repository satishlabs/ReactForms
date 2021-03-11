
import { Component } from "react";

import MyTextInput from "../mycomponents/MyTextInput";
import MyTextInput1 from "../mycomponents/MyTextInput1";

class AddBook extends Component {
    state = {
        bookId: '',
        bookName: '',
        author: '',
        price: '',
        pub: '',
        myerrors: {}
    }

    mychangeHandler = (myevent) => {
        myevent.preventDefault();
        console.log("mychangeHandler");
        this.setState({
            [myevent.target.name]: myevent.target.value,
        })

    };

    mysubmitHandler = (myevent) => {
        myevent.preventDefault();
        console.log("mysubmitHandler");
        //const {bookId,bookName,author,price,pub} = this.state;
        console.log(this.state);

        //1. Do the validation
        if (this.validateBookForm()) {
            //2. make Api calls
            console.log("Before Reset ",this.state);
            //3. Reset the form
            this.setState({
                bookId: '',
                bookName: '',
                author: '',
                price: '',
                pub: '',
                myerrors: {}
            });
            console.log("After Reset",this.state);
        }

    };
    validateBookForm() {
        console.log("validateBookForm");
        const { bookId, bookName, author, price, pub } = this.state;


        let isValid = true;
        let errors = {}; //Store errors temporarly
        //Do the validation
        if (bookId === null || bookId.length === 0) {
            isValid = false;
            errors["mybookId"] = "BookId is Required";//
        } else if (bookId.length <= 2) {
            isValid = false;
            errors["mybookId"] = "BookId minlength is 3";//
        } else if (bookId.length >= 8) {
            isValid = false;
            errors["mybookId"] = "BookId maxlength is 7";//
        }

        if (bookName === null || bookName.length === 0) {
            isValid = false;
            errors["mybookName"] = "BookName is Required";//
        } else if (bookName.length <= 5) {
            isValid = false;
            errors["mybookName"] = "BookName minlength is 5";//
        } else if (bookName.length >= 11) {
            isValid = false;
            errors["mybookName"] = "BookName maxlength is 7";//
        }

        if (author === null || author.length === 0) {
            isValid = false;
            errors["myauthor"] = "Author is Required";//
        } else if (author.length <= 5) {
            isValid = false;
            errors["myauthor"] = "Author minlength is 5";//
        } else if (author.length >= 11) {
            isValid = false;
            errors["myauthor"] = "Author maxlength is 7";//
        }


        if (price === null || price.length === 0) {
             isValid = false;
            errors["myprice"] = "Price is Required";
        }
        if (pub === null || pub.length === 0) {
             isValid = false;
            errors["mypub"] = "Publications is Required";
        }
        this.setState({
            myerrors: errors
        });
        console.log(errors);
        return isValid;
    }
    render() {
        const { bookId, bookName, author, price, pub } = this.state; //Object destructring from ES6

        return (
            <div className="container">
                <h1 className="text-center">Add Book Form</h1>
                <form onSubmit={this.mysubmitHandler}>
                    <MyTextInput 
                       mytype="text"
                       myname="bookId"
                       mylabel="Book Id"
                       myplaceholder="Enter Book Id"
                       myvalue={bookId}
                       myonChange={this.mychangeHandler}
                       myerror={this.state.myerrors.mybookId}/>

                    <MyTextInput 
                       mytype="text"
                       myname="bookName"
                       mylabel="Book Name"
                       myplaceholder="Enter Book Name"
                       myvalue={bookName}
                       myonChange={this.mychangeHandler}
                       myerror={this.state.myerrors.mybookName}/>
                    
                    <MyTextInput1 
                       mytype="text"
                       myname="author"
                       mylabel="Author"
                       myplaceholder="Enter Author Name"
                       myvalue={author}
                       myonChange={this.mychangeHandler}
                       myerror={this.state.myerrors.myauthor}/>

                    <MyTextInput1 
                       mytype="text"
                       myname="price"
                       mylabel="Price"
                       myplaceholder="Enter Price"
                       myvalue={price}
                       myonChange={this.mychangeHandler}
                       myerror={this.state.myerrors.myprice}/>

                     <MyTextInput1 
                       mytype="text"
                       myname="pub"
                       mylabel="Publications"
                       myplaceholder="Enter Publications"
                       myvalue={pub}
                       myonChange={this.mychangeHandler}
                       myerror={this.state.myerrors.mypub}/>

                    <input type="submit"
                        value="Add Book"
                        className="bt btn-primary btn-lg"
                    ></input>
                </form>
            </div>
        );
    }
}
export default AddBook;