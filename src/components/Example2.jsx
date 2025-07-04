import './example2.css';

//global variables
function Example2(){
    //local variables
    //object by using {}
    const user = {
        //property => key:value
        username:"Arun Kumar",
        email:'arun@gmail.com',
        phonenumber:"9387637534",
        age:45,
        hobbies:["coding", "walking", "running", "Reading"],
        address:{
            city:"bangalure",
            doorNo:'#57',
            pincode:526123
        },
        marks:{
            kannada:56,
            english:90,
            sans:89,
            hindi:100
        },
        profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGFAqgki6wFc40CSPU0edlpw11kF_CVNAdDTHrsDi8FMi-XMB1ABQmouGcM9YE9p1MIoI&usqp=CAU"
    }


    return (
        <div className="container p-3">
            <h1 className="bg-primary text-white text-center p-4 fs-3">Non primitive datatypes</h1>
            <hr />

            <div className="mt-4 shadow-sm p-3 border">
                <h1 className="fs-3">User Object</h1>
                <hr />

                <div className="card p-3 w-50">
                   <div className="text-center">
                     <img src={user.profile} alt="profile" width={100} height={100} className="rounded-circle border border-3 border-dark  p-1"/>
                     {/* <hr /> */}
                     <h4 className="fs-4 m-0 mt-2">{user.username}</h4>
                     <p className="fs-6 text-secondary">{user.email}</p>
                     <hr />

                    

                   </div>

                    <ul className="list-group">
                        <li className="list-group-item"><b>Phonenumber: </b>{user.phonenumber}</li>
                        <li className="list-group-item"><b>Age: </b>{user.age} years</li>
                        <li className="list-group-item d-flex gap-2 align-items-center">
                            <b>Hobbies: </b>
                            {
                                user.hobbies.map(function(item, index){
                                   return (
                                     <button key={index} className="btn btn-outline-dark btn-sm rounded-pill">{item}</button>
                                   )
                                })
                            }
                        </li>
                        <li className="list-group-item">
                            <p className="fs-6"><b>Address: </b> city is {user.address.city} and Door no is {user.address.doorNo} and Area Pincode is {user.address.pincode}</p>
                        </li>

                        <li className="list-group-item">
                            <table className="w-100">
                                <tr className="bg-dark text-white">
                                    <th>Kannada</th>
                                    <th>English</th>
                                    <th>Sanskrit</th>
                                    <th>Hindi</th>
                                </tr>

                                <tr>
                                    <td>{user.marks.kannada}</td>
                                    <td>{user.marks.english}</td>
                                    <td>{user.marks.sans}</td>
                                    <td>{user.marks.hindi}</td>
                                </tr>
                            </table>
                        </li>
                     </ul>
                </div>
                
            </div>
        </div>
    )
}
export default Example2;
