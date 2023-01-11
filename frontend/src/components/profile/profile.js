import React from "react";
import Home from '../home/home';
// import './dashboard.css';

function Profile() {

//     const [todos, setTodos] = useState([]);
//   const [newTodo, setNewTodo] = useState("");

//   useEffect(() => {
//     // update update the list of todos
//     // when the component is rendered for the first time
//     update();
//   }, []);

//   // This function updates the component with the
//   // current todo data stored in the server
//   function update() {
//     fetch(`${process.env.REACT_APP_BACKEND}api/todos`)
//       .then(res => res.json())
//       .then(todo => {
//         setTodos(todo.data);
//       })
//   }

//       // This function sends a new todo to the server
//   // and then call the update method to update the
//   // component
//   function addTodo(e) {
//     e.preventDefault();
//     let item = newTodo;
//     let body = {
//       data: {
//         item
//       }
//     };
 
//     fetch(`${process.env.REACT_APP_BACKEND}api/todos`, {
//       method: "POST",
//       headers: {
//         'Content-type': 'application/json'
//       },
//       body: JSON.stringify(body)
//     })
//       .then(() => {
//         setNewTodo("");
//         update();
//       })
//   }


    return (
        <>

            <div class="card card-compact w-96 bg-base-200 shadow-xl">
                
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div class="card-body">

                    <p>First_name: </p>
                    <p>Last_name</p>
                    <p>Email: </p>
                    <p>Phone number: </p>
                    <p>Gender: </p>

                    <div class="card-actions justify-end">
                    <label htmlFor="my-modal-4" className="btn">open modal</label> 
                    </div>
                </div>
            </div>

            {/* The button to open modal */}
            {/* <label htmlFor="my-modal-4" className="btn">open modal</label> */}

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
            <div class="card card-compact w-96 bg-base-200 shadow-xl">
                
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div class="card-body">

                    <p>Name: </p>
                    <p>Email: </p>
                    <p>Phone number: </p>
                    <p>Gender: </p>

                    <div class="card-actions justify-end">
                    <label htmlFor="my-modal-4" className="btn">Save</label> 
                    </div>
                </div>
            </div>
            </label>




        </>


    );
}

export default Profile;
