import React, { useContext } from 'react';
import { FaAward, FaDungeon, FaUserPlus, FaUserTie } from 'react-icons/fa';
import { UserLoggedinContext } from '../../../../App';
import Sidebar from '../../../Shared/Sidebar/Sidebar';
import AddStudent from '../Student/AddStudent/AddStudent';
import StudentsList from '../Student/StudentsList/StudentsList';

const Dashboard = () => {
    const [loggedinUser, setLoggedinUser] = useContext(UserLoggedinContext);

    return (
        <div className="row">
        <div className="col-md-2"> <Sidebar /> </div>
        <div className="col-md-10">
            <div className="container my-5">
                <div className="page-header">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2 className="page-title">Welcome {loggedinUser.email}!</h2>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item active">Dashboard</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-3 col-sm-6">
                        <div className="bg-card card">
                            <div className="card-body">
                                <div className="db-widgets d-flex justify-content-between align-items-center">
                                    <div className="text-primary">
                                        <FaUserPlus size={60} />
                                    </div>
                                    <div className="db-info">
                                        <h3>1200+</h3>
                                        <h6>Students</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6">
                        <div className="bg-card card">
                            <div className="card-body">
                                <div className="db-widgets d-flex justify-content-between align-items-center">
                                    <div className="text-warning">

                                        <FaAward size={60} />
                                    </div>
                                    <div className="db-info">
                                        <h3>10+</h3>
                                        <h6>Awards</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6">
                        <div className="bg-card card">
                            <div className="card-body">
                                <div className="db-widgets d-flex justify-content-between align-items-center">
                                    <div className="text-primary">
                                        <FaDungeon size={60} />
                                    </div>
                                    <div className="db-info">
                                        <h3>20+</h3>
                                        <h6>Department</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6">
                        <div className="bg-card card">
                            <div className="card-body">
                                <div className="db-widgets d-flex justify-content-between align-items-center">
                                    <div className="text-primary">
                                        <FaUserTie size={60} />
                                    </div>
                                    <div className="db-info">
                                        <h3>50+</h3>
                                        <h6>Teachers</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-md-6">
                        <StudentsList />
                    </div>
                    <div className="col-md-6">
                        <AddStudent />
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Dashboard;