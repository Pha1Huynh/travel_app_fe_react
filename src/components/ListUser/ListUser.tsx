import React from 'react';
import { useState, useEffect } from 'react';
import './ListUser.scss';
import { getAllUser } from '../../api/user.api';

import { IUser } from '../../interfaces/entities/user.entities';
import { useAppDispatch, useAppSelector } from '../../redux/config/hooks';
import { getAllUserAction, deleteUserAction, createUserAction, updateUserAction } from '../../redux/actions/userAction';
import { toast } from 'react-toastify';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Loading from '../Loading/Loading';

const ListUser = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [isAddNew, setIsAddNew] = useState<boolean>(true);

  const [dataUserState, setDataUserState] = useState<any>({
    userName: '',
    emailAddress: '',
    password: '123',

    name: '',
    address: '',
    userCode: '',
    roleNames: ['BASICUSER'],
    surname: '',
    phoneNumber: '',
    allowedLeaveDay: 0,
    managerId: 0,
    branch: 0,
    imagePath: '',
    level: 0,
    sex: 0,
    salary: 0,

    morningStartAt: '',
    morningEndAt: '',
    morningWorking: 0,
    afternoonStartAt: '',
    afternoonEndAt: '',
    afternoonWorking: 0,
  });
  const clearUserState = () => {
    setDataUserState({
      userName: '',
      password: '123',
      emailAddress: '',
      name: '',
      address: '',
      userCode: '',
      roleNames: ['BASICUSER'],
      surname: '',
      phoneNumber: '',
      allowedLeaveDay: 0,
      managerId: 0,
      branch: 0,
      imagePath: '',
      level: 0,
      sex: 0,
      salary: 0,

      morningStartAt: '',
      morningEndAt: '',
      morningWorking: 0,
      afternoonStartAt: '',
      afternoonEndAt: '',
      afternoonWorking: 0,
    });
  };

  const toggle = () => setOpenModal(!openModal);
  let { listUser, isLoading } = useAppSelector((state) => state.user);
  let { isLogin, accessToken } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllUserAction({ token: accessToken }));
    if (listUser && listUser.length > 0) {
    }
  }, []);
  const handleOnChangeInput = (type: string, data: any) => {
    const copyState = { ...dataUserState };

    copyState[type] = data;

    setDataUserState({ ...copyState });
  };
  const handleOpenEditUserModal = (dataUser: IUser) => {
    setDataUserState(dataUser);
    setOpenModal(true);
    setIsAddNew(false);
  };

  const handleOpenAddUserModal = () => {
    clearUserState();
    setOpenModal(true);
    setIsAddNew(true);
  };
  const handleAddDataUser = async () => {
    await dispatch(createUserAction({ userData: dataUserState, token: accessToken }));
  };
  const handleSaveDataUser = async () => {
    let userUpdate = await dispatch(updateUserAction({ userData: dataUserState, token: accessToken }));
    setOpenModal(false);
  };
  return (
    <>
      <Loading isShow={isLoading}></Loading>
      <div className="user-container">
        <div className="col-3">
          <button className="btn btn-primary" onClick={() => handleOpenAddUserModal()}>
            ADD
          </button>
        </div>
        <Modal isOpen={openModal} toggle={toggle}>
          <ModalHeader toggle={toggle}>User Editor</ModalHeader>
          <ModalBody>
            <form className="row">
              <div className="col-6 form-group">
                <label htmlFor="">Username</label>
                <input
                  className="form-control"
                  value={dataUserState.userName}
                  name="userName"
                  onChange={(e) => handleOnChangeInput('userName', e.target.value)}
                />
              </div>
              <div className="col-6 form-group">
                <label htmlFor="">EmailAddress</label>
                <input
                  className="form-control"
                  value={dataUserState.emailAddress}
                  name="emailAddress"
                  onChange={(e) => handleOnChangeInput('emailAddress', e.target.value)}
                />
              </div>
              <div className="col-6 form-group">
                <label htmlFor="">Name</label>
                <input
                  className="form-control"
                  value={dataUserState.name}
                  name="name"
                  onChange={(e) => handleOnChangeInput('name', e.target.value)}
                />
              </div>
              <div className="col-6 form-group">
                <label htmlFor="">Surname</label>
                <input
                  className="form-control"
                  value={dataUserState.surname}
                  name="surname"
                  onChange={(e) => handleOnChangeInput('surname', e.target.value)}
                />
              </div>
              <div className="col-6 form-group">
                <label htmlFor="">Address</label>
                <input
                  className="form-control"
                  value={dataUserState.address}
                  name="address"
                  onChange={(e) => handleOnChangeInput('address', e.target.value)}
                />
              </div>
              <div className="col-6 form-group">
                <label htmlFor="">UserCode</label>
                <input
                  className="form-control"
                  value={dataUserState.userCode}
                  name="userCode"
                  onChange={(e) => handleOnChangeInput('userCode', e.target.value)}
                />
              </div>
              {/* <div className="col-6 form-group">
                <label htmlFor="">RoleNames</label>
                <input
                  className="form-control"
                  value={dataUserState.roleNames}
                  name="roleNames"
                  onChange={(e) => handleOnChangeInput('roleNames', e.target.value)}
                />
              </div> */}
              <div className="col-6 form-group">
                <label htmlFor="">PhoneNumber</label>
                <input
                  className="form-control"
                  value={dataUserState.phoneNumber}
                  name="phoneNumber"
                  onChange={(e) => handleOnChangeInput('phoneNumber', e.target.value)}
                />
              </div>
              <div className="col-6 form-group">
                <label htmlFor="">AllowedLeaveDay</label>
                <input
                  className="form-control"
                  value={dataUserState.allowedLeaveDay}
                  name="allowedLeaveDay"
                  onChange={(e) => handleOnChangeInput('allowedLeaveDay', +e.target.value)}
                />
              </div>
              <div className="col-6 form-group">
                <label htmlFor="">Branch</label>
                <input
                  className="form-control"
                  value={dataUserState.branch}
                  name="branch"
                  onChange={(e) => handleOnChangeInput('branch', +e.target.value)}
                />
              </div>
              <div className="col-6 form-group">
                <label htmlFor="">Level</label>
                <input
                  className="form-control"
                  value={dataUserState.level}
                  name="level"
                  onChange={(e) => handleOnChangeInput('level', +e.target.value)}
                />
              </div>
              <div className="col-6 form-group">
                <label htmlFor="">Sex</label>
                <input
                  className="form-control"
                  value={dataUserState.sex}
                  name="sex"
                  onChange={(e) => handleOnChangeInput('sex', +e.target.value)}
                />
              </div>
              <div className="col-6 form-group">
                <label htmlFor="">Salary</label>
                <input
                  className="form-control"
                  value={dataUserState.salary}
                  name="salary"
                  onChange={(e) => handleOnChangeInput('salary', +e.target.value)}
                />
              </div>
              <div className="col-6 form-group">
                <label htmlFor="">Morning Working</label>
                <input
                  className="form-control"
                  value={dataUserState.morningWorking}
                  name="morningWorking"
                  onChange={(e) => handleOnChangeInput('morningWorking', +e.target.value)}
                />
              </div>
              <div className="col-6 form-group">
                <label htmlFor="">Afternoon Working</label>
                <input
                  className="form-control"
                  value={dataUserState.afternoonWorking}
                  name="afternoonWorking"
                  onChange={(e) => handleOnChangeInput('afternoonWorking', +e.target.value)}
                />
              </div>
              <div className="col-6 form-group">
                <label htmlFor="">Image Path</label>
                <input
                  className="form-control"
                  value={dataUserState.imagePath}
                  name="imagePath"
                  onChange={(e) => handleOnChangeInput('imagePath', e.target.value)}
                />
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            {' '}
            {isAddNew ? (
              <Button color="primary" onClick={() => handleAddDataUser()}>
                Add
              </Button>
            ) : (
              <Button color="primary" onClick={() => handleSaveDataUser()}>
                Save
              </Button>
            )}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Surname</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {listUser &&
              listUser.length > 0 &&
              listUser.map((item: IUser, index) => {
                return (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.surname}</td>
                    <td>{item.emailAddress}</td>
                    <td>
                      <button className="btn btn-danger mx-2" onClick={() => handleOpenEditUserModal(item)}>
                        Edit
                      </button>
                      <button
                        className="btn btn-warning"
                        onClick={async () => await dispatch(deleteUserAction({ id: item.id, token: accessToken }))}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ListUser;
