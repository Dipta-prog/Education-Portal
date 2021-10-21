import React, { useEffect, useState } from 'react';
import { Table } from "react-bootstrap";
import TeacherSidebar from '../../Shared/TeacherSidebar/TeacherSidebar'

const EnrolledStudent = () => {

    const [orders, setOrders] = useState([]);

    const loadData = () => {
        fetch(`https://education-portal-1.herokuapp.com/allStudent`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data.result);
            setOrders(data.result);
          });
      };

      console.log(orders);

      useEffect(() => {
        loadData();
      }, []);

    //   const handleChange = (id) => {
    //     const updateStat = document.getElementById(`status-${id}`).value;
    
    //     fetch(`https://desolate-badlands-10830.herokuapp.com/updateStatus/${id}`, {
    //       method: "PATCH",
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify({ status: updateStat }),
    //     })
    //       .then((response) => response.json())
    //       .then((data) => {
    //         console.log(data);
    //         console.log("updated");
    //         if (data) {
    //           loadData();
    //         }
    //       });
    //   };

    return (
        <div className="row">
            <div className="col-md-2">
                <TeacherSidebar />
            </div>
            <div className="row col-md-10 pt-5">
                {/* <AllBookingsChild orders={orders}/> */}
                <Table responsive>
                    <thead>
                        <tr className="bg-dark text-white">
                            <th>Student Id</th>
                            <th> Name</th>
                            <th> Email</th>
                            <th> Mobile</th>
                            <th> Department</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr>
                                <td>{order.id}</td>
                                <td>{order.name}</td>
                                <td>{order.email} </td>
                                <td>{order.mobile}</td>
                                <td>{order.department} </td>
                                <td>{order.address}</td>
                                {/* <td>
                                    {
                                        <select
                                            defaultValue={order?.status}
                                            id={`status-${order._id}`}
                                            onChange={() => handleChange(order._id)}
                                        >
                                            <option value="pending">Passed</option>
                                            <option value="onGoing">On Going</option>
                                            <option value="shipped">Failed</option>
                                        </select>
                                    }
                                </td> */}

                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default EnrolledStudent;