import { Fragment } from "react";
//global variables

function Example1(){
    //local variables
    //to declare the variable we can use var let const keywords

    //primitive datatypes
    var firstname = "Arun"; //'' or "" or `` string
    var lastname = "Kumar";//string
    let phoneNumber = "+91876376533";//string
    const isOnline = true;//boolean
    const age = 10; //number


    return (
        <div className="p-5 bg-light">
            <center>
                <h1 className="fs-1 text-success">Example1 Functional Component</h1>
            </center>
            <hr />
            <div className="container p-4 border shadow-sm bg-white">
                <h1 className="fs-4 bg-dark text-white p-4">Strings</h1>
                <hr />
               
                <ol className="list-group w-25">
                    <li className="list-group-item"><b>Firstname: </b> {firstname}</li>
                    <li className="list-group-item"><b>lastname: </b> {lastname}</li>

                    <li className="list-group-item"><b>Fullname: </b> {firstname +" " + lastname}</li>
                    <li className="list-group-item"><b>Phone number: </b> {phoneNumber}</li>
                </ol>
            </div>


            <br />
            <div className="container p-3 shadow-sm border bg-white">
                <h1 className="fs-4 bg-success text-white p-4">Numbers</h1>
                <hr />
                <h2 className="fs-4">Age: {age} years</h2>

                <hr />
                <h4 className="fs-4">Number with ternaly operator</h4>
                <hr />
                <h1 className="fs-4">{age<18?( <span className="text-danger">Not Eligible for Voting your Age now {age}</span> ):(<span className="text-success">Eligible For Voting your Age is {age}</span> )}</h1>
            </div>


            <br />

            <div className="container p-3 shadow-sm border bg-white">
                <h1 className="fs-4 text-white bg-primary p-4">Boolean</h1>
                <hr />
                <h1 className="fs-4">is Online? {isOnline}</h1>
                <h1 className="fs-4">is Online? {isOnline==true?(<span className="text-success">Yes User is in Online.</span> ):( <span className="text-danger">No, User is in Offline..</span> )} </h1>
            </div>
        </div>
    )
}

export default Example1;